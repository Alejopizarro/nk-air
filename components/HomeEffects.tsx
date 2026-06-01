"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function HomeEffects() {
  const pathname = usePathname();

  /* Reveal observer — re-initializes on every page navigation */
  useEffect(() => {
    let obs: IntersectionObserver | null = null;

    // Delay lets React finish rendering the new page's DOM
    const timer = setTimeout(() => {
      const els = document.querySelectorAll<HTMLElement>(".reveal:not(.visible)");
      obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              obs!.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
      );
      els.forEach((el) => obs!.observe(el));
    }, 80);

    return () => {
      clearTimeout(timer);
      obs?.disconnect();
    };
  }, [pathname]);

  /* Bento spotlight — re-attaches to cards on every page navigation */
  useEffect(() => {
    const handlers: Array<{ el: HTMLElement; fn: (e: MouseEvent) => void }> = [];

    const timer = setTimeout(() => {
      const cards = document.querySelectorAll<HTMLElement>(".bento-card");
      cards.forEach((card) => {
        const fn = (e: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const mx = ((e.clientX - rect.left) / rect.width) * 100;
          const my = ((e.clientY - rect.top) / rect.height) * 100;
          card.style.setProperty("--mx", String(mx));
          card.style.setProperty("--my", String(my));
        };
        card.addEventListener("mousemove", fn);
        handlers.push({ el: card, fn });
      });
    }, 80);

    return () => {
      clearTimeout(timer);
      handlers.forEach(({ el, fn }) => el.removeEventListener("mousemove", fn));
    };
  }, [pathname]);

  return null;
}
