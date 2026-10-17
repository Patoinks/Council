import assert from 'node:assert/strict';
import test from 'node:test';
import { Game } from '../src/tonkai/game';
import type { Network } from '../src/tonkai/network';
import { CAMPAIGN_ORDER, CAMPAIGN_STORAGE_KEY, awardCampaignWin, campaignUnlocked,
  parseCampaignProgress, loadCampaignProgress, saveCampaignProgress } from '../src/tonkai/campaign';

const network = { manifest: { sha256: 'campaign-test' }, predict: () => [] } as unknown as Network;
function victory(human: 'w' | 'b', deity = 'nezha') {
  const game = new Game(network, human);
  game.board.setHeader('PantheonMode', 'campaign');
  game.board.setHeader('PantheonOpponent', deity);
  const moves = human === 'b' ? ['f3', 'e5', 'g4', 'Qh4#'] : ['e4', 'e5', 'Qh5', 'Nc6', 'Bc4', 'Nf6', 'Qxf7#'];
  for (const move of moves) game.board.move(move);
  return game;
}

test('fresh and malformed progress never skip the first locked level', () => {
  for (const raw of [null, '{', '[]', '{"completed":null}', '{"completed":["zeus"]}']) {
    const progress = parseCampaignProgress(raw);
    assert.deepEqual(progress.completed, []);
    assert.equal(campaignUnlocked('nezha', progress), true);
    assert.equal(campaignUnlocked('loki', progress), false);
    assert.equal(campaignUnlocked('unknown', progress), false);
  }
  assert.deepEqual(parseCampaignProgress('{"completed":["nezha","loki","zeus"]}').completed, ['nezha', 'loki']);
});

for (const human of ['w', 'b'] as const) {
  test(`a complete legal human victory as ${human} unlocks exactly one next level`, () => {
    const progress = { completed: [] };
    const next = awardCampaignWin(progress, victory(human), false);
    assert.deepEqual(next.completed, ['nezha']);
    assert.equal(campaignUnlocked('loki', next), true);
    assert.equal(campaignUnlocked('wukong', next), false);
    assert.equal(awardCampaignWin(next, victory(human), false), next);
  });
}

test('losses, resignation, draws, training, custom starts and out-of-order wins do not unlock', () => {
  const progress = { completed: [] };
  // An actual white loss: the black mating sequence with human playing White.
  const lost = new Game(network, 'w');
  lost.board.setHeader('PantheonMode', 'campaign'); lost.board.setHeader('PantheonOpponent', 'nezha');
  for (const move of ['f3', 'e5', 'g4', 'Qh4#']) lost.board.move(move);
  const resigned = new Game(network, 'w'); resigned.resigned = true;
  const draw = new Game(network, 'w', '8/8/8/8/8/2k5/8/K7 w - - 0 1');
  const training = victory('b'); training.board.setHeader('PantheonMode', 'training');
  const custom = new Game(network, 'w', '7k/5Q2/6K1/8/8/8/8/8 w - - 0 1');
  custom.board.setHeader('PantheonMode', 'campaign'); custom.board.setHeader('PantheonOpponent', 'nezha');
  custom.board.move('Qg7#');
  for (const game of [lost, resigned, draw, training, custom, victory('b', 'loki')])
    assert.equal(awardCampaignWin(progress, game, false), progress);
  assert.equal(awardCampaignWin(progress, victory('b'), true), progress);
});

test('ten consecutive victories complete the campaign and leave all levels replayable', () => {
  let progress = { completed: [] as string[] };
  for (const id of CAMPAIGN_ORDER) progress = awardCampaignWin(progress, victory('b', id), false);
  assert.deepEqual(progress.completed, [...CAMPAIGN_ORDER]);
  for (const id of CAMPAIGN_ORDER) assert.equal(campaignUnlocked(id, progress), true);
  assert.equal(awardCampaignWin(progress, victory('b', 'zeus'), false), progress);
});

test('saving merges other tabs and reports denied storage without breaking progression', () => {
  let raw = JSON.stringify({ completed: ['nezha', 'loki'] });
  const storage = { getItem: (key: string) => key === CAMPAIGN_STORAGE_KEY ? raw : null,
    setItem: (_key: string, value: string) => { raw = value; } };
  const saved = saveCampaignProgress({ completed: ['nezha'] }, storage);
  assert.equal(saved.persisted, true);
  assert.deepEqual(loadCampaignProgress(storage), { completed: ['nezha', 'loki'] });
  const denied = { getItem: () => { throw Error('denied'); }, setItem: () => { throw Error('denied'); } };
  assert.deepEqual(loadCampaignProgress(denied), { completed: [] });
  assert.deepEqual(saveCampaignProgress({ completed: ['nezha'] }, denied),
    { progress: { completed: ['nezha'] }, persisted: false });
});
