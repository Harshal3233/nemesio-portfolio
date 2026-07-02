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
    cv: "CV",
    about: "About",
    heading: "About",
    subtitle: "Profile and Perspective",
    lead:
      "Nemesio Gil Pineda is an educator, writer, director, and visual culture scholar whose work moves between academic study, theatrical production, film language, and creative experimentation.",
    body1:
      "His practice brings together higher education, literature, performance, and media with a strong emphasis on storytelling, interdisciplinary thinking, and cultural interpretation. Across classrooms, stages, and creative projects, his work reflects a balance between intellectual rigor and artistic direction.",
    body2:
      "His portfolio includes theatrical productions in the Caribbean, academic work in literature and visual culture, and newer AI-assisted film explorations that extend his interest in image, structure, mood, and experimentation. The result is a body of work shaped by curiosity, communication, and the crossing of artistic and intellectual disciplines.",
  },
  it: {
    main: "Home",
    cv: "CV",
    about: "Profilo",
    heading: "Profilo",
    subtitle: "Profilo e Prospettiva",
    lead:
      "Nemesio Gil Pineda e un educatore, scrittore, regista e studioso della cultura visiva, il cui lavoro si muove tra ricerca accademica, produzione teatrale, linguaggio cinematografico e sperimentazione creativa.",
    body1:
      "La sua pratica unisce istruzione superiore, letteratura, performance e media, con una forte attenzione alla narrazione, al pensiero interdisciplinare e all'interpretazione culturale. Tra aule, palcoscenici e progetti creativi, il suo lavoro riflette un equilibrio tra rigore intellettuale e direzione artistica.",
    body2:
      "Il suo portfolio include produzioni teatrali nei Caraibi, lavoro accademico in letteratura e cultura visiva, e piu recenti esplorazioni cinematografiche assistite dall'intelligenza artificiale che ampliano il suo interesse per immagine, struttura, atmosfera e sperimentazione.",
  },
  es: {
    main: "Inicio",
    cv: "CV",
    about: "Acerca de",
    heading: "Acerca de",
    subtitle: "Perfil y Perspectiva",
    lead:
      "Nemesio Gil Pineda es educador, escritor, director y estudioso de la cultura visual, cuyo trabajo se mueve entre el estudio academico, la produccion teatral, el lenguaje cinematografico y la experimentacion creativa.",
    body1:
      "Su practica une la educacion superior, la literatura, la performance y los medios, con un fuerte enfasis en la narracion, el pensamiento interdisciplinario y la interpretacion cultural. En aulas, escenarios y proyectos creativos, su trabajo refleja un equilibrio entre rigor intelectual y direccion artistica.",
    body2:
      "Su portfolio incluye producciones teatrales en el Caribe, trabajo academico en literatura y cultura visual, y nuevas exploraciones cinematograficas asistidas por inteligencia artificial que amplian su interes por la imagen, la estructura, el ambiente y la experimentacion.",
  },
};

export default function AboutPage() {
  const [lang, setLang] = useState<"en" | "it" | "es">("en");
  const t = text[lang];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-[1800px] px-10 py-10">
        <header className="mb-16 flex items-center justify-between gap-10">
          <nav className={`${cormorant.className} flex items-center gap-12`}>
            <Link
              href="/"
              className="text-3xl tracking-[0.1em] text-white/70 transition hover:text-white"
            >
              {t.main}
            </Link>
            <Link
              href="/cv"
              className="text-3xl tracking-[0.1em] text-white/70 transition hover:text-white"
            >
              {t.cv}
            </Link>
            <Link
              href="/about"
              className="border-b border-white pb-1 text-3xl tracking-[0.1em]"
            >
              {t.about}
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

        <section className="mb-24 text-center">
          <h1 className={`${cormorant.className} text-7xl tracking-[0.08em]`}>
            {t.heading}
          </h1>
          <p className={`${inter.className} mt-6 text-sm uppercase tracking-[0.4em] text-white/50`}>
            {t.subtitle}
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
            <p className={`${cormorant.className} text-4xl leading-[1.4] tracking-[0.04em] text-white`}>
              {t.lead}
            </p>

            <div className={`${inter.className} mt-10 space-y-8 text-lg leading-9 text-white/75`}>
              <p>{t.body1}</p>
              <p>{t.body2}</p>
            </div>
          </div>
        </section>

        <footer className={`${inter.className} mt-28 space-y-3 pb-10 text-center`}>
          <p className="text-lg tracking-[0.08em]">ngilp2022@gmail.com</p>
          <p className="text-lg tracking-[0.08em]">+39 347 688 3545</p>
        </footer>
      </section>
    </main>
  );
}
