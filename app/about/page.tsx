import Image from "next/image";
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

export default function AboutPage() {
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
              href="/cv"
              className="text-3xl tracking-[0.1em] text-white/70 transition hover:text-white"
            >
              CV
            </Link>
            <Link
              href="/about"
              className="border-b border-white pb-1 text-3xl tracking-[0.1em]"
            >
              About
            </Link>
          </nav>
        </header>

        <section className="mb-24 text-center">
          <h1 className={`${cormorant.className} text-7xl tracking-[0.08em]`}>
            About
          </h1>
          <p
            className={`${inter.className} mt-6 text-sm uppercase tracking-[0.4em] text-white/50`}
          >
            Profile and Perspective
          </p>
        </section>

        <section className="grid items-start gap-16 xl:grid-cols-[0.95fr_1.05fr]">
          <div className="overflow-hidden bg-neutral-950">
            <Image
              src="/nemesio.jpg"
              alt="Nemesio Gil Pineda"
              width={1200}
              height={1500}
              className="w-full object-cover"
            />
          </div>

          <div className="max-w-4xl">
            <p
              className={`${cormorant.className} text-4xl leading-[1.4] tracking-[0.04em] text-white`}
            >
              Nemesio Gil Pineda is an educator, writer, director, and visual
              culture scholar whose work moves between academic study, theatrical
              production, film language, and creative experimentation.
            </p>

            <div
              className={`${inter.className} mt-10 space-y-8 text-lg leading-9 text-white/75`}
            >
              <p>
                His practice brings together higher education, literature,
                performance, and media with a strong emphasis on storytelling,
                interdisciplinary thinking, and cultural interpretation. Across
                classrooms, stages, and creative projects, his work reflects a
                balance between intellectual rigor and artistic direction.
              </p>

              <p>
                Over the years, he has worked across university teaching,
                mentorship, theater direction, and writing, building a profile
                that is both academic and production-oriented. This dual
                perspective allows him to approach creative work with analytical
                depth, and scholarly work with a strong visual and narrative
                sensibility.
              </p>

              <p>
                His portfolio includes theatrical productions in the Caribbean,
                academic work in literature and visual culture, and newer
                AI-assisted film explorations that extend his interest in image,
                structure, mood, and experimentation. The result is a body of
                work shaped by curiosity, communication, and the crossing of
                artistic and intellectual disciplines.
              </p>
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