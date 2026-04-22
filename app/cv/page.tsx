import Link from "next/link";
import { Cormorant_Garamond, Inter } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const experience = [
  {
    period: "2023 — 2025",
    title: "Director / Professor of Theater Arts",
    place: "Sky Kingdom / Lanza Arts School",
    points: [
      "Directed and supervised multiple theater productions.",
      "Oversaw artistic and technical coordination with production teams.",
      "Taught writing, directing, and acting.",
    ],
  },
  {
    period: "2019 — 2022",
    title: "Assistant Professor of Languages and Literature",
    place: "Bard Early College, New Orleans",
    points: [
      "Taught in an associates degree program for high school students.",
      "Led first-year college experience and mentorship.",
      "Delivered interdisciplinary instruction across literature, writing, and visual culture.",
    ],
  },
  {
    period: "2011 — 2019",
    title: "Adjunct Professor of English",
    place: "University of Puerto Rico, Río Piedras Campus",
    points: [
      "Taught undergraduate film, English literature, theory, writing, and visual culture.",
      "Worked across intermediate and advanced levels.",
    ],
  },
];

const education = [
  "Master in Media and Entertainment, Rome Business School, 2026 (in progress)",
  "PhD in English (Literature and Visual Culture), University of Puerto Rico, 2016",
  "MA in English (Film and Literature), University of Puerto Rico, 2003",
  "BFA in Film Production, Art Center College of Design, 1992",
];

const languages = [
  "English — Native",
  "Spanish — Native",
  "French — B2",
  "Portuguese — B2",
  "Italian — B1 (in progress)",
  "German — A2",
];

const skills = [
  "Academic Writing",
  "Film and Media Analysis",
  "Theatre Direction",
  "Visual Culture Studies",
  "Research and Mentorship",
  "Final Draft 12",
  "Microsoft Office Suite",
  "Apple Suite",
  "Canvas",
];

const awards = [
  "Professor of the Year Award, Bard Early College, 2022",
  "Simon’s Rock Early College Research Institute Fellow, 2021 — 2022",
  "Outstanding Class Recognition, Caribbean Literature, 2020",
  "Joan Fayer Award, Outstanding Graduate Student, 2016",
];

export default function CVPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-[1800px] px-10 py-24">
        <header className="mb-16 flex items-center justify-center">
          <nav className={`${cormorant.className} flex items-center gap-12`}>
            <Link
              href="/"
              className="text-3xl tracking-[0.1em] text-white/70 transition hover:text-white"
            >
              Main
            </Link>
            <Link
              href="/cv"
              className="border-b border-white pb-1 text-3xl tracking-[0.1em]"
            >
              CV
            </Link>
            <Link
              href="/about"
              className="text-3xl tracking-[0.1em] text-white/70 transition hover:text-white"
            >
              About
            </Link>
          </nav>
        </header>

        <section className="mb-24 text-center">
          <h1 className={`${cormorant.className} text-7xl tracking-[0.08em]`}>
            Curriculum Vitae
          </h1>
          <p
            className={`${inter.className} mt-6 text-sm uppercase tracking-[0.4em] text-white/50`}
          >
            Academic and Creative Profile
          </p>
        </section>

        <section className="mx-auto mb-24 max-w-5xl text-center">
          <h2 className={`${cormorant.className} text-5xl tracking-[0.08em]`}>
            Nemesio Gil Pineda
          </h2>
          <p className={`${inter.className} mt-8 leading-8 text-white/75`}>
            Educator, writer, director, and visual culture scholar working across
            higher education, theater, film, literature, and media. His work
            bridges academic rigor and creative practice through teaching,
            directing, mentorship, multilingual communication, and
            interdisciplinary cultural analysis.
          </p>
        </section>

        <section className="grid gap-20 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-20">
            <div>
              <h2
                className={`${cormorant.className} mb-8 border-b border-white/20 pb-3 text-4xl tracking-[0.12em]`}
              >
                Experience
              </h2>

              <div className="space-y-16">
                {experience.map((item) => (
                  <div key={item.title}>
                    <p
                      className={`${inter.className} text-xs uppercase tracking-[0.35em] text-white/50`}
                    >
                      {item.period}
                    </p>

                    <h3
                      className={`${cormorant.className} mt-4 text-4xl tracking-[0.06em]`}
                    >
                      {item.title}
                    </h3>

                    <p className={`${inter.className} mt-3 text-white/60`}>
                      {item.place}
                    </p>

                    <ul
                      className={`${inter.className} mt-6 space-y-3 leading-8 text-white/75`}
                    >
                      {item.points.map((point) => (
                        <li key={point}>• {point}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2
                className={`${cormorant.className} mb-8 border-b border-white/20 pb-3 text-4xl tracking-[0.12em]`}
              >
                Education
              </h2>

              <ul
                className={`${inter.className} space-y-4 leading-8 text-white/75`}
              >
                {education.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-20">
            <div>
              <h2
                className={`${cormorant.className} mb-8 border-b border-white/20 pb-3 text-4xl tracking-[0.12em]`}
              >
                Languages
              </h2>

              <ul
                className={`${inter.className} space-y-4 leading-8 text-white/75`}
              >
                {languages.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2
                className={`${cormorant.className} mb-8 border-b border-white/20 pb-3 text-4xl tracking-[0.12em]`}
              >
                Skills
              </h2>

              <ul
                className={`${inter.className} space-y-4 leading-8 text-white/75`}
              >
                {skills.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2
                className={`${cormorant.className} mb-8 border-b border-white/20 pb-3 text-4xl tracking-[0.12em]`}
              >
                Recognition
              </h2>

              <ul
                className={`${inter.className} space-y-4 leading-8 text-white/75`}
              >
                {awards.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <footer
          className={`${inter.className} mt-28 space-y-3 pb-10 text-center`}
        >
          <p className="text-lg tracking-[0.08em]">ngilp2022@gmail.com</p>
          <p className="text-lg tracking-[0.08em]">+39 347 688 3545</p>
        </footer>
      </section>
    </main>
  );
}