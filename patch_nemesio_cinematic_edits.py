from pathlib import Path
from datetime import datetime

stamp = datetime.now().strftime("%Y%m%d-%H%M%S")

targets = [
    Path("app/page.tsx"),
    Path("app/cv/page.tsx"),
    Path("app/film/page.tsx"),
]

for path in targets:
    backup = path.with_suffix(path.suffix + f".before-cinematic-edits-{stamp}.bak")
    backup.write_text(path.read_text(encoding="utf-8"), encoding="utf-8")
    print("Backup created:", backup)

edits = {
    "app/page.tsx": [
        ('title: "FILM CREATIONS"', 'title: "CINEMATIC NARRATIVES"'),
        ("Filmmaker / Creator", "Writer / Director / Scholar"),
    ],
    "app/cv/page.tsx": [
        (
            "Educator, writer, director, and visual culture scholar working across",
            "Writer, director, and visual culture scholar working across",
        ),
    ],
    "app/film/page.tsx": [
        ("Film Creations", "Cinematic Narratives"),
        ("AI-assisted Works", "Generative Previs / Motion Study"),
        ('title: "BLACK SHEEP TEASER 2"', 'title: "BLACK SHEEP"'),
        ('title: "BLU TEASER 2"', 'title: "BLU"'),
        ('title: "JUNCOS TEASER 2"', 'title: "JUNCOS"'),
        ('role: "Creator (AI-assisted)"', 'role: ""'),
        (
            "An AI-assisted visual creation developed as a teaser piece, focused on mood, tone, and cinematic experimentation.",
            "A film narrative exploring mood, tone, and cinematic experimentation through a contemporary generative previs and motion study.",
        ),
        (
            "A film creation exploring atmosphere, visual storytelling, and contemporary AI-assisted image and motion design.",
            "A film narrative exploring atmosphere, visual storytelling, and contemporary generative image and motion design.",
        ),
        (
            "A cinematic teaser built through AI-assisted creative workflow, combining visual concept development with experimental form.",
            "A film narrative built through a generative creative workflow, combining visual concept development with experimental cinematic form.",
        ),
    ],
}

for file, replacements in edits.items():
    path = Path(file)
    text = path.read_text(encoding="utf-8")

    for old, new in replacements:
        if old not in text:
            print(f"Not found in {file}: {old}")
        text = text.replace(old, new)

    path.write_text(text, encoding="utf-8")
    print("Patched:", file)

print("Done. Now run npm run build")
