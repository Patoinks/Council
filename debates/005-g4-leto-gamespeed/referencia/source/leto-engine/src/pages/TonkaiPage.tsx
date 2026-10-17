import { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Chess, type Color } from 'chess.js';
import type { Key } from 'chessground/types';
import { Game } from '../tonkai/game';
import { loadNetwork, type Network } from '../tonkai/network';
import { saveGame } from '../tonkai/data';
import { createWinRecord, fetchFeaturedGame, saveLocalLongestWin, type FeaturedGame } from '../tonkai/winHistory';
import './TonkaiPage.css';
import { AuthContext } from '../context/auth';
import { BOT_AVATAR } from '../tonkai/brand';
import { pieceValueLabel, positionEvaluation } from '../tonkai/positionEvaluation';
import { useStockfishEvaluation } from '../tonkai/useStockfishEvaluation';
import TonkaiRoastChat from './TonkaiRoastChat';
import TonkaiEvalBars from './TonkaiEvalBars';
import TonkaiMoveIcon from './TonkaiMoveIcon';
import { MOVE_GRADES, reviewMove, reviewDescription } from '../tonkai/moveReview';
import type { RoastContext } from '../tonkai/roastContext';
import { TonkaiPiece } from './TonkaiPieces';
import TonkaiChessground from './TonkaiChessground';
import TonkaiDuel from './TonkaiDuel';
import { createGameRecord, loadGameHistory, pgnDownload, saveGameHistory } from '../tonkai/gameHistory';
import { LetoThinker } from '../tonkai/letoThinking';

function PlayerIdentity({ name, color, bot = false, photo, active = false }: {
  name: string; color: Color; bot?: boolean; photo?: string | null; active?: boolean;
}) {
  const [failedPhoto, setFailedPhoto] = useState<string | null>(null);
  const image = bot ? BOT_AVATAR : photo;
  return <div className={`tk-player${active ? ' tk-player-active' : ''}`} aria-label={`Jogador: ${name}`}>
    <div className={`tk-avatar${bot ? ' tk-avatar-bot' : ''}`}>
      {image && failedPhoto !== image ? <img src={image} alt={`Avatar de ${name}`} width="52" height="52" onError={() => setFailedPhoto(image)} />
        : <span aria-hidden="true">{name.trim().charAt(0).toUpperCase()}</span>}
    </div>
    <div className="tk-player-info"><strong>{name}</strong><span><i className={`tk-piece-color tk-piece-${color}`} aria-hidden="true" />{color === 'w' ? 'Brancas' : 'Pretas'}{bot && <small>IA</small>}</span></div>
    {active && <span className="tk-player-turn" aria-label="A jogar" />}
  </div>;
}

