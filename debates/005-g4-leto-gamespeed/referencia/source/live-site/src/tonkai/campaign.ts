import { DEFAULT_POSITION } from 'chess.js';
import type { Game } from './game';
import { deityById } from './pantheon';

export const CAMPAIGN_STORAGE_KEY = 'tonkai.pantheon.campaign.v1';
export const CAMPAIGN_ORDER = ['nezha', 'loki', 'wukong', 'susanoo', 'tsukuyomi',
  'anubis', 'amaterasu', 'ra', 'hades', 'zeus'] as const;
export const CAMPAIGN_LEVELS = CAMPAIGN_ORDER.map(id => deityById(id)!);
export interface CampaignProgress { completed: string[] }
type CampaignStorage = Pick<Storage, 'getItem' | 'setItem'>;

function browserStorage(): CampaignStorage | undefined {
  try { return typeof window === 'undefined' ? undefined : window.localStorage; }
  catch { return undefined; }
}

/** Accept only a contiguous sequence: a later level cannot skip its predecessors. */
export function parseCampaignProgress(raw: string | null): CampaignProgress {
  try {
    const value: unknown = JSON.parse(raw ?? 'null');
    if (!value || typeof value !== 'object' || !('completed' in value) || !Array.isArray(value.completed)) return { completed: [] };
    const completed: string[] = [];
    for (const id of CAMPAIGN_ORDER) {
      if (value.completed[completed.length] !== id) break;
      completed.push(id);
    }
    return { completed };
  } catch { return { completed: [] }; }
}

export function loadCampaignProgress(storage = browserStorage()): CampaignProgress {
  try { return parseCampaignProgress(storage?.getItem(CAMPAIGN_STORAGE_KEY) ?? null); }
  catch { return { completed: [] }; }
}

export function campaignLevel(id: string) { return CAMPAIGN_LEVELS.findIndex(level => level.id === id) + 1; }
export function campaignUnlocked(id: string, progress: CampaignProgress) {
  const level = campaignLevel(id);
  return level > 0 && level <= progress.completed.length + 1;
}
export function campaignFrontier(progress: CampaignProgress) {
  return CAMPAIGN_LEVELS[Math.min(progress.completed.length, CAMPAIGN_LEVELS.length - 1)];
}

/** Only a new, complete campaign game won by the human advances the frontier. */
export function awardCampaignWin(progress: CampaignProgress, game: Game, training: boolean): CampaignProgress {
  const next = CAMPAIGN_ORDER[progress.completed.length];
  const headers = game.board.getHeaders();
  if (!next || training || headers.PantheonMode !== 'campaign' || headers.PantheonOpponent !== next
    || game.result !== 'loss' || !game.board.isCheckmate()
    || game.board.history({ verbose: true })[0]?.before !== DEFAULT_POSITION) return progress;
  return { completed: [...progress.completed, next] };
}

/** Preserve progress already saved by another tab; denied storage stays playable. */
export function saveCampaignProgress(progress: CampaignProgress, storage = browserStorage()) {
  const stored = loadCampaignProgress(storage);
  const merged = stored.completed.length > progress.completed.length ? stored : progress;
  try {
    if (!storage) return { progress: merged, persisted: false };
    storage.setItem(CAMPAIGN_STORAGE_KEY, JSON.stringify(merged));
    return { progress: merged, persisted: true };
  } catch { return { progress: merged, persisted: false }; }
}
