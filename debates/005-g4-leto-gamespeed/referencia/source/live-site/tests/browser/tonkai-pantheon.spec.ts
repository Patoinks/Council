import { test, expect } from '@playwright/test';
import { DEITIES, ARENA_STORAGE_KEY } from '../../src/tonkai/pantheon';
import { CAMPAIGN_ORDER, CAMPAIGN_STORAGE_KEY } from '../../src/tonkai/campaign';

async function unlockCollection(page: import('@playwright/test').Page) {
  await page.addInitScript(({ key, completed }) => localStorage.setItem(key, JSON.stringify({ completed })),
    { key: CAMPAIGN_STORAGE_KEY, completed: [...CAMPAIGN_ORDER] });
}

test('all ten domains change the arena, board and seal; affinity and effects survive reload', async ({ page }) => {
  await unlockCollection(page);
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('/tonkai');
  const arena = page.locator('.tk-pantheon');
  await expect(page.getByRole('button', { name: /^Domínio de / })).toHaveCount(10);
  await expect(page.locator('.pt-roster img[data-deity-image]')).toHaveCount(10);
  await expect(page.getByRole('button', { name: 'Domínio de Osíris', exact: true })).toHaveCount(0);
  await expect(page.getByLabel('A tua afinidade', { exact: true }).locator('option[value="osiris"]')).toHaveCount(0);
  await expect.poll(() => page.locator('.pt-roster img').evaluateAll(images =>
    images.filter(image => (image as HTMLImageElement).complete && (image as HTMLImageElement).naturalWidth > 0).length)).toBe(10);
  for (const deity of DEITIES) {
    await page.getByRole('button', { name: `Domínio de ${deity.name}`, exact: true }).click();
    await expect(arena).toHaveAttribute('data-opponent', deity.id);
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(deity.realm);
    await expect(page.locator('.pt-realm-heading img')).toHaveAttribute('data-deity-image', deity.id);
    await expect(page).toHaveTitle(`${deity.name} · Panteão TonkAI · ANW`);
    await expect(arena).toHaveCSS('--pt-accent', deity.accent);
    await expect(page.getByRole('button', { name: `Domínio de ${deity.name}`, exact: true })).toHaveAttribute('aria-pressed', 'true');
  }
  await page.getByLabel('A tua afinidade', { exact: true }).selectOption('nezha');
  await page.getByRole('button', { name: 'Desativar efeitos da arena' }).click();
  await page.reload();
  await expect(arena).toHaveAttribute('data-opponent', 'hades');
  await expect(arena).toHaveAttribute('data-patron', 'nezha');
  await expect(arena).toHaveAttribute('data-effects', 'paused');
  await expect(page.locator('.pt-mist')).toHaveCSS('animation-name', 'none');
  await expect(page.getByLabel('A tua afinidade', { exact: true })).toHaveValue('nezha');
  expect(await page.evaluate(key => JSON.parse(localStorage.getItem(key)!), ARENA_STORAGE_KEY)).toEqual({ opponent: 'hades', patron: 'nezha', effects: false });
  expect(errors).toEqual([]);
});