const services = { saveGame };
const BOT_NAME = 'G4 Leto';
const MODEL_MANIFEST = '/tonkai/leto.json';
export default function TonkaiPage({ initialFen, persistence = services }: {
  initialFen?: string; persistence?: typeof services;
}) {
  const auth = useContext(AuthContext);
  const playerName = auth?.profile?.displayName || auth?.profile?.username || auth?.user?.displayName || 'Tu';
  const [network, setNetwork] = useState<Network | null>(null);
  const thinker = useMemo(() => new LetoThinker(), []);
  const [loadError, setLoadError] = useState('');
  const [attempt, setAttempt] = useState(0);
  const [game, setGame] = useState<Game | null>(null);
  const [revision, setRevision] = useState(0);
  const [colour, setColour] = useState<Color>('w');
  const [promotion, setPromotion] = useState<{ from: string; to: string } | null>(null);
  const [resultDismissed, setResultDismissed] = useState(false);
  const [playError, setPlayError] = useState('');
  const [view, setView] = useState<'play' | 'history'>('play');
  const [featured, setFeatured] = useState<FeaturedGame | null>(null);
  const [replayPly, setReplayPly] = useState(0);
  const [showEvaluations, setShowEvaluations] = useState(false);
  const [practice, setPractice] = useState(false);
  const [browsePly, setBrowsePly] = useState<number | null>(null);
  const [savedGames, setSavedGames] = useState(loadGameHistory);
  const savedGamesRef = useRef(savedGames);
  const [replayGameId, setReplayGameId] = useState<string | null>(null);
  const [storageError, setStorageError] = useState('');
  const [downloadUrl, setDownloadUrl] = useState('');
  const startedAt = useRef('');
  const gameId = useRef('');
  const submitted = useRef(false);
  const replayWin = replayGameId === 'featured' ? featured
    : savedGames.find(record => record.id === replayGameId) ?? savedGames[0] ?? featured;

  useEffect(() => {
    const previous = document.title;
    document.title = `${BOT_NAME} · ANW`;
    return () => { document.title = previous; };
  }, []);

  useEffect(() => {
    let active = true;
    setLoadError('');
    loadNetwork(MODEL_MANIFEST).then(n => { if (active) setNetwork(n); })
      .catch(e => { if (active) setLoadError(String(e.message)); });
    return () => { active = false; };
  }, [attempt]);

  useEffect(() => () => thinker.dispose(), [thinker]);
  useEffect(() => {
    const activeNetwork = game?.network ?? network;
    if (activeNetwork) void Promise.resolve().then(() => thinker.prepare(activeNetwork)).catch(() => { /* Playing reports a retryable failure. */ });
  }, [game, network, thinker]);

  useEffect(() => {
    if (!network) return;
    let active = true, loading = false;
    const refreshModel = async () => {
      if (loading) return;
      loading = true;
      try {
        const response = await fetch('/tonkai/leto-version.json', { cache: 'no-cache' });
        if (!response.ok) return;
        const version = await response.json();
        if ((version.revision ?? version.sha256) !== (network.manifest.revision ?? network.manifest.sha256)) {
          const next = await loadNetwork(MODEL_MANIFEST);
          // Existing Game retains its network; the next game uses the new model.
          if (active) setNetwork(next);
        }
      } catch { /* Keep the validated local model while offline. */ }
      finally { loading = false; }
    };
    const timer = window.setInterval(() => { void refreshModel(); }, 30_000);
    window.addEventListener('focus', refreshModel);
    return () => { active = false; window.clearInterval(timer); window.removeEventListener('focus', refreshModel); };
  }, [network]);

  useEffect(() => {
    let active = true;
    async function refresh() {
      try {
        const game = await fetchFeaturedGame();
        if (active) setFeatured(game);
      } catch {
        // Keep the last available replay if refreshing fails.
      }
    }
    void refresh();
    window.addEventListener('focus', refresh);
    return () => { active = false; window.removeEventListener('focus', refresh); };
  }, [view]);

  useEffect(() => { setReplayPly(0); }, [replayWin?.pgn]);

  useEffect(() => {
    if (!game || game.over || game.humanTurn || playError || view !== 'play' || browsePly !== null) return;
    const controller = new AbortController(), fen = game.board.fen();
    void thinker.think(game.network, game.board, game.self, gameId.current, controller.signal).then(result => {
      if (controller.signal.aborted) return;
      if (game.playTonkAIChoice(result.uci, fen)) setRevision(n => n + 1);
    }).catch(error => {
      if (!controller.signal.aborted && error?.name !== 'AbortError') setPlayError('Não foi possível jogar esta posição. Inicia uma nova partida.');
    });
    return () => controller.abort();
  }, [game, revision, playError, view, browsePly, thinker]);

  const currentRecord = useMemo(() => {
    if (!game || (!game.board.history().length && !game.over)) return null;
    return createGameRecord(game, gameId.current, playerName, startedAt.current, undefined, practice);
    // Game is mutable; revision refreshes the PGN after moves and resignation.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [game, revision, playerName, practice]);

  const displayGame = useMemo(() => {
    if (!game || view !== 'play' || browsePly === null) return game;
    return Game.fromPgn(game.network, game.human, game.board.pgn(), Math.min(browsePly, currentRecord?.plies ?? 0));
  }, [game, view, browsePly, currentRecord]);

  useEffect(() => {
    if (!currentRecord) return;
    const saved = saveGameHistory(currentRecord, savedGamesRef.current);
    savedGamesRef.current = saved.games;
    setSavedGames(saved.games);
    setStorageError(saved.persisted ? '' : 'O navegador não conseguiu guardar o histórico. Descarrega o PGN para conservar a partida.');
  }, [currentRecord]);

  const downloadRecord = view === 'history' ? replayWin : currentRecord;
  const downloadId = downloadRecord && 'id' in downloadRecord ? downloadRecord.id : 'destaque';
  const downloadPgn = downloadRecord?.pgn;
  useEffect(() => {
    if (!downloadPgn) { setDownloadUrl(''); return; }
    const url = URL.createObjectURL(pgnDownload(downloadPgn));
    setDownloadUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [downloadPgn]);

  useEffect(() => {
    if (!game?.over || submitted.current || practice) return;
    submitted.current = true;
    // Keep the playable win locally even when community statistics are unavailable.
    const win = createWinRecord(game);
    if (win) saveLocalLongestWin(win);
    void persistence.saveGame(gameId.current, game.finish()).catch(error => {
      console.warn('Could not save TonkAI community statistics.', error);
    });
  }, [game, revision, persistence, practice]);

  function start() {
    if (!network) return;
    thinker.cancel();
    gameId.current = crypto.randomUUID(); submitted.current = false;
    startedAt.current = new Date().toISOString();
    setGame(new Game(network.createPlayer(), colour, initialFen)); setPromotion(null); setResultDismissed(false);
    setPractice(false); setBrowsePly(null);
    setPlayError('');
  }
  function navigateTo(ply: number) {
    thinker.cancel();
    setPromotion(null);
    if (view === 'history') setReplayPly(ply); else setBrowsePly(ply);
  }
  function activateTraining(next: Game) {
    thinker.cancel();
    gameId.current = crypto.randomUUID(); submitted.current = false;
    startedAt.current = new Date().toISOString();
    setGame(next); setPractice(true); setBrowsePly(null); setView('play');
    setColour(next.human); setPromotion(null); setResultDismissed(false); setPlayError('');
  }
  function trainHere(ply = navigationPly) {
    if (!network) return;
    thinker.cancel();
    const source = view === 'history' ? replayWin : currentRecord;
    const human = view === 'history' ? (replayWin?.tonkaiColor === 'w' ? 'b' : 'w') : game?.human ?? colour;
    const next = source ? Game.fromPgn(game && view === 'play' ? game.network : network, human, source.pgn, ply)
      : new Game(network.createPlayer(), human, initialFen);
    if (!next.over) activateTraining(next);
  }
  function undoMove() {
    if (!game) return;
    const history = game.board.history({ verbose: true }).slice(0, navigationPly);
    for (let ply = history.length - 1; ply >= 0; ply--) {
      if (history[ply].color === game.human) { navigateTo(ply); return; }
    }
  }
  function changeView(next: 'play' | 'history') { thinker.cancel(); setView(next); }
  function commitMove(uci: string) {
    const target = browsePly === null ? game : displayGame;
    if (!target) return false;
    if (!target.playHuman(uci)) {
      if (target.over) { setPromotion(null); setRevision(n => n + 1); }
      return false;
    }
    if (browsePly !== null) activateTraining(target);
    setPromotion(null);
    setRevision(n => n + 1); return true;
  }
  function tryMove(from: string, to: string) {
    if (view !== 'play' || !displayGame?.humanTurn || promotion || playError) return false;
    const moves = displayGame.board.moves({ verbose: true }).filter(m => m.from === from && m.to === to);
    if (!moves.length) return false;
    if (moves.some(m => m.promotion)) { setPromotion({ from, to }); return false; }
    return commitMove(from + to);
  }
  const canMove = view === 'play' && !!displayGame?.humanTurn && !promotion && !playError;
  const destinations = new Map<Key, Key[]>();
  if (canMove && displayGame) for (const move of displayGame.board.moves({ verbose: true })) {
    const from = move.from as Key;
    const targets = destinations.get(from) ?? [];
    if (!targets.includes(move.to as Key)) targets.push(move.to as Key);
    destinations.set(from, targets);
  }
  const status = !game ? 'Pronto para jogar' : game.over
    ? game.result === 'draw' ? 'Empate' : game.result === 'win' ? `${BOT_NAME} venceu` : 'Ganhaste'
    : game.humanTurn ? `A tua vez${game.board.isCheck() ? ' · Xeque' : ''}` : `${BOT_NAME} a pensar… · até 5 s`;
  const replay = view === 'history';
  const currentPly = Math.min(replayPly, replayWin?.plies ?? 0);
  const browsing = !replay && browsePly !== null;
  const navigationRecord = replay ? replayWin : currentRecord;
  const navigationLength = navigationRecord?.plies ?? 0;
  const navigationPly = replay ? currentPly : browsePly === null ? navigationLength : Math.min(browsePly, navigationLength);
  const position = replay ? replayWin?.fens[currentPly] : displayGame?.board.fen();
  const bottomColor: Color = replay ? replayWin?.tonkaiColor ?? 'w' : game?.human ?? colour;
  const topColor: Color = bottomColor === 'w' ? 'b' : 'w';
  const turn = position?.split(' ')[1] as Color | undefined;
  const playing = !replay && !browsing && !!game && !game.over && !playError;
  const canTrain = !!network && (!position || !new Chess(position).isGameOver());
  const canUndo = !replay && !!game?.board.history({ verbose: true }).slice(0, navigationPly).some(move => move.color === game.human);
  const resultDetail = !game?.over ? '' : game.resigned ? 'Desististe da partida.'
    : game.board.isCheckmate() ? 'Xeque-mate.'
    : game.board.isStalemate() ? 'Afogamento.'
    : game.board.isThreefoldRepetition() ? 'Repetição de posição.'
    : game.board.isInsufficientMaterial() ? 'Material insuficiente.'
    : game.board.isDrawByFiftyMoves() || Number(game.board.fen().split(' ')[4]) >= 99 ? 'Regra dos 50 lances.' : 'A partida terminou.';
  const evaluation = useMemo(() => {
    try {
      if (view === 'history') {
        if (!network || !replayWin) return null;
        const replayGame = new Game(network.createPlayer(), replayWin.tonkaiColor === 'w' ? 'b' : 'w', replayWin.fens[0]);
        for (const move of replayWin.moves.slice(0, currentPly)) replayGame.board.move(move);
        return positionEvaluation(replayGame);
      }
      if (browsing && displayGame) return positionEvaluation(displayGame);
      return game ? positionEvaluation(game) : null;
    }
    catch { return null; }
  }, [game, revision, view, network, replayWin, currentPly, browsing, displayGame]);
  const reviewedMoves = useMemo(() => {
    if (!replay) return game?.board.history({ verbose: true }).slice(0, navigationPly) ?? [];
    if (!replayWin) return [];
    const board = new Chess(replayWin.fens[0]);
    for (const move of replayWin.moves.slice(0, currentPly)) board.move(move);
    return board.history({ verbose: true });
  }, [replay, replayWin, currentPly, game, revision, navigationPly]);
  const reviewFens = useMemo(() => [...new Set(reviewedMoves.flatMap(move => [move.before, move.after]))].reverse(), [reviewedMoves]);
  const { evaluation: stockfish, reviews, error: stockfishError } = useStockfishEvaluation(position ?? null, reviewFens);
  const moveReviews = useMemo(() => reviewedMoves.map(move => reviewMove(move, reviews.get(move.before), reviews.get(move.after))), [reviewedMoves, reviews]);
  const lastMove = reviewedMoves.at(-1);
  const checkedKing = useMemo(() => {
    if (!position) return null;
    const board = new Chess(position);
    if (!board.isCheck()) return null;
    return board.board().flat().find(piece => piece?.type === 'k' && piece.color === board.turn())?.square ?? null;
  }, [position]);
  const lastReview = moveReviews.at(-1);
  const roastContext = useMemo<RoastContext | null>(() => {
    if (!game || replay || browsing) return null;
    const history = game.board.history({ verbose: true });
    let humanIndex = -1, botIndex = -1;
    history.forEach((move, index) => { if (move.color === game.human) humanIndex = index; else botIndex = index; });
    return { ply: history.length, human: game.human, lastMove: history.at(-1) ?? null,
      humanMove: history[humanIndex] ?? null, humanGrade: moveReviews[humanIndex]?.grade,
      botGrade: moveReviews[botIndex]?.grade, result: game.result };
  }, [game, revision, replay, browsing, moveReviews]);
  const lastSquare = lastMove ? {
    left: `${(bottomColor === 'w' ? lastMove.to.charCodeAt(0) - 97 : 104 - lastMove.to.charCodeAt(0)) * 12.5}%`,
    top: `${(bottomColor === 'w' ? 8 - Number(lastMove.to[1]) : Number(lastMove.to[1]) - 1) * 12.5}%`,
  } : undefined;

  return <div className="tonkai-page">
    <header className="tk-header">
      <h1>{BOT_NAME}</h1>
      <div className="tk-header-actions">
      <div className="tk-tabs" role="group" aria-label="Vista do tabuleiro">
        <button aria-pressed={!replay} onClick={() => changeView('play')}>Jogar</button>
        <button aria-pressed={replay} onClick={() => changeView('history')}>Histórico</button>
      </div>
      <Link className="tk-versions-link" to="/tonkai/versoes">Versões · G4 Leto <span aria-hidden="true">↗</span></Link>
      </div>
    </header>
    {loadError && !replay && <p role="alert">{loadError} <button onClick={() => setAttempt(a => a + 1)}>Tentar novamente</button></p>}
    <div className="tk-layout">
      <section className="tk-board-panel" aria-label={replay ? 'Reprodução do jogo' : 'Jogar xadrez'}>
        <div className="tk-toolbar">
          <div className="tk-match-controls">
          {replay ? <>
            <span className="tk-status" role="status" aria-label="Estado da reprodução">{replayWin ? currentPly === 0 ? 'Posição inicial' : `${currentPly} / ${replayWin.plies} lances` : 'Histórico vazio'}</span>
            <span className="tk-readonly">Reprodução</span>
          </> : <>
            {(!game || game.over || playError) && <label className="tk-colour"><span className="tk-sr-only">A tua cor</span><select aria-label="A tua cor" value={colour} onChange={e => setColour(e.target.value as Color)}>
              <option value="w">Brancas</option><option value="b">Pretas</option>
            </select></label>}
            {(!game || game.over || playError) && <button className="tk-start" onClick={start} disabled={!network}>{game ? 'Nova partida' : network ? 'Começar' : 'A carregar…'}</button>}
          </>}
          </div>
          <div className="tk-tools-controls">
          {!replay && <button className="tk-training-toggle" disabled={!canTrain || practice && !browsing}
            onClick={() => trainHere()} title="Experimentar lances e voltar atrás">{practice ? 'Treino' : 'Treinar'}</button>}
          <button className="tk-evaluation-toggle" aria-pressed={showEvaluations}
            aria-label={showEvaluations ? 'Ocultar avaliações' : 'Mostrar avaliações'}
            title={showEvaluations ? 'Ocultar avaliações' : 'Mostrar avaliações'} onClick={() => setShowEvaluations(value => !value)}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M5 20V10M12 20V4M19 20v-7" strokeLinecap="round" /></svg>
            <span>Análise</span>
          </button>
          {!replay && !browsing && game && !game.over && <button className="tk-resign" aria-label="Desistir" title="Desistir" onClick={() => {
            thinker.cancel();
            game.resigned = true; game.predictions = [];
            setPromotion(null); setRevision(n => n + 1);
          }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M5 21V3m0 1c5-4 9 4 14 0v10c-5 4-9-4-14 0" strokeLinecap="round" strokeLinejoin="round" /></svg><span>Desistir</span></button>}
          </div>
        </div>
        {playError && !replay && <p role="alert">{playError}</p>}
        <PlayerIdentity name={replay ? replayWin?.opponent ?? 'Adversário' : BOT_NAME}
          bot={!replay} color={topColor} active={playing && turn === topColor} />
        <div className={`tk-board-with-evals${showEvaluations ? '' : ' tk-board-without-evals'}`}>
          {showEvaluations && <TonkaiEvalBars stockfish={stockfish} tonkinho={evaluation} bottomColor={bottomColor} error={stockfishError} />}
        <div className="tk-board" data-fen={position}>
          <TonkaiChessground fen={position ?? new Chess().fen()}
            orientation={bottomColor === 'w' ? 'white' : 'black'}
            movableColor={canMove ? displayGame!.human === 'w' ? 'white' : 'black' : undefined}
            dests={destinations} lastMove={lastMove ? [lastMove.from as Key, lastMove.to as Key] : undefined}
            check={!!checkedKing} onMove={tryMove} />
          {!replay && showEvaluations && evaluation && <div className="tk-piece-values" aria-label="Valores posicionais das peças">
            {evaluation.pieces.map(piece => {
              const file = piece.square.charCodeAt(0) - 97, rank = Number(piece.square[1]) - 1;
              return <div key={piece.square} className="tk-piece-value-cell" style={{
                gridColumn: bottomColor === 'w' ? file + 1 : 8 - file,
                gridRow: bottomColor === 'w' ? 8 - rank : rank + 1,
              }}><span className={`tk-piece-value${piece.value !== null && piece.value < -.05 ? ' tk-piece-value-negative' : ''}`}
                data-value-square={piece.square} data-value={piece.value ?? 'king'}
                aria-label={`${piece.square}: ${piece.value === null ? 'Rei, sem valor de troca finito' : pieceValueLabel(piece.value)}`}>
                {pieceValueLabel(piece.value)}
              </span></div>;
            })}
          </div>}
          {lastReview && <div className="tk-move-marker" style={lastSquare}>
            <TonkaiMoveIcon grade={lastReview.grade} description={reviewDescription(lastReview)} />
          </div>}
          {promotion && !replay && <div className="tk-board-overlay">
            <div className="tk-board-dialog" role="dialog" aria-modal="true" aria-label="Escolher promoção">
              <span className="tk-dialog-eyebrow">Peão na última fila</span>
              <h2>Escolher promoção</h2>
              <p>Escolhe a peça para concluir a jogada.</p>
              <div className="tk-promotion-options">
                {([['q', 'Dama'], ['r', 'Torre'], ['b', 'Bispo'], ['n', 'Pónei']] as const).map(([p, label]) =>
                  <button key={p} onClick={() => commitMove(promotion.from + promotion.to + p)}><TonkaiPiece code={game!.human + p.toUpperCase()} />{label}</button>)}
              </div>
              <button className="tk-dialog-secondary" onClick={() => setPromotion(null)}>Cancelar</button>
            </div>
          </div>}
          {!replay && !browsing && game?.over && !resultDismissed && <div className="tk-board-overlay">
            <div className="tk-board-dialog tk-result-dialog" role="dialog" aria-modal="true" aria-label="Resultado da partida">
              <span className="tk-dialog-eyebrow">Partida terminada</span>
              <h2>{game.result === 'draw' ? 'Empate' : game.result === 'loss' ? 'Ganhaste!' : `${BOT_NAME} venceu`}</h2>
              <p>{resultDetail}</p>
              <div className="tk-result-actions">
                <button onClick={start}>Jogar novamente</button>
                <button className="tk-dialog-secondary" onClick={() => setResultDismissed(true)}>Ver tabuleiro</button>
              </div>
            </div>
          </div>}
        </div>
        </div>
        <PlayerIdentity name={replay ? replayWin?.tonkaiName ?? BOT_NAME : playerName} bot={replay}
          photo={replay ? undefined : auth?.user?.photoURL} color={bottomColor} active={playing && turn === bottomColor} />
        {(game || replay) && <>
          <div className="tk-replay-controls" role="group" aria-label="Navegar na partida">
            <button aria-label="Posição inicial" disabled={!navigationPly} onClick={() => navigateTo(0)}>⏮</button>
            <button aria-label="Lance anterior" disabled={!navigationPly} onClick={() => navigateTo(navigationPly - 1)}>←</button>
            <span className="tk-position-count" aria-live="polite">{navigationPly} / {navigationLength}</span>
            <button aria-label="Próximo lance" disabled={navigationPly === navigationLength} onClick={() => navigateTo(navigationPly + 1)}>→</button>
            <button aria-label="Posição final" disabled={navigationPly === navigationLength} onClick={() => navigateTo(navigationLength)}>⏭</button>
          </div>
          <div className="tk-training-actions">
            {!replay && <button onClick={undoMove} disabled={!canUndo}>Desfazer jogada</button>}
            {(replay || browsing) && <button disabled={!canTrain || !position} onClick={() => trainHere()}>{replay ? 'Treinar nesta posição' : 'Continuar daqui'}</button>}
            {browsing && <button className="tk-secondary" onClick={() => { setBrowsePly(null); setPromotion(null); }}>Voltar à partida</button>}
          </div>
        </>}
        {!replay && <p className="tk-status tk-live-status" role="status" aria-label="Estado do jogo"><span className={playing && game?.humanTurn ? 'tk-dot tk-dot-active' : 'tk-dot'} />
          {browsing ? `A explorar a posição ${navigationPly} · IA em pausa` : `${practice ? 'Treino · ' : ''}${status}`}</p>}
        {lastMove && <details className="tk-last-review">
          <summary>{lastReview ? <><TonkaiMoveIcon grade={lastReview.grade} /><strong>{lastMove.san}</strong> · {MOVE_GRADES[lastReview.grade].label}</>
            : <><strong>{lastMove.san}</strong> · {stockfishError ? 'Análise indisponível' : 'A analisar o lance…'}</>}</summary>
          {lastReview && <p>{reviewDescription(lastReview)}</p>}
          <p>Classificação estimada pelo Stockfish, comparando a vantagem antes e depois do lance. “Possível brilhante” exige um sacrifício forte e análise mais profunda. São critérios nossos, não os do Chess.com.</p>
        </details>}
      </section>
      <aside className="tk-sidebar">
        <section className="tk-history tk-personal-history" aria-label="Partidas guardadas">
          <div className="tk-history-heading"><h2>As tuas partidas</h2><span>{savedGames.length}</span></div>
          <div className="tk-history-content">
            <p className="tk-record-source">Guardadas automaticamente neste navegador após cada lance.</p>
            {storageError && <p role="alert" className="tk-storage-error">{storageError}</p>}
            {downloadUrl && <a className="tk-download" href={downloadUrl}
              download={`tonkai-${downloadRecord?.date.replace(/\./g, '-') ?? 'partida'}-${downloadId}.pgn`}>Descarregar PGN</a>}
            {!replay && <button className="tk-history-open" onClick={() => changeView('history')}>Abrir histórico</button>}
            {replay && <>
              {savedGames.length ? <ul className="tk-saved-games">{savedGames.map(record => <li key={record.id}>
                <button aria-pressed={replayWin === record} onClick={() => { setReplayGameId(record.id); setReplayPly(0); }}>
                  <strong>{record.training && 'Treino · '}{record.result === '*' ? 'Em curso' : record.result === '1/2-1/2' ? 'Empate'
                    : record.result === (record.tonkaiColor === 'w' ? '1-0' : '0-1') ? `${record.tonkaiName} venceu` : 'Ganhaste'}</strong>
                  <span>{new Date(record.startedAt).toLocaleString('pt-PT')} · {record.plies} lances</span>
                </button>
              </li>)}</ul> : <p className="tk-empty">As partidas que jogares aparecem aqui.</p>}
              {featured && <button className="tk-featured-game" aria-pressed={replayGameId === 'featured'}
                onClick={() => { setReplayGameId('featured'); setReplayPly(0); }}>Jogo em destaque</button>}
            </>}
          </div>
        </section>
        {navigationRecord && <section className="tk-history" aria-label="Lances da partida">
          <div className="tk-history-heading"><h2>Lances</h2><span>{navigationPly} / {navigationLength}</span></div>
          <ol className="tk-moves">{navigationRecord.moves.map((move, index) => {
            const before = navigationRecord.fens[index].split(' ');
            return <li key={index}>
            <button className={navigationPly === index + 1 ? 'tk-move-active' : ''}
              aria-label={`Ir para o lance ${index + 1}: ${move}`} aria-pressed={navigationPly === index + 1}
              onClick={() => navigateTo(index + 1)}><span>{before[5]}{before[1] === 'b' ? '…' : '.'}</span>{move}</button>
          </li>; })}</ol>
        </section>}
        <TonkaiRoastChat key={gameId.current || 'before-game'}
          context={roastContext} canInterject={!replay && !browsing && !!game && (game.over || game.humanTurn)} />
      </aside>
    </div>
    <TonkaiDuel network={network} />
  </div>;
}
