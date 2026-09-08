---
title: PRN Social Prompt Library
owner: Greg Pickersgill
status: CANONICAL — OPERATIONAL
version: v2.0 — full consolidation
created: 2026-09-08
supersedes: prn-brain CLAUDE_PRN_SOCIAL_BUILD_PROMPT_LIBRARY.md (v1.1) and all earlier campaign-era copy templates
canonical_home: gilly1024/prn-social-media-assets
sibling_docs: BRAND_VOICE.md, SOCIAL_CONTENT_ENGINE.md, VIDEO_STYLE_GUIDE.md, PUBLISHING_WORKFLOW.md
---

# PRN Social Prompt Library

This is the single canonical, operational library of reusable prompts and build templates for PRN
social content. It lives in `gilly1024/prn-social-media-assets` alongside `BRAND_VOICE.md`,
`SOCIAL_CONTENT_ENGINE.md`, `VIDEO_STYLE_GUIDE.md` and `PUBLISHING_WORKFLOW.md`. Read those four
files for voice, content strategy, video production standards and the approval-to-publish pipeline —
this file only holds the fillable prompts.

Historical prompt or campaign material found anywhere else — including in `gilly1024/prn-brain` or
any Google Drive folder — is **not authoritative**. Nothing in this library references those
locations. If an old path surfaces in chat history or a draft, treat it as superseded.

---

## 0. How this library works

### 0.1 Using a prompt is not permission to publish

**Building an asset from a prompt in this library is drafting authority only.** It is never
permission to publish, post, schedule or spend budget. Publication requires Greg's explicit,
separate instruction under the pipeline in `PUBLISHING_WORKFLOW.md`. Every prompt below ends in a
draft awaiting approval, full stop — including the ones that say "finished."

### 0.2 The output-control rule (safety rail — not decoration)

No prompt in this library authorises narration, speech, subtitles, on-screen text, CTA wording,
music, sound effects, a human subject, generated imagery, a logo stinger or a banner by itself.

For every asset, mark each of the following **AUTHORISED**, **NOT AUTHORISED** or **NOT SPECIFIED**:
narration · narrator/voice · natural human speech · lip movement/lip-sync · subtitles · opening
hook/title text · other on-screen text · CTA wording · music · sound effects · generated audio ·
human subject · generated imagery · genuine PRN logo · logo animation · banner/end card.

**Treat NOT SPECIFIED as DO NOT ADD.** The active brief controls which optional elements are used —
never the template, never precedent from a previous asset. This register is carried in full in
§7 (Prompt-Approval Form) for every video-generator call, and in short form inside each build
prompt below.

### 0.3 Variable convention

Placeholders are written in `[BRACKETS]`. Common ones: `[SUBJECT]`, `[PLATFORM]`, `[OBJECTIVE]`,
`[AUDIENCE]`, `[SOURCE PATH OR URL]`, `[ASSET PATHS]`, `[DESTINATION URL]`, `[DURATION]`,
`[FORMAT]`. Replace every placeholder with verified information before building. **Never leave a
placeholder in a finished output.**

### 0.4 Platform routing and cadence

- **LinkedIn is research/equipment only.** Allowed: paranormal research, scientific/research
  methodology, equipment used in investigations, environmental monitoring, sensors, field-data
  systems, measurement/logging/correlation, evidence handling, interview methodology, provenance,
  relevant PRN R&D. **Excluded, with no reframing exception:** folklore, entities, Kirstie's
  Library dossiers, Missing Files, and ordinary paranormal-story Case Files. A Case File may run on
  LinkedIn only when the post is genuinely about method, equipment or evidence handling rather than
  the story itself.
- **Cadence:** at least four strong, distinct posts per day across the live PRN ecosystem (Case
  Files, Research/Open Research, Global Unknown, Kirstie's Library, Entities, Missing Files,
  Equipment Hub, methodology/field-data/R&D). This does not authorise filler — every post needs its
  own subject, hook and reason to exist.
- **Destination-first funnel:** every idea must know its exact destination page before the creative
  is built — `SUBJECT-SPECIFIC HOOK → VALUE/INTRIGUE → PRN ENDING → EXACT WEBSITE DESTINATION`. Do
  not default to the homepage when an exact page exists. Domain:
  `https://www.paranormalresponsenetwork.org`.
- **Production discipline:** approve one finished master before producing variants at volume. Never
  mass-produce before the look and hook are agreed.

---

## 1. Universal build prompt — start here

Use this when a brief doesn't yet specify a format. It classifies the task and routes to the right
template below.

