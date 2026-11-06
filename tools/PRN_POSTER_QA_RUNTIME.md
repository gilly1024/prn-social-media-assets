# PRN poster/JPEG/QR quality check — runnable source

Owner-approved creative QA follow-through, 6 November 2026. The existing PRN Social Content Engine and Publishing Workflow remain authoritative. This optional offline tool **does not create a poster, edit source images, verify visually that a composite uses the official logo, check venue photo authenticity or publish anything.** It checks real exported JPEG bytes, dimensions, source-image SHA256 values and decodes the **actual** QR contained in the export.

## Existing workflow

1. Use only genuine, rights-cleared venue photography and the genuine official PRN logo from canonical assets. Independently obtain the expected SHA256 of the approved logo source (not from a user-submitted replacement).
2. Create the poster in approved editing software; do not ask an AI image generator to draw a QR code. Generate a real QR from the exact official ticket/event URL and embed it in the original editable design.
3. Supply the exported JPEG file, original authentic photo, approved logo source, independent logo hash and exact public URL to the QA tool. Require the actual QR decoded string to equal the intended URL.
4. Review the returned JSON. Only PASS_QR_AND_EXPORT_ONLY means JPEG metadata, source file hash and QR URL passed. It is **not** permission to publish. Human must still inspect actual logo and photograph, text layout and overlapping QR artwork, licensed photo credit, accessibility and media compatibility.
5. Retain the source SHA and results with the existing approved social asset handoff. Never overwrite existing output/receipts, upload source photos or publish automatically.

Example on an authorised local workspace with Pillow and OpenCV already installed (no package installation is performed by this tool):

    python3 tools/prn_poster_qa.py --workspace /safe/workspace \
      --poster /safe/workspace/poster.jpg --source-photo /safe/workspace/real-venue.jpg \
      --official-logo /safe/workspace/official-logo.png \
      --logo-sha256 INDEPENDENTLY_PINNED64HEX \
      --expected-url https://www.paranormalresponsenetwork.org/events/example \
      --rights-cleared --out /safe/workspace/receipts/poster-qa.json

The tool exits 2 when a QR is missing, unreadable or points at the wrong address; it refuses fake JPG extensions, low resolution, unapproved source rights, symlinks and wrong supplied official-logo source SHA. Source tests exercised 7 synthetic cases with a real QR PNG drawn into a true JPEG export, actual OpenCV QR decode and negative cases; no real public PRN poster tested in this PR.

**Current scope:** this QA supports owner-approved JPEG promotional posters. It does not integrate ChatGPT Images 2.6 into agent workflows, does not validate video/GIF playback, and does not satisfy real venue provenance automatically. Follow VIDEO_EXPORT_AND_PLAYBACK_LOCK.md for videos and publishing approval in PUBLISHING_WORKFLOW.md. No PRN source media or personal data leave the local workstation.