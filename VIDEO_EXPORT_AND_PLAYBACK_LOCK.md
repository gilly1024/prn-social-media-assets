# PRN VIDEO EXPORT AND PLAYBACK LOCK

**Owner:** Greg Pickersgill  
**Status:** CURRENT / MANDATORY  
**Effective:** 2026-09-08  
**Applies to:** ChatGPT, Claude, Codex, Higgsfield-assisted workflows, FFmpeg/local editors, Postiz handoff and any future PRN social-video agent

Greg's latest direct instruction always overrides this file.

---

## Purpose

This file exists because otherwise-valid PRN social videos were delivered into ChatGPT in MP4 variants that opened as a black player for Greg. The failure was not the artwork; it was playback compatibility and delivery QA.

Every future PRN social video must therefore pass both a **creative QA gate** and an **in-chat playback QA gate** before Greg receives it.

---

## 1. Default social-video master for in-chat review

Unless Greg explicitly requests a different technical format, export the review copy as:

- container: MP4
- video codec: H.264 / AVC
- H.264 profile: Constrained Baseline
- H.264 level: 3.1
- pixel format: yuv420p
- resolution: 720 × 1280
- aspect ratio: 9:16
- frame rate: 30 fps
- audio codec: AAC-LC
- audio: stereo
- audio bitrate: about 128–160 kb/s
- MP4 metadata: `faststart` / moov atom at the beginning
- no B-frames where the encoder permits it

Do **not** use H.264 Level 3.0 for 720 × 1280 at 30 fps. That combination triggered a level-limit warning and was associated with a black in-chat player in the 8 September 2026 Boswell House test.

A higher-resolution archival or upload master may also be retained, but Greg's in-chat review copy must use a format proven to play reliably in ChatGPT unless a later direct instruction replaces this lock.

---

## 2. Mandatory playback QA before delivery

Before sending any video link to Greg:

1. Decode the exported MP4 locally.
2. Extract or inspect at least:
   - one frame near the beginning;
   - one frame from the middle;
   - one frame during/following the closeout.
3. Confirm each decoded frame is non-black and visually correct.
4. Confirm the MP4 reports:
   - H.264 video;
   - 720 × 1280;
   - 30 fps;
   - AAC audio;
   - expected runtime.
5. Confirm the file exists at the exact path used in the final clickable sandbox link.
6. Give Greg **one direct clickable MP4 link** as the primary deliverable. Do not replace the requested video with PNGs, cards, GIFs or alternate formats unless he explicitly asks.

A successful encode is not enough. The actual exported file must be decoded and checked.

---

## 3. Creative motion rule

PRN short social assets are videos, not moving posters.

For the current short-advert lane, target about **5 seconds** by default and remain **under 10 seconds** unless Greg directs otherwise.

The main subject must have purposeful cinematic motion appropriate to the topic, such as:

- restrained camera push or drift;
- believable depth/parallax;
- subtle practical-light changes;
- environmental motion that is realistic and justified;
- research/interface motion where relevant;
- equipment behaviour that reflects the actual device.

Do not add fake or low-quality rain, snow, smoke, paranormal apparitions or other effects simply to create movement.

---

## 4. Mandatory closeout structure

The approved current closeout pattern is:

**main subject motion → main subject fades out → animated PRN logo reveal fades in → exact topic/title + full website + exact PRN destination**

The closeout must:

- feel like part of the edit, not a card pasted on afterwards;
- use the genuine PRN logo / authorised logo treatment;
- reveal the logo cleanly and cinematically;
- show `PARANORMALRESPONSENETWORK.ORG` in full, including `.ORG`;
- show the exact case/article/equipment/research route or clear section/topic destination;
- keep all critical text inside safe zones;
- remain visible long enough to read;
- contain no cropped title, missing `.ORG`, visible compositing box or fake/rebuilt logo.

---

## 5. Audio rule — mandatory

Audio must be chosen for the **specific subject**, not copied from another advert or added as generic paranormal noise.

### Case Archive / location videos
Use restrained, believable atmosphere that fits the location and visual. Examples may include room tone, exterior night ambience, distant wind, subtle building texture or a low cinematic bed when justified.

Do **not** use:

- TV static;
- radio scan noise;
- arbitrary electronic hiss;
- silly end bleeps;
- comedy spooky effects;
- screams or jump-scare hits;
- synthetic paranormal voices.

### Equipment videos
Operational/static/sweep sounds are allowed only when they genuinely correspond to the actual equipment being featured and cannot be mistaken for evidence.

### Research / methodology videos
Use restrained analytical/documentary sound design rather than horror-coded audio.

The Boswell House 8 September 2026 audio test is explicitly **REJECTED** because it used static/TV-like noise and an inappropriate electronic bleep at the close.

---

## 6. Delivery rule

When Greg asks to see a video in ChatGPT:

- give the actual video, not a still;
- provide a clickable `sandbox:/mnt/data/...mp4` link;
- do not redirect him to Google Drive unless he specifically asks for Drive;
- do not offer multiple technical formats unless the primary MP4 fails and Greg asks for alternatives;
- do not make Greg repeat the request to receive the actual video.

---

## 7. Definition of done

A PRN social video is not ready to show Greg until all of the following are true:

- the subject and story have a clear purpose tied to a real PRN page;
- the motion is cinematic and relevant;
- the audio is relevant and not generic filler;
- the main subject fades out into the approved animated PRN closeout;
- the exact PRN destination is fully readable;
- the MP4 matches the compatibility lock above;
- beginning, middle and end frames have been decoded and visually inspected;
- the final clickable in-chat video link has been checked against the actual file path.

If any of these fail, fix the video before delivery.