```text
Build a complete PRN social asset from this brief:

BRIEF: [GREG'S WORDS]

Before building, create an output-control record for narration, speech, subtitles,
opening text, later text overlays, CTA wording, music, sound effects, human subject,
generated imagery, logo and banner. Add only elements that the brief explicitly authorises.
Treat anything not specified as DO NOT ADD.

Read SOCIAL_CONTENT_ENGINE.md, BRAND_VOICE.md, VIDEO_STYLE_GUIDE.md and this library first.

Do the following autonomously:

1. Classify the task: short video advert, longer video, static post, carousel, paid ad,
   website promo, caption-only, equipment explainer, folklore dossier, case/location,
   cross-platform adaptation or audit.
2. Search the PRN repository/website for the authoritative subject material.
3. Verify the current PRN page, feature name and destination URL if this promotes the website.
4. Inspect available real/owned/licensed assets before generating anything.
5. Select the best creative lane and the matching prompt in this library.
6. Build the actual review-ready asset with the available production tool.
7. Produce the matching platform copy, alt text and CTA.
8. Run the full brand, evidence, sensitivity, rights, logo and palette checks.
9. Confirm LinkedIn eligibility per §0.4 before drafting a LinkedIn version.
10. Present the finished preview. Do not publish or schedule it.

Return the PRN Build Record (§12.4).
```

---

## 2. Single post / poster

### 2.1 Static social post / poster prompt

```text
Create a finished PRN [PLATFORM] static design about [SUBJECT].

Objective: [OBJECTIVE]
Format: [1:1 / 4:5 / 9:16 / 16:9]
Destination: [URL]
Available assets: [ASSET PATHS]

Select one clear hero image. Use a PRN template only when it improves the subject; do not
force every HUD element onto the design.

Image text:
- maximum one headline;
- optional short category/location/date line;
- optional short CTA;
- no paragraph.

Use the current palette and genuine logo. Keep the subject bright enough to read. Preserve
negative space. No horror font, transparent ghost, red arrow, busy collage or fake evidence.

Build the actual finished image and provide the matching caption, alt text, source note and
export filename.
```

### 2.2 Behind-the-build update prompt

```text
Create a first-person PRN progress post from this real work update:

[UPDATE]

Verify the numbers, feature names and work completed.

Write from Greg's honest perspective using "I", or "Kirstie and I" only when both genuinely
did the work. Do not turn the post into corporate language and do not invent a team.

Structure:
1. What was completed.
2. One specific number, feature or difficulty.
3. Why it improves the archive or reader experience.
4. What remains.
5. Soft CTA if relevant.

Use real screenshots, desk footage, archive material or work-in-progress assets. Avoid
generic AI people at computers.

Create the finished post or video plus platform caption.
```

---

## 3. Carousel

### 3.1 Case file / location carousel prompt

```text
Create a PRN Instagram/Facebook carousel about [CASE OR LOCATION].

Source: [PRN PATH OR URL]
Destination: [URL]
Available images: [ASSET PATHS]

Use 4-7 portrait slides at 1080x1350.

Recommended structure:
1. Cover — exact place and a precise hook.
2. Historical record — date and context.
3. Reported account — clearly labelled.
4. Evidence/source trail — what survives.
5. Alternative or uncertainty — what cannot be concluded.
6. PRN entry contents — chronology, map, sources or media.
7. CTA — read the full entry.

Rules:
- one idea per slide;
- one strong image per slide;
- no tiny paragraphs;
- no generic "most haunted" wording;
- no image repeated merely to fill space;
- source labels readable;
- genuine logo;
- current palette;
- documentary rather than horror treatment.

Create all finished slides, caption, alt text and a slide-by-slide source map.
```

### 3.2 Equipment / methodology explainer prompt (video or carousel)

One of the few PRN content types eligible for LinkedIn (§0.4) — but only when the post is
genuinely about the device or method, not the paranormal story.

```text
Build a PRN equipment explainer about [DEVICE OR METHOD].

Authoritative PRN source: [SOURCE PATH OR URL]
Available equipment images/footage: [ASSET PATHS]
Platform: [PLATFORM]
Format: [VIDEO OR CAROUSEL]
LinkedIn eligible: [YES — genuinely about the device/method / NO]

The central structure is:

1. What it is.
2. What it actually measures or does.
3. Why paranormal investigators use it.
4. Common environmental or technical false positives.
5. What the output cannot establish.
6. A practical comparison or logging recommendation.
7. Link to the full PRN Equipment Hub or methodology note.

Use the real device where possible. Do not create a fake display reading. Do not state or
imply that the device detects ghosts.

Tone: calm, technical, understandable and non-patronising.

Create the finished asset, platform copy, alt text, source note and compliance check.
```

---

## 4. Short video advert (current 5-6 second format)

This is the current approved format for compact PRN video adverts, locked 8 September 2026.
Everything in this section takes precedence over the general-length video prompts in §8 when the
target runtime is 5-6 seconds.

### 4.1 Full build prompt

