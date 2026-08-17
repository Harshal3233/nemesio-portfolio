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
    cv: "CV",
    about: "About",
    heading: "Curriculum Vitae",
    subtitle: "Academic and Creative Profile",
    name: "Nemesio Gil Pineda",
    intro:
      "Writer, director, and visual culture scholar working across higher education, theater, film, literature, and media. His work bridges academic rigor and creative practice through teaching, directing, mentorship, multilingual communication, and interdisciplinary cultural analysis.",
    experience: "Experience",
    education: "Education",
    languages: "Languages",
    skills: "Skills",
    recognition: "Recognition",
    exp: [
      {
        period: "2023 - 2025",
        title: "Director / Professor of Theater Arts",
        place: "Sky Kingdom / Lanza Arts School",
        points: [
          "Directed and supervised multiple theater productions.",
          "Oversaw artistic and technical coordination with production teams.",
          "Taught writing, directing, and acting.",
        ],
      },
      {
        period: "2019 - 2022",
        title: "Assistant Professor of Languages and Literature",
        place: "Bard Early College, New Orleans",
        points: [
          "Taught in an associates degree program for high school students.",
          "Led first-year college experience and mentorship.",
          "Delivered interdisciplinary instruction across literature, writing, and visual culture.",
        ],
      },
      {
        period: "2011 - 2019",
        title: "Adjunct Professor of English",
        place: "University of Puerto Rico, Rio Piedras Campus",
        points: [
          "Taught undergraduate film, English literature, theory, writing, and visual culture.",
          "Worked across intermediate and advanced levels.",
        ],
      },
    ],
    edu: [
      "Master in Media and Entertainment, Rome Business School, 2026 (in progress)",
      "PhD in English (Literature and Visual Culture), University of Puerto Rico, 2016",
      "MA in English (Film and Literature), University of Puerto Rico, 2003",
      "BFA in Film Production, Art Center College of Design, 1992",
    ],
    langList: [
      "English - Native",
      "Spanish - Native",
      "French - B2",
      "Portuguese - B2",
      "Italian - B1 (in progress)",
      "German - A2",
    ],
    skillList: [
      "Academic Writing",
      "Film and Media Analysis",
      "Theatre Direction",
      "Visual Culture Studies",
      "Research and Mentorship",
      "Final Draft 12",
      "Microsoft Office Suite",
      "Apple Suite",
      "Canvas",
    ],
    awards: [
      "Professor of the Year Award, Bard Early College, 2022",
      "Simon's Rock Early College Research Institute Fellow, 2021 - 2022",
      "Outstanding Class Recognition, Caribbean Literature, 2020",
      "Joan Fayer Award, Outstanding Graduate Student, 2016",
    ],
  },
  it: {
    main: "Home",
    cv: "CV",
    about: "Profilo",
    heading: "Curriculum Vitae",
    subtitle: "Profilo Accademico e Creativo",
    name: "Nemesio Gil Pineda",
    intro:
      "Sceneggiatore, regista e studioso della cultura visiva, attivo tra istruzione superiore, teatro, cinema, letteratura e media. Il suo lavoro collega rigore accademico e pratica creativa attraverso insegnamento, regia, mentoring, comunicazione multilingue e analisi culturale interdisciplinare.",
    experience: "Esperienza",
    education: "Formazione",
    languages: "Lingue",
    skills: "Competenze",
    recognition: "Riconoscimenti",
    exp: [
      {
        period: "2023 - 2025",
        title: "Direttore / Professore di Arti Teatrali",
        place: "Sky Kingdom / Lanza Arts School",
        points: [
          "Ha diretto e supervisionato diverse produzioni teatrali.",
          "Ha coordinato aspetti artistici e tecnici con i team di produzione.",
          "Ha insegnato scrittura, regia e recitazione.",
        ],
      },
      {
        period: "2019 - 2022",
        title: "Professore di Lingue e Letteratura",
        place: "Bard Early College, New Orleans",
        points: [
          "Ha insegnato in un programma universitario per studenti delle scuole superiori.",
          "Ha guidato percorsi di orientamento e mentoring accademico.",
          "Ha svolto insegnamento interdisciplinare tra letteratura, scrittura e cultura visiva.",
        ],
      },
      {
        period: "2011 - 2019",
        title: "Professore di Inglese",
        place: "University of Puerto Rico, Rio Piedras Campus",
        points: [
          "Ha insegnato cinema, letteratura inglese, teoria, scrittura e cultura visiva.",
          "Ha lavorato con corsi di livello intermedio e avanzato.",
        ],
      },
    ],
    edu: [
      "Master in Media and Entertainment, Rome Business School, 2026",
      "PhD in Inglese (Letteratura e Cultura Visiva), University of Puerto Rico, 2016",
      "MA in Inglese (Cinema e Letteratura), University of Puerto Rico, 2003",
      "BFA in Produzione Cinematografica, Art Center College of Design, 1992",
    ],
    langList: [
      "Inglese - Madrelingua",
      "Spagnolo - Madrelingua",
      "Francese - B2",
      "Portoghese - B2",
      "Italiano - B2",
      "Tedesco - A2",
    ],
    skillList: [
      "Scrittura accademica",
      "Analisi cinematografica e mediatica",
      "Regia teatrale",
      "Studi di cultura visiva",
      "Ricerca e mentoring",
      "Final Draft 12",
      "Microsoft Office Suite",
      "Apple Suite",
      "Canvas",
    ],
    awards: [
      "Professor of the Year Award, Bard Early College, 2022",
      "Simon's Rock Early College Research Institute Fellow, 2021 - 2022",
      "Outstanding Class Recognition, Caribbean Literature, 2020",
      "Joan Fayer Award, Outstanding Graduate Student, 2016",
    ],
  },
  es: {
    main: "Inicio",
    cv: "CV",
    about: "Acerca de",
    heading: "Curriculum Vitae",
    subtitle: "Perfil Academico y Creativo",
    name: "Nemesio Gil Pineda",
    intro:
      "Guionista, director y estudioso de la cultura visual, con trabajo en educacion superior, teatro, cine, literatura y medios. Su obra conecta el rigor academico y la practica creativa mediante la ensenanza, la direccion, la mentorias, la comunicacion multilingue y el analisis cultural interdisciplinario.",
    experience: "Experiencia",
    education: "Educación",
    languages: "Idiomas",
    skills: "Competencias",
    recognition: "Reconocimientos",
    exp: [
      {
        period: "2023 - presente",
        title: "Director / Profesor de Artes Teatrales",
        place: "Sky Kingdom / Lanza Arts School",
        points: [
          "Dirigió y supervisó múltiples producciones teatrales.",
          "Coordinó aspectos artísticos y técnicos con equipos de producción.",
          "Enseñó escritura, dirección y actuación.",
        ],
      },
      {
        period: "2019 - 2022",
        title: "Profesor de Lenguas y Literatura",
        place: "Bard Early College, New Orleans",
        points: [
          "Enseñó en un programa universitario para estudiantes de secundaria.",
          "Dirigió experiencias de primer año universitario y mentorías.",
          "Impartió enseñanza interdisciplinaria en literatura, escritura y cultura visual.",
        ],
      },
      {
        period: "2011 - 2019",
        title: "Profesor de Inglés",
        place: "University of Puerto Rico, Rio Piedras Campus",
        points: [
          "Enseñó cine, literatura inglesa, teoría, escritura y cultura visual.",
          "Trabajó en niveles intermedios y avanzados a nivel de bachillerato.",
        ],
      },
    ],
    edu: [
      "Maestría Internacional en Media and Entertainment, Rome Business School, 2026",
      "PhD en Inglés (Literatura y Cultura Visual), University of Puerto Rico, 2016",
      "MA en Inglés (Cine y Literatura), University of Puerto Rico, 2003",
      "BFA en Producción Cinematográfica, Art Center College of Design, 1992",
    ],
    langList: [
      "Ingles - Nativo",
      "Espanol - Nativo",
      "Frances - B2",
      "Portugues - B2",
      "Italiano - B2",
      "Aleman - A2",
    ],
    skillList: [
      "Escritura academica",
      "Analisis de cine y medios",
      "Direccion teatral",
      "Estudios de cultura visual",
      "Investigacion y mentorias",
      "Final Draft 12",
      "Microsoft Office Suite",
      "Apple Suite",
      "Canvas",
    ],
    awards: [
      "Professor of the Year Award, Bard Early College, 2022",
      "Simon's Rock Early College Research Institute Fellow, 2021 - 2022",
      "Outstanding Class Recognition, Caribbean Literature, 2020",
      "Joan Fayer Award, Outstanding Graduate Student, 2016",
    ],
  },
};

