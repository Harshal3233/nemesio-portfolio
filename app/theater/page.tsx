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

const theaterWorks = [
  {
    title: "Hasta Que Las Suegras Nos Separen",
    role: "Director",
    videoUrl: "https://www.youtube.com/embed/XMPRRoWyVpA",
    description:
      "A family comedy production shaped through ensemble performance, comic timing, and stage direction.",
  },
  {
    title: "El Martes Salimos Para Marte",
    role: "Director",
    videoUrl: "https://www.youtube.com/embed/iqAV0eB_H2I",
    description:
      "A theatrical work driven by imaginative framing, movement, and a playful visual tone.",
  },
  {
    title: "Los Cascos de Rogelio",
    role: "Director",
    videoUrl: "https://www.youtube.com/embed/a3f-XbU_AN8",
    description:
      "A dynamic stage production centered on character-driven direction and theatrical rhythm.",
  },
];

const posters = [
  { title: "¿Preso Yo...? ¡Hum!", image: "/preso.jpg" },
  { title: "Los Cascos de Rogelio", image: "/rogelio.jpg" },
  { title: "Hasta Que Las Suegras Nos Separen", image: "/suegras.jpg" },
  { title: "Permiso... ¿Dónde Está El Baño?", image: "/permiso.jpg" },
  { title: "La Casa del Dr. Casado", image: "/casa.jpg" },
];

export default function TheaterPage() {
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
              href="/theater"
              className="border-b border-white pb-1 text-3xl tracking-[0.1em]"
            >
              Theater
            </Link>
          </nav>
        </header>

        <section className="mb-28 text-center">
          <h1
            className={`${cormorant.className} text-7xl tracking-[0.08em]`}
          >
            Theater
          </h1>
          <p
            className={`${inter.className} mt-6 text-sm uppercase tracking-[0.4em] text-white/50`}
          >
            Selected Productions
          </p>
        </section>

        <section className="space-y-28">
          {theaterWorks.map((work) => (
            <div
              key={work.title}
              className="grid items-center gap-12 xl:grid-cols-[1.2fr_0.9fr]"
            >
              <div className="overflow-hidden bg-neutral-950 shadow-[0_0_0_rgba(255,255,255,0)] transition duration-500 hover:shadow-[0_0_35px_rgba(255,255,255,0.08)]">
                <iframe
                  className="aspect-video w-full"
                  src={work.videoUrl}
                  title={work.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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

        <section className="mt-36">
          <h2
            className={`${cormorant.className} text-center text-5xl tracking-[0.08em]`}
          >
            Posters
          </h2>

          <div className="mt-20 grid place-items-center gap-20 md:grid-cols-2 xl:grid-cols-3">
            {posters.map((poster) => (
              <div
                key={poster.title}
                className="group flex flex-col items-center text-center"
              >
                <div className="w-[320px] h-[480px] overflow-hidden bg-neutral-950 shadow-[0_0_0_rgba(255,255,255,0)] transition duration-500 group-hover:shadow-[0_0_45px_rgba(255,210,120,0.22)]">
                  <Image
                    src={poster.image}
                    alt={poster.title}
                    width={900}
                    height={1200}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.06] group-hover:saturate-110 group-hover:contrast-105 group-hover:brightness-105"
                  />
                </div>

                <h3
                  className={`${cormorant.className} mt-6 text-2xl tracking-[0.08em] text-white/90 transition duration-500 group-hover:text-white`}
                >
                  {poster.title}
                </h3>
              </div>
            ))}
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