```text
Build a finished PRN short-form social advert about [SUBJECT] for [PLATFORM(S)].

Category: [Case File / Research / Equipment / Kirstie's Library / Entity / Global Unknown /
Missing File / Other]
Objective: [what the viewer should do or understand]
Hook: [one verified factual tension, claim, distinction or question]
Supporting line: [one short line, only if needed]
Exact PRN source: [repository path or live page]
Exact website destination: [full verified URL and/or route]
Hero asset: [real / PRN-owned / licensed / public-domain / generated illustrative — state which]
Rights state: [verified / pending]
LinkedIn eligible?: [YES — only if genuinely research, methodology, equipment, evidence-handling
or provenance. NO for folklore, entities, Kirstie's Library, Missing Files or ordinary
case-story content — see §0.4]
Audio lane: [equipment / case-location / research / other]

Before building, create the output-control record from §0.2. Mark every element AUTHORISED,
NOT AUTHORISED or NOT SPECIFIED. Treat NOT SPECIFIED as DO NOT ADD.

Read BRAND_VOICE.md, SOCIAL_CONTENT_ENGINE.md and VIDEO_STYLE_GUIDE.md first.

FORMAT
- 1080x1920, 9:16, 30 fps unless the brief requires otherwise;
- runtime 5.0-6.0 seconds.

0.00-0.20s — immediate hook
- subject and headline already visible, no slow fade that hides it;
- sell the specific subject, not a generic "Explore the [X] Hub" card — that framing is too
  generic for an opener, though it can still work as finishing language.

0.20-3.80/4.00s — cinematic hold and motion
- slow push-in, slow drift, shallow parallax, restrained focus shift, a small lighting change
  or subtle atmospheric movement only;
- keep all authorised text inside safe zones throughout the motion;
- the movement must feel like a documentary title sequence, not a default slideshow zoom.

3.80-4.40s — transition
- one restrained 0.4-0.6s device: crossfade, dip through near-black, or a subtle PRN
  blue/coral energy sweep, with a small audio swell only if audio is authorised;
- no glitch or strobe transitions.

4.20/4.40-5.50/6.00s — PRN end card
- build per the End Card prompt in §5.1;
- hold at least ~1.2 seconds readable.

VISUAL DIRECTION
- one dominant hero image, deep black/near-black negative space, cinematic blue/coral
  lighting, crisp high-fidelity subject detail, clean mobile-readable hierarchy, genuine PRN
  logo only if used, restrained depth/fog/particles only where appropriate, no clutter.

TEXT HIERARCHY (use no more than needed)
1. small category line;
2. large subject/hook line;
3. optional one-line curiosity/support text;
4. optional tiny "Full [file/article/entry] on PRN" line.

All wording must be verified against the authoritative source before use and must remain
inside the PRN brand voice (evidence-led, atmospheric not theatrical, curious not credulous,
humble not corporate, specific not vague).

AUDIO (only in the authorised form)
- Equipment: representative operational sound, radio/static/sweep where technically
  appropriate, restrained button/click texture, low support tone. Never a synthetic "voice"
  or anomalous output that could be mistaken for evidence.
- Case File/location: light wind, distant room tone, restrained low rumble, subtle building
  texture, small transition swell. No screams, comedy ghost noise or jump-scare hit.
- Research: low analytic pulse, subtle interface/waveform ticks, quiet room tone, restrained
  tonal rise, very light paper/desk sound only if it genuinely supports the visual. Keep it
  intelligent, not horror-coded.
- Mix rule: the sound should make the visual feel more expensive, not draw attention to itself.

Do not add fake ghosts, apparitions, evidence, sensor readings, Halloween visuals, blood,
glowing eyes, horror fonts, red arrows, stock investigators or cheap AI-looking composition.

TOOL LANE
Prefer the lowest-credit path that still meets the quality bar: reuse strong real/approved
assets first, create one excellent teaser image, animate with low/zero-credit editing when
that meets the bar, and use generative video only when genuine scene motion adds enough
value. Inspect one master before creating a batch of variants.

DELIVER
1. Finished vertical draft.
2. Frame-by-frame QA per §4.2.
3. Platform captions (Facebook, Instagram/TikTok, YouTube Shorts, Bluesky, and LinkedIn only
   if eligible per the field above).
4. Exact destination URL and "link in bio" wording where the link is not directly clickable.
5. Restrained hashtags where appropriate.
6. Alt text / source note.
7. PRN Build Record (§12.4).

Do not publish or schedule. Do not create a LinkedIn version for folklore or entity content
under any framing.
```

### 4.2 QA / acceptance check prompt

Run this before showing any short advert to Greg as finished. A successful render or export is
not proof the asset is correct — only this inspection is.

