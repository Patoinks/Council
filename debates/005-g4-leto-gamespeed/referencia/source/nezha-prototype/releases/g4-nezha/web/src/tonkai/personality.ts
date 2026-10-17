export const PERSONALITY_AXES = ['king_safety_bias', 'eval_optimism', 'prophylaxis_vs_initiative',
  'tension_preference', 'pawn_style', 'gru_momentum_trigger', 'resilience_and_contempt'] as const;
export type PersonalityAxis = typeof PERSONALITY_AXES[number];
export type PersonalitySignals = Record<PersonalityAxis, number>;
export interface PersonalityProfile {
  version: 1; id: string; name: string; axes: PersonalitySignals;
  safety: { max_utility_loss: number; max_bonus: number; max_king_safety_drop: number };
}
export interface PersonalityCandidate {
  index: number; utility: number; verified: boolean; exact: boolean;
  ownSafetyDrop: number; signals: PersonalitySignals;
}
export interface PersonalityDecision {
  profile: string; baseline: string; selected: string; changed: boolean; reason: string;
  baselineUtility: number; selectedUtility: number; utilityLoss: number; bonus: number;
  eligible: number; signals?: PersonalitySignals;
}
const finite = (value: unknown, min: number, max: number) =>
  typeof value === 'number' && Number.isFinite(value) && value >= min && value <= max;

/** Reject malformed profiles instead of quietly changing the engine's safeguards. */
export function parsePersonality(value: unknown): PersonalityProfile {
  if (!value || typeof value !== 'object') throw new Error('Invalid personality profile');
  const p = value as PersonalityProfile;
  if (p.version !== 1 || !/^[a-z][a-z0-9-]{0,31}$/.test(p.id) || typeof p.name !== 'string' || !p.name.trim()
    || !p.axes || PERSONALITY_AXES.some(axis => !finite(p.axes[axis], -1, 1))
    || !p.safety || !finite(p.safety.max_utility_loss, 0, .05) || !finite(p.safety.max_bonus, 0, .05)
    || !finite(p.safety.max_king_safety_drop, 0, .1)) throw new Error('Invalid personality profile');
  return structuredClone(p);
}
export function personalityBonus(profile: PersonalityProfile, signals: PersonalitySignals) {
  const total = PERSONALITY_AXES.reduce((sum, axis) => sum + Math.abs(profile.axes[axis]), 0);
  if (!total) return 0;
  const weighted = PERSONALITY_AXES.reduce((sum, axis) => {
    const value = signals[axis];
    if (!Number.isFinite(value)) throw new Error('Non-finite personality signal');
    return sum + profile.axes[axis] * Math.max(-1, Math.min(1, value));
  }, 0);
  return profile.safety.max_bonus * weighted / total;
}
/** Utility is G4's own score, never centipawns or an invented Elo conversion. */
export function personalityAlternatives(profile: PersonalityProfile, baseline: PersonalityCandidate,
  candidates: PersonalityCandidate[]) {
  if (baseline.exact || !baseline.verified || !Number.isFinite(baseline.utility)) return [];
  return candidates.filter(c => c.index !== baseline.index && c.verified && !c.exact
    && Number.isFinite(c.utility) && c.utility <= baseline.utility + 1e-9
    && baseline.utility - c.utility <= profile.safety.max_utility_loss
    && Number.isFinite(c.ownSafetyDrop) && c.ownSafetyDrop <= profile.safety.max_king_safety_drop)
    .map(c => ({ ...c, bonus: personalityBonus(profile, c.signals) }))
    .filter(c => c.utility + c.bonus > baseline.utility + personalityBonus(profile, baseline.signals) + 1e-12)
    .sort((a, b) => b.utility + b.bonus - a.utility - a.bonus || a.index - b.index);
}
