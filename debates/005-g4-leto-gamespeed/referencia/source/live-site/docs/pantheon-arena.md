# Arena do panteão

The `/tonkai` chess page has ten visual identities: Wukong, Loki, Nezha,
Rá, Anúbis, Amaterasu, Susanoo, Tsukuyomi, Zeus and Hades.

Each identity defines a seal, sanctuary name, atmosphere, accent colours,
background treatment and readable board colours. The player's optional affinity
adds a second seal and atmospheric colour. Selection is locked during a match;
effects can always be paused. System reduced-motion preferences are respected.

These are **visual identities**. G16 v2, its weights, configuration, search,
evaluations, strength and stored engine name remain unchanged. No god-specific
decision policy is claimed. The former roast chat is no longer mounted on this
page, following the user's request to leave dialogue out.

Browser preferences use `tonkai.pantheon.v1`; denied/corrupt storage falls back
to the Nezha domain. Optional `PantheonOpponent` and `PantheonPatron` PGN headers
preserve the arena through saved replays, downloads and training branches.
Earlier saved games remain valid.

## Campaign

The ten levels are Nezha → Loki → Wukong → Susanoo → Tsukuyomi → Anúbis →
Amaterasu → Rá → Hades → Zeus. Only Nezha starts unlocked. A human checkmate win
in a new campaign match from the normal initial position unlocks the next level.
Losses, draws, resignation, training branches, custom starting positions,
replays and repeated wins at earlier levels cannot skip or advance the frontier.
Unlocked levels remain replayable. The victory dialog can start the next level.

Browser-local progress is stored separately in `tonkai.pantheon.campaign.v1`;
reloads retain it, other tabs merge it, and denied storage keeps the current
session usable with a clear persistence message. Old arena preferences cannot
select a locked opponent. All affinities remain available as player cosmetics.
Campaign order represents progression, not a measured Elo or a strength change:
the G16 v2 checkpoint and decision settings are preserved.

## Artwork

`src/assets/pantheon/sanctuary.png` was generated with the built-in `imagegen`
tool. Background seals, particles and constellations are native SVG/CSS.

The ten profile symbols are individually generated images in
`src/assets/pantheon/avatars/*.webp`, using the user-approved red Nezha
constellation, fire-wheel and spear as the style reference. Connected star nodes,
nebulae and small supernovae form each original emblem, with one dominant hue.
The approved Nezha original is unchanged. The original generated PNGs are retained
unchanged in the task's artifact directory. The web versions are 512 by 512
pixels, about 690 KB combined. `docs/pantheon-portrait-prompts.json` records
the final prompt for every deity and the built-in image generation method.
Profile images replace the line symbols in the roster, realm heading,
player identities, affinity and domain card. SVG symbols remain as a fallback
if an image cannot load, and as low-contrast background decoration.

The final direction uses original emblems. Film, game and anime references guide
colour and energy effects only: Hades has a blue cosmic gate,
Zeus keeps an original golden lightning constellation, and the
Japanese emblems use sun/gate, sea waves and crescent/star shapes.
Loki is a serpent constellation; Anúbis uses monochrome black, graphite and
silver, and Susanoo has no lightning. Zeus uses only a broad double-zigzag bolt,
matching the user's shape reference, with cosmic gold energy and no laurels.
Removed identities safely fall back
when older browser preferences or PGN themes are restored.

Final generation prompt:

> Use case: stylized-concept. Asset type: atmospheric wide background artwork
> behind a mystical chess website. Create one high-quality cinematic matte
> painting, widescreen 1536x1024 landscape. A mysterious celestial sanctuary above
> a sea of dark clouds. Ancient weathered circular stone platform, fine gold
> inlays, distant jagged floating rock islands and a huge dim eclipse with a fine
> bronze corona. Architecture stays at far left and right edges, intriguing dark
> silhouette of carved sacred pillars. Deep midnight charcoal, desaturated blue
> grey, muted warm bronze glow. Sophisticated painterly dark fantasy art, subtle
> mist, delicate drifting dust, beautiful chiaroscuro, no game screenshots or UI.
> Composition: the middle 60% is very dark quiet negative space to hold a readable
> chess board; details only in peripheral environment. Absolutely no chess pieces,
> no characters, no lettering, no logos, no text, no watermark. Artwork must remain
> dark and restrained, not a bright saturated fantasy poster.

## Verification

- TypeScript and Vite production build.
- `tests/tonkai-pantheon.test.ts`: storage recovery and PGN presentation metadata.
- `tests/tonkai-campaign.test.ts`: legal wins for both colours, excluded results,
  complete progression, corruption recovery and storage failures.
- `tests/browser/tonkai-pantheon.spec.ts`: all domains, affinity/effect persistence,
  normal legal play, analysis, replay and responsive layouts from 320 to 1440 px.
- Existing game-history, evaluation and move-review tests.

Publish using `scripts/publish-tonkai-interface.mjs`, with `TONKAI_UI_OUTPUT`
pointing to a task-specific evidence directory and optional `TONKAI_UI_BUILD_DIR`
pointing to an isolated Vite output. Baseline and prepare before `--publish`;
run `--verify` afterward. This retains every unrelated public file, model and
the existing main website entry.
