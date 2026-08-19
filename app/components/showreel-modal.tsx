"use client";

import { useEffect, useRef, useState } from "react";

type ShowreelModalProps = {
  buttonLabel: string;
  closeLabel: string;
  title: string;
  buttonClassName: string;
  titleClassName: string;
};

export default function ShowreelModal({
  buttonLabel,
  closeLabel,
  title,
  buttonClassName,
  titleClassName,
}: ShowreelModalProps) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const openShowreel = () => {
    setOpen(true);
  };

  const closeShowreel = () => {
    const video = videoRef.current;
    if (video) {
      video.pause();
      video.currentTime = 0;
    }

    setOpen(false);
    window.setTimeout(() => triggerRef.current?.focus(), 0);
  };

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className={`${buttonClassName} showreel-trigger`}
        onClick={openShowreel}
      >
        <span className="showreel-trigger__play" aria-hidden="true">▶</span>
        <span>{buttonLabel}</span>
      </button>

      {open && (
        <div
          className="showreel-modal"
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeShowreel();
          }}
        >
          <div className="showreel-modal__topbar">
            <p className={`${titleClassName} showreel-modal__title`}>{title}</p>
            <button
              ref={closeRef}
              type="button"
              className={`${buttonClassName} showreel-modal__close`}
              aria-label={closeLabel}
              onClick={closeShowreel}
            >
              <span>{closeLabel}</span>
              <span aria-hidden="true">×</span>
            </button>
          </div>

          <div className="showreel-modal__stage">
            <video
              ref={videoRef}
              className="showreel-modal__video"
              controls
              autoPlay
              playsInline
              preload="metadata"
              poster="/black-sheep-thumb.jpg"
            >
              <source src="/nemesio-showreel.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </>
  );
}
