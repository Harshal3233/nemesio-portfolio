from pathlib import Path
from datetime import datetime

path = Path("app/film/page.tsx")
stamp = datetime.now().strftime("%Y%m%d-%H%M%S")

backup = path.with_suffix(path.suffix + f".before-black-sheep-video-{stamp}.bak")
backup.write_text(path.read_text(encoding="utf-8"), encoding="utf-8")
print("Backup created:", backup)

old_links = [
    'https://drive.google.com/file/d/1-9A4g6UvaphbcYkc2LI_Qk36G9ajJBFJ/preview',
    'https://drive.google.com/file/d/1zR8sR9HN6WvfKncQtAQUgRakLA6hpSYU/preview',
]

new_link = 'https://drive.google.com/file/d/11Sini8ql4AUiOdZBj54ceYiSc8u6WLTG/preview'

text = path.read_text(encoding="utf-8")

changed = False
for old in old_links:
    if old in text:
        text = text.replace(old, new_link)
        changed = True

if changed:
    path.write_text(text, encoding="utf-8")
    print("BLACK SHEEP video updated.")
else:
    print("No old BLACK SHEEP video link found. Send me app/film/page.tsx if needed.")
