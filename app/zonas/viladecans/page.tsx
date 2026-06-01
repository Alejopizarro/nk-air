import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import ZoneBadges from "@/components/ZoneBadges";
import { getWhatsAppUrl, SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Instalación Aire Acondicionado en Viladecans | NK Air",
  description:
    "Servicio de climatización, aerotermia y fontanería en Viladecans. Empresa local con más de 25 años de experiencia. Instalación y reparación de aire acondicionado. Presupuesto gratuito.",
  keywords: [
    "aire acondicionado Viladecans",
    "climatización Viladecans",
    "fontanero Viladecans",
    "aerotermia Viladecans",
    "instalador aire acondicionado Viladecans 08840",
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/zonas/viladecans` },
};

const svgAC = "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z";
const svgAero = "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z";
const svgPlumb = "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z";
const svgCold = "M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18";
const svgArrow = "M9 5l7 7-7 7";

const Icon = ({ d }: { d: string }) => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
  </svg>
);

export default function ViladecanePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        className="zone-hero"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "100dvh", background: "var(--bg)", position: "relative", overflow: "hidden" }}
      >
        <div
          className="zone-hero-left"
          style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "120px 64px 80px max(32px, calc((100vw - 1320px) / 2 + 32px))", position: "relative", zIndex: 2 }}
        >
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--accent-dim)", border: "1px solid rgba(0,200,255,0.2)", borderRadius: 100, padding: "6px 14px", marginBottom: 28, alignSelf: "flex-start", animation: "fadeSlideUp 0.6s 0s ease both" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", animation: "dotPulse 2s ease-in-out infinite" }} />
            <span style={{ fontFamily: "var(--font-dm-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)" }}>
              Viladecans · 08840 · Empresa local
            </span>
          </div>

          <h1 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(36px, 4.5vw, 62px)", letterSpacing: "-0.04em", lineHeight: 0.98, color: "var(--text)", marginBottom: 24, animation: "fadeSlideUp 0.6s 0.1s ease both" }}>
            Climatización en<br />
            <span style={{ color: "var(--accent)" }}>Viladecans</span><br />
            empresa local
          </h1>

          <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300, fontSize: 16, color: "var(--muted2)", lineHeight: 1.75, maxWidth: 460, marginBottom: 36, animation: "fadeSlideUp 0.6s 0.2s ease both" }}>
            NK Air tiene su sede en Viladecans, en la Carretera Barcelona 33. Más de 25 años instalando y reparando sistemas de climatización, aerotermia y fontanería en el municipio y alrededores.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 48, animation: "fadeSlideUp 0.6s 0.3s ease both" }}>
            <a href={getWhatsAppUrl("Hola, necesito un presupuesto en Viladecans.")} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Pedir presupuesto
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d={svgArrow} /></svg>
            </a>
            <a
              href="https://maps.google.com/?q=NK+Air,+Carretera+Barcelona+33,+Viladecans"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Ver en Google Maps
            </a>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderTop: "1px solid var(--border)", paddingTop: 32, animation: "fadeSlideUp 0.6s 0.4s ease both" }}>
            {[
              { value: "+25", label: "años en Viladecans" },
              { value: "24h", label: "tiempo de respuesta" },
              { value: "9", label: "municipios atendidos" },
            ].map((stat, i) => (
              <div key={stat.label} style={{ paddingRight: i < 2 ? 24 : 0, paddingLeft: i > 0 ? 24 : 0, borderRight: i < 2 ? "1px solid var(--border)" : "none" }}>
                <p style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: 28, letterSpacing: "-0.05em", color: "var(--text)", lineHeight: 1 }}>{stat.value}</p>
                <p style={{ fontFamily: "var(--font-dm-mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", marginTop: 6 }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="zone-hero-right" style={{ position: "relative", overflow: "hidden" }}>
          <Image src="/hero-nk.jpg" alt="Técnico NK Air en Viladecans" fill className="object-cover" priority style={{ filter: "grayscale(20%)", animation: "heroImgIn 1.2s 0s cubic-bezier(0.16,1,0.3,1) both" }} />
          <div className="hero-overlay-desktop" />
          <div className="hero-overlay-mobile" />
        </div>
      </section>

      {/* ── SERVICIOS EN VILADECANS ── */}
      <section style={{ padding: "100px 0", background: "var(--bg)" }}>
        <div className="container-main">
          <div style={{ marginBottom: 48 }}>
            <p className="reveal" style={{ fontFamily: "var(--font-dm-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 12 }}>Servicios disponibles</p>
            <h2 className="reveal reveal-delay-1" style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(28px, 3vw, 44px)", letterSpacing: "-0.04em", lineHeight: 1.02, color: "var(--text)" }}>
              Todo lo que ofrecemos<br />en Viladecans.
            </h2>
          </div>
          <div className="zone-svc-cards">
            {[
              { icon: svgAC, title: "Aire Acondicionado", href: "/servicios/climatizacion", desc: "Instalación, reparación y mantenimiento de splits y multisplits en hogares y negocios de Viladecans. Todas las marcas." },
              { icon: svgAero, title: "Aerotermia", href: "/servicios/aerotermia", desc: "Bombas de calor aerotérmicas para climatización y agua caliente. Gestión de subvenciones disponibles en Viladecans." },
              { icon: svgPlumb, title: "Fontanería", href: "/servicios/fontaneria", desc: "Fontaneros en Viladecans para instalaciones, reformas de baños y reparaciones de averías urgentes." },
              { icon: svgCold, title: "Cámaras Frigoríficas", href: "/servicios/camaras-frigorificas", desc: "Instalación y mantenimiento de cámaras frigoríficas para restaurantes y negocios de Viladecans." },
            ].map((s, i) => (
              <Link
                key={s.href}
                href={s.href}
                className={`bento-card reveal reveal-delay-${i + 1}`}
                style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, padding: 32, transition: "border-color 0.2s, transform 0.2s", textDecoration: "none" }}
              >
                <div className="bento-icon" style={{ width: 48, height: 48, border: "1px solid var(--border2)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)", marginBottom: 16, transition: "background 0.2s" }}>
                  <Icon d={s.icon} />
                </div>
                <h3 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: 15, letterSpacing: "-0.02em", color: "var(--text)", marginBottom: 8 }}>
                  {s.title} en Viladecans
                </h3>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300, fontSize: 14, color: "var(--muted2)", lineHeight: 1.7, marginBottom: 16 }}>{s.desc}</p>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--font-dm-sans)", fontSize: 13, color: "var(--accent)" }}>
                  Ver más
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d={svgArrow} /></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRESENCIA LOCAL ── */}
      <section style={{ padding: "100px 0", background: "var(--surface)" }}>
        <div className="container-main">
          <div className="detail-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
            <div className="reveal">
              <p style={{ fontFamily: "var(--font-dm-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 16 }}>Empresa local</p>
              <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(28px, 3vw, 44px)", letterSpacing: "-0.04em", lineHeight: 1.05, color: "var(--text)", marginBottom: 20 }}>
                Tu empresa de climatización en Viladecans.
              </h2>
              <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300, fontSize: 15, color: "var(--muted2)", lineHeight: 1.75, marginBottom: 28 }}>
                NK Air tiene su sede en Viladecans y conocemos bien el municipio: desde Can Lleopard y Can Tió hasta la zona industrial de la Fontsanta. Hemos realizado instalaciones en toda la ciudad y conocemos las características de las viviendas y los locales de la zona.
              </p>
              <ul style={{ listStyle: "none", padding: 0, marginBottom: 32 }}>
                {[
                  "Sede en Carretera Barcelona 33, Viladecans",
                  "Más de 25 años instalando en Viladecans",
                  "Conocemos los edificios y viviendas locales",
                  "Respuesta en 24-48h para toda la ciudad",
                ].map((item) => (
                  <li key={item} style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, color: "var(--muted2)", paddingLeft: 20, marginBottom: 10, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", width: 16, height: 1, background: "var(--accent)" }} />
                    {item}
                  </li>
                ))}
              </ul>
              <div style={{ background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 10, padding: "20px 24px", marginBottom: 28 }}>
                <p style={{ fontFamily: "var(--font-dm-mono)", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 8 }}>Nuestra ubicación</p>
                <p style={{ fontFamily: "var(--font-syne)", fontWeight: 600, fontSize: 14, color: "var(--text)", marginBottom: 4 }}>NK Air — Carretera Barcelona 33</p>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 13, color: "var(--muted2)" }}>08840 Viladecans (Barcelona)</p>
                <a href={`tel:${SITE_CONFIG.phone}`} style={{ fontFamily: "var(--font-dm-mono)", fontSize: 13, color: "var(--accent)", marginTop: 6, display: "inline-block" }}>{SITE_CONFIG.phoneDisplay}</a>
              </div>
              <a href={getWhatsAppUrl("Hola, necesito presupuesto para un servicio de climatización en Viladecans.")} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Solicitar presupuesto
              </a>
            </div>
            <div className="reveal reveal-delay-2" style={{ position: "relative" }}>
              <div style={{ aspectRatio: "4/3", borderRadius: 12, overflow: "hidden", position: "relative" }}>
                <Image src="/nkair-working.jpg" alt="Técnico NK Air trabajando en Viladecans" fill className="object-cover detail-img" style={{ transition: "transform 0.4s ease" }} />
              </div>
              <div style={{ position: "absolute", bottom: -24, left: -24, background: "var(--accent)", color: "#000", borderRadius: 12, padding: "16px 20px" }}>
                <p style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: 28, letterSpacing: "-0.04em", lineHeight: 1 }}>08840</p>
                <p style={{ fontFamily: "var(--font-dm-mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 4 }}>Viladecans</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ZONAS CERCANAS ── */}
      <ZoneBadges />

      <CTABanner
        title="¿Necesitas climatización en Viladecans?"
        subtitle="Empresa local con 25 años de experiencia. Presupuesto gratuito en menos de 24 horas."
        whatsappMessage="Hola, necesito presupuesto para un servicio de climatización en Viladecans."
      />
    </>
  );
}