```text
Inspect this finished PRN short advert before showing it as done.

Asset: [FILE / PREVIEW LINK]
Claimed subject/hook: [SUBJECT / HOOK]
Claimed destination: [URL / ROUTE]

Pull and check four frames: first frame, one mid-animation frame, the transition frame, and
the final frame.

First frame
- Is the subject obvious immediately?
- Is the hook readable at phone size?
- Is there a genuine reason to keep watching?

Mid-animation frame
- Is the motion smooth?
- Has text stayed stable and readable?
- Has anything mutated or drifted?

Transition frame
- Is the transition clean?
- Any flash, seam, colour block or compositing error?

Final frame (end card)
- Genuine PRN logo, no coloured box around it?
- Full subject title, not cropped?
- Full "PARANORMALRESPONSENETWORK.ORG" including ".ORG"?
- Correct route if shown?
- Clear of platform UI controls?

Technical
- 1080x1920, 9:16?
- 5.0-6.0 seconds (or the brief's stated runtime)?
- 30 fps unless the brief requires otherwise?
- Platform-compatible codecs?
- Audio present only if authorised, no clipping?
- No unintended watermark?

Content
- Hook verified against the source?
- No fake evidence, apparition or sensor reading?
- Destination URL verified live?
- Caption matches the visual?
- LinkedIn restriction observed (§0.4)?
- Source/rights state recorded?

Report PASS or FAIL per category above with exact faults, not a general impression.
```

---

## 5. End card

### 5.1 End card build prompt

Standalone and self-contained — use it either inside a full advert build (§4.1) or to rebuild a
rejected end card on its own.

```text
Build the PRN end card for this asset.

Subject/section title: [SUBJECT OR SECTION TITLE]
Category: [Case File / Research / Equipment / Kirstie's Library / Entity / Global Unknown /
Missing File / Other]
Exact destination route: [/exact/path or full URL]

Build natively at 1080x1920, 9:16. Do not mechanically crop a square or near-square design
into this ratio — build it native and inspect the actual export.

Required visual language:
- deep black / near-black (#010308-family) field;
- genuine PRN logo, centred, clean, unmodified — pulled from the canonical PRN asset
  library, never generated, redrawn or approximated;
- controlled blue energy/light on the left;
- controlled coral/orange energy/light on the right;
- large subject or section title;
- full "PARANORMALRESPONSENETWORK.ORG" in a distinct high-contrast line — never truncate
  ".ORG";
- exact route beneath when it stays readable; otherwise keep the full domain on-card and put
  the exact destination in the caption/bio link — do not shrink the path into microtext;
- generous negative space, no clutter.

Safe margins (recheck the current platform safe zone before final export):
- left/right: 90-120 px minimum;
- top: about 120 px;
- bottom: 180-220 px.

Hold time: minimum ~1.2 seconds readable once the end card is fully on screen. The ending
should feel blended into the preceding scene, not pasted on afterwards.

Reject and rebuild if any of the following appear in the export:
- a coloured rectangle or compositing patch visible around or over the logo;
- logo redraw or mutation;
- subject title cropped;
- ".ORG" missing or truncated;
- route cropped or unreadable;
- the CTA hidden by platform UI controls;
- a square/near-square design mechanically forced into 9:16;
- the card feels disconnected from the preceding shot.
```

---

## 6. Caption + hook

### 6.1 Caption-only prompt

```text
Write the finished [PLATFORM] caption for this approved PRN asset:

[ASSET OR DESCRIPTION]

Subject source: [SOURCE PATH OR URL]
Destination: [URL]
Content category: [CATEGORY]
Sensitivity tier: [TIER]

Apply the full PRN voice from BRAND_VOICE.md.

The first line must be a precise hook, not clickbait.
Separate documented fact from report and folklore.
Use one soft CTA.
Use British English.
Do not imply a team.
Do not use a hashtag salad.
Do not repeat all text already visible on the image.
For Facebook and TikTok, include the standalone CTA "Link in bio." and the hashtag #FYP exactly
once unless Greg explicitly overrides either element for this post. Check case-insensitively to
avoid duplicates. On Facebook, preserve the exact clickable PRN destination URL as well; "Link in
bio." is additional and does not replace the direct link.

Return only:
- final caption;
- hashtags;
- alt text.
```

### 6.2 Hook pattern menu

Use to generate or check the opening line/frame for any post, caption or advert. Rotate
patterns — avoid using the same one twice in a row across a day's posting. Every hook must be
verified against the source before use.

- **Precise fact as tension** — one real, verified detail that raises a question before any
  explanation. e.g. "A spirit box is receiving radio."
- **Genuine question the record raises** — a real, specific question the source material poses,
  not a rhetorical gimmick. e.g. "What does the record actually contain?"
- **Named distinction** — a real technical or historical distinction most readers wouldn't know,
  stated plainly rather than as a "gotcha." e.g. "Most 'orb' photographs are dust close to the
  lens, not distance to a light source."
- **Exact place/date opener** — for location-led pieces, open on the exact place and date rather
  than mood-setting.

