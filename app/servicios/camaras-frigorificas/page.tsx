import type { Metadata } from "next";
import Image from "next/image";
import CTABanner from "@/components/CTABanner";
import FAQSection from "@/components/FAQSection";
import { getWhatsAppUrl, SITE_CONFIG } from "@/lib/config";
import { faqSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Cámaras Frigoríficas en Baix Llobregat | Instalación y Mantenimiento",
  description:
    "Instalación y mantenimiento de cámaras frigoríficas en el Baix Llobregat y Barcelona. Equipos de frío comerciales e industriales. Presupuesto gratuito.",
  keywords: [
    "cámaras frigoríficas Viladecans",
    "instalación cámara frigorífica Barcelona",
    "mantenimiento equipos frío Baix Llobregat",
    "frío industrial Castelldefels",
    "cámara frigorífica restaurante",
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/servicios/camaras-frigorificas` },
};

const faqs = [
  {
    question: "¿Qué tipo de cámaras frigoríficas instaláis?",
    answer:
      "Instalamos todo tipo de cámaras frigoríficas: cámaras de conservación positiva, cámaras de congelación, túneles de congelación, vitrinas expositoras y armarios frigoríficos para restaurantes, supermercados, carnicerías, pescaderías y cualquier negocio del sector alimentario.",
  },
  {
    question: "¿Ofrecéis mantenimiento preventivo?",
    answer:
      "Sí, ofrecemos contratos de mantenimiento preventivo con revisiones periódicas para garantizar el correcto funcionamiento de tus equipos de frío. El mantenimiento regular previene averías costosas y asegura el cumplimiento normativo.",
  },
  {
    question: "¿Cuánto tiempo lleva instalar una cámara frigorífica?",
    answer:
      "Depende del tamaño y la complejidad. Una cámara estándar para restaurante suele instalarse en 1-3 días. Para instalaciones más grandes o complejas, realizamos una visita previa para presupuestar el tiempo exacto.",
  },
  {
    question: "¿Atendéis averías urgentes en equipos de frío?",
    answer:
      "Sí. Entendemos que una avería en una cámara frigorífica puede significar pérdida de mercancía. Por eso, priorizamos las urgencias de frío comercial e intentamos dar respuesta en el menor tiempo posible.",
  },
];

const svgCold = "M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18";
const svgMaintenance = "M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75";
const svgAlert = "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z";
const svgDisplay = "M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3";
const svgSnowflake = "M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07";
const svgCert = "M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12";

const Icon = ({ d }: { d: string }) => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
  </svg>
);

export default function CamarasFrigorificasPage() {
  const schemaData = serviceSchema(
    "Instalación y Mantenimiento de Cámaras Frigoríficas",
    "Instalación y mantenimiento de cámaras frigoríficas y equipos de frío comercial e industrial en el Baix Llobregat y Barcelona.",
    `${SITE_CONFIG.url}/servicios/camaras-frigorificas`,
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
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "100dvh", background: "var(--bg)", position: "relative", overflow: "hidden" }}
      >
        <div
          className="svc-hero-left"
          style={{ display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "120px 64px 80px max(32px, calc((100vw - 1320px) / 2 + 32px))", position: "relative", zIndex: 2 }}
        >
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--accent-dim)", border: "1px solid rgba(0,200,255,0.2)", borderRadius: 100, padding: "6px 14px", marginBottom: 28, alignSelf: "flex-start", animation: "fadeSlideUp 0.6s 0s ease both" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", animation: "dotPulse 2s ease-in-out infinite" }} />
            <span style={{ fontFamily: "var(--font-dm-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)" }}>
              Frío comercial · Baix Llobregat · Barcelona
            </span>
          </div>

          <h1 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(36px, 4.5vw, 62px)", letterSpacing: "-0.04em", lineHeight: 0.98, color: "var(--text)", marginBottom: 24, animation: "fadeSlideUp 0.6s 0.1s ease both" }}>
            Cámaras<br />
            <span style={{ color: "var(--accent)" }}>frigoríficas</span><br />
            para tu negocio
          </h1>

          <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300, fontSize: 16, color: "var(--muted2)", lineHeight: 1.75, maxWidth: 460, marginBottom: 36, animation: "fadeSlideUp 0.6s 0.2s ease both" }}>
            Instalación y mantenimiento de cámaras frigoríficas y equipos de frío para restaurantes, supermercados, carnicerías y cualquier negocio del sector alimentario en el Baix Llobregat.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 48, animation: "fadeSlideUp 0.6s 0.3s ease both" }}>
            <a href={getWhatsAppUrl("Hola, me gustaría pedir presupuesto para instalación de cámara frigorífica.")} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Solicitar presupuesto
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </a>
            <a href="#servicios" className="btn-outline">Ver servicios</a>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderTop: "1px solid var(--border)", paddingTop: 32, animation: "fadeSlideUp 0.6s 0.4s ease both" }}>
            {[
              { value: "24h", label: "respuesta urgencias" },
              { value: "+25", label: "años de experiencia" },
              { value: "100%", label: "conformidad normativa" },
            ].map((stat, i) => (
              <div key={stat.label} style={{ paddingRight: i < 2 ? 24 : 0, paddingLeft: i > 0 ? 24 : 0, borderRight: i < 2 ? "1px solid var(--border)" : "none" }}>
                <p style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: 28, letterSpacing: "-0.05em", color: "var(--text)", lineHeight: 1 }}>{stat.value}</p>
                <p style={{ fontFamily: "var(--font-dm-mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", marginTop: 6 }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="svc-hero-right" style={{ position: "relative", overflow: "hidden" }}>
          <Image src="/nkair-camara.webp" alt="Cámara frigorífica comercial instalada en Barcelona" fill className="object-cover" priority style={{ filter: "grayscale(20%)", animation: "heroImgIn 1.2s 0s cubic-bezier(0.16,1,0.3,1) both" }} />
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
              Instalación y mantenimiento<br />de frío comercial e industrial.
            </h2>
          </div>
          <div className="svc-cards reveal reveal-delay-2">
            {[
              { icon: svgCold, title: "Instalación de cámaras", desc: "Diseño e instalación de cámaras frigoríficas a medida para cualquier tipo de negocio del sector alimentario." },
              { icon: svgMaintenance, title: "Mantenimiento preventivo", desc: "Contratos de mantenimiento periódico para garantizar el funcionamiento óptimo y el cumplimiento normativo." },
              { icon: svgAlert, title: "Reparación de averías", desc: "Servicio urgente de reparación para minimizar el tiempo de inactividad y evitar pérdida de mercancía." },
              { icon: svgDisplay, title: "Vitrinas expositoras", desc: "Instalación y mantenimiento de vitrinas frigoríficas para exposición de productos en puntos de venta." },
              { icon: svgSnowflake, title: "Cámaras de congelación", desc: "Instalación de cámaras de congelación y túneles de congelación para almacenamiento a largo plazo." },
              { icon: svgCert, title: "Certificaciones", desc: "Tramitación de certificados y documentación reglamentaria para cumplir con la normativa de seguridad alimentaria." },
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
              <p style={{ fontFamily: "var(--font-dm-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 16 }}>Instalación profesional</p>
              <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(28px, 3vw, 44px)", letterSpacing: "-0.04em", lineHeight: 1.05, color: "var(--text)", marginBottom: 20 }}>
                Cámaras frigoríficas diseñadas a medida para tu negocio.
              </h2>
              <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300, fontSize: 15, color: "var(--muted2)", lineHeight: 1.75, marginBottom: 28 }}>
                Instalamos cámaras frigoríficas para restaurantes, hoteles, carnicerías, pescaderías, pastelerías y supermercados. Diseñamos la solución óptima para tu espacio y necesidades, minimizando el impacto en tu actividad durante la instalación.
              </p>
              <ul style={{ listStyle: "none", padding: 0, marginBottom: 32 }}>
                {[
                  "Cámaras de conservación y congelación",
                  "Vitrinas expositoras para comercio",
                  "Armarios frigoríficos industriales",
                  "Instalación con mínima interrupción del negocio",
                ].map((item) => (
                  <li key={item} style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, color: "var(--muted2)", paddingLeft: 20, marginBottom: 10, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", width: 16, height: 1, background: "var(--accent)" }} />
                    {item}
                  </li>
                ))}
              </ul>
              <a href={getWhatsAppUrl("Hola, me gustaría pedir presupuesto para instalación de cámara frigorífica.")} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Solicitar presupuesto
              </a>
            </div>
            <div className="reveal reveal-delay-2" style={{ position: "relative" }}>
              <div style={{ aspectRatio: "4/3", borderRadius: 12, overflow: "hidden", position: "relative" }}>
                <Image src="/nkair-camara.webp" alt="Cámara frigorífica comercial instalada" fill className="object-cover detail-img" style={{ transition: "transform 0.4s ease" }} />
              </div>
              <div style={{ position: "absolute", bottom: -24, left: -24, background: "var(--accent)", color: "#000", borderRadius: 12, padding: "16px 20px" }}>
                <p style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: 28, letterSpacing: "-0.04em", lineHeight: 1 }}>24h</p>
                <p style={{ fontFamily: "var(--font-dm-mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 4 }}>Respuesta urgencias</p>
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
                <Image src="/nkair-working.jpg" alt="Mantenimiento preventivo de equipos de frío" fill className="object-cover detail-img" style={{ transition: "transform 0.4s ease" }} />
              </div>
              <div style={{ position: "absolute", top: -24, right: -24, background: "var(--accent)", color: "#000", borderRadius: 12, padding: "16px 20px" }}>
                <p style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: 28, letterSpacing: "-0.04em", lineHeight: 1 }}>+25</p>
                <p style={{ fontFamily: "var(--font-dm-mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 4 }}>Años de experiencia</p>
              </div>
            </div>
            <div className="reveal reveal-delay-2" style={{ direction: "ltr" }}>
              <p style={{ fontFamily: "var(--font-dm-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 16 }}>Mantenimiento preventivo</p>
              <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(28px, 3vw, 44px)", letterSpacing: "-0.04em", lineHeight: 1.05, color: "var(--text)", marginBottom: 20 }}>
                Prevén averías y cumple con la normativa alimentaria.
              </h2>
              <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300, fontSize: 15, color: "var(--muted2)", lineHeight: 1.75, marginBottom: 28 }}>
                El mantenimiento regular de tus equipos de frío previene averías costosas, alarga la vida útil del equipo y garantiza el cumplimiento de la normativa de seguridad alimentaria. Ofrecemos contratos adaptados a tu negocio con visitas periódicas programadas.
              </p>
              <ul style={{ listStyle: "none", padding: 0, marginBottom: 32 }}>
                {[
                  "Revisión periódica de gases refrigerantes",
                  "Limpieza de condensadores y evaporadores",
                  "Control de temperaturas y registros",
                  "Certificados para inspecciones sanitarias",
                ].map((item) => (
                  <li key={item} style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, color: "var(--muted2)", paddingLeft: 20, marginBottom: 10, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", width: 16, height: 1, background: "var(--accent)" }} />
                    {item}
                  </li>
                ))}
              </ul>
              <a href={getWhatsAppUrl("Hola, me gustaría contratar un servicio de mantenimiento para mi cámara frigorífica.")} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Contratar mantenimiento
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARCAS ── */}
      <section style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "60px 0" }}>
        <div className="container-main">
          <p className="reveal" style={{ fontFamily: "var(--font-dm-mono)", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--muted)", textAlign: "center", marginBottom: 32 }}>
            Fabricantes de equipos de frío con los que trabajamos
          </p>
          <div className="reveal reveal-delay-1" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 60, flexWrap: "wrap" }}>
            {["Rivacold", "Bitzer", "Panasonic", "Embraco", "Frascold"].map((brand) => (
              <span key={brand} className="brand-name" style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: 20 }}>{brand}</span>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="¿Necesitas instalar o mantener una cámara frigorífica?"
        subtitle="Presupuesto gratuito para tu negocio. Respondemos en menos de 24 horas."
        whatsappMessage="Hola, me gustaría pedir presupuesto para instalación o mantenimiento de cámara frigorífica."
      />

      <FAQSection faqs={faqs} title="Preguntas frecuentes sobre cámaras frigoríficas" />
    </>
  );
}
