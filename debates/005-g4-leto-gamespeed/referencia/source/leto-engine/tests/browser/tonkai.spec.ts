import { test, expect, type Page } from '@playwright/test';
import { Chess, type Square } from 'chess.js';

const REPLAY_PGN = `[Event "Browser replay fixture"]
[White "Human"]
[Black "TonkAI"]
[Date "2026.09.22"]
[Result "0-1"]
[Termination "checkmate"]
[PlyCount "4"]

1. f3 e5 2. g4 Qh4# 0-1`;

test.beforeEach(async ({ page }) => {
  await page.route('**/tonkai/featured-game.pgn', route =>
    route.fulfill({ status: 200, contentType: 'application/x-chess-pgn', body: '' }));
});

async function start(page: Page, options: { fen?: string; black?: boolean } = {}) {
  const query = options.fen ? `?fen=${encodeURIComponent(options.fen)}` : '';
  await page.goto('/tests/fixtures/tonkai.html' + query);
  if (options.black) await page.getByLabel('A tua cor').selectOption('b');
  await page.getByRole('button', { name: 'Começar', exact: true }).click();
  await expect(page.getByRole('status', { name: 'Estado do jogo' })).toContainText('A tua vez', { timeout: 60_000 });
}

async function boardState(page: Page) {
  const fen = await page.locator('.tk-board').getAttribute('data-fen');
  expect(fen).toBeTruthy();
  return new Chess(fen!);
}

async function squarePoint(page: Page, square: string) {
  const box = await page.locator('.tk-board cg-board').boundingBox();
  expect(box).not.toBeNull();
  const black = await page.locator('.tk-chessground').evaluate(el => el.classList.contains('orientation-black'));
  const file = square.charCodeAt(0) - 97;
  const rank = Number(square[1]) - 1;
  return {
    x: box!.x + (black ? 7 - file + .5 : file + .5) * box!.width / 8,
    y: box!.y + (black ? rank + .5 : 7 - rank + .5) * box!.height / 8,
  };
}

async function clickSquare(page: Page, square: string) {
  const point = await squarePoint(page, square);
  await page.mouse.click(point.x, point.y);
}

async function squares(page: Page, from: string, to: string) {
  await clickSquare(page, from);
  await clickSquare(page, to);
}

async function drag(page: Page, from: string, to: string) {
  const a = await squarePoint(page, from);
  const b = await squarePoint(page, to);
  await page.mouse.move(a.x, a.y);
  await page.mouse.down();
  await page.mouse.move(b.x, b.y, { steps: 8 });
  await page.mouse.up();
}

function collectErrors(page: Page) {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
  return errors;
}

test('brown Cburnett board shows legal destinations, last move and check', async ({ page }) => {
  const errors = collectErrors(page);
  await start(page);
  const board = page.locator('.tk-board cg-board');
  await expect(board).toHaveCSS('background-color', 'rgb(240, 217, 181)');
  await expect(page.locator('.tk-board piece.pawn.white').first()).toHaveCSS('background-image', /data:image\/svg\+xml/);
  await clickSquare(page, 'e2');
  await expect(page.locator('cg-board square.move-dest')).toHaveCount(2);
  await expect(page.locator('cg-board square.premove-dest')).toHaveCount(0);
  await clickSquare(page, 'e4');
  await expect.poll(async () => (await boardState(page)).get('e4' as Square)?.type).toBe('p');
  await expect(page.locator('cg-board square.last-move')).toHaveCount(2);
  expect(errors).toEqual([]);
});

test('dragging a legal move works and an illegal destination leaves the position unchanged', async ({ page }) => {
  await start(page);
  const before = (await boardState(page)).fen();
  await squares(page, 'e2', 'e5');
  await expect(page.locator('.tk-board')).toHaveAttribute('data-fen', before);
  await drag(page, 'e2', 'e4');
  await expect.poll(async () => (await boardState(page)).get('e4' as Square)?.color).toBe('w');
});