Do not use: manufactured urgency, "you won't believe", "shocking" as empty clickbait, countdown
framing, listicle padding used as bait rather than genuine structure, or any hook that promises
proof the content doesn't deliver.

*(Modernised from a June 2026 external best-practice reference. Its countdown/launch-campaign
hook types and its "captions on-screen, always" rule were dropped — the latter now contradicts
the mandatory element-authorisation control in §0.2, which treats on-screen text as optional and
requires it to be explicitly authorised per asset.)*

---

## 7. Prompt-approval form (mandatory pre-generation gate)

Use before **every** video-generator call, regardless of platform, model, credit cost or whether
the render is free. Do not submit anything to a generator until Greg has read and explicitly
approved the complete prompt below. Narration and subtitles are acceptable creative options —
neither mandatory nor prohibited — mark them accurately for the specific video.

```text
PRN VIDEO GENERATOR — FULL PROMPT APPROVAL

1. PRODUCTION PURPOSE
- Video title:
- Platform:
- Objective:
- Target viewer:
- One-sentence message:
- Viewer hook:
- Beginning:
- Escalation:
- Payoff/ending:
- Exact runtime:
- Aspect ratio and resolution:
- Draft status after generation:

2. ELEMENT-AUTHORISATION REGISTER
Mark every field AUTHORISED, NOT AUTHORISED or NOT SPECIFIED — DO NOT ADD.
- Narration:
- Narrator/voice:
- Natural human speech:
- Lip movement/lip-sync:
- Subtitles:
- Opening hook/title:
- Other on-screen text:
- CTA wording:
- Music:
- Sound effects:
- Generated audio:
- Human subject:
- Generated imagery:
- Genuine PRN logo:
- Logo animation:
- Banner/end card:

3. SOURCE AND REFERENCE ASSETS
List every image, video, logo, audio file, character reference and style reference supplied
to the generator.
- Asset / Source-path / Purpose / Rights-status: [repeat per asset]

4. GENERATOR AND COST
- Generator:
- Model:
- Mode/quality tier:
- Duration setting:
- Aspect ratio:
- Resolution:
- Frame rate:
- Seed, reference strength or other settings:
- Expected cost per render:
- Maximum authorised renders:
- Maximum total cost:
- Current verified credit balance:

5. COMPLETE POSITIVE PROMPT — exact submission text (verbatim, no summarising, no omitted
technical instructions)
[COMPLETE POSITIVE PROMPT]

6. COMPLETE NEGATIVE PROMPT — exact submission text (include continuity exclusions,
unapproved audio/text exclusions and unwanted visual behaviours)
[COMPLETE NEGATIVE PROMPT]

7. SHOT AND CONTINUITY AUDIT
Confirm the exact prompt accounts for:
- shot-by-shot action and timing;
- camera position, lens/movement and transitions;
- actor identity, age, face, hair, clothing and performance;
- room geography, windows/curtains, doors, furniture, props and lighting;
- visible cause of any fear or reaction;
- narration, dialogue, breathing, whispers, lip movement and generated audio;
- subtitles, titles, text overlays and CTA;
- genuine logo handling outside the generator where applicable;
- anything that must not change between shots.

8. AGENT PREFLIGHT DECLARATION
The agent must confirm:
- I have shown Greg the complete positive and negative prompts exactly as they will be submitted.
- I have not hidden or paraphrased any generator instruction.
- The prompt matches the storyboard, element-authorisation register and cost.
- Narration and subtitles reflect this video's decision; neither was assumed.
- I will submit no revised prompt without showing the complete revision and obtaining
  approval again.
- I will not perform a retry without separate approval where it adds cost.

9. GREG'S APPROVAL
No generator call is permitted until Greg explicitly approves the complete prompt shown above.
- Status: AWAITING GREG'S APPROVAL
- Approved prompt version:
- Approval wording/date:
- Approved render count/cost:

A storyboard, outline, summary, partial excerpt or internal audit does not count as approval
of the generator prompt.
```

---

## 8. Longer-form video prompts

These cover video purposes outside the 5-6 second advert format in §4. For anything at or near
5-6 seconds, use §4 instead.

### 8.1 Vertical video — full build prompt (general length)

