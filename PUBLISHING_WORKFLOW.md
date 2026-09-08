# PRN Publishing Workflow — CANONICAL

Applies to every AI agent (ChatGPT, Claude, or any successor) performing PRN social-media work.

---

## The permanent workflow

```text
Greg requests content
→ ChatGPT / Claude creates content
→ Greg reviews and approves it
→ agent uploads approved asset to gilly1024/prn-social-media-assets
→ agent obtains public raw HTTPS GitHub URL
→ agent verifies raw URL
→ Postiz ingests asset
→ agent verifies Postiz holds the real asset
→ agent checks whether the content has already been posted / scheduled
→ Greg's requested platforms are confirmed
→ Postiz publishes
→ agent verifies publication result
```

---

## Approval rules — absolute

- **Creating a post is not permission to publish it.**
- **Generating media is not permission to publish it.**
- **Uploading media to this repository is not permission to publish it.**
- **Greg retains publication control at all times.**
- **Publication requires Greg's explicit instruction.**
- Existing approved automation may operate **only** within the authority Greg has explicitly granted.
- Duplicate checking remains **mandatory**.
- Failed or uncertain posts must **not** be blindly retried.

## Greg is not the transfer layer

Greg must never be required to download generated media, upload it to GitHub, upload it to Postiz,
drag files between services, move files in Finder, or create public links. If an agent finds itself
about to ask Greg to move a file, the workflow has failed and the agent must fix the automation
instead.

---

## Step detail

### 1. Upload the approved asset
Commit the file to `assets/videos/` or `assets/images/` using authenticated GitHub tooling.
Proven mechanisms: GitHub Contents API with base64, git blob/tree/commit operations,
authenticated `git push`, or authenticated GitHub CLI. Do not use Git LFS.

### 2. Obtain and verify the raw URL
```
https://raw.githubusercontent.com/gilly1024/prn-social-media-assets/main/<path>
```
Do not assume the URL works because you constructed it. Fetch it **unauthenticated** and confirm:
HTTP 200 · correct byte size · real media magic bytes (not an HTML page) · checksum matches
the uploaded source.

Note: raw.githubusercontent.com always returns `Content-Type: application/octet-stream`.
This is expected and is not a failure.

### 3. Postiz ingestion
Pass the verified raw URL to Postiz's upload-from-URL mechanism. Postiz requires a publicly
fetchable URL — it will not accept raw bytes. **Confirm Postiz reports the media as hosted
on its own domain before continuing.** Never create a publishing job against an asset Postiz
has not confirmed it holds.

### 4. Duplicate check — mandatory
Immediately before publication, list existing posts and confirm this content has not already
been posted or scheduled. Include **scheduled** posts in the check, not only published ones.

### 5. Publish only on Greg's explicit instruction
Confirm the exact destination platforms with Greg. Then publish.

### 6. Verify the outcome
Confirm the publication result per platform and record the post ID and public URL.

## Failure handling

- A timeout or uncertain API response is **not proof of failure**.
- **Do not blindly retry** a publishing call.
- Check the destination platform / Postiz state **first** to establish what actually happened.
- Avoid uncontrolled retry loops. A duplicate live post is worse than a delayed one.
