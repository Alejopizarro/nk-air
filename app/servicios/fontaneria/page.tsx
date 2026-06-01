import type { Metadata } from "next";
import Image from "next/image";
import CTABanner from "@/components/CTABanner";
import FAQSection from "@/components/FAQSection";
import { getWhatsAppUrl, SITE_CONFIG } from "@/lib/config";
import { faqSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Fontanería en Viladecans y Baix Llobregat | Instalaciones y Reparaciones",
  description:
    "Servicio de fontanería en Viladecans, Castelldefels y el Baix Llobregat. Instalaciones, reparaciones de averías y mantenimiento. Urgencias 24h. Presupuesto gratuito.",
  keywords: [
    "fontanería Viladecans",
    "fontanero Castelldefels",
    "reparación fontanería urgente Baix Llobregat",
    "instalación fontanería Barcelona sur",
    "fontanero Gavà",
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/servicios/fontaneria` },
};

const faqs = [
  {
    question: "¿Atendeéis urgencias de fontanería?",
    answer:
      "Sí, atendemos urgencias de fontanería con la mayor brevedad posible. Para urgencias, contáctanos directamente por teléfono o WhatsApp y te indicaremos el tiempo de respuesta estimado.",
  },
  {
    question: "¿Qué tipo de averías de fontanería reparáis?",
    answer:
      "Reparamos todo tipo de averías: fugas de agua, tuberías rotas, atascos, problemas con el calentador, goteras en baños y cocinas, cambio de grifería, inodoros, cisternas y cualquier avería relacionada con las instalaciones de agua.",
  },
  {
    question: "¿Hacéis instalaciones completas de fontanería?",
    answer:
      "Sí, realizamos instalaciones completas de fontanería para obras nuevas, reformas de baños y cocinas, cambio de tuberías antiguas y todo tipo de proyectos de fontanería residencial y comercial.",
  },
  {
    question: "¿Trabajáis también en locales comerciales?",
    answer:
      "Sí, ofrecemos servicios de fontanería tanto para viviendas particulares como para locales comerciales, restaurantes, hoteles y cualquier tipo de negocio en el Baix Llobregat.",
  },
];

const svgRepair = "M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75";
const svgShower = "M12 21.75c2.485 0 4.5-4.03 4.5-9s-2.015-9-4.5-9-4.5 4.03-4.5 9 2.015 9 4.5 9zM3.75 9.75h16.5";
const svgKitchen = "M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5";
const svgBuilding = "M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z";
const svgFlame = "M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z";
const svgPipe = "M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3";

const Icon = ({ d }: { d: string }) => (
  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
  </svg>
);

export default function FontaneriaPage() {
  const schemaData = serviceSchema(
    "Fontanería en Viladecans y Baix Llobregat",
    "Servicio profesional de fontanería: instalaciones, reparaciones y mantenimiento para viviendas y negocios en el Baix Llobregat.",
    `${SITE_CONFIG.url}/servicios/fontaneria`,
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
              Fontanería · Viladecans · Baix Llobregat
            </span>
          </div>

          <h1 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(36px, 4.5vw, 62px)", letterSpacing: "-0.04em", lineHeight: 0.98, color: "var(--text)", marginBottom: 24, animation: "fadeSlideUp 0.6s 0.1s ease both" }}>
            Fontaneros de<br />
            <span style={{ color: "var(--accent)" }}>confianza en Viladecans</span><br />
            y Baix Llobregat
          </h1>

          <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300, fontSize: 16, color: "var(--muted2)", lineHeight: 1.75, maxWidth: 460, marginBottom: 36, animation: "fadeSlideUp 0.6s 0.2s ease both" }}>
            Instalaciones, reparaciones y mantenimiento de fontanería para viviendas y negocios. Más de 25 años resolviendo averías con rapidez y garantía en todos nuestros trabajos.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 48, animation: "fadeSlideUp 0.6s 0.3s ease both" }}>
            <a href={getWhatsAppUrl("Hola, necesito un fontanero en Viladecans / Baix Llobregat.")} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Contactar fontanero
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </a>
            <a href="#servicios" className="btn-outline">Ver servicios</a>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderTop: "1px solid var(--border)", paddingTop: 32, animation: "fadeSlideUp 0.6s 0.4s ease both" }}>
            {[
              { value: "+25", label: "años de experiencia" },
              { value: "24h", label: "respuesta garantizada" },
              { value: "100%", label: "garantía trabajo" },
            ].map((stat, i) => (
              <div key={stat.label} style={{ paddingRight: i < 2 ? 24 : 0, paddingLeft: i > 0 ? 24 : 0, borderRight: i < 2 ? "1px solid var(--border)" : "none" }}>
                <p style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: 28, letterSpacing: "-0.05em", color: "var(--text)", lineHeight: 1 }}>{stat.value}</p>
                <p style={{ fontFamily: "var(--font-dm-mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", marginTop: 6 }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="svc-hero-right" style={{ position: "relative", overflow: "hidden" }}>
          <Image src="/nkair-working.jpg" alt="Fontanero realizando instalación en Viladecans" fill className="object-cover" priority style={{ filter: "grayscale(20%)", animation: "heroImgIn 1.2s 0s cubic-bezier(0.16,1,0.3,1) both" }} />
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
              Fontanería para cualquier<br />necesidad de tu hogar o negocio.
            </h2>
          </div>
          <div className="svc-cards reveal reveal-delay-2">
            {[
              { icon: svgRepair, title: "Reparación de averías", desc: "Fugas, tuberías rotas, atascos y cualquier avería de fontanería resuelta con rapidez y garantía." },
              { icon: svgShower, title: "Reforma de baños", desc: "Instalación completa de fontanería en reformas de baños, aseos y cuartos de ducha." },
              { icon: svgKitchen, title: "Cocinas y office", desc: "Fontanería para cocinas residenciales y profesionales, incluyendo lavavajillas y fregaderos." },
              { icon: svgBuilding, title: "Comunidades de vecinos", desc: "Mantenimiento y reparaciones en edificios, comunidades y locales comerciales." },
              { icon: svgFlame, title: "Calentadores y termos", desc: "Instalación y reparación de calentadores de gas, termos eléctricos y acumuladores." },
              { icon: svgPipe, title: "Instalaciones nuevas", desc: "Red de fontanería completa para obra nueva, reforma integral o sustitución de tuberías antiguas." },
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
              <p style={{ fontFamily: "var(--font-dm-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 16 }}>Reparaciones y averías</p>
              <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(28px, 3vw, 44px)", letterSpacing: "-0.04em", lineHeight: 1.05, color: "var(--text)", marginBottom: 20 }}>
                Resolvemos tu avería en el menor tiempo posible.
              </h2>
              <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300, fontSize: 15, color: "var(--muted2)", lineHeight: 1.75, marginBottom: 28 }}>
                Una fuga de agua o una tubería rota puede causar daños graves si no se atiende rápidamente. Nuestro equipo de fontaneros está preparado para diagnosticar y reparar cualquier avería en 24-48h con presupuesto previo sin sorpresas.
              </p>
              <ul style={{ listStyle: "none", padding: 0, marginBottom: 32 }}>
                {[
                  "Fugas y roturas de tuberías de agua",
                  "Atascos y desatascos profesionales",
                  "Reparación de grifería e inodoros",
                  "Diagnóstico y revisión de instalaciones",
                ].map((item) => (
                  <li key={item} style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, color: "var(--muted2)", paddingLeft: 20, marginBottom: 10, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", width: 16, height: 1, background: "var(--accent)" }} />
                    {item}
                  </li>
                ))}
              </ul>
              <a href={getWhatsAppUrl("Hola, tengo una avería de fontanería urgente.")} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Reportar avería urgente
              </a>
            </div>
            <div className="reveal reveal-delay-2" style={{ position: "relative" }}>
              <div style={{ aspectRatio: "4/3", borderRadius: 12, overflow: "hidden", position: "relative" }}>
                <Image src="/nkair-working.jpg" alt="Fontanero reparando avería en Viladecans" fill className="object-cover detail-img" style={{ transition: "transform 0.4s ease" }} />
              </div>
              <div style={{ position: "absolute", bottom: -24, left: -24, background: "var(--accent)", color: "#000", borderRadius: 12, padding: "16px 20px" }}>
                <p style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: 28, letterSpacing: "-0.04em", lineHeight: 1 }}>24h</p>
                <p style={{ fontFamily: "var(--font-dm-mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 4 }}>Respuesta garantizada</p>
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
                <Image src="/nkair-barometro.jpg" alt="Instalación de fontanería para reforma" fill className="object-cover detail-img" style={{ transition: "transform 0.4s ease" }} />
              </div>
              <div style={{ position: "absolute", top: -24, right: -24, background: "var(--accent)", color: "#000", borderRadius: 12, padding: "16px 20px" }}>
                <p style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: 28, letterSpacing: "-0.04em", lineHeight: 1 }}>+25</p>
                <p style={{ fontFamily: "var(--font-dm-mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 4 }}>Años de experiencia</p>
              </div>
            </div>
            <div className="reveal reveal-delay-2" style={{ direction: "ltr" }}>
              <p style={{ fontFamily: "var(--font-dm-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 16 }}>Instalaciones y reformas</p>
              <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(28px, 3vw, 44px)", letterSpacing: "-0.04em", lineHeight: 1.05, color: "var(--text)", marginBottom: 20 }}>
                Instalaciones nuevas con materiales de primera calidad.
              </h2>
              <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300, fontSize: 15, color: "var(--muted2)", lineHeight: 1.75, marginBottom: 28 }}>
                Realizamos instalaciones completas de fontanería para obra nueva, reformas de baños y cocinas, y sustitución de tuberías antiguas de plomo o hierro. Trabajamos con materiales de primera calidad y garantizamos todos nuestros trabajos.
              </p>
              <ul style={{ listStyle: "none", padding: 0, marginBottom: 32 }}>
                {[
                  "Reformas integrales de baños y cocinas",
                  "Sustitución de tuberías antiguas (plomo, hierro)",
                  "Instalación de calentadores y termos",
                  "Fontanería para comunidades y locales comerciales",
                ].map((item) => (
                  <li key={item} style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, color: "var(--muted2)", paddingLeft: 20, marginBottom: 10, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", width: 16, height: 1, background: "var(--accent)" }} />
                    {item}
                  </li>
                ))}
              </ul>
              <a href={getWhatsAppUrl("Hola, necesito un fontanero para una instalación nueva o reforma.")} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Solicitar presupuesto
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARCAS ── */}
      <section style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "60px 0" }}>
        <div className="container-main">
          <p className="reveal" style={{ fontFamily: "var(--font-dm-mono)", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--muted)", textAlign: "center", marginBottom: 32 }}>
            Materiales y fabricantes de referencia
          </p>
          <div className="reveal reveal-delay-1" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 60, flexWrap: "wrap" }}>
            {["Grohe", "Roca", "Hansgrohe", "Geberit", "Grundfos"].map((brand) => (
              <span key={brand} className="brand-name" style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: 20 }}>{brand}</span>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="¿Tienes un problema de fontanería?"
        subtitle="Contacta con nuestros fontaneros en Viladecans. Respondemos en menos de 24 horas."
        buttonText="Contactar fontanero"
        whatsappMessage="Hola, necesito un fontanero en Viladecans / Baix Llobregat."
      />

      <FAQSection faqs={faqs} title="Preguntas frecuentes sobre fontanería" />
    </>
  );
}
