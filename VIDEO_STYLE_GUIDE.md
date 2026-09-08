# PRN VIDEO STYLE GUIDE — CANONICAL

**owner:** Greg Pickersgill
**project:** Paranormal Response Network (PRN)
**status:** consolidated 2026-09-08 — the single canonical video production style and standards reference for all PRN video content
**applies to:** ChatGPT, Claude, Claude Code, Cowork, Codex, Higgsfield, Postiz, CapCut, and any future PRN video-production or scheduling agent
**canonical location:** GitHub — `gilly1024/prn-social-media-assets`
**read alongside:** [`BRAND_VOICE.md`](BRAND_VOICE.md), [`SOCIAL_CONTENT_ENGINE.md`](SOCIAL_CONTENT_ENGINE.md), [`SOCIAL_PROMPT_LIBRARY.md`](SOCIAL_PROMPT_LIBRARY.md), [`PUBLISHING_WORKFLOW.md`](PUBLISHING_WORKFLOW.md), `assets/images/00_brand_marks/`, `assets/images/02_colour_swatches/`, `assets/images/06_wireframes/`

> **Provenance.** This document merges seven previously separate sources: the PRN Video Style
> Guide v2.1 (creative lanes, output-control gates — dated 2026-07-27), the PRN Short Social
> Advert System Handover (the current 5–6 second micro-ad system — dated 2026-09-08, the newest
> authority), the video output-control READ FIRST rules (updated 2026-09-08), the 5–6 Second
> Advert Build Template, the Video Generator Prompt Approval Template, the PRN Narrator Voices
> reference, and the durable lessons of the 27 July 2026 Higgsfield failure postmortem and the
> Woodchester Mansion Google Flow drone handover. **Where the 8 September 2026 short-advert
> system conflicts with the v2.1 guide on format or duration, the 8 September 2026 system
> governs.** The v2.1 material remains valid for everything the newer system does not cover —
> neither document is discarded; this file is their merged, current form. This document
> supersedes all seven sources as the single video-style authority.

> **The old Drive-sync / prn-brain mandate is withdrawn.** The canonical location for PRN video
> style is this GitHub repository. Do not sync this material to Google Drive or any other
> location, and do not treat a copy found under `gilly1024/prn-brain` as authoritative unless it
> is explicitly referenced from here.

---

## 0. Purpose

This guide lets Greg give a short PRN video brief without having to restate the brand or
production rules. It does **not** authorise an agent to add creative elements Greg did not
request — see the element-authorisation gate at §9. It governs every PRN video regardless of
length, platform or generator: the 5–6 second micro-ad is the current default format (§2), but
the same character, gates and QA apply to any longer-form or bespoke video an active brief calls
for.

---

## 1. Authority order

This mirrors the order fixed in `BRAND_VOICE.md`. When instructions conflict, follow:

1. Greg's latest direct instruction — including the active task-specific brief for the video in
   hand, since Greg authors or approves it.
2. [`BRAND_VOICE.md`](BRAND_VOICE.md) — PRN tone, lexicon, banned language, visual identity.
3. [`SOCIAL_CONTENT_ENGINE.md`](SOCIAL_CONTENT_ENGINE.md) — task routing, asset-first workflow, output bundles, build standards.
4. **This document** — `VIDEO_STYLE_GUIDE.md`.
5. [`SOCIAL_PROMPT_LIBRARY.md`](SOCIAL_PROMPT_LIBRARY.md) — reusable prompts, templates and build instructions.
6. [`PUBLISHING_WORKFLOW.md`](PUBLISHING_WORKFLOW.md) — approval, asset upload, Postiz ingestion, duplicate checking, publication.
7. Current verified PRN website pages, repository records and primary source material.
8. Historical drafts and archive material — inspect for assets and lessons only, never as
   approved precedent.

Historical material found under `gilly1024/prn-brain` is **not authoritative** unless explicitly
referenced from this repository. A filename containing `final`, `master`, `clean` or `repaired`
is not approval — only Greg's explicit approval makes an asset approved.

---

## 2. Format and duration standard

**Current standard (8 September 2026 short-advert system) — governs by default:**

| Parameter | Value |
|---|---|
| Aspect ratio | 9:16 vertical |
| Resolution | 1080×1920 native |
| Duration | 5.0–6.0 seconds |
| Frame rate | 30 fps unless the active brief requires otherwise |
| Structure | subject-first hook → cinematic hold/motion → transition → PRN end card |

This is the default PRN social video format as of 8 September 2026. Use it unless the active
brief specifies an exact alternative runtime.

