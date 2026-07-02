from pathlib import Path

path = Path("app/about/page.tsx")
text = path.read_text(encoding="utf-8")

target = """                Over the years, he has worked across university teaching,
                mentorship, theater direction, and writing, building a profile that
                is both academic and production-oriented. This dual perspective
                allows him to approach creative work with analytical depth, and
                scholarly work with a strong visual and narrative sensibility.
"""

if target not in text:
    raise SystemExit("Target paragraph not found. No changes made.")

text = text.replace(target, "", 1)
path.write_text(text, encoding="utf-8")

print("Removed ABOUT paragraph successfully.")