export default function CVPage() {
  const [lang, setLang] = useState<"en" | "it" | "es">("en");
  const t = text[lang];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-[1800px] px-10 py-24">
        <header className="mb-16 flex items-center justify-between gap-10">
          <nav className={`${cormorant.className} flex items-center gap-12`}>
            <Link href="/" className="text-3xl tracking-[0.1em] text-white/70 transition hover:text-white">{t.main}</Link>
            <Link href="/cv" className="border-b border-white pb-1 text-3xl tracking-[0.1em]">{t.cv}</Link>
            <Link href="/about" className="text-3xl tracking-[0.1em] text-white/70 transition hover:text-white">{t.about}</Link>
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
          <h1 className={`${cormorant.className} text-7xl tracking-[0.08em]`}>{t.heading}</h1>
          <p className={`${inter.className} mt-6 text-sm uppercase tracking-[0.4em] text-white/50`}>{t.subtitle}</p>
        </section>

        <section className="mx-auto mb-24 max-w-5xl text-center">
          <h2 className={`${cormorant.className} text-5xl tracking-[0.08em]`}>{t.name}</h2>
          <p className={`${inter.className} mt-8 leading-8 text-white/75`}>{t.intro}</p>
        </section>

        <section className="grid gap-20 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-20">
            <div>
              <h2 className={`${cormorant.className} mb-8 border-b border-white/20 pb-3 text-4xl tracking-[0.12em]`}>{t.experience}</h2>
              <div className="space-y-16">
                {t.exp.map((item) => (
                  <div key={item.title}>
                    <p className={`${inter.className} text-xs uppercase tracking-[0.35em] text-white/50`}>{item.period}</p>
                    <h3 className={`${cormorant.className} mt-4 text-4xl tracking-[0.06em]`}>{item.title}</h3>
                    <p className={`${inter.className} mt-3 text-white/60`}>{item.place}</p>
                    <ul className={`${inter.className} mt-6 space-y-3 leading-8 text-white/75`}>
                      {item.points.map((point) => <li key={point}>• {point}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className={`${cormorant.className} mb-8 border-b border-white/20 pb-3 text-4xl tracking-[0.12em]`}>{t.education}</h2>
              <ul className={`${inter.className} space-y-4 leading-8 text-white/75`}>
                {t.edu.map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </div>
          </div>

          <div className="space-y-20">
            <div>
              <h2 className={`${cormorant.className} mb-8 border-b border-white/20 pb-3 text-4xl tracking-[0.12em]`}>{t.languages}</h2>
              <ul className={`${inter.className} space-y-4 leading-8 text-white/75`}>
                {t.langList.map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </div>

            <div>
              <h2 className={`${cormorant.className} mb-8 border-b border-white/20 pb-3 text-4xl tracking-[0.12em]`}>{t.skills}</h2>
              <ul className={`${inter.className} space-y-4 leading-8 text-white/75`}>
                {t.skillList.map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </div>

            <div>
              <h2 className={`${cormorant.className} mb-8 border-b border-white/20 pb-3 text-4xl tracking-[0.12em]`}>{t.recognition}</h2>
              <ul className={`${inter.className} space-y-4 leading-8 text-white/75`}>
                {t.awards.map((item) => <li key={item}>• {item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <footer className={`${inter.className} mt-28 space-y-3 pb-10 text-center`}>
          <p className="text-lg tracking-[0.08em]">ngilp2022@gmail.com</p>
          <p className="text-lg tracking-[0.08em]">1-787-342-6071</p>
        </footer>
      </section>
    </main>
  );
}
