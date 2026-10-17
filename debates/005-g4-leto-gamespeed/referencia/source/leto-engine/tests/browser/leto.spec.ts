import { test, expect } from '@playwright/test';
import { readFileSync, writeFileSync } from 'node:fs';
import { clickSquare } from './chessground-helpers';

test('Chrome matches Python Leto decisions for both colours and natural openings', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
  const references: { game: number; root: string; moves: string[]; expected: string }[] = readFileSync('leto-work/reference-leto.jsonl', 'utf8')
    .trim().split(/\r?\n/).map(text => JSON.parse(text));
  const rows = [0,1,2].flatMap(game => references.filter(row => row.game === game).slice(0, 20))
    .map(({ game, root, moves, expected }) => ({ game, root, moves, expected }));
  await page.goto('/tests/fixtures/tonkai.html');
  const results = await page.evaluate(async rows => {
    const modulePath = '/tests/fixtures/leto-probe.ts';
    const probe = await import(/* @vite-ignore */ modulePath);
    return probe.rankReferences(rows) as Promise<{ game: number; ply: number; same: boolean; seconds: number }[]>;
  }, rows);
  expect(results).toHaveLength(60);
  expect(results.filter(result => !result.same)).toEqual([]);
  expect(errors).toEqual([]);
  const times = results.map(row => row.seconds).sort((a,b) => a-b);
  writeFileSync('leto-work/browser-parity.json', JSON.stringify({ decisions: results.length, equal: results.length,
    different: 0, errors, meanSeconds: times.reduce((sum, value) => sum + value, 0) / times.length,
    medianSeconds: times[Math.floor(times.length/2)], p95Seconds: times[Math.ceil(times.length*.95)-1], maximumSeconds: times.at(-1), results }, null, 2));
});

test('a full game from the initial position finishes through Chessground without console errors', async ({ page }) => {
  test.setTimeout(600_000);
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
  await page.clock.setFixedTime(new Date('2026-10-12T12:00:00Z'));
  await page.goto('/tests/fixtures/tonkai.html');
  await expect(page.getByRole('heading', { name: 'G4 Leto', exact: true })).toBeVisible();
  await page.evaluate(async () => {
    const modulePath = '/tests/fixtures/leto-probe.ts';
    const probe = await import(/* @vite-ignore */ modulePath);
    await probe.initializeHuman();
  });
  await page.getByRole('button', { name: 'Começar', exact: true }).click();
  const status = page.getByRole('status', { name: 'Estado do jogo' });
  for (let turn = 0; turn < 300; turn++) {
    if (await page.getByRole('dialog', { name: 'Resultado da partida' }).isVisible()) break;
    await expect(status).toContainText('A tua vez');
    const fen = (await page.locator('.tk-board').getAttribute('data-fen'))!;
    const uci: string = await page.evaluate(async fen => {
      const modulePath = '/tests/fixtures/leto-probe.ts';
      const probe = await import(/* @vite-ignore */ modulePath);
      return probe.humanMove(fen);
    }, fen);
    await clickSquare(page, uci.slice(0, 2)); await clickSquare(page, uci.slice(2, 4));
    if (uci[4]) {
      const piece = ({ q: 'Dama', r: 'Torre', b: 'Bispo', n: 'Pónei' } as Record<string,string>)[uci[4]];
      await page.getByRole('dialog', { name: 'Escolher promoção' }).getByRole('button', { name: piece, exact: true }).click();
    }
    await expect(page.locator('.tk-board')).not.toHaveAttribute('data-fen', fen);
    await expect(status).not.toContainText('a jogar', { timeout: 60_000 });
  }
  await expect(page.getByRole('dialog', { name: 'Resultado da partida' })).toBeVisible();
  const fen = (await page.locator('.tk-board').getAttribute('data-fen'))!;
  const finished = await page.evaluate(async fen => {
    const modulePath = '/tests/fixtures/leto-probe.ts';
    const probe = await import(/* @vite-ignore */ modulePath);
    return probe.completedGame(fen) as Promise<{ plies: number; pgn: string; seconds: number[]; checkmate: boolean; draw: boolean }>;
  }, fen);
  expect(finished.plies).toBeGreaterThan(30);
  expect(finished.checkmate || finished.draw).toBe(true);
  expect(errors).toEqual([]);
  await expect.poll(async () => JSON.parse(await page.locator('html').getAttribute('data-records') ?? '[]').length).toBe(1);
  await page.screenshot({ path: 'leto-work/browser-complete-game.png', fullPage: true });
  writeFileSync('leto-work/browser-complete-game.json', JSON.stringify({ ...finished, errors,
    result: await status.textContent(), detail: await page.getByRole('dialog', { name: 'Resultado da partida' }).textContent() }, null, 2));
  writeFileSync('leto-work/browser-complete-game.pgn', finished.pgn + '\n');
});
