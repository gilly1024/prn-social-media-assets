# PRN Social Media Assets — CANONICAL AUTHORITY

> ## BEFORE PERFORMING ANY PRN SOCIAL-MEDIA WORK: READ THIS REPOSITORY FIRST.

This repository is the **single canonical authority** for all Paranormal Response Network (PRN)
social-media operations, brand voice and approved media assets. It is also the **permanent asset
handoff location** used by AI agents (ChatGPT, Claude) and Postiz.

Historical social-media or brand-voice material found anywhere else — including in
`gilly1024/prn-brain` — is **NOT authoritative** unless it is explicitly referenced from this
repository.

---

## Canonical documents

| File | What it controls |
| --- | --- |
| [`BRAND_VOICE.md`](BRAND_VOICE.md) | PRN social brand voice and tone |
| [`SOCIAL_CONTENT_ENGINE.md`](SOCIAL_CONTENT_ENGINE.md) | How PRN social content is selected, structured and created |
| [`VIDEO_STYLE_GUIDE.md`](VIDEO_STYLE_GUIDE.md) | Video production style and standards |
| [`VIDEO_EXPORT_AND_PLAYBACK_LOCK.md`](VIDEO_EXPORT_AND_PLAYBACK_LOCK.md) | Mandatory in-chat MP4 compatibility, playback QA, audio and animated-closeout rules |
| [`SOCIAL_PROMPT_LIBRARY.md`](SOCIAL_PROMPT_LIBRARY.md) | Reusable prompts, templates and build instructions |
| [`PUBLISHING_WORKFLOW.md`](PUBLISHING_WORKFLOW.md) | Approval, GitHub asset upload, Postiz ingestion, duplicate checking and publishing |

## Asset locations

| Directory | Contents |
| --- | --- |
| [`assets/images/`](assets/images/) | Approved and reusable image assets |
| [`assets/videos/`](assets/videos/) | Approved and reusable video assets |

---

## Operating rules — non-negotiable

- **Greg's explicit approval and instruction control publication.**
- **Creating content is not permission to publish it.**
- **Generating media is not permission to publish it.**
- **Uploading media to this repository is not permission to publish it.**
- For every PRN social-video task, agents must read and obey
  [`VIDEO_EXPORT_AND_PLAYBACK_LOCK.md`](VIDEO_EXPORT_AND_PLAYBACK_LOCK.md) before delivery.
- Agents **upload approved assets automatically**. Greg is **not** the media-transfer layer —
  he must never be asked to download, drag, re-upload or hand-carry files between services.
- Public GitHub **raw URLs** are the ingestion mechanism for Postiz.
- Postiz must be **verified to hold the real media asset** before any publication.
- **Duplicate checks are mandatory** immediately before publication.
- Failed or uncertain publication attempts must **not** be blindly retried — inspect the
  destination state first.
- **No secrets, tokens, API keys or passwords belong in this repository.** It is public.

### Mandatory Facebook and TikTok caption rule

Unless Greg explicitly overrides it for a particular post, every new Facebook and TikTok caption
must contain both of these elements:

- The standalone CTA `Link in bio.`
- The hashtag `#FYP`

Each must appear **exactly once**. Check case-insensitively before adding them so neither is
duplicated. Facebook captions must also retain the exact clickable PRN destination URL; `Link in
bio.` is an additional CTA, not a replacement for that URL. This rule does not automatically apply
to Instagram, YouTube, Bluesky or LinkedIn.

---

## Media handoff — how an agent publishes an asset

Approved media is committed to `assets/videos/` or `assets/images/`, then served from:

```
https://raw.githubusercontent.com/gilly1024/prn-social-media-assets/main/<path>
```

This URL requires **no authentication** and is fetchable by Postiz directly.

**Verified working** — see `assets/videos/claude-upload-proof.mp4`, uploaded by an AI agent via the
authenticated GitHub Contents API and fetched back unauthenticated as byte-identical MP4 bytes.

**Known characteristic:** `raw.githubusercontent.com` serves all files with
`Content-Type: application/octet-stream`, never `video/mp4`. This is GitHub's deliberate
anti-XSS behaviour. The bytes are correct and the file is a valid MP4; any consumer that
insists on a `video/*` content-type header must sniff the file body instead. Confirm Postiz
has accepted the real asset before publishing.
