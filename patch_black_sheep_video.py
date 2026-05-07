from pathlib import Path
from datetime import datetime

path = Path("app/film/page.tsx")
stamp = datetime.now().strftime("%Y%m%d-%H%M%S")

backup = path.with_suffix(path.suffix + f".before-black-sheep-video-{stamp}.bak")
backup.write_text(path.read_text(encoding="utf-8"), encoding="utf-8")
print("Backup created:", backup)

old = 'embedUrl: "https://drive.google.com/file/d/1zR8sR9HN6WvfKncQtAQUgRakLA6hpSYU/preview"'
new = 'embedUrl: "https://drive.google.com/file/d/1-9A4g6UvaphbcYkc2LI_Qk36G9ajJBFJ/preview"'

text = path.read_text(encoding="utf-8")

if old not in text:
    print("Old BLACK SHEEP embed not found. No change made.")
else:
    text = text.replace(old, new)
    path.write_text(text, encoding="utf-8")
    print("BLACK SHEEP video updated.")
