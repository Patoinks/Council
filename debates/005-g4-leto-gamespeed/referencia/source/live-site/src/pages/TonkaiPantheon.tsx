import { useState, type CSSProperties } from 'react';
import { DEITIES, type ArenaSettings, type Deity } from '../tonkai/pantheon';
import { DEITY_PORTRAITS } from '../tonkai/deityPortraits';
import { CAMPAIGN_LEVELS, campaignLevel, campaignUnlocked, type CampaignProgress } from '../tonkai/campaign';
import './TonkaiPantheon.css';

export function DeitySigil({ deity, className = '', symbolic = false }: { deity?: Deity; className?: string; symbolic?: boolean }) {
  const id = deity?.id ?? 'traveler';
  const [failedImage, setFailedImage] = useState<string>();
  const portrait = symbolic ? undefined : DEITY_PORTRAITS[id];
  if (portrait && portrait !== failedImage) return <img className={`pt-sigil pt-avatar ${className}`}
    src={portrait} alt="" aria-hidden="true" data-deity-image={id} width="80" height="80" decoding="async"
    draggable={false} onError={() => setFailedImage(portrait)} />;
  return <svg className={`pt-sigil ${className}`} viewBox="0 0 80 80" fill="none" stroke="currentColor"
    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="40" cy="40" r="34" opacity=".35" /><circle cx="40" cy="40" r="29" opacity=".2" />
    {id === 'wukong' && <><path d="M25 48c-11 0-13-14-3-17 1-14 20-15 23-4 11-4 20 12 9 18H35" /><path d="m30 60 23-43M29 56l5 3m15-39 5 3" /></>}
    {id === 'loki' && <><path d="M49 21c-18-12-31 9-17 18l16 9c15 10-1 23-17 13M47 18l10 5-11 8-8-7 9-6Zm10 5 6-2m-2 1 3 2" /><circle cx="48" cy="23" r="1" /></>}
    {id === 'nezha' && <><path d="M40 16c3 12 15 15 15 29a15 15 0 0 1-30 0c0-8 5-11 8-18 0 10 4 13 7 14 5-6 5-15 0-25Z" /><path d="M40 62c-12-2-19-7-21-15 10 0 16 4 21 15 5-11 11-15 21-15-2 8-9 13-21 15Z" /></>}
    {id === 'ra' && <><circle cx="40" cy="32" r="11" /><path d="M40 13V9m14 9 3-3m3 17h5M26 18l-3-3M20 32h-5m25 8v23m-11-11h22m-22 11h22" /><path d="M22 45q18 12 36 0" /></>}
    {id === 'anubis' && <><path d="m26 44 2-28 10 19 15-17-1 27-12 18-14-19Z" /><path d="m27 44 13 5 12-4m-14-10 2 14v14m-7-23 3 1m9 0 3-1" /></>}
    {id === 'amaterasu' && <><circle cx="40" cy="32" r="10" /><path d="M40 16v-5m12 10 4-4m-4 27 4 4M24 17l4 4m-9 11h-5m47 0h5M24 49h32M20 56h40m-33 0v13m26-13v13" /></>}
    {id === 'susanoo' && <><path d="M19 37c8-15 23-17 28-8s-5 16-9 9c-4-5 8-6 12 3s12 10 15 0M16 49c9-13 19-13 28-2s16 10 21-2M20 59c10-7 18-5 27 0s13 4 18 0" /></>}
    {id === 'tsukuyomi' && <><path d="M49 17a24 24 0 1 0 14 35A23 23 0 0 1 49 17Z" /><path d="m54 25 2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6Zm9-11v6m-3-3h6" /></>}
    {id === 'zeus' && <path d="M54 8 30 32l8 2-14 16 9 1-12 22 28-26-9-1 15-17-9-1L54 8Z" />}
    {id === 'hades' && <><path d="M25 63V38a15 15 0 0 1 30 0v25M33 63V40a7 7 0 0 1 14 0v23M20 63h40" /><path d="M40 23V12m-7 8 7-8 7 8M22 39h-6m48 0h-6" /></>}
    {id === 'traveler' && <><path d="m40 18 5 16 17 6-17 5-5 17-5-17-17-5 17-6 5-16Z" /><circle cx="40" cy="40" r="6" /></>}
  </svg>;
}

export function arenaStyle(opponent: Deity, patron?: Deity): CSSProperties {
  return {
    '--pt-accent': opponent.accent, '--pt-secondary': opponent.secondary,
    '--pt-patron': patron?.accent ?? opponent.secondary, '--pt-art-filter': opponent.filter,
  } as CSSProperties;
}