**Legacy and longer-form runtimes remain valid** when the active brief calls for them — for
example a documentary-style narrative piece, or a real-location aerial flyby (the Woodchester
Mansion case used an approved 10-second 9:16 flyby, §19). The v2.1 guide's underlying principle
still applies at any length: define the **exact runtime** in the story gate (§4) for every video.
What v2.1 left open — a default duration for the common case — is now fixed by the table above.

No video, short or long, carries a default opening logo stinger, closing banner, mandatory
narration, or mandatory subtitles. Those were 2026-07-18 v1.1 defaults, withdrawn on 2026-07-27,
and never reinstated (§9).

---

## 3. Core PRN video character

PRN video should read as a serious research/archive platform with the atmosphere of a
well-made BBC/PBS/Smithsonian-style documentary about an unusual subject — not a
screaming-investigator or jump-scare brand. Full brand voice, lexicon and copy rules live in
`BRAND_VOICE.md`; the subset below is what governs a video's hook wording, on-screen text and
overall visual tone.

### 3.1 Non-negotiable character

- 9:16 vertical (see §2 for the current standard master size).
- Dark, atmospheric, cinematic, serious, evidence-led and mystery-led.
- A clear hook or visual event in the first 1–2 seconds (first 0.20 s for the micro-ad, §5.1).
- One clear message or question — never mood alone.
- A beginning, escalation and payoff (or, for the micro-ad: hook → hold → PRN destination).
- Authentic documentary material first (Lane A, §6).
- No fake proof, fabricated evidence, horror cliché or sensational claim.
- No random stock person pretending to investigate.
- No generated visual presented as real evidence.
- Atmosphere supports the story; it never replaces the story.

### 3.2 Documentary / forensic tone

The five PRN voice pillars (full detail in `BRAND_VOICE.md`) apply directly to hook wording,
on-screen text and captions:

1. Evidence-led, not preachy.
2. Atmospheric, not theatrical.
3. Curious, not credulous.
4. Humble, not corporate.
5. Specific, not vague.

Prefer precise, evidentiary language in hooks, on-screen text and captions: `documented`,
`reported`, `alleged`, `witness account`, `the record shows`, `folklore holds`, `the source
indicates`, `remains unresolved`, `possible explanation`, `methodology`, `provenance`, `archive`,
`dossier`, `evidence-led`.

Reject copy built around: `proof`, `confirmed ghost`, `demon caught`, `scientific proof`,
`you won't believe`, `terrifying` used as empty clickbait, `mind-blowing`, `shocking` unless
literally and appropriately true, fake urgency, generic ghost-hunter language, claims that
equipment "detects ghosts", or claims that a location simply "is haunted". Intensity is allowed
when the underlying subject supports it; fabricated fear is not.

### 3.3 Atmosphere and visual language

- Deep black / near-black / dark navy base.
- Controlled cold blue light and controlled coral/orange light (see the palette reference at
  §13.1 for the canonical PRN hex values).
- Subtle depth and atmospheric separation.
- Restrained fog/dust/particle movement, only where it genuinely helps.
- Restrained PRN/HUD details only where they add value — never as decoration.
- Generous negative space; no clutter.
- For Lane A material specifically: controlled desaturation, vignette and grain only when they
  help — keep the image dark but readable.

---

## 4. Story and goal gate — define before spending credits

Before any generation, scripting or assembly, define:

- objective;
- target viewer / audience;
- one-sentence message;
- reason to keep watching;
- opening event / hook;
- escalation (or, for a micro-ad, the cinematic hold);
- payoff / ending;
- exact runtime and platform;
- exact authorised media elements (the §9 register);
- source assets and rights state;
- cost ceiling;
- failure risks / failure tests.

A video must not enter generation on mood words alone (`chilling`, `cinematic`, `fearful`). The
27 July 2026 Higgsfield sequence failed in part because a mood brief was mistaken for a message
brief — see §19.

---

## 5. Cinematic motion, visual pacing and image animation

### 5.1 The 5–6 second timeline (current standard)

