"use client";

import { useRef, useState } from "react";

type FilmPreviewProps = {
  title: string;
  video: string;
  teaser: string;
  poster: string;
  previewLabel: string;
  watchLabel: string;
  labelClassName: string;
};

function hoverPreviewIsAvailable() {
  return (
    window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export default function FilmPreview({
  title,
  video,
  teaser,
  poster,
  previewLabel,
  watchLabel,
  labelClassName,
}: FilmPreviewProps) {
  const teaserRef = useRef<HTMLVideoElement>(null);
  const fullFilmRef = useRef<HTMLVideoElement>(null);
  const pointerInsideRef = useRef(false);
  const [previewing, setPreviewing] = useState(false);
  const [watchingFilm, setWatchingFilm] = useState(false);

  const stopTeaser = () => {
    const teaserVideo = teaserRef.current;
    if (!teaserVideo) return;

    teaserVideo.pause();
    teaserVideo.currentTime = 0;
    setPreviewing(false);
  };

  const startTeaser = () => {
    pointerInsideRef.current = true;
    if (!hoverPreviewIsAvailable() || watchingFilm) return;

    const teaserVideo = teaserRef.current;
    if (!teaserVideo) return;

    teaserVideo.currentTime = 0;
    void teaserVideo.play().then(() => {
      if (pointerInsideRef.current) setPreviewing(true);
    }).catch(() => undefined);
  };

  const leaveTeaser = () => {
    pointerInsideRef.current = false;
    if (!watchingFilm) stopTeaser();
  };

  const beginFullFilm = () => {
    setWatchingFilm(true);
    stopTeaser();
  };

  const playFullFilm = () => {
    if (!previewing) return;

    const fullFilm = fullFilmRef.current;
    if (!fullFilm) return;

    setWatchingFilm(true);
    stopTeaser();
    fullFilm.muted = false;
    void fullFilm.play().catch(() => setWatchingFilm(false));
  };

  return (
    <div
      className="film-preview overflow-hidden bg-neutral-950 shadow-[0_0_0_rgba(255,255,255,0)] transition duration-500 hover:shadow-[0_0_35px_rgba(255,255,255,0.08)]"
      onMouseEnter={startTeaser}
      onMouseLeave={leaveTeaser}
      onClick={playFullFilm}
    >
      <video
        ref={fullFilmRef}
        className="aspect-video w-full object-cover"
        controls
        playsInline
        preload="metadata"
        poster={poster}
        aria-label={`${title} film`}
        onPlay={beginFullFilm}
        onEnded={() => setWatchingFilm(false)}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <video
        ref={teaserRef}
        className={`film-preview__teaser ${previewing ? "film-preview__teaser--active" : ""}`}
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        aria-hidden="true"
        tabIndex={-1}
      >
        <source src={teaser} type="video/mp4" />
      </video>

      {!watchingFilm && (
        <span className={`${labelClassName} film-preview__hint`} aria-hidden="true">
          <span className="film-preview__play">▶</span> {previewLabel}
        </span>
      )}

      {previewing && (
        <span className={`${labelClassName} film-preview__watch`} aria-hidden="true">
          {watchLabel} <span aria-hidden="true">→</span>
        </span>
      )}
    </div>
  );
}