```text
Create a finished PRN vertical video about [SUBJECT] for [PLATFORM].

Objective: [OBJECTIVE]
Target length: [DURATION]
Destination: [DESTINATION URL]
Available footage/images: [ASSET PATHS]

Read SOCIAL_CONTENT_ENGINE.md, BRAND_VOICE.md and VIDEO_STYLE_GUIDE.md first.

RESEARCH
- Locate and read the authoritative PRN source for the subject.
- Verify all names, dates, locations, equipment details and reported claims.
- Separate documented history, report, folklore and uncertainty.
- Create a short source note.

ASSET SELECTION
- Prefer real footage or real photographs.
- Use the genuine PRN logo and current palette.
- Use AI atmosphere only when real material is insufficient, and never as alleged evidence.
- State the exact files selected.

VIDEO
- 1080x1920, 9:16.
- Use the duration the subject requires within PRN guidance.
- Hook in the first 1-2 seconds with a precise place, date, fact or distinction.
- Narration only when explicitly authorised.
- Audio only in the authorised form.
- Subtitles only when separately authorised.
- Slow, restrained movement.
- Dark but readable grade.
- No jump scares, glitch effects, fake apparitions, horror fonts or generated text inside footage.
- End with the exact genuine-logo/banner/CTA treatment authorised by the brief (§5.1 for the
  standard end card).
- Keep any authorised text inside the relevant safe zones.

DELIVER
1. Finished video draft or export.
2. Timestamped edit script: time | visual | authorised narration | authorised on-screen text
   | authorised audio.
3. Exact voice-over transcript only when narration is authorised.
4. Platform caption.
5. 4-8 relevant, restrained hashtags where appropriate.
6. Alt text.
7. Source and rights note.
8. Compliance result.
9. Output filename.

Do not publish or schedule.
```

### 8.2 Real-location documentary video prompt

```text
Build a PRN Lane A documentary video about [LOCATION].

Use these real assets first: [ASSET PATHS]
PRN source: [SOURCE PATH]
Destination: [URL]

The piece must feel authentic and location-led, not like a horror trailer.

Open with:
- the exact location;
- an exact date/date range; or
- one verified reported detail.

Use real photography/footage, slow movement, high contrast, restrained desaturation or black
and white, subtle vignette and light grain.

Do not add a visible ghost, apparition, shadow person, moving object or fake sensor reading.
Do not manufacture evidence.

Narrative sequence:
1. Place and date.
2. One documented historical fact.
3. One clearly labelled report or tradition.
4. One uncertainty, source limitation or possible ordinary factor.
5. Soft CTA to the full PRN entry.

Create the finished 9:16 draft, caption and source note. Add narration or subtitles only when
the active brief separately authorises them. Confirm LinkedIn eligibility against §0.4 before
adding a LinkedIn version.
```

### 8.3 Folklore / Kirstie's Library video prompt

Not eligible for LinkedIn under any framing — see §0.4.

```text
Create a PRN documentary-style folklore video for Kirstie's Library about [ENTITY OR TRADITION]
from [REGION].

Authoritative PRN dossier: [SOURCE PATH OR URL]
Available real/archive assets: [ASSET PATHS]

Research the earliest reliable references, regional variants, setting, appearance, behaviour
and cultural context. Do not flatten several traditions into one universal story.

Use language such as:
- "the tradition holds";
- "accounts from [region] describe";
- "the earliest surviving reference located here dates to";
- "later retellings add".

Do not present folklore as confirmed zoology, proof or eyewitness fact.

Visual lane:
- real landscape, architecture, artefact or public-domain illustration first;
- AI atmospheric reconstruction only when clearly illustrative;
- one entity or subject per image;
- no captions or generated lettering inside the image;
- no generic horror creature;
- regionally and historically plausible clothing, buildings, weather and landscape.

Create:
- 20-45 second 9:16 video;
- opening hook using name + region or one precise historical detail when opening text or
  narration is authorised;
- caption, hashtags, alt text and source note;
- narration, subtitles and ending CTA only when the active brief separately authorises each
  element.

Do not draft a LinkedIn version of this asset.
```

### 8.4 Website promo video prompt

```text
Build a simple PRN website promo from the approved page screenshots and any available screen
recording.

Objective: show that PRN is a website and reveal several things people can explore without
covering the screen in text.

Source assets:
- the PRN asset library (assets/images/, assets/videos/) page-screenshot set;
- current live PRN website;
- [ANY USER-SUPPLIED SCREEN RECORDING]

Format: 9:16, [DURATION] seconds.

Sequence:
1. Opening title: "TAKE A LOOK INSIDE PRN"
2. Short clarification: "The Paranormal Response Network website"
3. Move through 4-7 verified areas, one at a time.
4. Use one short feature label per page.
5. End on the real PRN logo (§5.1 end card), current website address and one CTA.

Possible page labels — check every name against the current live site before use, this list
goes stale:
- CASE ARCHIVE
- MAP EXPLORER
- KIRSTIE'S LIBRARY
- EQUIPMENT HUB
- RESEARCH LIBRARY
- AI ANALYSIS LAB
- OPEN RESEARCH

Use slow, clear screen movement. Crop tightly enough that the feature can be understood on a
phone. Do not show a wall of unreadable website text. Do not claim every PRN feature appears
in the video.

Create the video and caption. Add narration, subtitles and a final end card only in the exact
form authorised by the active brief.
```

---

