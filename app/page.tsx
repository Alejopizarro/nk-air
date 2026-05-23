import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import ZoneBadges from "@/components/ZoneBadges";
import CTABanner from "@/components/CTABanner";
import { getWhatsAppUrl, SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "NK Air | Climatización, Aerotermia y Fontanería en Viladecans",
  description:
    "Instalación y reparación de aire acondicionado en Viladecans y Castelldefels. Más de 25 años de experiencia en climatización, aerotermia y fontanería en el Baix Llobregat.",
  alternates: { canonical: SITE_CONFIG.url },
};

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    ),
    title: "Aire Acondicionado",
    description:
      "Instalación, reparación y mantenimiento de splits, multisplits y sistemas de conductos para hogares y negocios.",
    href: "/servicios/climatizacion",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "Aerotermia",
    description:
      "La alternativa sostenible para climatizar tu hogar y tener agua caliente. Ahorra hasta un 70% en energía.",
    href: "/servicios/aerotermia",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "Fontanería",
    description:
      "Instalaciones, reparaciones y mantenimiento de fontanería para viviendas y locales comerciales.",
    href: "/servicios/fontaneria",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    title: "Cámaras Frigoríficas",
    description:
      "Instalación y mantenimiento de cámaras frigoríficas y equipos de frío para uso comercial e industrial.",
    href: "/servicios/camaras-frigorificas",
  },
];

