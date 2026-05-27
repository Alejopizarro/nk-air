import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getWhatsAppUrl, SITE_CONFIG } from "@/lib/config";
import ZoneBadges from "@/components/ZoneBadges";
import CTABanner from "@/components/CTABanner";
import HomeEffects from "@/components/HomeEffects";

export const metadata: Metadata = {
  title: "NK Air | Climatización, Aerotermia y Fontanería en Viladecans",
  description:
    "Instalación y reparación de aire acondicionado en Viladecans y Castelldefels. Más de 25 años de experiencia en climatización, aerotermia y fontanería en el Baix Llobregat.",
  alternates: { canonical: SITE_CONFIG.url },
};

const IconAC = () => (
  <svg
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    />
  </svg>
);
const IconAero = () => (
  <svg
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
    />
  </svg>
);
const IconPlumb = () => (
  <svg
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
    />
  </svg>
);
const IconCold = () => (
  <svg
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"
    />
  </svg>
);

const tickerItems = [
  "Climatización residencial",
  "Aerotermia",
  "Fontanería",
  "Cámaras frigoríficas",
  "Daikin",
  "Mitsubishi",
  "Fujitsu",
  "LG",
  "Samsung",
  "Instalación nueva",
  "Reparación express",
  "Mantenimiento anual",
  "Viladecans",
  "Castelldefels",
  "Baix Llobregat",
];

