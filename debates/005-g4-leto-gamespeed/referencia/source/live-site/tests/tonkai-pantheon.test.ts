import assert from 'node:assert/strict';
import test from 'node:test';
import { Chess } from 'chess.js';
import { arenaFromPgn, DEFAULT_ARENA, parseArenaSettings } from '../src/tonkai/pantheon';

test('corrupt or unrecognised browser preferences recover without losing valid options', () => {
  for (const raw of [null, '', '{', 'null', '[]', '"loki"']) assert.deepEqual(parseArenaSettings(raw), DEFAULT_ARENA);
  assert.deepEqual(parseArenaSettings('{"opponent":"missing","patron":"zeus","effects":false}'),
    { opponent: 'nezha', patron: 'zeus', effects: false });
  assert.deepEqual(parseArenaSettings('{"opponent":"hades","patron":{},"effects":"false"}'),
    { opponent: 'hades', patron: 'traveler', effects: true });
});

test('a saved PGN carries both visual identities without altering moves or engine identity', () => {
  const board = new Chess();
  board.setHeader('White', 'Martim'); board.setHeader('Black', 'G16 v2');
  board.move('e4'); board.move('e5');
  const fen = board.fen();
  board.setHeader('PantheonOpponent', 'tsukuyomi'); board.setHeader('PantheonPatron', 'ra');
  const restored = new Chess(); restored.loadPgn(board.pgn(), { strict: true });
  assert.equal(restored.fen(), fen);
  assert.equal(restored.getHeaders().Black, 'G16 v2');
  assert.deepEqual(arenaFromPgn(restored.pgn()), { opponent: 'tsukuyomi', patron: 'ra' });
  assert.deepEqual(arenaFromPgn(restored.pgn().replace(/\n/g, '\r\n')), { opponent: 'tsukuyomi', patron: 'ra' });
  assert.equal(arenaFromPgn('[Event "An older game"]'), undefined);
  assert.equal(arenaFromPgn('[PantheonOpponent "unknown"]'), undefined);
});

test('retired identities recover safely in preferences and old PGN themes', () => {
  assert.deepEqual(parseArenaSettings('{"opponent":"osiris","patron":"osiris","effects":false}'),
    { opponent: 'nezha', patron: 'traveler', effects: false });
  assert.equal(arenaFromPgn('[PantheonOpponent "osiris"]'), undefined);
  assert.deepEqual(arenaFromPgn('[PantheonOpponent "zeus"]\n[PantheonPatron "osiris"]'),
    { opponent: 'zeus', patron: 'traveler' });
});