| Beat | Time | Direction |
|---|---|---|
| Immediate hook | 0.00–0.20 s | Subject and headline already visible. No slow fade that hides the hook. The viewer must understand the topic instantly — do not waste the opening on a slow logo reveal. |
| Cinematic hold and motion | 0.20–3.80/4.00 s | Restrained motion only: slow push-in, slight horizontal/vertical drift, shallow parallax, subtle rack-focus/focus shift, small light movement, restrained fog/dust/particle movement. Must feel like a documentary title sequence, not a default slideshow zoom. Never move so far that text leaves safe zones or becomes unreadable. |
| Transition | approx. 3.80–4.40 s | One restrained 0.4–0.6 s device: crossfade, dip through near-black, subtle blue/coral light sweep, gentle sound swell aligned with the change. No glitch or strobe transitions (§12, §17). |
| PRN end card | approx. 4.20/4.40–5.50/6.00 s | Hold the destination long enough to read — minimum recommended readable hold approximately 1.2 seconds. See §13 for exact construction. |

For longer-form video (§2), the same principle applies at whatever scale the brief sets: a
visible hook within the first 1–2 seconds, restrained cinematic motion throughout, one
deliberate transition device into the ending, and a held, readable close.

### 5.2 Image animation and tool order

A still-to-motion edit is acceptable, and often preferable, when it looks cinematic and
professionally finished. Do not spend generation credits merely to create random movement.
Preferred order, cheapest/safest first:

1. Reuse strong real/approved assets.
2. Create one excellent teaser image.
3. Animate it with low- or zero-credit editing when that meets the quality bar.
4. Use generative video only when genuine scene motion adds enough value to justify the cost.
5. Inspect one master result before creating a batch of variants.

### 5.3 Generator prompting technique (hard-won)

A video generator does not reliably obey every clause of a long prompt — it may copy visible
annotations from a reference image into the output, retain audio from a previous generation,
hallucinate exact text, mutate architecture, or reinterpret a logo even when explicitly told not
to (Woodchester Mansion drone production, 27 July 2026 — §19). Apply:

- Keep instructions short enough for the model to prioritise them; prompt brevity and task
  separation are more reliable than stacking additional prohibitions onto a failing prompt.
- Give each reference image one job only — e.g. a clean environment image is the visible
  reference, an annotated/route image is for planning only and must never appear on screen, a
  logo image is an ending reference only.
- One generation = one bounded job.
- Prefer a fresh session over repeatedly patching an already-corrupted edit/generation chain.
- Once Greg approves a movement sequence (a flyby, an opener), lock it. Edit only the specific
  requested section afterward — do not regenerate the whole sequence.
- For exact on-screen text, URLs and the logo, the most reliable professional workflow is a
  deterministic overlay applied in a normal editor, not trusting the generator to render them
  correctly — generators can misspell URLs, invent letters, alter the logo, insert words inside
  it, or change its colours/proportions. Greg's direct instruction to generate them in-model
  still takes priority when given, but the agent must flag this risk before spending another
  render on it.

---

## 6. Real vs generated footage — Lane A / Lane B

### Lane A — real location / documentary material

Use real photographs, owned footage, licensed footage, archival imagery, documents, maps,
instruments or genuine interface captures.

- Verify the exact named location before use.
- Keep the image dark but readable.
- Use controlled desaturation, vignette and grain only when they help.
- Do not fabricate apparitions or evidence.
- Preserve image rights and provenance.

### Lane B — generated illustrative atmosphere

Use only when the active brief permits generated media.

- Keep it clearly illustrative.
- Use believable architecture, materials, people and motion.
- Do not create fake CCTV, mobile evidence, archive footage, testimony, documents or sensor
  results.
- Do not generate text or the PRN logo inside the scene.
- Lock actor, room, props and lighting continuity before a multi-shot render (§16).
- Inspect every output for visual mutation.

AI-assisted imagery is permitted for the current short-advert teaser lane when it meets this bar,
but it must be clearly illustrative and must never be presented as evidence or passed off as a
genuine photograph of a named real location. For a real named location, positively verify the
building before using any image of it, generated or real.

### Mixed lane

Generated motion may open or bridge a piece built mainly from genuine photographs, documents or
footage. The transition must not imply the generated scene is real evidence or the real named
location.

---

## 7. Hooks — sell the specific subject first

Do not open with a generic section advert such as `EXPLORE THE RESEARCH HUB`,
`EXPLORE THE CASE ARCHIVE` or `EXPLORE THE EQUIPMENT HUB`. That language can work as *finishing*
language on the end card (§13), but it is too generic to be the hook when a specific subject is
available.

Start with the actual piece of research, equipment, case, entity or dossier. The audience should
understand the subject and feel tension/curiosity within the first second. All hook wording must
be verified against authoritative PRN/source material before use and must stay inside the PRN
voice (§3.2).

Illustrative patterns from approved test work (not fill-in-the-blank templates — write a fresh,
verified hook for each subject):