test('the normal game preserves its domain, legal play, optional analysis and themed replay', async ({ page }) => {
  await unlockCollection(page);
  await page.route('**/firestore.googleapis.com/**', route => route.abort());
  await page.goto('/tonkai');
  await page.getByRole('button', { name: 'Domínio de Tsukuyomi', exact: true }).click();
  await page.getByLabel('A tua afinidade', { exact: true }).selectOption('ra');
  await page.getByRole('button', { name: 'Começar', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Domínio de Loki', exact: true })).toBeDisabled();
  await expect(page.locator('[data-value-square]')).toHaveCount(0);
  await page.locator('.tk-board [data-square="e2"]').click();
  await page.locator('.tk-board [data-square="e4"]').click();
  await expect(page.getByRole('status', { name: 'Estado do jogo' })).toContainText('A tua vez', { timeout: 60000 });
  await expect(page.locator('.tk-board')).not.toHaveAttribute('data-fen', / w KQkq - 0 1$/);
  await page.getByRole('button', { name: 'Mostrar avaliações' }).click();
  await expect(page.locator('[data-value-square]')).toHaveCount(32);
  await page.getByRole('button', { name: 'Ocultar avaliações' }).click();
  await page.getByRole('button', { name: 'Desistir', exact: true }).click();
  await page.getByRole('button', { name: 'Ver tabuleiro', exact: true }).click();
  await page.getByRole('button', { name: 'Domínio de Loki', exact: true }).click();
  await expect(page.locator('.tk-pantheon')).toHaveAttribute('data-opponent', 'loki');
  await page.getByRole('button', { name: 'Histórico', exact: true }).click();
  await expect(page.locator('.tk-pantheon')).toHaveAttribute('data-opponent', 'tsukuyomi');
  await expect(page.locator('.tk-pantheon')).toHaveAttribute('data-patron', 'ra');
  await expect(page.getByRole('link', { name: 'Descarregar PGN' })).toBeVisible();
});

test('new players start at Nezha and cannot select a locked level or restore one from old preferences', async ({ page }) => {
  await page.addInitScript(({ key }) => localStorage.setItem(key,
    JSON.stringify({ opponent: 'zeus', patron: 'traveler', effects: true })), { key: ARENA_STORAGE_KEY });
  await page.goto('/tonkai');
  await expect(page.locator('.tk-pantheon')).toHaveAttribute('data-opponent', 'nezha');
  await expect(page.getByRole('button', { name: 'Domínio de Nezha', exact: true })).toBeEnabled();
  await expect(page.getByRole('button', { name: 'Domínio de Loki', exact: true })).toBeDisabled();
  await expect(page.locator('.pt-deity[data-level-state="locked"]')).toHaveCount(9);
  await expect(page.getByRole('progressbar', { name: 'Níveis conquistados' })).toHaveAttribute('value', '0');
});

test('a legal victory unlocks Loki, survives reload and lets the player start the next level', async ({ page }) => {
  // Deterministic legal opponent only in this test; production uses the unchanged G16 model.
  await page.route(/\/src\/tonkai\/network\.ts(?:\?.*)?$/, route => route.fulfill({
    contentType: 'application/javascript',
    body: `const legal = board => board.moves({verbose:true}).map(m=>({uci:m.from+m.to+(m.promotion??''),san:m.san,p:1/board.moves().length}));
      export class Network { manifest={sha256:'campaign-browser-test',model_name:'G16 v2'};
        predict(board){return legal(board)}
        rank(board){const target=board.history().length===0?'f2f3':'g2g4';return legal(board).sort((a,b)=>Number(b.uci===target)-Number(a.uci===target))}
      } export async function loadNetwork(){return new Network()}`
  }));
  await page.route('**/firestore.googleapis.com/**', route => route.abort());
  await page.goto('/tonkai');
  await page.getByLabel('A tua cor', { exact: true }).selectOption('b');
  await page.getByRole('button', { name: 'Começar', exact: true }).click();
  const status = page.getByRole('status', { name: 'Estado do jogo' });
  await expect(status).toContainText('A tua vez');
  for (const [from, to] of [['e7', 'e5'], ['d8', 'h4']]) {
    await page.locator(`.tk-board [data-square="${from}"]`).click();
    await page.locator(`.tk-board [data-square="${to}"]`).click();
    if (to === 'e5') await expect(status).toContainText('A tua vez');
  }
  await expect(page.getByRole('dialog', { name: 'Resultado da partida' })).toContainText('Loki está desbloqueado');
  await expect(page.getByRole('button', { name: 'Desafiar Loki', exact: true })).toBeVisible();
  await expect(page.locator('.pt-deity[data-level-state="locked"]')).toHaveCount(8);
  expect(await page.evaluate(key => JSON.parse(localStorage.getItem(key)!), CAMPAIGN_STORAGE_KEY)).toEqual({ completed: ['nezha'] });
  await page.getByRole('button', { name: 'Desafiar Loki', exact: true }).click();
  await expect(page.locator('.tk-pantheon')).toHaveAttribute('data-opponent', 'loki');
  await expect(status).toContainText('A tua vez');
  await page.getByRole('button', { name: 'Desistir', exact: true }).click();
  await page.reload();
  await expect(page.getByRole('button', { name: 'Domínio de Loki', exact: true })).toBeEnabled();
  await expect(page.getByRole('button', { name: 'Domínio de Wukong', exact: true })).toBeDisabled();
  await expect(page.getByRole('progressbar', { name: 'Níveis conquistados' })).toHaveAttribute('value', '1');
});

test('desktop and narrow mobile stay within the viewport and respect reduced motion', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/tonkai');
  await expect(page.locator('.pt-mist')).toHaveCSS('animation-name', 'none');
  for (const width of [1440, 1024, 780, 540, 390, 320]) {
    await page.setViewportSize({ width, height: width > 780 ? 1100 : 844 });
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth);
    expect(overflow, `horizontal overflow at ${width}px`).toBe(false);
    const board = await page.locator('.tk-board').boundingBox();
    expect(board!.width).toBeGreaterThan(width < 540 ? width - 75 : 200);
    if (width === 1440 || width === 390) await page.screenshot({ path: `test-results/pantheon-${width}.png`, fullPage: true });
  }
});