export default function HomePage() {
  return (
    <>
      <HomeEffects />

      {/* ── HERO ── */}
      <section
        className="hero-section"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "100dvh",
          background: "var(--bg)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Left column */}
        <div
          className="hero-left"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding:
              "120px 64px 80px max(32px, calc((100vw - 1320px) / 2 + 32px))",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "var(--accent-dim)",
              border: "1px solid rgba(0,200,255,0.2)",
              borderRadius: 100,
              padding: "6px 14px",
              marginBottom: 28,
              alignSelf: "flex-start",
              animation: "fadeSlideUp 0.6s 0s ease both",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--accent)",
                animation: "dotPulse 2s ease-in-out infinite",
              }}
            />
            <span
              style={{
                fontFamily: "var(--font-dm-mono)",
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--accent)",
              }}
            >
              Barcelona · Viladecans · Baix Llobregat
            </span>
          </div>

          {/* H1 */}
          <h1
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 800,
              fontSize: "clamp(44px, 5.5vw, 70px)",
              letterSpacing: "-0.04em",
              lineHeight: 0.98,
              color: "var(--text)",
              marginBottom: 24,
              animation: "fadeSlideUp 0.6s 0.1s ease both",
            }}
          >
            Servicios de
            <br />
            <span style={{ color: "var(--accent)" }}>
              climatización, aerotermia
            </span>
            <br /> y fontaneria
          </h1>

          {/* Description */}
          <p
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontWeight: 300,
              fontSize: 16,
              color: "var(--muted2)",
              lineHeight: 1.75,
              maxWidth: 460,
              marginBottom: 36,
              animation: "fadeSlideUp 0.6s 0.2s ease both",
            }}
          >
            Instalamos y reparamos sistemas de aire acondiconado, cámaras
            comerciales, equipos de frio y fontanería en Barcelona y
            alrededores. Presupuesto gratuito en menos de 24&nbsp;horas.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
              marginBottom: 48,
              animation: "fadeSlideUp 0.6s 0.3s ease both",
            }}
          >
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Pedir presupuesto
              <svg
                width="16"
                height="16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
            <Link href="/servicios/climatizacion" className="btn-outline">
              Ver servicios
            </Link>
          </div>

          {/* Stats */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              borderTop: "1px solid var(--border)",
              paddingTop: 32,
              animation: "fadeSlideUp 0.6s 0.4s ease both",
            }}
          >
            {[
              { value: "+25", label: "años de experiencia" },
              { value: "24h", label: "respuesta garantizada" },
              { value: "9", label: "municipios atendidos" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                style={{
                  paddingRight: i < 2 ? 24 : 0,
                  paddingLeft: i > 0 ? 24 : 0,
                  borderRight: i < 2 ? "1px solid var(--border)" : "none",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontWeight: 800,
                    fontSize: 28,
                    letterSpacing: "-0.05em",
                    color: "var(--text)",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-dm-mono)",
                    fontSize: 10,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    marginTop: 6,
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — image */}
        <div
          className="hero-right"
          style={{ position: "relative", overflow: "hidden" }}
        >
          <Image
            src="/hero-nk.jpg"
            alt="Técnico instalando sistema de climatización"
            fill
            className="object-cover"
            priority
            style={{
              filter: "grayscale(30%)",
              animation: "heroImgIn 1.2s 0s cubic-bezier(0.16,1,0.3,1) both",
            }}
          />
          {/* edge gradients — all four sides in one layer */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: [
                "linear-gradient(to right,  var(--bg) 0%, transparent 40%)",
                "linear-gradient(to bottom, var(--bg) 0%, transparent 38%)",
                "linear-gradient(to top,    var(--bg) 0%, transparent 40%)",
              ].join(", "),
              pointerEvents: "none",
            }}
          />
          {/* Brand labels */}
          <div
            style={{
              position: "absolute",
              right: 32,
              top: "50%",
              transform: "translateY(-50%)",
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            {["Daikin", "Mitsubishi", "Fujitsu", "LG", "Samsung"].map(
              (brand, i) => (
                <span
                  key={brand}
                  style={{
                    fontFamily: "var(--font-dm-mono)",
                    fontSize: 11,
                    letterSpacing: "0.14em",
                    color: "var(--muted)",
                    textTransform: "uppercase",
                    animation: `fadeSlideLeft 0.6s ${0.5 + i * 0.1}s ease both`,
                  }}
                >
                  {brand}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ── TICKER ── */}
      <div
        className="ticker-wrap"
        style={{
          background: "var(--surface)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          padding: "14px 0",
          overflow: "hidden",
        }}
      >
        <div className="ticker-track">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 20,
                paddingRight: 20,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-dm-mono)",
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  whiteSpace: "nowrap",
                }}
              >
                {item}
              </span>
              <span
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: "50%",
                  background: "var(--accent)",
                  flexShrink: 0,
                }}
              />
            </span>
          ))}
        </div>
      </div>

      {/* ── SERVICIOS (Bento Grid) ── */}
      <section style={{ padding: "100px 0", background: "var(--bg)" }}>
        <div className="container-main">
          <div style={{ marginBottom: 48 }}>
            <p
              className="reveal"
              style={{
                fontFamily: "var(--font-dm-mono)",
                fontSize: 11,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--muted)",
                marginBottom: 12,
              }}
            >
              Lo que hacemos
            </p>
            <h2
              className="reveal reveal-delay-1"
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 800,
                fontSize: "clamp(28px, 3vw, 48px)",
                letterSpacing: "-0.04em",
                lineHeight: 1.02,
                color: "var(--text)",
              }}
            >
              Soluciones completas
              <br />
              para cada necesidad.
            </h2>
          </div>

          {/* Row 1: large 7 + small 5 */}
          <div
            className="bento-outer reveal reveal-delay-2"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              gap: 16,
            }}
          >
            {/* Large card — Aire Acondicionado */}
            <div
              className="bento-card"
              style={{
                gridColumn: "span 7",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: 40,
                display: "grid",
                gridTemplateColumns: "1fr 220px",
                gap: 32,
                alignItems: "center",
                transition: "border-color 0.2s, transform 0.2s",
              }}
            >
              <div>
                <div
                  className="bento-icon"
                  style={{
                    width: 52,
                    height: 52,
                    border: "1px solid var(--border2)",
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent)",
                    marginBottom: 20,
                    transition: "background 0.2s",
                  }}
                >
                  <IconAC />
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-dm-mono)",
                    fontSize: 10,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    marginBottom: 8,
                  }}
                >
                  Climatización
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontWeight: 700,
                    fontSize: 22,
                    letterSpacing: "-0.03em",
                    color: "var(--text)",
                    marginBottom: 12,
                  }}
                >
                  Aire Acondicionado
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontWeight: 300,
                    fontSize: 14,
                    color: "var(--muted2)",
                    lineHeight: 1.7,
                    maxWidth: 340,
                  }}
                >
                  Instalación, reparación y mantenimiento de splits, multisplits
                  y sistemas de conductos para hogares y negocios.
                </p>
                <Link
                  href="/servicios/climatizacion"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    marginTop: 20,
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: 13,
                    color: "var(--accent)",
                  }}
                >
                  Ver más
                  <svg
                    width="14"
                    height="14"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
              <div
                style={{
                  borderRadius: 8,
                  overflow: "hidden",
                  height: 180,
                  position: "relative",
                  flexShrink: 0,
                }}
              >
                <Image
                  src="/nkair-working.jpg"
                  alt="Instalacion, mantenimiento y reparacion de Aire acondicionado"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Small card — Aerotermia */}
            <div
              className="bento-card"
              style={{
                gridColumn: "span 5",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: 40,
                transition: "border-color 0.2s, transform 0.2s",
              }}
            >
              <div
                className="bento-icon"
                style={{
                  width: 52,
                  height: 52,
                  border: "1px solid var(--border2)",
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent)",
                  marginBottom: 20,
                  transition: "background 0.2s",
                }}
              >
                <IconAero />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 8,
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-dm-mono)",
                    fontSize: 10,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                  }}
                >
                  Aerotermia
                </p>
                <span
                  style={{
                    fontFamily: "var(--font-dm-mono)",
                    fontSize: 10,
                    color: "var(--accent)",
                    background: "rgba(0,200,255,0.1)",
                    border: "1px solid rgba(0,200,255,0.2)",
                    borderRadius: 100,
                    padding: "2px 10px",
                    letterSpacing: "0.1em",
                  }}
                >
                  ahorro 70%
                </span>
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-syne)",
                  fontWeight: 700,
                  fontSize: 22,
                  letterSpacing: "-0.03em",
                  color: "var(--text)",
                  marginBottom: 12,
                }}
              >
                Aerotermia
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontWeight: 300,
                  fontSize: 14,
                  color: "var(--muted2)",
                  lineHeight: 1.7,
                }}
              >
                La alternativa sostenible para climatizar tu hogar y tener agua
                caliente. Ahorra hasta un 70% en energía.
              </p>
              <Link
                href="/servicios/aerotermia"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  marginTop: 20,
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: 13,
                  color: "var(--accent)",
                }}
              >
                Ver más
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Row 2: small 5 + large 7 */}
          <div
            className="bento-outer reveal reveal-delay-3"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(12, 1fr)",
              gap: 16,
              marginTop: 16,
            }}
          >
            {/* Small — Fontanería */}
            <div
              className="bento-card"
              style={{
                gridColumn: "span 5",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: 40,
                transition: "border-color 0.2s, transform 0.2s",
              }}
            >
              <div
                className="bento-icon"
                style={{
                  width: 52,
                  height: 52,
                  border: "1px solid var(--border2)",
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent)",
                  marginBottom: 20,
                  transition: "background 0.2s",
                }}
              >
                <IconPlumb />
              </div>
              <p
                style={{
                  fontFamily: "var(--font-dm-mono)",
                  fontSize: 10,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  marginBottom: 8,
                }}
              >
                Fontanería
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-syne)",
                  fontWeight: 700,
                  fontSize: 22,
                  letterSpacing: "-0.03em",
                  color: "var(--text)",
                  marginBottom: 12,
                }}
              >
                Fontanería
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontWeight: 300,
                  fontSize: 14,
                  color: "var(--muted2)",
                  lineHeight: 1.7,
                }}
              >
                Instalaciones, reparaciones y mantenimiento de fontanería para
                viviendas y locales comerciales.
              </p>
              <Link
                href="/servicios/fontaneria"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  marginTop: 20,
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: 13,
                  color: "var(--accent)",
                }}
              >
                Ver más
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>

            {/* Large — Cámaras */}
            <div
              className="bento-card"
              style={{
                gridColumn: "span 7",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: 40,
                display: "grid",
                gridTemplateColumns: "1fr 220px",
                gap: 32,
                alignItems: "center",
                transition: "border-color 0.2s, transform 0.2s",
              }}
            >
              <div>
                <div
                  className="bento-icon"
                  style={{
                    width: 52,
                    height: 52,
                    border: "1px solid var(--border2)",
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent)",
                    marginBottom: 20,
                    transition: "background 0.2s",
                  }}
                >
                  <IconCold />
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-dm-mono)",
                    fontSize: 10,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                    marginBottom: 8,
                  }}
                >
                  Frío industrial
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontWeight: 700,
                    fontSize: 22,
                    letterSpacing: "-0.03em",
                    color: "var(--text)",
                    marginBottom: 12,
                  }}
                >
                  Cámaras Frigoríficas
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontWeight: 300,
                    fontSize: 14,
                    color: "var(--muted2)",
                    lineHeight: 1.7,
                    maxWidth: 340,
                  }}
                >
                  Instalación y mantenimiento de cámaras frigoríficas y equipos
                  de frío para uso comercial e industrial.
                </p>
                <Link
                  href="/servicios/camaras-frigorificas"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    marginTop: 20,
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: 13,
                    color: "var(--accent)",
                  }}
                >
                  Ver más
                  <svg
                    width="14"
                    height="14"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
              <div
                style={{
                  borderRadius: 8,
                  overflow: "hidden",
                  height: 180,
                  position: "relative",
                }}
              >
                <Image
                  src="/nkair-camara.webp"
                  alt="Mantenimiento y reparacion de Cámaras frigoríficas en barcelona y alrededores"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS / TRUST ── */}
      <section
        style={{
          background: "var(--surface)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="container-main">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              maxWidth: 900,
              margin: "0 auto",
            }}
            className="stats-grid"
          >
            {[
              { value: "+25", suffix: "", label: "Años de experiencia" },
              { value: "24", suffix: "h", label: "Respuesta garantizada" },
              { value: "9", suffix: "+", label: "Municipios atendidos" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="stats-cell"
                style={{
                  padding: "56px 48px",
                  textAlign: "center",
                  borderRight: i < 2 ? "1px solid var(--border)" : "none",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontWeight: 700,
                    fontSize: 52,
                    letterSpacing: "-0.05em",
                    lineHeight: 1,
                    color: "var(--text)",
                    marginBottom: 10,
                  }}
                >
                  {stat.value}
                  <span style={{ color: "var(--accent)" }}>{stat.suffix}</span>
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontWeight: 300,
                    fontSize: 14,
                    color: "var(--muted)",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 640px) {
            .stats-grid { grid-template-columns: 1fr !important; max-width: 100% !important; }
            .stats-cell { border-right: none !important; border-bottom: 1px solid var(--border); text-align: left !important; padding: 36px 0 !important; }
            .stats-cell:last-child { border-bottom: none !important; }
          }
        `}</style>
      </section>

      {/* ── AIRE ACONDICIONADO detalle ── */}
      <section style={{ padding: "100px 0", background: "var(--bg)" }}>
        <div className="container-main">
          <div
            className="detail-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 80,
              alignItems: "center",
            }}
          >
            <div className="reveal">
              <p
                style={{
                  fontFamily: "var(--font-dm-mono)",
                  fontSize: 11,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: 16,
                }}
              >
                Climatización
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-syne)",
                  fontWeight: 800,
                  fontSize: "clamp(28px, 3vw, 44px)",
                  letterSpacing: "-0.04em",
                  lineHeight: 1.05,
                  color: "var(--text)",
                  marginBottom: 20,
                }}
              >
                Instalación profesional de aire acondicionado.
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontWeight: 300,
                  fontSize: 15,
                  color: "var(--muted2)",
                  lineHeight: 1.75,
                  marginBottom: 28,
                }}
              >
                Instalamos y reparamos todo tipo de sistemas: splits
                individuales, multisplits, conductos y VRV/VRF para hogares y
                negocios. Trabajamos con Daikin, Mitsubishi, Fujitsu, LG y
                Samsung.
              </p>
              <ul style={{ listStyle: "none", padding: 0, marginBottom: 32 }}>
                {[
                  "Instalación nueva",
                  "Reparación de averías",
                  "Limpieza y mantenimiento",
                  "Sustitución de equipos",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: 14,
                      color: "var(--muted2)",
                      paddingLeft: 20,
                      marginBottom: 10,
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: 16,
                        height: 1,
                        background: "var(--accent)",
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={getWhatsAppUrl(
                  "Hola, me gustaría pedir presupuesto para instalación de aire acondicionado.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Solicitar presupuesto
              </a>
            </div>
            <div
              className="reveal reveal-delay-2"
              style={{ position: "relative" }}
            >
              <div
                style={{
                  aspectRatio: "4/3",
                  borderRadius: 12,
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Image
                  src="/nkair-working.jpg"
                  alt="Instalación de aire acondicionado profesional en Viladecans"
                  fill
                  className="object-cover detail-img"
                  style={{ transition: "transform 0.4s ease" }}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: -24,
                  left: -24,
                  background: "var(--accent)",
                  color: "#000",
                  borderRadius: 12,
                  padding: "16px 20px",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontWeight: 800,
                    fontSize: 28,
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                  }}
                >
                  +25
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-dm-mono)",
                    fontSize: 10,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginTop: 4,
                  }}
                >
                  Años de experiencia
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AEROTERMIA detalle ── */}
      <section style={{ padding: "100px 0", background: "var(--surface)" }}>
        <div className="container-main">
          <div
            className="detail-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 80,
              alignItems: "center",
              direction: "rtl",
            }}
          >
            <div
              className="reveal"
              style={{ direction: "ltr", position: "relative" }}
            >
              <div
                style={{
                  aspectRatio: "4/3",
                  borderRadius: 12,
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Image
                  src="/nkair-barometro.jpg"
                  alt="Instalación de aerotermia y bomba de calor"
                  fill
                  className="object-cover detail-img"
                  style={{ transition: "transform 0.4s ease" }}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  top: -24,
                  right: -24,
                  background: "var(--accent)",
                  color: "#000",
                  borderRadius: 12,
                  padding: "16px 20px",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontWeight: 800,
                    fontSize: 28,
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                  }}
                >
                  70%
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-dm-mono)",
                    fontSize: 10,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    marginTop: 4,
                  }}
                >
                  Ahorro energético
                </p>
              </div>
            </div>
            <div className="reveal reveal-delay-2" style={{ direction: "ltr" }}>
              <p
                style={{
                  fontFamily: "var(--font-dm-mono)",
                  fontSize: 11,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  marginBottom: 16,
                }}
              >
                Energía sostenible
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-syne)",
                  fontWeight: 800,
                  fontSize: "clamp(28px, 3vw, 44px)",
                  letterSpacing: "-0.04em",
                  lineHeight: 1.05,
                  color: "var(--text)",
                  marginBottom: 20,
                }}
              >
                Aerotermia: eficiencia y ahorro real.
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontWeight: 300,
                  fontSize: 15,
                  color: "var(--muted2)",
                  lineHeight: 1.75,
                  marginBottom: 28,
                }}
              >
                La aerotermia es la solución más eficiente para climatizar tu
                vivienda y obtener agua caliente sanitaria. Con una bomba de
                calor aerotérmica puedes ahorrar hasta un 70% en energía.
              </p>
              <ul style={{ listStyle: "none", padding: 0, marginBottom: 32 }}>
                {[
                  "Instalación de bombas de calor",
                  "Integración con suelo radiante",
                  "Gestión de subvenciones",
                  "Mantenimiento anual",
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: 14,
                      color: "var(--muted2)",
                      paddingLeft: 20,
                      marginBottom: 10,
                      position: "relative",
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        top: "50%",
                        transform: "translateY(-50%)",
                        width: 16,
                        height: 1,
                        background: "var(--accent)",
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={getWhatsAppUrl(
                  "Hola, me gustaría consultar sobre instalación de aerotermia.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Consultar instalación
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARCAS ── */}
      <section
        style={{
          background: "var(--surface)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          padding: "60px 0",
        }}
      >
        <div className="container-main">
          <p
            className="reveal"
            style={{
              fontFamily: "var(--font-dm-mono)",
              fontSize: 10,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--muted)",
              textAlign: "center",
              marginBottom: 32,
            }}
          >
            Trabajamos con las siguientes marcas y más
          </p>
          <div
            className="reveal reveal-delay-1"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 60,
              flexWrap: "wrap",
            }}
          >
            {["Daikin", "Mitsubishi", "Fujitsu", "LG", "Samsung"].map(
              (brand) => (
                <span
                  key={brand}
                  className="brand-name"
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontWeight: 700,
                    fontSize: 20,
                  }}
                >
                  {brand}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ── ZONAS ── */}
      <ZoneBadges />

      {/* ── TESTIMONIALES ── */}
      <section style={{ padding: "100px 0", background: "var(--bg)" }}>
        <div className="container-main">
          <div style={{ marginBottom: 48 }}>
            <p
              className="reveal"
              style={{
                fontFamily: "var(--font-dm-mono)",
                fontSize: 11,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--muted)",
                marginBottom: 12,
              }}
            >
              Clientes
            </p>
            <h2
              className="reveal reveal-delay-1"
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 800,
                fontSize: "clamp(28px, 3vw, 48px)",
                letterSpacing: "-0.04em",
                lineHeight: 1.02,
                color: "var(--text)",
              }}
            >
              Lo que dicen los que
              <br />
              ya confían en nosotros.
            </h2>
          </div>

          <div
            className="testimonials-grid reveal reveal-delay-2"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 2,
              background: "var(--border)",
            }}
          >
            {[
              {
                quote:
                  "Instalaron el aire acondicionado en mi piso de Castelldefels en un día. Trabajo limpio, precio justo y sin sorpresas. 100% recomendable.",
                author: "María Guitart",
                location: "Castelldefels",
                initials: "MG",
              },
              {
                quote:
                  "Llevamos años con el contrato de mantenimiento y nunca hemos tenido un problema. Vienen rápido y saben lo que hacen.",
                author: "Roberto Pascual",
                location: "Viladecans",
                initials: "RP",
              },
              {
                quote:
                  "Me instalaron una bomba de calor y gestionaron toda la subvención. Ahorro notable en la factura de luz. Muy profesionales.",
                author: "Ana Molina",
                location: "Gavà",
                initials: "AM",
              },
            ].map((t) => (
              <div
                key={t.author}
                style={{ background: "var(--surface)", padding: "48px 40px" }}
              >
                <div style={{ display: "flex", gap: 3, marginBottom: 20 }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="var(--accent)"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontWeight: 300,
                    fontSize: 16,
                    color: "var(--muted2)",
                    lineHeight: 1.75,
                    marginBottom: 28,
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div
                  style={{
                    borderTop: "1px solid var(--border)",
                    paddingTop: 20,
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      background: "var(--accent-dim)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-syne)",
                        fontWeight: 700,
                        fontSize: 13,
                        color: "var(--accent)",
                      }}
                    >
                      {t.initials}
                    </span>
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-syne)",
                        fontWeight: 600,
                        fontSize: 14,
                        color: "var(--text)",
                      }}
                    >
                      {t.author}
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-dm-mono)",
                        fontSize: 11,
                        color: "var(--muted)",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {t.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .testimonials-grid { grid-template-columns: 1fr !important; }
          }
          .detail-img:hover { transform: scale(1.04); }
          @media (max-width: 900px) {
            .detail-grid {
              grid-template-columns: 1fr !important;
              direction: ltr !important;
              gap: 48px !important;
            }
            .detail-grid > div { direction: ltr !important; }
          }
          @media (max-width: 900px) {
            .bento-outer > .bento-card {
              grid-column: span 12 !important;
              grid-template-columns: 1fr !important;
            }
          }
          @media (max-width: 640px) {
            .hero-section { grid-template-columns: 1fr !important; }
            .hero-right { height: 50vw !important; position: relative !important; }
            .hero-left {
              padding: 100px 20px 40px !important;
            }
            .hero-scroll-indicator { display: none !important; }
          }
        `}</style>
      </section>

      {/* ── CTA FINAL ── */}
      <CTABanner />
    </>
  );
}