| Category | Hook | Curiosity / support line |
|---|---|---|
| EQUIPMENT | A SPIRIT BOX IS RECEIVING RADIO | Useful tool — but what are you really hearing? |
| CASE FILE (Ancient Ram Inn) | ONE OF BRITAIN'S MOST NOTORIOUS HAUNTING CLAIMS | What does the record actually contain? |
| RESEARCH | THE QUESTION CAN CHANGE THE ANSWER | How witness interviews can shape the evidence before analysis even begins. |

---

## 8. Typography and text overlays

There is no default opening title, subtitle layer or CTA on any PRN video (§9 register).

When text is authorised for the active video:

- clean, high-contrast, modern sans-serif typography only;
- must be readable on a phone;
- keep inside platform safe zones (§13.2 for end-card margins);
- use as few words as possible;
- avoid horror fonts, red arrows and text walls;
- reproduce spelling exactly outside the image/video generator — do not trust a generator to
  render exact text correctly (§5.3);
- an approved opening title does not itself authorise subtitles or later explanatory captions —
  each element is authorised independently (§9).

### Text hierarchy for the short-advert teaser frame

Use no more than is needed:

1. small category line (e.g. `CASE FILE`, `EQUIPMENT`, `RESEARCH`);
2. large subject/hook line;
3. optional one-line curiosity/support text;
4. optional tiny `Full [file/article/entry] on PRN` line.

---

## 9. Element-authorisation gate — hard rule

Narration, natural speech and subtitles are all acceptable PRN creative options. **None of them
is banned, and none of them is default.** This rule stops an agent choosing any of these
elements for a particular video without Greg's approval — it is not a general preference against
them.

Before scripting or generating, mark each of the following `AUTHORISED`, `NOT AUTHORISED` or
`NOT SPECIFIED`:

- narration;
- natural human speech;
- subtitles;
- opening title or hook text;
- other on-screen text;
- CTA wording;
- music;
- sound effects;
- human subject;
- generated imagery;
- PRN logo;
- PRN banner.

**Treat `NOT SPECIFIED` as `DO NOT ADD`.** Do not convert a preference from an old guide,
template or platform convention into approval for the current video.

### 9.1 Narration

Use narration only when Greg explicitly requests it or approves a script containing it. There is
no default narrator.

Approved voices (Higgsfield `generate_audio`, model `seed_audio`, `voice_type: preset`):

| Voice | voice_id | Character |
|---|---|---|
| Gideon | `1ad38ba4-9cc4-4f2f-9fde-b0fefdf67ae5` | Deep, calm, British-leaning, documentary. |
| Imogen | `3811e986-0891-47cf-a1f5-78a1d62a547a` | Calm, measured, documentary register. Approved by Greg on 18 July 2026. |

If narration is authorised, use one of these voices unless Greg chooses a different one. Delivery
rules:

- British English;
- calm, low, measured, documentary-led delivery;
- never fake fear, breathy performance or over-dramatic trailer delivery;
- never make a personal claim Greg did not make;
- verify the script before generation;
- do not add burned-in subtitles unless they are separately authorised.

### 9.2 Natural speech and subtitles

- Use natural human speech only when the brief explicitly authorises it.
- Use subtitles only when the brief explicitly authorises them.
- Do not add subtitles merely because viewers may watch on mute.
- Do not add explanatory on-screen text or subtitles to rescue a story that is unclear — fix the
  story instead.
- When speech is not authorised, strip all generated audio before presentation — do not rely on
  prompting alone to suppress it. (The Higgsfield postmortem recorded a generated clip in which a
  subject spoke despite speech never being approved — see §19.)

---

## 10. Human performance

Use a person only when the active brief asks for one or the story genuinely requires one.

- Keep the same identity, clothing, hair and age across every shot.
- Direct believable behaviour rather than theatrical horror acting.
- Match eyeline and reaction to a visible cause — give the human a visible reason for any fear or
  reaction. An unmotivated frightened performance is a story failure, not just a visual one.
- Do not make the person speak, whisper, mouth words or lip-sync unless speech is authorised
  (§9.2).
- Strip generated audio before presentation when speech is not authorised.
- Do not use a random stock person pretending to investigate.

---

## 11. Audio and sound design

Audio may be effects-only, ambient/music-only, narration plus ambient bed, purposeful natural
speech, or silent, depending on the active brief (§9). When used:

- keep it restrained and cross-platform safe;
- remove all unauthorised model-generated sound;
- check for clipping and unintelligible accidental speech;
- the sound should make the visual feel more expensive — it should not become the main event.

