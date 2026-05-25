"use client";

import { useEffect } from "react";

export default function HomeEffects() {
  /* Reveal observer */
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  /* Bento spotlight */
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>(".bento-card");
    const handlers: Array<{ el: HTMLElement; fn: (e: MouseEvent) => void }> = [];
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
    return () => handlers.forEach(({ el, fn }) => el.removeEventListener("mousemove", fn));
  }, []);

  return null;
}
