from pathlib import Path

files = [
    "app/page.tsx",
    "app/cv/page.tsx",
    "app/film/page.tsx",
]

output = Path("nemesio_current_code_dump.txt")

parts = []

for file in files:
    path = Path(file)
    parts.append("\n" + "=" * 90)
    parts.append(f"FILE: {file}")
    parts.append("=" * 90 + "\n")

    if path.exists():
        parts.append(path.read_text(encoding="utf-8"))
    else:
        parts.append(f"FILE NOT FOUND: {file}")

output.write_text("\n".join(parts), encoding="utf-8")

print("Created:", output)
print("Now open it and send me the content:")
print("notepad nemesio_current_code_dump.txt")