### Subject-specific sound design (short-advert lane)

| Lane | Ingredients | Avoid |
|---|---|---|
| Equipment | Research the real device's actual sound first; radio/static texture, restrained frequency-sweep feel, equipment/button clicks, low support tone. | A synthetic, intelligible "ghost voice" that could be mistaken for evidence. |
| Case File / historic location | Light wind, distant room tone, low building rumble, subtle structure/wood texture, small transition swell. | Screams, comedy ghost effects, jump-scare hits. |
| Research | Quiet room tone, low analytic pulse, restrained waveform/electronic ticks, very light paper/desk texture, subtle tonal rise into the end card. | Horror-coded sound of any kind — research should sound intelligent, not spooky. |

Cross-platform, in every lane: avoid jump-scare stings, cheesy horror hits and unintelligible
whispers.

---

## 12. Transitions

Use one restrained device only, 0.4–0.6 seconds:

- crossfade;
- dip through near-black;
- subtle blue/coral light sweep;
- gentle sound swell aligned with the change.

**No glitch or strobe transitions.** Faster cuts are not a continuity repair (§16) — a bitty edit
built from disconnected fragments is a story failure, not a stylistic choice.

---

## 13. PRN branding and the end card

Use only the exact ending Greg requests for the active video. Composite the genuine master logo
outside the generator — never regenerate, approximate, recolour or crop it. Do not substitute the
PRN banner (`assets/images/00_brand_marks/PRN_banner_MASTER.png`) when Greg asked for the ring
logo (`assets/images/00_brand_marks/PRN_logo_MASTER.png`), or vice versa — these are two distinct
approved marks. Do not add a slogan, URL or CTA beyond what was requested.

### 13.1 Locked end-card construction (current standard)

Build the end card natively at 1080×1920. **Never mechanically crop a square/near-square end
card into 9:16** — this is the exact fault that caused the first Ancient Ram Inn short to be
rejected (§19).

Required visual language:

- deep black / near-black `#010308` field;
- genuine PRN logo, centred, clean and unmodified;
- controlled blue energy/light on the left;
- controlled coral/orange energy/light on the right;
- large subject or section title;
- full website in a distinct high-contrast line: `PARANORMALRESPONSENETWORK.ORG` — never truncate
  `.ORG`;
- exact route/destination beneath, where it remains readable (e.g. `/cases/ancient-ram-inn`); if
  a long route would become microtext, keep the full domain on the end card and put the exact
  destination in the caption/bio routing instead — do not shrink the path into unreadable text;
- generous negative space; no clutter.

PRN palette reference (`assets/images/02_colour_swatches/`):

| Role | Colour | Hex |
|---|---|---|
| Base field | Near-black | `#010308` |
| Blue accent | Deep blue | `#2A78BC` |
| Blue accent (dark variant) | Deep blue dark | `#1B4E7A` |
| Coral accent | Coral | `#B03910` |
| Coral accent (light variant) | Coral light | `#BB5633` |
| Neutral | Charcoal | `#545C64` |
| Neutral (deep) | Charcoal deep | `#32373C` |
| Support | Support grey | `#7E848A` |

Layout reference: `assets/images/06_wireframes/2026-09-08_PRN_SHORT_ADVERT_ENDCARD_WIREFRAME.svg`
and `...TEASER_WIREFRAME.svg` — reference only, never publishable; replace all placeholder logo
text with the genuine master asset before use.

### 13.2 Safe margins (production target)

- left/right: 90–120 px minimum;
- top: approximately 120 px;
- bottom: 180–220 px.

Recheck the current platform's actual safe zone before final export.

### 13.3 End-card rejection conditions

Reject and rebuild if any of the following occur:

- blue, white or coloured rectangle visibly sitting around/over the logo;
- logo redraw, mutation, recolour or monochrome conversion;
- subject title cropped;
- `.ORG` missing;
- route cropped;
- bottom CTA hidden by platform controls;
- square artwork mechanically cropped into 9:16;
- end card feels disconnected from the preceding shot.

Keep the closing frame held long enough to register (minimum ≈1.2 s for the short-advert format,
§5.1; longer where a brief requires more read time).

---

## 14. Platform considerations

### 14.1 Routing and destination

Every video must know its exact PRN destination before the final creative is built. Do not send
traffic to the homepage when a specific live page exists — link to the exact case URL, Equipment
Hub entry, research article, Kirstie's Library dossier, entity page, Global Unknown entry or
Missing File entry. Main domain: `https://www.paranormalresponsenetwork.org`.

