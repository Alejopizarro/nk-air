"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("nkair-cookies");
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("nkair-cookies", "accepted");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-navy/95 backdrop-blur-sm border-t border-white/10 px-4 py-4">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="text-white/80 text-sm flex-1">
          Utilizamos cookies propias y de terceros para mejorar tu experiencia.
          Al continuar navegando, aceptas nuestra{" "}
          <Link
            href="/politica-de-cookies"
            className="underline text-cyan-brand hover:text-white transition-colors"
          >
            política de cookies
          </Link>
          .
        </p>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={() => setVisible(false)}
            className="text-white/60 hover:text-white text-sm px-4 py-2 transition-colors"
          >
            Rechazar
          </button>
          <button
            onClick={accept}
            className="bg-cyan-brand hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