test('black orientation accepts human moves only after the G4 Leto reply', async ({ page }) => {
  const errors = collectErrors(page);
  await start(page, { black: true });
  await expect(page.locator('.tk-chessground')).toHaveClass(/orientation-black/);
  const before = await boardState(page);
  const move = before.moves({ verbose: true }).find(candidate => !candidate.promotion)!;
  await squares(page, move.from, move.to);
  await expect.poll(async () => (await boardState(page)).get(move.to as Square)?.color).toBe('b');
  expect(errors).toEqual([]);
});

test('the board has no destinations while G4 Leto is playing', async ({ page }) => {
  await page.goto('/tests/fixtures/tonkai.html');
  await page.getByLabel('A tua cor').selectOption('b');
  await page.getByRole('button', { name: 'Começar' }).click();
  await expect(page.locator('cg-board square.move-dest')).toHaveCount(0);
  await expect(page.getByRole('status', { name: 'Estado do jogo' })).toContainText('A tua vez', { timeout: 60_000 });
  await clickSquare(page, 'e7');
  await expect(page.locator('cg-board square.move-dest')).not.toHaveCount(0);
});

test('castling and en passant use legal moves from chess.js', async ({ page }) => {
  const fen = 'r3k2r/8/8/3pP3/8/8/8/R3K2R w KQkq d6 7 20';
  await start(page, { fen });
  await squares(page, 'e1', 'g1');
  await expect.poll(async () => (await boardState(page)).get('g1')?.type).toBe('k');
  await start(page, { fen });
  await squares(page, 'e5', 'd6');
  await expect.poll(async () => (await boardState(page)).get('d6')?.type).toBe('p');
  expect((await boardState(page)).get('d5')).toBeUndefined();
});

for (const [role, label] of [['q', 'Dama'], ['r', 'Torre'], ['b', 'Bispo'], ['n', 'Pónei']] as const) {
  test(`promotion to ${label} commits the chosen piece`, async ({ page }) => {
    await start(page, { fen: '7k/P7/8/8/8/8/8/K7 w - - 0 1' });
    await squares(page, 'a7', 'a8');
    const dialog = page.getByRole('dialog', { name: 'Escolher promoção' });
    await expect(dialog).toBeVisible();
    await dialog.getByRole('button', { name: label, exact: true }).click();
    await expect(dialog).toHaveCount(0);
    await expect.poll(async () => (await boardState(page)).get('a8')?.type).toBe(role);
  });
}

test('cancelling promotion restores the pawn and permits another choice', async ({ page }) => {
  const fen = '7k/P7/8/8/8/8/8/K7 w - - 0 1';
  await start(page, { fen });
  await squares(page, 'a7', 'a8');
  await page.getByRole('dialog', { name: 'Escolher promoção' }).getByRole('button', { name: 'Cancelar' }).click();
  await expect(page.locator('.tk-board')).toHaveAttribute('data-fen', fen);
  await expect(page.locator('.tk-board piece.pawn.white:not(.fading):not(.ghost)')).toHaveCount(1);
  await squares(page, 'a7', 'a8');
  await page.getByRole('dialog', { name: 'Escolher promoção' }).getByRole('button', { name: 'Dama' }).click();
  await expect.poll(async () => (await boardState(page)).get('a8')?.type).toBe('q');
});

test('checkmate shows the result over the board and highlights check', async ({ page }) => {
  const errors = collectErrors(page);
  await start(page, { fen: '7k/5Q2/6K1/8/8/8/8/8 w - - 0 1' });
  await squares(page, 'f7', 'g7');
  const result = page.getByRole('dialog', { name: 'Resultado da partida' });
  await expect(result.getByRole('heading', { name: 'Ganhaste!' })).toBeVisible();
  await expect(result).toContainText('Xeque-mate.');
  await result.getByRole('button', { name: 'Ver tabuleiro' }).click();
  await expect(page.locator('cg-board square.check')).toHaveCount(1);
  await expect(page.locator('cg-board square.last-move')).toHaveCount(2);
  expect(errors).toEqual([]);
});

