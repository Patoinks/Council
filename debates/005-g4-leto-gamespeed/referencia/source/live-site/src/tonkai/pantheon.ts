/** Visual identities only. These settings never enter move selection or evaluation. */
export interface Deity {
  id: string;
  name: string;
  tradition: string;
  epithet: string;
  realm: string;
  atmosphere: string;
  accent: string;
  secondary: string;
  dark: string;
  light: string;
  filter: string;
  motif: 'cloud' | 'rune' | 'fire' | 'sun' | 'gate' | 'storm' | 'moon' | 'thunder';
}

export const DEITIES: readonly Deity[] = [
  { id: 'wukong', name: 'Wukong', tradition: 'Chinesa', epithet: 'O Rei Macaco', realm: 'Palácio das Nuvens',
    atmosphere: 'Ilhas suspensas, névoa de jade e poeira dourada.', accent: '#e9bf73', secondary: '#83c9b4', dark: '#697c72', light: '#ece7d6', filter: 'sepia(.3) hue-rotate(20deg) saturate(.85)', motif: 'cloud' },
  { id: 'loki', name: 'Loki', tradition: 'Nórdica', epithet: 'O Tecelão de Ilusões', realm: 'Véu de Esmeralda',
    atmosphere: 'Uma serpente de estrelas atravessa uma nebulosa verde.', accent: '#a6d9ad', secondary: '#ba9cdb', dark: '#5e776b', light: '#e2e8da', filter: 'sepia(.6) hue-rotate(65deg) saturate(.8)', motif: 'rune' },
  { id: 'nezha', name: 'Nezha', tradition: 'Chinesa', epithet: 'O Príncipe do Fogo', realm: 'Santuário do Lótus',
    atmosphere: 'Uma constelação escarlate entre nebulosas e supernovas.', accent: '#e68c90', secondary: '#c57989', dark: '#82676c', light: '#eddee0', filter: 'sepia(.4) hue-rotate(305deg) saturate(1.1)', motif: 'fire' },
  { id: 'ra', name: 'Rá', tradition: 'Egípcia', epithet: 'O Soberano Solar', realm: 'Templo do Sol',
    atmosphere: 'Ouro antigo e areia sob a coroa de um sol eterno.', accent: '#eed081', secondary: '#d18b51', dark: '#8b7a55', light: '#f0e5c7', filter: 'sepia(.85) saturate(1.1) brightness(1.08)', motif: 'sun' },
  { id: 'anubis', name: 'Anúbis', tradition: 'Egípcia', epithet: 'O Guardião do Limiar', realm: 'Portais de Obsidiana',
    atmosphere: 'Obsidiana, névoa negra e estrelas de prata guardam o limiar.', accent: '#b8b8bb', secondary: '#858589', dark: '#59595e', light: '#e3e3e5', filter: 'grayscale(1) brightness(.7)', motif: 'gate' },
  { id: 'amaterasu', name: 'Amaterasu', tradition: 'Japonesa', epithet: 'A Luz do Amanhecer', realm: 'Santuário da Aurora',
    atmosphere: 'Uma aurora dourada ilumina pétalas e portais sagrados.', accent: '#f0c99b', secondary: '#e4a6ad', dark: '#947c79', light: '#f1e6dc', filter: 'sepia(.4) saturate(.85) brightness(1.1)', motif: 'sun' },
  { id: 'susanoo', name: 'Susanoo', tradition: 'Japonesa', epithet: 'O Senhor dos Mares', realm: 'Mar das Estrelas',
    atmosphere: 'Um mar de constelações enrola ondas de luz violeta.', accent: '#bca8e5', secondary: '#aaa9df', dark: '#73748c', light: '#e6e3ef', filter: 'sepia(.2) hue-rotate(200deg) saturate(1.1)', motif: 'storm' },
  { id: 'tsukuyomi', name: 'Tsukuyomi', tradition: 'Japonesa', epithet: 'O Guardião da Lua', realm: 'Templo do Eclipse',
    atmosphere: 'Prata, constelações e uma lua suspensa no silêncio.', accent: '#c3b9e8', secondary: '#87aecf', dark: '#72718c', light: '#e8e5ef', filter: 'hue-rotate(200deg) saturate(.75)', motif: 'moon' },
  { id: 'zeus', name: 'Zeus', tradition: 'Grega', epithet: 'O Senhor do Olimpo', realm: 'Trono das Tempestades',
    atmosphere: 'Mármore, ouro e relâmpagos para lá das nuvens.', accent: '#dbcb98', secondary: '#95b9e7', dark: '#747f91', light: '#ece9de', filter: 'saturate(.7) hue-rotate(170deg) brightness(1.08)', motif: 'thunder' },
  { id: 'hades', name: 'Hades', tradition: 'Grega', epithet: 'O Soberano das Profundezas', realm: 'Palácio das Sombras',
    atmosphere: 'Fogo azul e pedra negra nas profundezas do santuário.', accent: '#91c8ec', secondary: '#78a7db', dark: '#677b8c', light: '#e1e7ed', filter: 'hue-rotate(165deg) saturate(.9) brightness(.9)', motif: 'gate' },
];

export const ARENA_STORAGE_KEY = 'tonkai.pantheon.v1';
export interface ArenaSettings { opponent: string; patron: string; effects: boolean }
export const DEFAULT_ARENA: ArenaSettings = { opponent: 'nezha', patron: 'traveler', effects: true };
export const deityById = (id: unknown) => DEITIES.find(deity => deity.id === id);

export function parseArenaSettings(raw: string | null): ArenaSettings {
  try {
    const value: unknown = JSON.parse(raw ?? 'null');
    if (!value || typeof value !== 'object') return { ...DEFAULT_ARENA };
    const candidate = value as Partial<ArenaSettings>;
    return {
      opponent: deityById(candidate.opponent)?.id ?? DEFAULT_ARENA.opponent,
      patron: deityById(candidate.patron)?.id ?? 'traveler',
      effects: typeof candidate.effects === 'boolean' ? candidate.effects : true,
    };
  } catch { return { ...DEFAULT_ARENA }; }
}

export function loadArenaSettings(): ArenaSettings {
  try { return parseArenaSettings(window.localStorage.getItem(ARENA_STORAGE_KEY)); }
  catch { return { ...DEFAULT_ARENA }; }
}

/** Optional PGN presentation tags preserve an arena in downloaded/saved replays. */
export function arenaFromPgn(pgn: string | undefined): Pick<ArenaSettings, 'opponent' | 'patron'> | undefined {
  if (!pgn) return undefined;
  const opponent = deityById(pgn.match(/^\[PantheonOpponent "([a-z]+)"\]\r?$/m)?.[1]);
  if (!opponent) return undefined;
  const patron = deityById(pgn.match(/^\[PantheonPatron "([a-z]+)"\]\r?$/m)?.[1]);
  return { opponent: opponent.id, patron: patron?.id ?? 'traveler' };
}
