"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Cormorant_Garamond, Inter } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const text = {
  en: {
    main: "Main",
    about: "About",
    name: "Nemesio Gil",
    subtitle: "Writer / Director / Scholar",
    cv: "CV",
    theater: "THEATER",
    film: "CINEMATIC NARRATIVES",
  },
  it: {
    main: "Home",
    about: "Profilo",
    name: "Nemesio Gil",
    subtitle: "Scrittore / Regista / Studioso",
    cv: "CV",
    theater: "TEATRO",
    film: "NARRATIVE CINEMATICHE",
  },
  es: {
    main: "Inicio",
    about: "Acerca de",
    name: "Nemesio Gil",
    subtitle: "Escritor / Director / Academico",
    cv: "CV",
    theater: "TEATRO",
    film: "NARRATIVAS CINEMATICAS",
  },
};

export default function Home() {
  const [lang, setLang] = useState<"en" | "it" | "es">("en");
  const t = text[lang];

  const cards = [
    {
      title: t.cv,
      href: "/cv",
      image: "/cv.jpg",
    },
    {
      title: t.theater,
      href: "/theater",
      image: "/theaters.jpg",
    },
    {
      title: t.film,
      href: "/film",
      image: "/films.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-[1900px] px-10 py-10">
        <header className="mb-16 flex items-center justify-between gap-10">
          <nav className={`${cormorant.className} flex items-center gap-10`}>
            <Link
              href="/"
              className="border-b border-white pb-1 text-3xl tracking-[0.1em]"
            >
              {t.main}
            </Link>

            <Link
              href="/about"
              className="text-3xl tracking-[0.1em] text-white/80 transition hover:text-white"
            >
              {t.about}
            </Link>
          </nav>

          <div className={`${inter.className} flex items-center gap-3 text-sm tracking-[0.2em]`}>
            <button
              onClick={() => setLang("en")}
              className={lang === "en" ? "text-white" : "text-white/40 hover:text-white"}
            >
              EN
            </button>
            <span className="text-white/25">/</span>
            <button
              onClick={() => setLang("it")}
              className={lang === "it" ? "text-white" : "text-white/40 hover:text-white"}
            >
              IT
            </button>
            <span className="text-white/25">/</span>
            <button
              onClick={() => setLang("es")}
              className={lang === "es" ? "text-white" : "text-white/40 hover:text-white"}
            >
              ES
            </button>
          </div>
        </header>

        <section className="mb-32 flex min-h-[50vh] items-center justify-center text-center">
          <div>
            <h1
              className={`${cormorant.className} text-6xl md:text-7xl tracking-[0.08em]`}
            >
              {t.name}
            </h1>

            <p
              className={`${inter.className} mt-5 text-sm uppercase tracking-[0.4em] text-white/60`}
            >
              {t.subtitle}
            </p>
          </div>
        </section>

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

        <footer className={`${inter.className} mt-24 space-y-3 pb-10`}>
          <p className="text-lg tracking-[0.08em]">ngilp2022@gmail.com</p>
          <p className="text-lg tracking-[0.08em]">+39 347 688 3545</p>
        </footer>
      </section>
    </main>
  );
}