test('the fifty-move draw and play-again action remain available', async ({ page }) => {
  await start(page, { fen: '7k/8/5K2/8/8/8/8/R7 w - - 98 1' });
  await squares(page, 'a1', 'a2');
  const result = page.getByRole('dialog', { name: 'Resultado da partida' });
  await expect(result.getByRole('heading', { name: 'Empate' })).toBeVisible();
  await expect(result).toContainText('Regra dos 50 lances.');
  await result.getByRole('button', { name: 'Jogar novamente' }).click();
  await expect(result).toHaveCount(0);
  await expect(page.getByRole('status', { name: 'Estado do jogo' })).toContainText('A tua vez');
});

test('resignation stops play, keeps the clock and saves one finished game', async ({ page }) => {
  await start(page);
  await squares(page, 'e2', 'e4');
  await page.getByRole('button', { name: 'Desistir' }).click();
  await expect(page.getByRole('dialog', { name: 'Resultado da partida' })).toContainText('Desististe da partida.');
  await expect.poll(async () => {
    const records = await page.locator('html').getAttribute('data-records');
    return records ? JSON.parse(records).length : 0;
  }).toBe(1);
  await expect(page.locator('.tk-clock')).toHaveCount(2);
  await expect(page.locator('cg-board square.move-dest')).toHaveCount(0);
});

test('analysis bars, piece values and chat stay linked to the live position', async ({ page }) => {
  await start(page);
  await page.getByRole('button', { name: 'Mostrar avaliações' }).click();
  const fen = (await boardState(page)).fen();
  await expect(page.locator('[data-engine="TK"]')).toHaveAttribute('data-fen', fen);
  await expect(page.locator('[data-engine="SF"]')).toHaveCount(1);
  await expect(page.locator('[data-value-square]')).toHaveCount(32);
  await expect(page.getByRole('region', { name: 'Chat de provocações' })).toBeVisible();
  await squares(page, 'e2', 'e4');
  await expect.poll(async () => page.locator('[data-engine="TK"]').getAttribute('data-fen'))
    .toBe((await boardState(page)).fen());
});

test('history navigation is exact, read-only and independent of a live game', async ({ page }) => {
  await page.route('**/tonkai/featured-game.pgn', route =>
    route.fulfill({ status: 200, contentType: 'application/x-chess-pgn', body: REPLAY_PGN }));
  await start(page);
  const active = (await boardState(page)).fen();
  await page.getByRole('button', { name: 'Histórico', exact: true }).click();
  await expect(page.getByRole('status', { name: 'Estado da reprodução' })).toHaveText('Posição inicial');
  const replayStart = (await boardState(page)).fen();
  await squares(page, 'e2', 'e4');
  await expect(page.locator('.tk-board')).toHaveAttribute('data-fen', replayStart);
  await page.getByRole('button', { name: 'Próximo lance' }).click();
  expect((await boardState(page)).get('f3')?.type).toBe('p');
  await page.getByRole('button', { name: 'Posição final' }).click();
  await expect(page.getByRole('status', { name: 'Estado da reprodução' })).toHaveText('4 / 4 lances');
  await expect(page.locator('cg-board square.check')).toHaveCount(1);
  await page.getByRole('button', { name: 'Lance anterior' }).click();
  expect((await boardState(page)).get('h4')).toBeUndefined();
  await page.getByRole('button', { name: 'Jogar', exact: true }).click();
  await expect(page.locator('.tk-board')).toHaveAttribute('data-fen', active);
});

test('desktop and mobile render the G4 Leto board without console errors or horizontal overflow', async ({ page }) => {
  const errors = collectErrors(page);
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto('/tonkai');
  await expect(page.getByRole('button', { name: 'Começar' })).toBeEnabled();
  await page.getByRole('button', { name: 'Começar' }).click();
  await expect(page.locator('cg-board piece')).toHaveCount(32);
  await clickSquare(page, 'e2');
  await expect(page.locator('cg-board square.move-dest')).toHaveCount(2);
  await page.screenshot({ path: 'test-results/tonkai-chessground-desktop.png', fullPage: true, animations: 'disabled' });
  await page.setViewportSize({ width: 390, height: 844 });
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await page.screenshot({ path: 'test-results/tonkai-chessground-mobile.png', fullPage: true, animations: 'disabled' });
  expect(errors).toEqual([]);
});