export function ArenaAtmosphere({ opponent, patron }: { opponent: Deity; patron?: Deity }) {
  return <div className="pt-atmosphere" aria-hidden="true">
    <div className="pt-sanctuary" /><div className="pt-sky" /><div className="pt-mist" />
    <div className={`pt-celestial pt-celestial-${opponent.motif}`}><DeitySigil deity={opponent} symbolic /></div>
    {patron && <div className="pt-patron-seal"><DeitySigil deity={patron} symbolic /></div>}
    <div className="pt-constellation"><svg viewBox="0 0 1000 600" fill="none" stroke="currentColor">
      <path d="m60 170 95-55 70 80-25 120 85 70m470-215 70-65 92 100-25 95 70 60" />
      {[ [60,170], [155,115], [225,195], [200,315], [285,385], [755,170], [825,105], [917,205], [892,300], [962,360] ].map(([cx, cy], i) => <circle key={i} cx={cx} cy={cy} r={i % 3 === 0 ? 2.5 : 1.5} fill="currentColor" />)}
    </svg></div>
    <div className="pt-particles">{Array.from({ length: 16 }, (_, i) => <i key={i} style={{
      left: `${(i * 37 + 9) % 100}%`, top: `${(i * 23 + 11) % 100}%`,
      animationDelay: `${-i * 1.7}s`, animationDuration: `${16 + i % 5 * 4}s`,
    }} />)}</div>
  </div>;
}

export default function TonkaiPantheon({ opponent, patron, settings, onChange, progress, locked = false }: {
  opponent: Deity; patron?: Deity; settings: ArenaSettings; onChange: (next: ArenaSettings) => void;
  progress: CampaignProgress; locked?: boolean;
}) {
  return <section className="pt-intro" aria-label="Arena do panteão">
    <div className="pt-intro-top"><span className="pt-eyebrow"><span aria-hidden="true">✦</span> TONKAI · PANTEÃO</span>
      <button className="pt-effects" aria-pressed={settings.effects} onClick={() => onChange({ ...settings, effects: !settings.effects })}
        aria-label={settings.effects ? 'Desativar efeitos da arena' : 'Ativar efeitos da arena'}><span aria-hidden="true">✧</span> Efeitos {settings.effects ? 'ativos' : 'pausados'}</button>
    </div>
    <div className="pt-realm-heading"><div><p className="pt-realm-kicker">{opponent.tradition} <span> / </span> {opponent.epithet}</p>
      <h1>{opponent.realm}</h1><p className="pt-atmosphere-description">{opponent.atmosphere}</p></div>
      <DeitySigil deity={opponent} className="pt-realm-sigil" />
    </div>
    <div className="pt-campaign" aria-label="Progresso no panteão">
      <div><span className="pt-eyebrow">A ASCENSÃO</span><strong>{progress.completed.length === CAMPAIGN_LEVELS.length
        ? 'Panteão conquistado' : `Nível ${campaignLevel(opponent.id)} · ${opponent.name}`}</strong>
        <p>Vence para desbloquear o próximo deus.</p></div>
      <div className="pt-campaign-meter"><span aria-live="polite">{progress.completed.length} / {CAMPAIGN_LEVELS.length} conquistados</span>
        <progress aria-label="Níveis conquistados" value={progress.completed.length} max={CAMPAIGN_LEVELS.length} /></div>
    </div>
    <div className="pt-choice-heading"><span id="pt-opponent-label">{locked ? 'O nível desta partida' : 'O teu caminho pelo panteão'}</span><span>{DEITIES.length} divindades · 1 tabuleiro</span></div>
    <div className="pt-roster" role="group" aria-labelledby="pt-opponent-label">
      {CAMPAIGN_LEVELS.map((deity, index) => {
        const unlocked = campaignUnlocked(deity.id, progress), completed = index < progress.completed.length;
        return <button key={deity.id} className="pt-deity" aria-pressed={opponent.id === deity.id}
          data-level={index + 1} data-level-state={completed ? 'conquered' : unlocked ? 'available' : 'locked'}
          disabled={locked || !unlocked}
          aria-label={`Domínio de ${deity.name}`}
          title={`Nível ${index + 1} · ${deity.name}${!unlocked ? ` · Vence ${CAMPAIGN_LEVELS[index - 1].name} para desbloquear` : completed ? ' · Conquistado' : ' · Disponível'}`}
          style={{ '--pt-token': deity.accent } as CSSProperties}
          onClick={() => onChange({ ...settings, opponent: deity.id })}>
          <span className="pt-level-number">Nível {String(index + 1).padStart(2, '0')}</span>
          <DeitySigil deity={deity} /><span className="pt-deity-name">{deity.name}</span>
          <span className="pt-level-state">{completed ? '✓ Conquistado' : unlocked ? 'Desafiar' : 'Bloqueado'}</span>
        </button>;
      })}
    </div>
    <div className="pt-duel-line"><div className="pt-patron-choice"><DeitySigil deity={patron} />
      <label htmlFor="pt-patron">A tua afinidade<select id="pt-patron" aria-label="A tua afinidade" value={settings.patron} disabled={locked}
        onChange={event => onChange({ ...settings, patron: event.target.value })}>
        <option value="traveler">Viajante</option>{DEITIES.map(deity => <option key={deity.id} value={deity.id}>{deity.name}</option>)}
      </select></label></div>
      <div className="pt-versus" aria-label={`${patron?.name ?? 'Viajante'} contra ${opponent.name}`}>
        <span>{patron?.name ?? 'Viajante'}</span><b aria-hidden="true">◇</b><strong>{opponent.name}</strong>
      </div><span className="pt-theme-note">Vence para avançar</span>
    </div>
  </section>;
}