## 9. Paid adverts

### 9.1 Paid Facebook / Instagram ad prompt

The June-July 2026 "Founding Member" launch offer is retired. Verify the current
membership/subscription offer and price before filling `[OFFER]` — do not reuse launch-era
offer language, countdown framing or "be first in" urgency copy.

```text
Create a PRN paid social advert.

Offer/feature: [OFFER — verify current membership/subscription terms before filling this in]
Audience: [AUDIENCE]
Traffic temperature: [COLD / WARM / RETARGETING]
Objective: [TRAFFIC / SUBSCRIPTION / LEAD / VIDEO VIEW]
Placement: [FACEBOOK FEED / INSTAGRAM FEED / REELS / STORIES]
Destination: [VERIFIED URL]
Available assets: [ASSET PATHS]

Before designing, verify:
- the offer still exists;
- the price or membership wording if mentioned;
- the destination page resolves;
- every factual claim is supported.

Create no more than three genuinely different concepts:

A. FACT-LED
One precise fact or useful distinction opens the advert.

B. FEATURE-LED
Show what the reader can explore, read, compare or unlock.

C. ATMOSPHERE-LED
Use a strong documentary image and restrained intrigue.

For each concept provide:
- primary text;
- headline;
- description where supported;
- CTA button recommendation;
- visual specification;
- finished ad asset in the correct placement ratio;
- accessibility alt text;
- claim/source note;
- UTM naming recommendation.

Do not use fear, fake urgency, competitor attacks, unsupported superlatives or claims of
proof. Do not imply PRN has a staff or investigative team. Do not launch or spend budget.
```

---

## 10. Illustrative image & video generation

### 10.1 Illustrative image-generator prompt

```text
Create one illustrative PRN visual for [SUBJECT].

Purpose: [POST / CAROUSEL SLIDE / VIDEO B-ROLL / AD]
Aspect ratio: [RATIO]
Historical/region context: [VERIFIED CONTEXT]

Scene:
[SPECIFIC PHYSICAL SCENE]

Visual direction:
- documentary photographic realism;
- serious, restrained and atmospheric;
- one focal subject;
- believable architecture, geography, materials and weather;
- moody but readable natural or practical lighting;
- deep navy, charcoal and near-black base;
- subtle cool blue influence;
- one restrained coral/orange practical accent only when physically plausible;
- negative space for later typography;
- subtle film grain;
- imperfect, credible camera framing when real-location style is required.

Do not include:
- words, letters, signs, captions or logos;
- transparent ghosts;
- glowing eyes;
- hooded demons;
- Halloween imagery;
- blood;
- theatrical fog covering the subject;
- impossible architecture;
- duplicated people or objects;
- fake CCTV overlays;
- sensor readings;
- alleged evidence;
- exaggerated supernatural effects;
- stock-photo posing.

This is an atmospheric illustration, not captured evidence. For a real named location,
positively verify the building before using or referencing an image of it. Generate one
image, not a collage.
```

### 10.2 Illustrative video-generator B-roll prompt

```text
Create a short illustrative PRN video shot for [SUBJECT].

Use: [B-ROLL PURPOSE]
Duration: [6-12 SECONDS]
Aspect: 9:16
Context: [VERIFIED PLACE/PERIOD/REGION]

Scene:
[SPECIFIC SHOT]

Camera:
- slow dolly, slow pan or locked-off shot;
- no fast orbit;
- no whip pan;
- no handheld horror shake.

Look:
- documentary cinematic realism;
- dark but readable;
- restrained contrast;
- subtle atmospheric depth;
- realistic physics and materials;
- no text or logo;
- no jump scare;
- no apparition or alleged evidence;
- no sudden object movement;
- no flickering horror effect;
- no glitch transition.

The shot will be used as illustrative B-roll beneath verified PRN narration. It is not a
complete post and must not be presented as real footage. Route any generator call for this
shot through the Prompt-Approval Form in §7 first.
```

---

## 11. Assembly & adaptation

### 11.1 Cross-platform adaptation prompt

```text
Adapt this approved PRN master asset for:

[PLATFORMS]

Master asset: [PATH]
Approved master copy: [COPY]
Destination: [URL]

Do not redesign the concept from scratch.

For each platform:
- use the correct aspect ratio;
- protect text and logo safe zones;
- rewrite the caption to fit that platform;
- retain the same verified facts;
- retain the same visual hierarchy;
- use a platform-appropriate CTA;
- export with clear filenames.

Do not crop out the subject, logo or essential evidence/source label. Do not stretch the
image. Do not put the same long caption on every platform. Confirm LinkedIn eligibility (§0.4)
separately for each adapted asset — an approved master for other platforms does not make it
LinkedIn-eligible.
```

### 11.2 Video editor assembly prompt (CapCut or equivalent)

