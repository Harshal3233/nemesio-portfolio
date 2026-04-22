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

const filmWorks = [
  {
    title: "BLACK SHEEP TEASER 2",
    role: "Creator (AI-assisted)",
    embedUrl: "https://drive.google.com/file/d/1zR8sR9HN6WvfKncQtAQUgRakLA6hpSYU/preview",
    description:
      "An AI-assisted visual creation developed as a teaser piece, focused on mood, tone, and cinematic experimentation.",
  },
  {
    title: "BLU TEASER 2",
    role: "Creator (AI-assisted)",
    embedUrl: "https://drive.google.com/file/d/13A_AA0AViW1vrPodqTiLeAEOoNAccQkt/preview",
    description:
      "A film creation exploring atmosphere, visual storytelling, and contemporary AI-assisted image and motion design.",
  },
  {
    title: "JUNCOS TEASER 2",
    role: "Creator (AI-assisted)",
    embedUrl: "https://drive.google.com/file/d/1agcH9jUhzXeY_AEUAGzj8TJK1DaO6lWZ/preview",
    description:
      "A cinematic teaser built through AI-assisted creative workflow, combining visual concept development with experimental form.",
  },
];

export default function FilmPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-[1800px] px-10 py-10">
        <header className="mb-16 flex items-center justify-center">
          <nav className={`${cormorant.className} flex items-center gap-12`}>
            <Link
              href="/"
              className="text-3xl tracking-[0.1em] text-white/70 transition hover:text-white"
            >
              Main
            </Link>
            <Link
              href="/about"
              className="text-3xl tracking-[0.1em] text-white/70 transition hover:text-white"
            >
              About
            </Link>
            <Link
              href="/film"
              className="border-b border-white pb-1 text-3xl tracking-[0.1em]"
            >
              Film
            </Link>
          </nav>
        </header>

        <section className="mb-28 text-center">
          <h1 className={`${cormorant.className} text-7xl tracking-[0.08em]`}>
            Film Creations
          </h1>
          <p
            className={`${inter.className} mt-6 text-sm uppercase tracking-[0.4em] text-white/50`}
          >
            AI-assisted Works
          </p>
        </section>

        <section className="space-y-28">
          {filmWorks.map((work) => (
            <div
              key={work.title}
              className="grid items-center gap-12 xl:grid-cols-[1.2fr_0.9fr]"
            >
              <div className="overflow-hidden bg-neutral-950 shadow-[0_0_0_rgba(255,255,255,0)] transition duration-500 hover:shadow-[0_0_35px_rgba(255,255,255,0.08)]">
                <iframe
                  className="aspect-video w-full"
                  src={work.embedUrl}
                  title={work.title}
                  allow="autoplay"
                  allowFullScreen
                />
              </div>

              <div>
                <p
                  className={`${inter.className} text-xs uppercase tracking-[0.35em] text-white/50`}
                >
                  {work.role}
                </p>

                <h2
                  className={`${cormorant.className} mt-4 text-4xl tracking-[0.06em]`}
                >
                  {work.title}
                </h2>

                <p
                  className={`${inter.className} mt-6 max-w-xl leading-8 text-white/75`}
                >
                  {work.description}
                </p>
              </div>
            </div>
          ))}
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