A generated video file cannot itself carry a clickable hyperlink — the URL rendered inside the
frame is visible text only. Add the actual clickable link through the platform caption, profile
website field, a Story link sticker, or an accompanying post/`link in bio` wording.

| Platform | Link handling |
|---|---|
| Facebook | Full destination URL in the Reel/post description. |
| Instagram | Full destination URL in the profile link or a Story link sticker when sharing. |
| TikTok | `link in bio` wording, only when the profile link actually points to that destination. |
| Other platforms with non-clickable captions | Clear `link in bio` style wording. |

### 14.2 LinkedIn — strictly research/equipment

LinkedIn is currently a professional research-and-equipment channel only.

**Allowed:** paranormal research, scientific/research methodology, equipment used in research or
investigations, environmental monitoring, sensors, field-data systems, measurement/logging/
correlation, evidence handling, interview methodology, provenance, relevant PRN R&D/technical
development.

**Excluded:** folklore, entities, Kirstie's Library folklore/entity dossiers, Missing Files,
ordinary paranormal-story Case Files, general paranormal-story content. A Case File may appear on
LinkedIn only when the post is genuinely about research, methodology, equipment, evidence
handling or provenance rather than the paranormal story. **Folklore and entity content must never
be posted to LinkedIn, even if it seems reframeable as research.**

---

## 15. Video-generation workflow

### 15.1 Prompt-approval gate — hard stop

Before **any** agent sends a prompt to Higgsfield, Postiz's AI video tools, or any other video
generator, the agent must show Greg the complete prompt exactly as it will be submitted — unless
Greg's latest direct instruction has explicitly authorised that generation workflow for the
active task. This applies to every generator, every model, every credit cost, and every free
render.

A storyboard, outline, paraphrase, or a statement that the prompt was "internally audited" does
**not** satisfy this gate. Greg must be able to read the actual tool-ready prompt before
submission. If the prompt changes afterward, show the complete revised prompt and obtain approval
again — do not silently expand scope, and never generate first and reveal an unapproved paid
prompt afterward.

The approval copy must include:

1. **Production purpose** — title, platform, objective, target viewer, one-sentence message,
   hook, beginning, escalation, payoff/ending, exact runtime, aspect ratio/resolution, draft
   status after generation.
2. **Element-authorisation register** — the full §9 list, each marked `AUTHORISED`,
   `NOT AUTHORISED` or `NOT SPECIFIED — DO NOT ADD`.
3. **Source and reference assets** — every image, video, logo, audio file, character or style
   reference to be supplied, with source/path, purpose and rights/status.
4. **Generator and cost** — generator, model, mode/quality tier, duration, aspect ratio,
   resolution, frame rate, seed/reference-strength or other settings, expected cost per render,
   maximum authorised renders, maximum total cost, current verified credit balance.
5. **Complete positive prompt** — pasted verbatim, not summarised, no omitted technical
   instructions.
6. **Complete negative prompt** — pasted verbatim, including continuity exclusions, unapproved
   audio/text exclusions and unwanted visual behaviours.
7. **Shot and continuity audit** — shot-by-shot action/timing, camera position/movement/
   transitions, actor identity/age/face/hair/clothing/performance, room geography, visible cause
   of any fear/reaction, narration/dialogue/breathing/whispers/lip-movement/generated-audio
   instructions, subtitles/titles/text/CTA, genuine logo handling outside the generator, and
   anything that must not change between shots.
8. **Agent preflight declaration** — confirming the complete prompts were shown unparaphrased,
   they match the storyboard/register/cost, narration and subtitles reflect this video's actual
   decision (never assumed), and no revision or retry will be submitted without separate
   approval.

No generator call is permitted until Greg explicitly approves the complete prompt. A storyboard,
outline, summary, partial excerpt or internal audit does not count as approval. A ready-to-copy
blank version of this register for reuse belongs in `SOCIAL_PROMPT_LIBRARY.md`.

### 15.2 Paid-generation gate

Before a paid render:

1. Reuse approved real or existing material where it fits.
2. Show Greg the shot-by-shot storyboard and exact authorised media elements.
3. Show Greg the complete tool-ready generator prompt under §15.1 unless already authorised.
4. State the exact expected credit cost and maximum number of renders.
5. Obtain explicit approval for spend when required by the current brief.
6. Generate the minimum bounded shot needed.
7. Inspect the raw result before any additional spend.
8. Report spend from the live verified balance or the tool's own final charge — never from an
   earlier mid-conversation estimate. (Estimates during the 27 July 2026 Higgsfield sequence did
   not reconcile with the actual account balance — see §19.)