```text
Assemble the approved PRN video using the available editing tools.

Approved brief: [PATH OR TEXT]
Assets: [EXACT PATHS]
Voice-over: [PATH OR SCRIPT OR NOT AUTHORISED]
Subtitles: [PATH OR NOT AUTHORISED]
On-screen text: [TEXT OR NOT AUTHORISED]
Music/ambience: [PATH OR LICENCE OR NOT AUTHORISED]
Sound effects: [PATH OR LICENCE OR NOT AUTHORISED]
Logo/banner/CTA: [EXACT AUTHORISED TREATMENT — see §5.1 for the standard end card]
Output: [FILENAME]

First inspect the actual editor/tool schema. Adapt commands to the available tool rather than
inventing function names.

Build:
- 1080x1920 timeline;
- approved shot order;
- approved duration;
- subtle movement only;
- simple cuts, dissolves or fades;
- dark but readable grade;
- only the authorised subtitle/title layers;
- safe zones for any authorised text;
- genuine logo only when authorised;
- CTA only when authorised;
- balanced authorised audio.

Do not add unapproved footage, stock, music, effects, filters, text, claims or AI imagery. Do
not use jitter, bounce, shake, glitch or horror transitions.

Render or save the review-ready draft. Verify:
- no blank frames;
- no cropped authorised text;
- no spelling mistakes;
- no unauthorised speech, subtitles, text, CTA, logo treatment or banner;
- no actor/room/prop/lighting continuity mutation;
- no audio clipping;
- no visible editor watermark;
- correct duration and aspect ratio.

Report the output location and any tool limitation. Do not publish.
```

---

## 12. Quality control & operations

### 12.1 Brand audit prompt

```text
Audit this PRN social asset and correct it:

[ASSET / FILE / COPY]

Check against:
- SOCIAL_CONTENT_ENGINE.md;
- BRAND_VOICE.md;
- VIDEO_STYLE_GUIDE.md;
- the PRN asset library (assets/images/, assets/videos/);
- current palette;
- authoritative subject source.

Return:
1. PASS / FAIL by category:
   - factual accuracy;
   - report vs folklore separation;
   - sensitivity;
   - sole-operator language;
   - tone;
   - hook;
   - logo;
   - colour;
   - typography;
   - mobile readability;
   - image authenticity;
   - AI disclosure;
   - rights;
   - CTA and URL;
   - LinkedIn eligibility if applicable (§0.4).
2. Exact faults.
3. Corrected copy or edit specification.
4. Rebuilt asset when the available tool supports it.

Do not approve an asset merely because it looks polished.
```

### 12.2 Failed-asset rebuild prompt

```text
Rebuild this failed PRN asset rather than lightly patching it:

[ASSET]

The failure reported by Greg is:
[FEEDBACK]

Read the authoritative PRN files again. Identify the root cause before rebuilding.

Preserve only elements that are clearly correct:
- verified facts;
- approved real footage;
- genuine logo;
- usable composition;
- approved wording.

Discard:
- wrong generated images;
- generic paranormal styling;
- clutter;
- wrong colours;
- team language;
- fake evidence;
- unreadable text;
- mismatched caption;
- unverified claims.

Create one corrected master first. Do not mass-produce variants until Greg approves that
master.
```

### 12.3 One-line brief router

Internal routing prompt for an agent interpreting a short instruction from Greg.

```text
Interpret Greg's one-line brief in the context of SOCIAL_CONTENT_ENGINE.md and this library.

Brief: [BRIEF]

Infer:
- intended deliverable;
- likely platform;
- subject;
- objective;
- source needed;
- best asset lane;
- output dimensions;
- whether a factual or rights check is required;
- whether LinkedIn eligibility (§0.4) needs checking.

If enough information exists, proceed and build.
Only ask a question when proceeding would risk:
- the wrong person/location;
- a false factual claim;
- a rights violation;
- a sensitive-case breach;
- the wrong destination or paid offer.

Never ask Greg to explain PRN's brand again.
```

### 12.4 PRN build record

Attach this compact record to every finished asset — video, post or carousel. This is a single
merged record; do not keep separate per-format versions of it.

```text
PRN BUILD RECORD

Title:
Category:
Platform(s):
Format:
Duration/slides:
Objective:
Audience:
Hook:
PRN source:
External sources:
Hero asset / assets used:
Generated assets:
AI disclosure:
Audio construction (if relevant):
Destination URL:
Sensitivity tier:
Rights status:
LinkedIn allowed/rejected (§0.4):
QA result (§4.2 / §12.1):
Output file:
Status: DRAFT — AWAITING GREG APPROVAL
```

---

**End of PRN Social Prompt Library v2.0.** This file is the sole reusable-prompt library for PRN
social content — do not fork or duplicate it elsewhere. Updates happen here, in place, in
`gilly1024/prn-social-media-assets`.
