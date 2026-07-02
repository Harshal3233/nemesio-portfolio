"use client";

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
    film: "Film",
    heading: "Cinematic Narratives",
    subtitle: "Generative Previs / Motion Study",
    works: [
      {
        title: "BLACK SHEEP",
        video: "/blacksheep.mp4",
        description:
          "A film narrative exploring mood, tone, and cinematic experimentation through a contemporary generative previs and motion study.",
      },
      {
        title: "VAMPIRO",
        video: "/vampiro.mp4",
        description:
          "A film narrative exploring atmosphere, tension, and visual experimentation through contemporary generative cinematic language.",
      },
      {
        title: "BLU",
        video: "/blu.mp4",
        description:
          "A film narrative exploring atmosphere, visual storytelling, and contemporary generative image and motion design.",
      },
      {
        title: "THE WINDS",
        video: "/thewinds.mp4",
        description:
          "A film narrative built through a generative creative workflow, combining visual concept development with experimental cinematic form.",
      },
    ],
  },
  it: {
    main: "Home",
    about: "Profilo",
    film: "Cinema",
    heading: "Narrative Cinematiche",
    subtitle: "Previs Generativa / Studio del Movimento",
    works: [
      {
        title: "BLACK SHEEP",
        video: "/blacksheep.mp4",
        description:
          "Una narrazione cinematografica che esplora atmosfera, tono e sperimentazione visiva attraverso un processo contemporaneo di previs generativa e studio del movimento.",
      },
      {
        title: "VAMPIRO",
        video: "/vampiro.mp4",
        description:
          "Una narrazione cinematografica che esplora atmosfera, tensione e sperimentazione visiva attraverso un linguaggio cinematografico generativo contemporaneo.",
      },
      {
        title: "BLU",
        video: "/blu.mp4",
        description:
          "Una narrazione cinematografica che esplora atmosfera, racconto visivo e design contemporaneo di immagine e movimento generativo.",
      },
      {
        title: "THE WINDS",
        video: "/thewinds.mp4",
        description:
          "Una narrazione cinematografica costruita attraverso un flusso creativo generativo, combinando sviluppo visivo del concetto e forma cinematografica sperimentale.",
      },
    ],
  },
  es: {
    main: "Inicio",
    about: "Acerca de",
    film: "Cine",
    heading: "Narrativas Cinematicas",
    subtitle: "Previs Generativa / Estudio de Movimiento",
    works: [
      {
        title: "BLACK SHEEP",
        video: "/blacksheep.mp4",
        description:
          "Una narrativa cinematografica que explora ambiente, tono y experimentacion visual mediante un proceso contemporaneo de previs generativa y estudio de movimiento.",
      },
      {
        title: "VAMPIRO",
        video: "/vampiro.mp4",
        description:
          "Una narrativa cinematografica que explora atmosfera, tension y experimentacion visual mediante un lenguaje cinematografico generativo contemporaneo.",
      },
      {
        title: "BLU",
        video: "/blu.mp4",
        description:
          "Una narrativa cinematografica que explora atmosfera, relato visual y diseno contemporaneo de imagen y movimiento generativo.",
      },
      {
        title: "THE WINDS",
        video: "/thewinds.mp4",
        description:
          "Una narrativa cinematografica construida mediante un flujo creativo generativo, combinando desarrollo visual del concepto y forma cinematografica experimental.",
      },
    ],
  },
};

export default function FilmPage() {
  const [lang, setLang] = useState<"en" | "it" | "es">("en");
  const t = text[lang];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-[1800px] px-10 py-10">
        <header className="mb-16 flex items-center justify-between gap-10">
          <nav className={`${cormorant.className} flex items-center gap-12`}>
            <Link href="/" className="text-3xl tracking-[0.1em] text-white/70 transition hover:text-white">
              {t.main}
            </Link>
            <Link href="/about" className="text-3xl tracking-[0.1em] text-white/70 transition hover:text-white">
              {t.about}
            </Link>
            <Link href="/film" className="border-b border-white pb-1 text-3xl tracking-[0.1em]">
              {t.film}
            </Link>
          </nav>

          <div className={`${inter.className} flex items-center gap-3 text-sm tracking-[0.2em]`}>
            <button onClick={() => setLang("en")} className={lang === "en" ? "text-white" : "text-white/40 hover:text-white"}>EN</button>
            <span className="text-white/25">/</span>
            <button onClick={() => setLang("it")} className={lang === "it" ? "text-white" : "text-white/40 hover:text-white"}>IT</button>
            <span className="text-white/25">/</span>
            <button onClick={() => setLang("es")} className={lang === "es" ? "text-white" : "text-white/40 hover:text-white"}>ES</button>
          </div>
        </header>

        <section className="mb-28 text-center">
          <h1 className={`${cormorant.className} text-7xl tracking-[0.08em]`}>
            {t.heading}
          </h1>
          <p className={`${inter.className} mt-6 text-sm uppercase tracking-[0.4em] text-white/50`}>
            {t.subtitle}
          </p>
        </section>

        <section className="space-y-28">
          {t.works.map((work) => (
            <div key={work.title} className="grid items-center gap-12 xl:grid-cols-[1.2fr_0.9fr]">
              <div className="overflow-hidden bg-neutral-950 shadow-[0_0_0_rgba(255,255,255,0)] transition duration-500 hover:shadow-[0_0_35px_rgba(255,255,255,0.08)]">
                <video className="aspect-video w-full" controls playsInline preload="metadata">
                  <source src={work.video} type="video/mp4" />
                </video>
              </div>

              <div>
                <h2 className={`${cormorant.className} mt-4 text-4xl tracking-[0.06em]`}>
                  {work.title}
                </h2>

                <p className={`${inter.className} mt-6 max-w-xl leading-8 text-white/75`}>
                  {work.description}
                </p>
              </div>
            </div>
          ))}
        </section>

        <footer className={`${inter.className} mt-28 space-y-3 pb-10 text-center`}>
          <p className="text-lg tracking-[0.08em]">ngilp2022@gmail.com</p>
          <p className="text-lg tracking-[0.08em]">+39 347 688 3545</p>
        </footer>
      </section>
    </main>
  );
}
