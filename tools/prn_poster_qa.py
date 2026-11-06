#!/usr/bin/env python3
"""Offline PRN poster/JPEG/QR acceptance; never generates, publishes or changes media."""
from __future__ import annotations
import argparse
import hashlib
import json
from pathlib import Path
from urllib.parse import urlsplit

MAX_BYTES=20_000_000
MIN_SIDE=600


def sha(path: Path) -> str:
    h=hashlib.sha256()
    with path.open("rb") as fh:
        for block in iter(lambda:fh.read(1024*1024),b""):
            h.update(block)
    return h.hexdigest()


def safe_file(path: str, root: Path) -> Path:
    raw=Path(path).expanduser()
    if raw.is_symlink():
        raise ValueError("linked source forbidden")
    p=raw.resolve(strict=True)
    if not p.is_relative_to(root.resolve()) or not p.is_file():
        raise ValueError("asset must be file inside authorised workspace")
    if not 0 < p.stat().st_size <= MAX_BYTES:
        raise ValueError("asset missing or too large")
    return p


def qr_decode_file(path: Path) -> str:
    try:
        import cv2
    except ImportError as exc:
        raise RuntimeError("OpenCV QR decoder unavailable; no QR pass possible") from exc
    img=cv2.imread(str(path))
    if img is None:
        raise ValueError("OpenCV could not read exported image")
    value,points,_=cv2.QRCodeDetector().detectAndDecode(img)
    return value.strip() if value and points is not None else ""


def check_poster(*,workspace:Path,poster:str,source_photo:str,official_logo:str,
                 expected_logo_sha256:str,expected_url:str,rights_cleared:bool,
                 qr_required:bool=True,minimum_width:int=1000) -> dict:
    """Validate the actual export and QR, but NOT visual authenticity of its content."""
    if rights_cleared is not True:
        raise PermissionError("rights/source approval required")
    root=Path(workspace).expanduser().resolve(strict=True)
    out=safe_file(poster,root)
    source=safe_file(source_photo,root)
    logo=safe_file(official_logo,root)
    if (len(expected_logo_sha256)!=64 or
            any(c not in "0123456789abcdef" for c in expected_logo_sha256)):
        raise ValueError("independently expected official logo SHA256 required")
    if sha(logo)!=expected_logo_sha256:
        raise ValueError("supplied logo file differs from expected official source")
    parsed=urlsplit(expected_url)
    if parsed.scheme!="https" or not parsed.netloc or parsed.username or parsed.password:
        raise ValueError("destination must be verified https URL")
    if out.suffix.lower() not in {".jpg",".jpeg"}:
        raise ValueError("poster print export must be JPEG")
    try:
        from PIL import Image
    except ImportError as exc:
        raise RuntimeError("Pillow unavailable; cannot inspect real poster") from exc
    with Image.open(out) as img:
        format_id=img.format
        width,height=img.size
        img.verify()
    if format_id!="JPEG":
        raise ValueError("file extension does not match actual JPEG bytes")
    if width<minimum_width or height<MIN_SIDE:
        raise ValueError("export is below print-resolution minimum")
    decoded=qr_decode_file(out) if qr_required else ""
    problems=[]
    if qr_required and decoded!=expected_url:
        problems.append("QR_NOT_SCANNABLE_OR_WRONG_DESTINATION")
    return {
        "schema_version":1,
        "decision":"PASS_QR_AND_EXPORT_ONLY" if not problems else "REJECT",
        "issues":problems, "poster_sha256":sha(out),
        "poster_pixels":[width,height],
        "source_photo_sha256":sha(source),
        "official_logo_source_sha256":sha(logo),
        "qr_required":qr_required,
        "decoded_qr_url":decoded, "expected_url":expected_url,
        "rights_self_declared":True,
        "real_venue_image_identity_human_verified":False,
        "actual_composited_logo_human_verified":False,
        "ready_to_publish":False, "published":False,
    }


def main(argv=None):
    p=argparse.ArgumentParser(description="Offline authentic-source QR/JPEG poster QA")
    p.add_argument("--workspace",required=True)
    p.add_argument("--poster",required=True)
    p.add_argument("--source-photo",required=True)
    p.add_argument("--official-logo",required=True)
    p.add_argument("--logo-sha256",required=True)
    p.add_argument("--expected-url",required=True)
    p.add_argument("--rights-cleared",action="store_true")
    p.add_argument("--out",required=True)
    p.add_argument("--minimum-width",type=int,default=1000)
    a=p.parse_args(argv)
    root=Path(a.workspace).expanduser().resolve(strict=True)
    output=Path(a.out).expanduser()
    if output.is_symlink() or output.exists():
        raise ValueError("refuse to overwrite existing QA receipt")
    target=output.resolve()
    if not target.is_relative_to(root) or target.suffix!=".json":
        raise ValueError("new JSON QA receipt must stay inside authorised workspace")
    result=check_poster(workspace=root,poster=a.poster,source_photo=a.source_photo,
                        official_logo=a.official_logo,expected_logo_sha256=a.logo_sha256,
                        expected_url=a.expected_url,rights_cleared=a.rights_cleared,
                        minimum_width=a.minimum_width)
    target.parent.mkdir(parents=True,exist_ok=True)
    target.write_text(json.dumps(result,indent=2)+"\n")
    print(target)
    return 0 if result["decision"]=="PASS_QR_AND_EXPORT_ONLY" else 2


if __name__=="__main__":
    raise SystemExit(main())