const testimonials = [
  {
    quote:
      "Instalaron el aire acondicionado en mi piso de Castelldefels en un día. Trabajo limpio, precio justo y sin sorpresas. 100% recomendable.",
    author: "María Guitart",
    location: "Castelldefels",
  },
  {
    quote:
      "Llevamos años con el contrato de mantenimiento y nunca hemos tenido un problema. Vienen rápido y saben lo que hacen.",
    author: "Roberto Pascual",
    location: "Viladecans",
  },
  {
    quote:
      "Me instalaron una bomba de calor y gestionaron toda la subvención. Ahorro notable en la factura de luz. Muy profesionales.",
    author: "Ana Molina",
    location: "Gavà",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[100dvh] bg-navy overflow-hidden">
        {/* Right image panel — desktop */}
        <div className="absolute inset-y-0 right-0 w-[45%] hidden lg:block">
          <Image
            src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1920&q=80"
            alt="Técnico instalando sistema de climatización"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/55 to-transparent" />
        </div>

        {/* Mobile background at very low opacity */}
        <div className="absolute inset-0 lg:hidden">
          <Image
            src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1200&q=60"
            alt=""
            fill
            className="object-cover opacity-[0.07]"
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 min-h-[100dvh] flex flex-col justify-center">
          <div className="lg:max-w-[54%] py-28 lg:py-0">
            {/* Zone label */}
            <p
              className="text-cyan-brand/70 text-[11px] tracking-[0.22em] uppercase font-medium mb-8 animate-fade-up"
              style={{ animationDelay: "0ms" }}
            >
              Viladecans · Castelldefels · Baix Llobregat
            </p>

            {/* H1 */}
            <h1
              className="text-[2.5rem] sm:text-5xl xl:text-[3.4rem] font-black text-white tracking-tighter leading-[1.05] mb-6 animate-fade-up"
              style={{ animationDelay: "80ms" }}
            >
              Climatización y aerotermia{" "}
              <span className="text-cyan-brand">que resuelven</span>{" "}
              de verdad.
            </h1>

            {/* Descriptor */}
            <p
              className="text-blue-200/65 text-base leading-relaxed max-w-[48ch] mb-10 animate-fade-up"
              style={{ animationDelay: "160ms" }}
            >
              Instalamos y reparamos sistemas de climatización, aerotermia y
              fontanería en el Baix Llobregat. Presupuesto gratuito en menos de
              24 horas.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-3 mb-16 animate-fade-up"
              style={{ animationDelay: "240ms" }}
            >
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-green-eco hover:bg-[#4cae4c] active:scale-[0.98] active:translate-y-px text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-all duration-200 shadow-[0_4px_24px_-4px_rgba(92,184,92,0.4)]"
                aria-label="Solicitar presupuesto por WhatsApp"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Pedir presupuesto
              </a>
              <Link
                href="/servicios"
                className="inline-flex items-center gap-1.5 text-white/55 hover:text-white text-sm font-medium transition-colors duration-200 py-3.5 px-2"
              >
                Ver todos los servicios
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Stats strip */}
            <div
              className="grid grid-cols-3 border-t border-white/[0.08] pt-8 animate-fade-up"
              style={{ animationDelay: "320ms" }}
            >
              <div className="pr-6">
                <span className="text-2xl font-black text-white tracking-tight">+25</span>
                <p className="text-[10px] text-blue-200/45 mt-1 leading-snug uppercase tracking-wide">años de experiencia</p>
              </div>
              <div className="px-6 border-x border-white/[0.08]">
                <span className="text-2xl font-black text-white tracking-tight">24h</span>
                <p className="text-[10px] text-blue-200/45 mt-1 leading-snug uppercase tracking-wide">respuesta garantizada</p>
              </div>
              <div className="pl-6">
                <span className="text-2xl font-black text-white tracking-tight">9</span>
                <p className="text-[10px] text-blue-200/45 mt-1 leading-snug uppercase tracking-wide">municipios atendidos</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICIOS (bento asimétrico) ── */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-cyan-brand text-[11px] tracking-[0.2em] uppercase font-medium mb-3">
              Lo que hacemos
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-navy tracking-tighter">
              Soluciones completas<br />para cada necesidad.
            </h2>
          </div>

          {/* Bento: 3 cols desktop — AC spans 2, Cámaras spans 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <ServiceCard {...services[0]} className="lg:col-span-2" />
            <ServiceCard {...services[1]} />
            <ServiceCard {...services[2]} />
            <ServiceCard {...services[3]} className="lg:col-span-2" />
          </div>
        </div>
      </section>

      {/* ── MÉTRICAS / POR QUÉ NK AIR ── */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-navy">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
            {[
              {
                value: "+25",
                label: "años de experiencia",
                desc: "Conocemos cada sistema, marca y avería. Nuestro equipo técnico lleva décadas resolviendo instalaciones complejas.",
              },
              {
                value: "24h",
                label: "tiempo de respuesta",
                desc: "Una avería no puede esperar. Diagnóstico y presupuesto en un día laborable en toda nuestra zona de servicio.",
              },
              {
                value: "100%",
                label: "instaladores certificados",
                desc: "Homologados por las principales marcas del mercado: Daikin, Mitsubishi, Fujitsu, LG y Samsung.",
              },
            ].map((item, i) => (
              <div
                key={item.label}
                className={`py-10 ${i === 0 ? "md:pr-12" : i === 1 ? "md:px-12" : "md:pl-12"}`}
              >
                <span className="text-[3rem] font-black text-white tracking-tighter leading-none">
                  {item.value}
                </span>
                <p className="text-cyan-brand text-[11px] tracking-[0.18em] uppercase font-medium mt-2 mb-3">
                  {item.label}
                </p>
                <p className="text-blue-200/50 text-sm leading-relaxed max-w-[30ch]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AIRE ACONDICIONADO (detalle) ── */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-cyan-brand text-[11px] tracking-[0.2em] uppercase font-medium mb-4">
              Climatización
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-navy tracking-tighter mb-5">
              Instalación profesional<br />de aire acondicionado.
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-7 max-w-[55ch]">
              Instalamos y reparamos todo tipo de sistemas: splits individuales,
              multisplits, conductos y VRV/VRF para hogares y negocios.
              Trabajamos con Daikin, Mitsubishi, Fujitsu, LG y Samsung.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Instalación nueva",
                "Reparación de averías",
                "Limpieza y mantenimiento",
                "Sustitución de equipos",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-dark">
                  <svg
                    className="w-4 h-4 text-cyan-brand flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={getWhatsAppUrl(
                "Hola, me gustaría pedir presupuesto para instalación de aire acondicionado."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-navy hover:bg-blue-900 active:scale-[0.98] active:translate-y-px text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-all duration-200"
            >
              Solicitar presupuesto
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          <div className="relative rounded-2xl overflow-hidden h-80 lg:h-[460px] shadow-[0_20px_60px_-15px_rgba(13,43,94,0.14)]">
            <Image
              src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=900&q=80"
              alt="Instalación de aire acondicionado profesional en Viladecans"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── AEROTERMIA (detalle) ── */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-gray-light">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden h-80 lg:h-[460px] shadow-[0_20px_60px_-15px_rgba(13,43,94,0.1)]">
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80"
              alt="Instalación de aerotermia y bomba de calor en el Baix Llobregat"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-green-eco text-[11px] tracking-[0.2em] uppercase font-medium mb-4">
              Energía sostenible
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-navy tracking-tighter mb-5">
              Aerotermia: eficiencia<br />y ahorro real.
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-7 max-w-[55ch]">
              La aerotermia es la solución más eficiente para climatizar tu
              vivienda y obtener agua caliente sanitaria. Con una bomba de calor
              aerotérmica puedes ahorrar hasta un 70% en energía, además de
              acceder a las subvenciones disponibles.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Instalación de bombas de calor",
                "Integración con suelo radiante",
                "Gestión de subvenciones",
                "Mantenimiento anual",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-dark">
                  <svg
                    className="w-4 h-4 text-green-eco flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={getWhatsAppUrl(
                "Hola, me gustaría consultar sobre instalación de aerotermia."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-eco hover:bg-[#4cae4c] active:scale-[0.98] active:translate-y-px text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-all duration-200"
            >
              Consultar instalación
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── ZONAS ── */}
      <ZoneBadges />

      {/* ── TESTIMONIALES (asimétricos) ── */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-cyan-brand text-[11px] tracking-[0.2em] uppercase font-medium mb-3">
              Clientes
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-navy tracking-tighter">
              Lo que dicen los que<br />ya confían en nosotros.
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-5">
            <TestimonialCard {...testimonials[0]} featured />
            <div className="flex flex-col gap-5">
              <TestimonialCard {...testimonials[1]} />
              <TestimonialCard {...testimonials[2]} />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <CTABanner />
    </>
  );
}
