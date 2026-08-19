"use client";

import Image from "next/image";
import Link from "next/link";
import { type CSSProperties, type PointerEvent, useEffect, useRef, useState } from "react";
import { Cormorant_Garamond, Inter } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const BOARD_WIDTH = 1800;
const BOARD_HEIGHT = 1050;
const FEATURE_CENTER_X = 900;
const FEATURE_CENTER_Y = 475;

const text = {
  en: {
    home: "Main",
    archive: "Archive",
    film: "Films",
    theater: "Theater",
    cv: "CV",
    title: "Creative Archive",
    instruction: "Drag to explore",
    reset: "Center view",
    open: "View",
  },
  it: {
    home: "Home",
    archive: "Archivio",
    film: "Cinema",
    theater: "Teatro",
    cv: "CV",
    title: "Archivio Creativo",
    instruction: "Trascina per esplorare",
    reset: "Centra la vista",
    open: "Apri",
  },
  es: {
    home: "Inicio",
    archive: "Archivo",
    film: "Cine",
    theater: "Teatro",
    cv: "CV",
    title: "Archivo Creativo",
    instruction: "Arrastra para explorar",
    reset: "Centrar vista",
    open: "Ver",
  },
};

const archiveItems = [
  { title: "BLACK SHEEP", kind: "Film", image: "/black-sheep-thumb.jpg", href: "/film#black-sheep", left: 590, top: 300, width: 620, height: 350, rotate: -1, depth: 12, featured: true },
  { title: "VAMPIRO", kind: "Film", image: "/vampiro-thumb.jpg", href: "/film#vampiro", left: 78, top: 145, width: 280, height: 360, rotate: -4, depth: 8 },
  { title: "THE WINDS", kind: "Film", image: "/the-winds-thumb.jpg", href: "/film#the-winds", left: 1445, top: 125, width: 260, height: 360, rotate: 3, depth: 9 },
  { title: "BLU", kind: "Film", image: "/blu-thumb.jpg", href: "/film#blu", left: 240, top: 640, width: 240, height: 330, rotate: 2, depth: 8 },
  { title: "NEMESIO GIL", kind: "Profile", image: "/nemesio.jpg", href: "/about", left: 1185, top: 40, width: 190, height: 270, rotate: 2, depth: 4 },
  { title: "SELECTED PRODUCTIONS", kind: "Theater", image: "/theaters.jpg", href: "/theater", left: 1370, top: 565, width: 340, height: 240, rotate: -2, depth: 7 },
  { title: "LA CASA DEL DR. CASADO", kind: "Theater", image: "/casa.jpg", href: "/theater#posters", left: 1050, top: 730, width: 210, height: 290, rotate: 4, depth: 6 },
  { title: "HASTA QUE LAS SUEGRAS NOS SEPAREN", kind: "Theater", image: "/suegras.jpg", href: "/theater#posters", left: 400, top: 20, width: 190, height: 270, rotate: -3, depth: 5 },
  { title: "¿PRESO YO...? ¡HUM!", kind: "Theater", image: "/preso.jpg", href: "/theater#posters", left: 820, top: 22, width: 190, height: 250, rotate: 2, depth: 3 },
  { title: "PERMISO... ¿DÓNDE ESTÁ EL BAÑO?", kind: "Theater", image: "/permiso.jpg", href: "/theater#posters", left: 18, top: 670, width: 185, height: 270, rotate: -2, depth: 5 },
  { title: "LOS CASCOS DE ROGELIO", kind: "Theater", image: "/rogelio.jpg", href: "/theater#posters", left: 1540, top: 815, width: 190, height: 270, rotate: 3, depth: 4 },
  { title: "CURRICULUM VITAE", kind: "Profile", image: "/cv.jpg", href: "/cv", left: 615, top: 760, width: 270, height: 250, rotate: -2, depth: 5 },
];

type Position = { x: number; y: number };

function centeredPosition(): Position {
  if (typeof window === "undefined") return { x: -260, y: -115 };
  return {
    x: window.innerWidth / 2 - FEATURE_CENTER_X,
    y: window.innerHeight / 2 - FEATURE_CENTER_Y,
  };
}

function clampPosition(position: Position): Position {
  if (typeof window === "undefined") return position;
  return {
    x: Math.min(220, Math.max(window.innerWidth - BOARD_WIDTH - 220, position.x)),
    y: Math.min(170, Math.max(window.innerHeight - BOARD_HEIGHT - 220, position.y)),
  };
}

