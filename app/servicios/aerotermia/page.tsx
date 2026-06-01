import type { Metadata } from "next";
import Image from "next/image";
import CTABanner from "@/components/CTABanner";
import FAQSection from "@/components/FAQSection";
import { getWhatsAppUrl, SITE_CONFIG } from "@/lib/config";
import { faqSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Aerotermia en Viladecans y Baix Llobregat | Bomba de Calor",
  description:
    "Instalación de aerotermia y bombas de calor en Viladecans y Castelldefels. Ahorra hasta un 70% en tu factura de energía. Gestión de subvenciones incluida.",
  keywords: [
    "aerotermia Viladecans",
    "bomba de calor Barcelona",
    "instalación aerotermia Baix Llobregat",
    "subvenciones aerotermia Cataluña",
    "aerotermia suelo radiante Castelldefels",
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/servicios/aerotermia` },
};

const faqs = [
  {
    question: "¿Qué es la aerotermia y cómo funciona?",
    answer:
      "La aerotermia es una tecnología que extrae energía térmica del aire exterior para climatizar tu hogar y producir agua caliente sanitaria. Una bomba de calor aerotérmica puede generar hasta 4 kWh de energía por cada 1 kWh eléctrico consumido, lo que supone un ahorro enorme respecto a sistemas tradicionales.",
  },
  {
    question: "¿Cuánto puedo ahorrar con la aerotermia?",
    answer:
      "Dependiendo de tu sistema actual, el ahorro puede llegar al 70% en la factura de calefacción y agua caliente. Comparado con gas natural, gasoil o eléctrico tradicional, la aerotermia es significativamente más eficiente.",
  },
  {
    question: "¿Existen subvenciones para instalar aerotermia?",
    answer:
      "Sí. Actualmente hay ayudas del programa MOVES III, el Plan de Recuperación del Gobierno de España y subvenciones de la Generalitat de Catalunya. En NK Air te asesoramos y gestionamos todos los trámites para que puedas acceder a estas ayudas.",
  },
  {
    question: "¿Es compatible la aerotermia con suelo radiante?",
    answer:
      "Sí, la aerotermia es perfectamente compatible con suelo radiante y es de hecho la combinación más eficiente. Las bombas de calor aerotérmicas funcionan a temperaturas más bajas que las calderas, lo que las hace ideales para suelo radiante.",
  },
  {
    question: "¿Cuánto tiempo dura la instalación?",
    answer:
      "La instalación de una bomba de calor aerotérmica suele completarse en 1-2 días, dependiendo de la complejidad del sistema y si es una instalación nueva o una sustitución. Nuestro equipo te informará del tiempo exacto tras la visita de presupuesto.",
  },
];

const svgHeatPump = "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z";
const svgRadiant = "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z";
const svgWater = "M12 3c0 0-5.5 6-5.5 10a5.5 5.5 0 0011 0C17.5 9 12 3 12 3z";
const svgGrant = "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z";
const svgCalendar = "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 9v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H18v-.008zm0 2.25h.008v.008H18V15z";
const svgChart = "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z";

const Icon = ({ d }: { d: string }) => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
  </svg>
);

export default function AerotermiaPage() {
  const schemaData = serviceSchema(
    "Instalación de Aerotermia y Bombas de Calor",
    "Instalación profesional de sistemas de aerotermia y bombas de calor en Viladecans y el Baix Llobregat. Ahorra hasta un 70% en energía.",
    `${SITE_CONFIG.url}/servicios/aerotermia`,
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([schemaData, faqSchema(faqs)]) }}
      />

      {/* ── HERO ── */}
      <section
        className="svc-hero"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "100dvh",
          background: "var(--bg)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          className="svc-hero-left"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: "120px 64px 80px max(32px, calc((100vw - 1320px) / 2 + 32px))",
            position: "relative",
            zIndex: 2,
          }}
        >
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--accent-dim)", border: "1px solid rgba(0,200,255,0.2)", borderRadius: 100, padding: "6px 14px", marginBottom: 28, alignSelf: "flex-start", animation: "fadeSlideUp 0.6s 0s ease both" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", animation: "dotPulse 2s ease-in-out infinite" }} />
            <span style={{ fontFamily: "var(--font-dm-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)" }}>
              Aerotermia · Energía sostenible
            </span>
          </div>

          <h1 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(36px, 4.5vw, 62px)", letterSpacing: "-0.04em", lineHeight: 0.98, color: "var(--text)", marginBottom: 24, animation: "fadeSlideUp 0.6s 0.1s ease both" }}>
            Aerotermia:<br />
            <span style={{ color: "var(--accent)" }}>ahorra hasta un 70%</span><br />
            en energía
          </h1>

          <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300, fontSize: 16, color: "var(--muted2)", lineHeight: 1.75, maxWidth: 460, marginBottom: 36, animation: "fadeSlideUp 0.6s 0.2s ease both" }}>
            Instalamos bombas de calor aerotérmicas en Viladecans y el Baix Llobregat. Te asesoramos y gestionamos las subvenciones disponibles para reducir la inversión inicial.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 48, animation: "fadeSlideUp 0.6s 0.3s ease both" }}>
            <a href={getWhatsAppUrl("Hola, me gustaría consultar sobre instalación de aerotermia y subvenciones disponibles.")} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Consultar instalación
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </a>
            <a href="#servicios" className="btn-outline">Ver servicios</a>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderTop: "1px solid var(--border)", paddingTop: 32, animation: "fadeSlideUp 0.6s 0.4s ease both" }}>
            {[
              { value: "70%", label: "ahorro energético" },
              { value: "1-2d", label: "tiempo instalación" },
              { value: "100%", label: "gestión subvenciones" },
            ].map((stat, i) => (
              <div key={stat.label} style={{ paddingRight: i < 2 ? 24 : 0, paddingLeft: i > 0 ? 24 : 0, borderRight: i < 2 ? "1px solid var(--border)" : "none" }}>
                <p style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: 28, letterSpacing: "-0.05em", color: "var(--text)", lineHeight: 1 }}>{stat.value}</p>
                <p style={{ fontFamily: "var(--font-dm-mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", marginTop: 6 }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="svc-hero-right" style={{ position: "relative", overflow: "hidden" }}>
          <Image src="/nkair-barometro.jpg" alt="Instalación de aerotermia y bomba de calor en Viladecans" fill className="object-cover" priority style={{ filter: "grayscale(20%)", animation: "heroImgIn 1.2s 0s cubic-bezier(0.16,1,0.3,1) both" }} />
          <div className="hero-overlay-desktop" />
          <div className="hero-overlay-mobile" />
        </div>
      </section>

      {/* ── QUÉ INCLUYE ── */}
      <section id="servicios" style={{ padding: "100px 0", background: "var(--bg)" }}>
        <div className="container-main">
          <div style={{ marginBottom: 48 }}>
            <p className="reveal" style={{ fontFamily: "var(--font-dm-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 12 }}>Servicios incluidos</p>
            <h2 className="reveal reveal-delay-1" style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(28px, 3vw, 44px)", letterSpacing: "-0.04em", lineHeight: 1.02, color: "var(--text)" }}>
              Todo lo que incluye<br />nuestra instalación de aerotermia.
            </h2>
          </div>
          <div className="svc-cards reveal reveal-delay-2">
            {[
              { icon: svgHeatPump, title: "Instalación de bomba de calor", desc: "Instalación completa de sistemas aerotérmicos para calefacción, refrigeración y ACS en cualquier tipo de vivienda." },
              { icon: svgRadiant, title: "Integración con suelo radiante", desc: "Conexión con sistemas de suelo radiante existentes o nuevos para alcanzar la máxima eficiencia energética." },
              { icon: svgWater, title: "Agua caliente sanitaria", desc: "Producción de ACS con hasta 4 veces más eficiencia que un calentador eléctrico convencional." },
              { icon: svgGrant, title: "Gestión de subvenciones", desc: "Tramitación completa de las ayudas MOVES III y subvenciones de la Generalitat de Catalunya." },
              { icon: svgCalendar, title: "Mantenimiento anual", desc: "Revisiones y mantenimiento preventivo para garantizar la vida útil óptima del equipo." },
              { icon: svgChart, title: "Estudio de viabilidad", desc: "Análisis personalizado del ahorro energético esperado y tiempo de amortización de la inversión." },
            ].map((s) => (
              <div key={s.title} className="bento-card" style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, padding: 32, transition: "border-color 0.2s, transform 0.2s" }}>
                <div className="bento-icon" style={{ width: 48, height: 48, border: "1px solid var(--border2)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)", marginBottom: 16, transition: "background 0.2s" }}>
                  <Icon d={s.icon} />
                </div>
                <h3 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: 15, letterSpacing: "-0.02em", color: "var(--text)", marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300, fontSize: 14, color: "var(--muted2)", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DETALLE 1 ── */}
      <section style={{ padding: "100px 0", background: "var(--surface)" }}>
        <div className="container-main">
          <div className="detail-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
            <div className="reveal">
              <p style={{ fontFamily: "var(--font-dm-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 16 }}>Bomba de calor aerotérmica</p>
              <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(28px, 3vw, 44px)", letterSpacing: "-0.04em", lineHeight: 1.05, color: "var(--text)", marginBottom: 20 }}>
                La solución más eficiente para tu hogar.
              </h2>
              <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300, fontSize: 15, color: "var(--muted2)", lineHeight: 1.75, marginBottom: 28 }}>
                La aerotermia extrae energía gratuita del aire exterior para calefactar, refrigerar y producir agua caliente sanitaria. Es la tecnología más eficiente del mercado y compatible con casi cualquier vivienda existente.
              </p>
              <ul style={{ listStyle: "none", padding: 0, marginBottom: 32 }}>
                {[
                  "Calefacción, refrigeración y ACS en un único equipo",
                  "Compatible con radiadores de baja temperatura",
                  "Integración con suelo radiante o fan coils",
                  "Funcionamiento eficiente hasta -20°C exterior",
                ].map((item) => (
                  <li key={item} style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, color: "var(--muted2)", paddingLeft: 20, marginBottom: 10, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", width: 16, height: 1, background: "var(--accent)" }} />
                    {item}
                  </li>
                ))}
              </ul>
              <a href={getWhatsAppUrl("Hola, me gustaría consultar sobre instalación de aerotermia.")} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Solicitar estudio gratuito
              </a>
            </div>
            <div className="reveal reveal-delay-2" style={{ position: "relative" }}>
              <div style={{ aspectRatio: "4/3", borderRadius: 12, overflow: "hidden", position: "relative" }}>
                <Image src="/nkair-barometro.jpg" alt="Bomba de calor aerotérmica instalada" fill className="object-cover detail-img" style={{ transition: "transform 0.4s ease" }} />
              </div>
              <div style={{ position: "absolute", bottom: -24, left: -24, background: "var(--accent)", color: "#000", borderRadius: 12, padding: "16px 20px" }}>
                <p style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: 28, letterSpacing: "-0.04em", lineHeight: 1 }}>70%</p>
                <p style={{ fontFamily: "var(--font-dm-mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 4 }}>Ahorro energético</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DETALLE 2 ── */}
      <section style={{ padding: "100px 0", background: "var(--bg)" }}>
        <div className="container-main">
          <div className="detail-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center", direction: "rtl" }}>
            <div className="reveal" style={{ direction: "ltr", position: "relative" }}>
              <div style={{ aspectRatio: "4/3", borderRadius: 12, overflow: "hidden", position: "relative" }}>
                <Image src="/nkair-working.jpg" alt="Gestión de subvenciones aerotermia" fill className="object-cover detail-img" style={{ transition: "transform 0.4s ease" }} />
              </div>
              <div style={{ position: "absolute", top: -24, right: -24, background: "var(--accent)", color: "#000", borderRadius: 12, padding: "16px 20px" }}>
                <p style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: 28, letterSpacing: "-0.04em", lineHeight: 1 }}>€€€</p>
                <p style={{ fontFamily: "var(--font-dm-mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 4 }}>Subvenciones gestionadas</p>
              </div>
            </div>
            <div className="reveal reveal-delay-2" style={{ direction: "ltr" }}>
              <p style={{ fontFamily: "var(--font-dm-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 16 }}>Subvenciones y financiación</p>
              <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(28px, 3vw, 44px)", letterSpacing: "-0.04em", lineHeight: 1.05, color: "var(--text)", marginBottom: 20 }}>
                Gestionamos las ayudas para que no te preocupes de nada.
              </h2>
              <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300, fontSize: 15, color: "var(--muted2)", lineHeight: 1.75, marginBottom: 28 }}>
                Existen importantes subvenciones públicas para la instalación de aerotermia. Nos encargamos de toda la burocracia para que puedas acceder a las ayudas del Gobierno y la Generalitat sin perder tiempo.
              </p>
              <ul style={{ listStyle: "none", padding: 0, marginBottom: 32 }}>
                {[
                  "Tramitación completa de ayudas MOVES III",
                  "Subvenciones de la Generalitat de Catalunya",
                  "Plan de Recuperación y Resiliencia",
                  "Financiación sin intereses disponible",
                ].map((item) => (
                  <li key={item} style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, color: "var(--muted2)", paddingLeft: 20, marginBottom: 10, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", width: 16, height: 1, background: "var(--accent)" }} />
                    {item}
                  </li>
                ))}
              </ul>
              <a href={getWhatsAppUrl("Hola, me gustaría consultar sobre subvenciones para aerotermia.")} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Consultar subvenciones
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARCAS ── */}
      <section style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "60px 0" }}>
        <div className="container-main">
          <p className="reveal" style={{ fontFamily: "var(--font-dm-mono)", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--muted)", textAlign: "center", marginBottom: 32 }}>
            Marcas de aerotermia con las que trabajamos
          </p>
          <div className="reveal reveal-delay-1" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 60, flexWrap: "wrap" }}>
            {["Daikin", "Mitsubishi", "LG", "Panasonic", "Bosch"].map((brand) => (
              <span key={brand} className="brand-name" style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: 20 }}>{brand}</span>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="¿Te interesa instalar aerotermia?"
        subtitle="Consulta gratuita y gestión de subvenciones incluida. Ahorra hasta un 70% en energía."
        buttonText="Consultar por WhatsApp"
        whatsappMessage="Hola, me gustaría consultar sobre instalación de aerotermia y subvenciones disponibles."
      />

      <FAQSection faqs={faqs} title="Preguntas frecuentes sobre aerotermia" />
    </>
  );
}
