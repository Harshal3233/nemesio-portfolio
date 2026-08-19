"use client";

import { usePathname, useRouter } from "next/navigation";
import { MouseEvent, useCallback, useEffect, useRef, useState } from "react";

const TRANSITION_IN_MS = 420;

export default function SiteExperience() {
  const pathname = usePathname();
  const router = useRouter();
  const [transitionVisible, setTransitionVisible] = useState(true);
  const [transitionLeaving, setTransitionLeaving] = useState(false);
  const destinationRef = useRef<string | null>(null);
  const fallbackTimerRef = useRef<number | null>(null);

  const revealPage = useCallback(() => {
    setTransitionLeaving(true);
    window.setTimeout(() => {
      setTransitionVisible(false);
      setTransitionLeaving(false);
      destinationRef.current = null;
    }, 520);
  }, []);

  useEffect(() => {
    const introTimer = window.setTimeout(revealPage, 520);
    return () => window.clearTimeout(introTimer);
  }, [revealPage]);

  useEffect(() => {
    if (!destinationRef.current || pathname !== destinationRef.current) return;

    if (fallbackTimerRef.current) window.clearTimeout(fallbackTimerRef.current);
    const revealTimer = window.setTimeout(revealPage, 170);
    return () => window.clearTimeout(revealTimer);
  }, [pathname, revealPage]);

  useEffect(() => {
    const handleInternalNavigation = (event: globalThis.MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const anchor = (event.target as HTMLElement).closest("a");
      if (!anchor || anchor.target || anchor.hasAttribute("download")) return;

      const destination = new URL(anchor.href, window.location.href);
      if (
        destination.origin !== window.location.origin ||
        destination.pathname === window.location.pathname ||
        destination.protocol !== window.location.protocol
      ) {
        return;
      }

      event.preventDefault();
      destinationRef.current = destination.pathname;
      setTransitionLeaving(false);
      setTransitionVisible(true);

      window.setTimeout(() => {
        router.push(`${destination.pathname}${destination.search}${destination.hash}`);
      }, TRANSITION_IN_MS);

      fallbackTimerRef.current = window.setTimeout(revealPage, 2200);
    };

    document.addEventListener("click", handleInternalNavigation, true);
    return () => {
      document.removeEventListener("click", handleInternalNavigation, true);
      if (fallbackTimerRef.current) window.clearTimeout(fallbackTimerRef.current);
    };
  }, [revealPage, router]);

  const keepWhatsAppClickNative = (event: MouseEvent<HTMLAnchorElement>) => {
    event.stopPropagation();
  };

  return (
    <>
      {transitionVisible && (
        <div
          className={`ng-transition ${transitionLeaving ? "ng-transition--leaving" : ""}`}
          aria-hidden="true"
        >
          <span className="ng-transition__mark">NG</span>
          <span className="ng-transition__line" />
        </div>
      )}

      <a
        className="whatsapp-contact"
        href="https://wa.me/17873426071?text=Hello%20Dr.%20Gil%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20contact%20you."
        target="_blank"
        rel="noreferrer"
        aria-label="Contact Dr. Gil on WhatsApp"
        onClick={keepWhatsAppClickNative}
      >
        <span className="whatsapp-contact__label">WhatsApp</span>
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M16.04 3.2A12.7 12.7 0 0 0 5.3 22.68L3.5 28.8l6.28-1.65a12.72 12.72 0 1 0 6.26-23.95Zm0 22.93a10.55 10.55 0 0 1-5.38-1.48l-.38-.22-3.73.98 1-3.63-.25-.39a10.56 10.56 0 1 1 8.74 4.74Zm5.79-7.9c-.32-.16-1.87-.92-2.16-1.03-.29-.11-.5-.16-.71.16-.21.32-.82 1.03-1 1.24-.19.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.57a9.55 9.55 0 0 1-1.76-2.19c-.18-.32-.02-.49.14-.65.14-.14.32-.37.47-.55.16-.19.21-.32.32-.53.1-.21.05-.4-.03-.55-.08-.16-.71-1.72-.98-2.35-.25-.62-.52-.54-.71-.55h-.61c-.21 0-.55.08-.84.4-.29.32-1.11 1.08-1.11 2.64s1.14 3.06 1.29 3.27c.16.21 2.23 3.4 5.4 4.77.75.33 1.34.52 1.8.66.76.24 1.44.21 1.99.13.61-.09 1.87-.77 2.14-1.51.26-.74.26-1.37.18-1.5-.08-.14-.29-.21-.61-.37Z" />
        </svg>
      </a>
    </>
  );
}
