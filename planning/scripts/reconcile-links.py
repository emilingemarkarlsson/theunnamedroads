#!/usr/bin/env python3
"""Weekly venture link audit for theunnamedroads.com (TUR-91)."""

from __future__ import annotations

import json
import re
import ssl
import urllib.error
import urllib.request
from pathlib import Path

BASE = "https://www.theunnamedroads.com"
ROOT = Path(__file__).resolve().parents[2]
STRUCTURE = ROOT / "src/content/homepage/structure.json"
PROJECTS = ROOT / "src/content/projects"

ctx = ssl.create_default_context()


def fetch(url: str) -> int:
    req = urllib.request.Request(url, method="GET", headers={"User-Agent": "TUR-link-audit/1.0"})
    try:
        with urllib.request.urlopen(req, context=ctx, timeout=20) as resp:
            return resp.status
    except urllib.error.HTTPError as e:
        return e.code
    except Exception:
        return 0


def abs_url(href: str) -> str:
    if href.startswith("http"):
        return href
    if href.startswith("/"):
        return BASE + href
    return BASE + "/" + href


def main() -> int:
    data = json.loads(STRUCTURE.read_text())
    urls: list[tuple[str, str]] = []
    for company in data["ventures"]["companies"]:
        href = company.get("href")
        if href:
            urls.append((f"homepage:{company['id']}", abs_url(href)))

    for md in sorted(PROJECTS.glob("*.md")):
        text = md.read_text()
        m = re.search(r"^url:\s*(.+)$", text, re.M)
        if m:
            url = m.group(1).strip().strip("'\"")
            if url:
                urls.append((f"project:{md.stem}", abs_url(url)))
        hm = re.search(r"href:\s*(.+)$", text, re.M)
        if hm:
            href = hm.group(1).strip().strip("'\"")
            if href and href.startswith("http"):
                urls.append((f"project-home:{md.stem}", href))

    # core positioning pages
    for path in [
        "/",
        "/projects",
        "/insights/ai-native-venture-studio-operating-system",
        "/insights/focus-monitor-parked",
        "/insights/agency-vs-venture-studio-vs-incubator",
        "/services/ai-native-venture-studio",
        "/resources/ai-native-distribution-playbook",
    ]:
        urls.append((f"core:{path}", BASE + path))

    seen: set[str] = set()
    failures = 0
    for label, url in urls:
        if url in seen:
            continue
        seen.add(url)
        code = fetch(url)
        ok = 200 <= code < 400
        status = "OK" if ok else "FAIL"
        if not ok:
            failures += 1
        print(f"{status}\t{code}\t{label}\t{url}")

    print(f"\nChecked {len(seen)} unique URLs · failures={failures}")
    return 1 if failures else 0


if __name__ == "__main__":
    raise SystemExit(main())
