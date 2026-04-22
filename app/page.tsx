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

const cards = [
  {
    title: "CV",
    href: "/cv",
    image: "/cv.jpg",
  },
  {
    title: "THEATER",
    href: "/theater",
    image: "/theaters.jpg",
  },
  {
    title: "FILM CREATIONS",
    href: "/film",
    image: "/films.jpg",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-[1900px] px-10 py-10">

        {/* NAV */}
        <header className="mb-16 flex items-center gap-10">
          <nav className={`${cormorant.className} flex items-center gap-10`}>
            <Link
              href="/"
              className="border-b border-white pb-1 text-3xl tracking-[0.1em]"
            >
              Main
            </Link>

            <Link
              href="/about"
              className="text-3xl tracking-[0.1em] text-white/80 transition hover:text-white"
            >
              About
            </Link>
          </nav>
        </header>

        {/* HERO */}
        <section className="mb-32 flex min-h-[50vh] items-center justify-center text-center">
          <div>
            <h1
              className={`${cormorant.className} text-6xl md:text-7xl tracking-[0.08em]`}
            >
              Nemesio Gil
            </h1>

            <p
              className={`${inter.className} mt-5 text-sm uppercase tracking-[0.4em] text-white/60`}
            >
              Filmmaker / Creator
            </p>
          </div>
        </section>

        {/* CARDS */}
        <section className="grid gap-16 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card) => (
            <Link key={card.title} href={card.href} className="group block">
              <div className="overflow-hidden bg-neutral-950">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={900}
                  height={1200}
                  className="h-[520px] w-full object-cover transition duration-500 group-hover:scale-[1.03] group-hover:opacity-90"
                />
              </div>

              <h2
                className={`${cormorant.className} mt-6 text-center text-2xl tracking-[0.15em] text-white/90 transition group-hover:text-white`}
              >
                {card.title}
              </h2>
            </Link>
          ))}
        </section>

        {/* FOOTER */}
        <footer className={`${inter.className} mt-24 space-y-3 pb-10`}>
          <p className="text-lg tracking-[0.08em]">ngilp2022@gmail.com</p>
          <p className="text-lg tracking-[0.08em]">+39 347 688 3545</p>
        </footer>

      </section>
    </main>
  );
}