### 15.3 Tools and credit discipline

Greg has authorised, for **production** (not publishing — §15.5): Postiz's AI video tools/editor,
Higgsfield, image generation where appropriate, and conventional editing/assembly such as FFmpeg.
Tool authorisation is not permission to spend credits unnecessarily or to create speculative
batches — follow the preferred order at §5.2.

### 15.4 Assembly — a raw clip is not the finished video

- A raw generator clip is not the promised finished video. Never describe a raw clip as the
  finished film.
- Assemble the exact promised runtime before showing the result as finished.
- Strip unauthorised generated audio.
- Use the genuine PRN logo asset outside the video generator; do not generate or approximate it.
- Do not add subtitles, captions, titles or CTA copy during editing unless the active brief
  explicitly authorises them.
- Inspect the complete export at normal speed and through a contact sheet.
- For a 5–6 second micro-ad, explicitly inspect the first frame, transition and final end-card
  frame at the actual 9:16 output resolution.
- Present the complete export as `DRAFT — NOT REVIEWED`.

### 15.5 Tool authorisation is not publishing authorisation

Being an approved production tool does not make Higgsfield, Postiz or any other tool a publishing
channel. **Nothing auto-publishes.** Creating, generating or even uploading a finished video is
not permission to schedule or post it — Greg's explicit separate approval is required before any
video is scheduled or posted, and duplicate/scheduled-post checks are mandatory before
publication. Full process: `PUBLISHING_WORKFLOW.md`.

---

## 16. Continuity discipline

For multi-shot generated video, lock and inspect every shot for:

- actor identity, face, hair, clothing and age;
- window count, shape, and whether curtains exist;
- doors, handles, wall colour, fireplace, furniture and light fittings;
- lighting direction, colour temperature and practical-light positions;
- actor position, direction of travel and room geography;
- threat location and cause-and-effect;
- crop, resolution and frame rate.

Reject a shot when architecture or props mutate. Do not hide a continuity failure with faster
cuts, and do not declare a visual audit passed without actually catching a visible continuity
error — in the Higgsfield sequence, windows changed from bare arches to curtained and back
between shots, and the fault was only caught after the fact (§19).

For real-location aerial/flyby work specifically (drone-style movement through a genuine
historic site):

- never show a physical drone body, propeller, operator, shadow or reflection — the camera is an
  invisible first-person viewpoint;
- explicitly strip drone motor/propeller/rotor/mechanical audio;
- never let a route-planning/annotation reference image's markings (lines, numbers, circles,
  arrows) appear in the generated output — annotated images are for planning only (§5.3);
- preserve continuous geography with no cuts, jumps or teleportation between fields;
- follow the exact approach order the brief specifies (e.g. rear before front) rather than
  letting the generator take a shortcut;
- never ask the generator to invent, redesign or rebuild the PRN logo.

---

## 17. Explicitly unacceptable visual styles

Never use:

- fake proof, fabricated evidence, fake sensor readings, or any generated visual presented as
  real evidence;
- fake CCTV, fake mobile-phone evidence, fake archive footage, fake testimony, fake documents,
  fake newspaper evidence, or other generated pseudo-documents;
- fake ghosts or fake apparitions;
- a random stock person pretending to investigate;
- horror cliché or sensational claim of any kind;
- Halloween visuals, blood, or glowing eyes;
- horror fonts, red arrows, or text walls;
- cluttered HUD decoration, invented HUD/database graphics, or route-annotation graphics bleeding
  into a final render;
- pseudo-English, invented letters, or random number/letter strings inside generated text;
- cheap, obviously AI-looking composition;
- generated text or the PRN logo drawn inside a Lane B scene (composite the genuine logo outside
  the generator instead, §13);
- logo redraw, mutation, recolour or monochrome conversion;
- a square/near-square asset mechanically cropped into 9:16 (§13.1);
- glitch or strobe transitions (§12);
- jump-scare stings, cheesy horror hits, screams, comedy ghost effects, or unintelligible
  whispers in the audio;
- an unmotivated frightened performance with no visible cause (§10);
- continuity mutation disguised by faster cutting (§16);
- clickbait language rejected in §3.2.

---

## 18. Mandatory QA before calling any video finished

Do not report a video as done because a renderer/exporter returned successfully — inspect the
actual output.

**Frame check:** first frame; one mid-animation frame; transition frame; final frame.

