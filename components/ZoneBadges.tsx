import Link from "next/link";
import { ZONES } from "@/lib/config";

export default function ZoneBadges() {
  return (
    <section className="py-24 px-6 sm:px-8 lg:px-12 bg-gray-light">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 items-start">
        {/* Left: copy + CTA */}
        <div>
          <p className="text-cyan-brand text-[11px] tracking-[0.2em] uppercase font-medium mb-3">
            Cobertura
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-navy tracking-tighter mb-5">
            Baix Llobregat<br />y zona sur<br />de Barcelona.
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-[38ch]">
            Instalación, reparación y mantenimiento de climatización en
            Viladecans y todas las poblaciones del área metropolitana sur.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 bg-navy hover:bg-blue-900 active:scale-[0.98] active:translate-y-px text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-all duration-200"
          >
            Confirmar cobertura
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Right: badge cloud */}
        <div className="flex flex-wrap gap-2.5 content-start lg:pt-2">
          {ZONES.map((zone) =>
            zone.slug ? (
              <Link
                key={zone.name}
                href={`/zonas/${zone.slug}`}
                className="px-4 py-2 bg-white border border-slate-200 text-navy font-semibold text-sm rounded-xl hover:border-cyan-brand hover:text-cyan-brand transition-all duration-200"
              >
                {zone.name}
              </Link>
            ) : (
              <span
                key={zone.name}
                className="px-4 py-2 bg-white/60 border border-slate-200/60 text-slate-400 text-sm rounded-xl"
              >
                {zone.name}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
