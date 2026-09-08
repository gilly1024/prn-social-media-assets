# PRN Image Assets — index

Approved and reusable PRN image assets. Migrated from
`gilly1024/prn-brain` → `brand-voice-social/PRN_IMAGE_LIBRARY/` on 2026-09-08.

Visual rules live in [`../../BRAND_VOICE.md`](../../BRAND_VOICE.md) (§ colour, brand assets,
typography). **That document is the authority — this file is only an index of what is here.**

If a file exists in these folders but is not listed below, treat it as unofficial.

---

## 00_brand_marks/ — canonical identity (6)

| File | Use |
| --- | --- |
| `PRN_logo_MASTER.png` | Canonical square emblem, 1254×1254. The master. |
| `PRN_banner_MASTER.png` | Canonical wide banner, 1672×941. |
| `PRN_public_visual_system_LOCKED.png` | LOCKED design-system reference. **Not for social posting.** |
| `PRN_logo_primary.png` | Derivative for code repos. |
| `PRN_logo_transparent.png` | Derivative for overlays and templates. |
| `PRN_logo_email.png` | Derivative for email and social headers. |

## 01_page_screenshots/ — website captures (17)

Covers: home, case archive, map, Kirstie's library, equipment hub, R&D lab, research library,
research blog, open research, media index, news, focus, is-it-paranormal, directory, volunteer,
AI analysis lab, ops room.

## 02_colour_swatches/ — current palette only (8)

`01_deep_blue_2A78BC` · `02_deep_blue_dark_1B4E7A` · `03_charcoal_545C64` ·
`04_charcoal_deep_32373C` · `05_near_black_010308` · `06_coral_B03910` ·
`07_coral_light_BB5633` · `08_support_grey_7E848A`

## 03_typography/ — 1
`PRN_typography_sample.png` — heading / subhead / body / caption + HUD-label row.

## 04_templates/ — registered layout templates (7)

| File | Spec |
| --- | --- |
| `template_01_ig_square_1x1.png` | 1:1 — 1080×1080 |
| `template_02_ig_portrait_4x5.png` | 4:5 — 1080×1350 |
| `template_03_story_reel_9x16.png` | 9:16 — 1080×1920 |
| `template_04_landscape_16x9.png` | 16:9 — 1920×1080 |
| `template_05_pinterest_tall.png` | 2:3 — 1000×1500 |
| `template_06_carousel_intro_1x1.png` | 1:1 — 1080×1080 |
| `template_07_carousel_outro_1x1.png` | 1:1 — 1080×1080 |

## 05_atmospheric_textures/ — 2
`texture_01_world_network_hero.png` — vivid, high-energy backdrop.
`texture_02_world_network_muted.jpg` — muted, for research/archive posts.

## 06_wireframes/ — current short-advert wireframes (2)
`2026-09-08_PRN_SHORT_ADVERT_TEASER_WIREFRAME.svg`
`2026-09-08_PRN_SHORT_ADVERT_ENDCARD_WIREFRAME.svg`
Referenced by [`../../VIDEO_STYLE_GUIDE.md`](../../VIDEO_STYLE_GUIDE.md).

## source/2026-09-growth-sprint/ — campaign source images

Source images retained separately from the publish-ready derivatives for the September 2026
growth sprint. Their canonical URLs, attribution, rights notes and campaign use are recorded in
[`../../campaigns/2026-09-growth-sprint.json`](../../campaigns/2026-09-growth-sprint.json) and
[`../../campaigns/2026-09-growth-sprint-part2.json`](../../campaigns/2026-09-growth-sprint-part2.json).
PRN-hosted generated or atmospheric artwork remains illustrative and must never be presented as
field evidence or as a verified photograph.

---

## Deliberately NOT migrated — and why

These were left behind on purpose. Do not "restore" them.

| Excluded | Reason |
| --- | --- |
| `page_05_killer_files.png`, `page_16_teams.png`, `page_extra_profile.png` | **Byte-identical to `page_01_home.png`** (sha256 `ac245e2e…`). They are mislabelled copies of the home page, not captures of those pages. Using one would post the wrong screenshot. **These three pages still need capturing.** |
| 7 legacy colour swatches — `40BAFF`, `2978A5`, `E5EAEF`, `898C8F`, `FFA669`, `FFB37F`, `EBEFF3` | Superseded palette. These hex values are **explicitly banned** — see `BRAND_VOICE.md`. They sat beside the current 8 with confusingly parallel numbering. |
| `template_03_ig_story_reel_9x16.png` | Not registered in the source manifest — unofficial. The registered 9:16 template is `template_03_story_reel_9x16.png`. |
| `NEW PRN LOGO.png`, `ChatGPT Image Jun …png` (loose copies) | Byte-identical duplicates of `PRN_logo_MASTER.png` / `PRN_banner_MASTER.png` / `texture_01`. Only the canonical filenames above are official. |
| `social-media-content/` renders (~100 PNGs, campaign PDFs) | Superseded June/July 2026 launch campaign. Historical raw material, not approved reusable assets. |

## Known gaps

- Three page screenshots above need re-capturing.
- The source manifest listed fog / archive-paper / historic-interior / dusk-lane textures as
  "planned" — never produced.