**Visual check:**
- Hook readable at phone size; clear point/message; hook in first 1–2 seconds (or first 0.20 s
  for the micro-ad format).
- No accidental crop.
- Genuine, unmodified logo; no compositing box around it.
- Full website including `.ORG`; correct exact route.
- Subject title correct and uncropped.
- No fake evidence; no unwanted watermark.
- Same actor, room, props and lighting throughout (§16).

**Technical check:**
- Correct resolution (1080×1920 for the current standard) and aspect ratio;
- correct runtime (5.0–6.0 s for the current standard, or the brief's exact alternative);
- 30 fps unless the brief/platform requires otherwise;
- platform-compatible video/audio codecs;
- audio present only if authorised, with no clipping.

**Content check:**
- Every factual claim verified.
- Generated material clearly illustrative, never presented as real evidence.
- Narration and subtitles present only when authorised for this specific video, omitted
  otherwise (§9).
- No unauthorised voice, speech, subtitles, text, logo treatment or CTA.
- Exact PRN destination verified; caption matches the visual; LinkedIn rule observed (§14.2).
- Complete generator prompt was shown to and approved by Greg before submission (§15.1).
- Complete assembled export delivered, not a raw intermediate (§15.4).
- Asset remains `DRAFT — NOT REVIEWED` until Greg explicitly approves it.

**Final test** — before delivery, ask:

> Does this look like a premium documentary social promo, does the specific subject grip the
> viewer in the first second, does it sound like PRN, and is the route into the exact PRN content
> unmistakable?

If the answer is no, it is not finished.

---

## 19. Known failure references

These are provenance pointers, not rules to re-derive — the operative rules drawn from them are
already folded into §5.3, §9, §15, §16 and §17 above.

- **First Ancient Ram Inn short (8 September 2026).** Rejected. A square/near-square end card was
  mechanically forced into 9:16, cropping `ANCIENT RAM INN`, dropping `.ORG`, and leaving a
  visible blue compositing patch around the logo. The corrected version, rebuilt natively at
  1080×1920, is the working reference; the Spirit Box short from the same test round is also an
  accepted creative reference. Neither record tracks live publishing status (§15.5).
- **Higgsfield failure postmortem (27 July 2026).** No output from that 22-second production
  sequence is approved, including anything with `Master`, `Clean` or `Repaired` in the filename.
  Root causes: mood mistaken for message, an approved 5-second opener's direction discarded for
  an unapproved concept, a raw intermediate shown as if finished, unauthorised speech and
  subtitles added, continuity failure (windows changing between bare arches and curtains), and
  cost estimates that didn't reconcile with the real account balance. The first 5-second opener
  remains `REFERENCE ONLY`.
- **Woodchester Mansion Google Flow drone handover (27 July 2026).** A real-location aerial
  flyby production. Failures included a visible drone body, retained propeller audio, leaked
  route-annotation graphics, wrong approach order, mutated architecture, and logo distortion. A
  fresh session with a short, task-separated prompt and a strict reference-image hierarchy
  produced an accepted flyby; Greg's instruction was to lock it and edit only the ending. The
  full reusable prompts are preserved in the source handover and are not reproduced here.

---

## 20. Change log

- 2026-07-04 — v1.0 PRN Video Style Guide created.
- 2026-07-18 — v1.1 added narrator and fixed opening/closing defaults.
- 2026-07-27 — v2.0 removed mandatory narration, subtitles, text and fixed logo/banner defaults;
  added element authorisation, message-first planning, paid-generation, continuity,
  raw-intermediate and complete-export gates after the failed Higgsfield production sequence.
- 2026-07-27 — v2.1 clarified narration/subtitles as approvable-not-banned; added mandatory
  full-prompt review before any generator submission.
- 2026-07-27 — Higgsfield failure postmortem and Woodchester Mansion drone handover recorded as
  required reading.
- 2026-09-08 — Short Social Advert System established as the current format standard (5–6 s 9:16
  micro-ad, locked end-card construction, subject-first hooks, subject-specific sound design).
- 2026-09-08 — **this document**: consolidated v2.1, the Short Social Advert System Handover, the
  video output-control READ FIRST, the 5–6 Second Advert Build Template, the Video Generator
  Prompt Approval Template, the PRN Narrator Voices reference, and the durable lessons of both
  2026-07-27 postmortems into one canonical `VIDEO_STYLE_GUIDE.md`. All seven source documents
  are superseded by this file for video-style purposes.

**End of PRN Video Style Guide — canonical.**