export default function ArchivePage() {
  const [lang, setLang] = useState<"en" | "it" | "es">("en");
  const [position, setPosition] = useState<Position>({ x: -260, y: -115 });
  const [dragging, setDragging] = useState(false);
  const dragRef = useRef({ pointerId: -1, startX: 0, startY: 0, originX: 0, originY: 0 });
  const movedRef = useRef(false);
  const t = text[lang];

  useEffect(() => {
    const center = () => setPosition(clampPosition(centeredPosition()));
    center();
    window.addEventListener("resize", center);
    return () => window.removeEventListener("resize", center);
  }, []);

  const beginDrag = (event: PointerEvent<HTMLDivElement>) => {
    dragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      originX: position.x,
      originY: position.y,
    };
    movedRef.current = false;
  };

  const moveArchive = (event: PointerEvent<HTMLDivElement>) => {
    if (dragRef.current.pointerId !== event.pointerId) return;
    const deltaX = event.clientX - dragRef.current.startX;
    const deltaY = event.clientY - dragRef.current.startY;
    if (Math.hypot(deltaX, deltaY) > 6) {
      movedRef.current = true;
      setDragging(true);
    }
    setPosition(clampPosition({
      x: dragRef.current.originX + deltaX,
      y: dragRef.current.originY + deltaY,
    }));
  };

  const endDrag = (event: PointerEvent<HTMLDivElement>) => {
    if (dragRef.current.pointerId !== event.pointerId) return;
    dragRef.current.pointerId = -1;
    setDragging(false);
    if (movedRef.current) {
      window.setTimeout(() => {
        movedRef.current = false;
      }, 0);
    }
  };

  return (
    <main className={`${inter.className} archive-page`}>
      <header className="archive-header">
        <div>
          <Link href="/" className={`${cormorant.className} archive-name`}>Nemesio Gil</Link>
          <p className="archive-kicker">{t.title}</p>
        </div>

        <nav className={`${cormorant.className} archive-nav`} aria-label="Archive navigation">
          <Link href="/">{t.home}</Link>
          <span className="archive-nav__active">{t.archive}</span>
          <Link href="/film">{t.film}</Link>
          <Link href="/theater">{t.theater}</Link>
          <Link href="/cv">{t.cv}</Link>
        </nav>

        <div className="archive-languages" aria-label="Language">
          {(["en", "it", "es"] as const).map((language, index) => (
            <span key={language}>
              {index > 0 && <span className="archive-language-divider">/</span>}
              <button
                type="button"
                onClick={() => setLang(language)}
                className={lang === language ? "archive-language--active" : ""}
              >
                {language.toUpperCase()}
              </button>
            </span>
          ))}
        </div>
      </header>

      <div
        className={`archive-stage ${dragging ? "archive-stage--dragging" : ""}`}
        onPointerDown={beginDrag}
        onPointerMove={moveArchive}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={(event) => {
          if (!movedRef.current) return;
          event.preventDefault();
          event.stopPropagation();
          movedRef.current = false;
        }}
      >
        <div
          className="archive-board"
          style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
        >
          {archiveItems.map((item) => {
            const style = {
              left: item.left,
              top: item.top,
              width: item.width,
              height: item.height,
              zIndex: item.depth,
              "--archive-rotation": `${item.rotate}deg`,
            } as CSSProperties;

            return (
              <Link
                key={item.title}
                href={item.href}
                className={`archive-card ${item.featured ? "archive-card--featured" : ""}`}
                style={style}
                draggable={false}
              >
                <div className="archive-card__image">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    draggable={false}
                    sizes={`${item.width}px`}
                    className="object-cover"
                  />
                  <span className="archive-card__shade" />
                </div>
                <div className="archive-card__caption">
                  <span className="archive-card__kind">{item.kind}</span>
                  <strong className={cormorant.className}>{item.title}</strong>
                  <span className="archive-card__open">{t.open} →</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      <button
        type="button"
        className="archive-reset"
        onClick={() => setPosition(clampPosition(centeredPosition()))}
      >
        <span aria-hidden="true">◎</span> {t.reset}
      </button>

      <div className="archive-drag-hint" aria-hidden="true">
        <span className="archive-drag-hint__dots">••••</span>
        <span>{t.instruction}</span>
      </div>
    </main>
  );
}
