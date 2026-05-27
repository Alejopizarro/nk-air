import type { Metadata } from "next";
import Image from "next/image";
import CTABanner from "@/components/CTABanner";
import { getWhatsAppUrl, SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Sobre NK Air | Empresa de Climatización en Viladecans",
  description:
    "Conoce NK Air, especialistas en climatización, aerotermia y fontanería en Viladecans con más de 25 años de experiencia en el Baix Llobregat.",
  alternates: { canonical: `${SITE_CONFIG.url}/sobre-nosotros` },
};

export default function SobreNosotrosPage() {
  return (
    <>
      {/* ── HERO COMPACTO ── */}
      <section style={{ background: "var(--bg)", paddingTop: 140, paddingBottom: 80, paddingLeft: 32, paddingRight: 32, overflow: "hidden" }}>
        <div className="container-main">
          <div style={{ maxWidth: 760 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--accent-dim)", border: "1px solid rgba(0,200,255,0.2)", borderRadius: 100, padding: "6px 14px", marginBottom: 28, animation: "fadeSlideUp 0.6s 0s ease both" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", animation: "dotPulse 2s ease-in-out infinite" }} />
              <span style={{ fontFamily: "var(--font-dm-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)" }}>
                Empresa local · Viladecans · Desde 1999
              </span>
            </div>
            <h1 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(40px, 5vw, 68px)", letterSpacing: "-0.04em", lineHeight: 0.98, color: "var(--text)", marginBottom: 24, animation: "fadeSlideUp 0.6s 0.1s ease both" }}>
              Sobre NK Air
            </h1>
            <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300, fontSize: 18, color: "var(--muted2)", lineHeight: 1.75, maxWidth: 620, animation: "fadeSlideUp 0.6s 0.2s ease both" }}>
              Más de 25 años al servicio de hogares y empresas en Viladecans y el Baix Llobregat. Una empresa local, familiar, de confianza.
            </p>
          </div>
        </div>
      </section>

      {/* ── QUIÉNES SOMOS ── */}
      <section style={{ padding: "100px 0", background: "var(--surface)" }}>
        <div className="container-main">
          <div className="detail-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
            <div className="reveal">
              <p style={{ fontFamily: "var(--font-dm-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 16 }}>Quiénes somos</p>
              <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(28px, 3vw, 44px)", letterSpacing: "-0.04em", lineHeight: 1.05, color: "var(--text)", marginBottom: 20 }}>
                Una empresa familiar con raíces en Viladecans.
              </h2>
              <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300, fontSize: 15, color: "var(--muted2)", lineHeight: 1.75, marginBottom: 20 }}>
                NK Air es una empresa de climatización, aerotermia y fontanería con sede en Viladecans (Barcelona). Llevamos más de 25 años ofreciendo servicio técnico profesional a hogares y negocios del Baix Llobregat y la zona sur de Barcelona.
              </p>
              <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300, fontSize: 15, color: "var(--muted2)", lineHeight: 1.75, marginBottom: 28 }}>
                Somos una empresa familiar que ha crecido gracias a la confianza de nuestros clientes. No somos una gran corporativa: somos técnicos expertos que conocen de cerca las necesidades de cada cliente y ofrecen soluciones honestas, eficientes y duraderas.
              </p>
              <ul style={{ listStyle: "none", padding: 0, marginBottom: 32 }}>
                {[
                  "Sede en Carretera Barcelona 33, Viladecans",
                  "Especialistas en climatización, aerotermia y fontanería",
                  "Cobertura en 9 municipios del Baix Llobregat",
                  "Técnicos certificados y en formación continua",
                ].map((item) => (
                  <li key={item} style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, color: "var(--muted2)", paddingLeft: 20, marginBottom: 10, position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, top: "50%", transform: "translateY(-50%)", width: 16, height: 1, background: "var(--accent)" }} />
                    {item}
                  </li>
                ))}
              </ul>
              <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Contactar con nosotros
              </a>
            </div>
            <div className="reveal reveal-delay-2" style={{ position: "relative" }}>
              <div style={{ aspectRatio: "4/3", borderRadius: 12, overflow: "hidden", position: "relative" }}>
                <Image src="/nkair-working.jpg" alt="Equipo técnico NK Air trabajando" fill className="object-cover detail-img" style={{ transition: "transform 0.4s ease" }} />
              </div>
              <div style={{ position: "absolute", bottom: -24, left: -24, background: "var(--accent)", color: "#000", borderRadius: 12, padding: "16px 20px" }}>
                <p style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: 28, letterSpacing: "-0.04em", lineHeight: 1 }}>+25</p>
                <p style={{ fontFamily: "var(--font-dm-mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 4 }}>Años de experiencia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: "var(--bg)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="container-main">
          <div className="about-stats" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", maxWidth: 1000, margin: "0 auto" }}>
            {[
              { value: "+25", suffix: "", label: "Años de experiencia" },
              { value: "+1.000", suffix: "", label: "Instalaciones realizadas" },
              { value: "9", suffix: "+", label: "Municipios atendidos" },
              { value: "24", suffix: "h", label: "Respuesta garantizada" },
            ].map((stat, i) => (
              <div key={stat.label} className="about-stat-cell" style={{ padding: "56px 40px", textAlign: "center", borderRight: i < 3 ? "1px solid var(--border)" : "none" }}>
                <p style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: 48, letterSpacing: "-0.05em", lineHeight: 1, color: "var(--text)", marginBottom: 10 }}>
                  {stat.value}<span style={{ color: "var(--accent)" }}>{stat.suffix}</span>
                </p>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300, fontSize: 14, color: "var(--muted)" }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .about-stats { grid-template-columns: repeat(2, 1fr) !important; }
            .about-stat-cell { border-right: none !important; border-bottom: 1px solid var(--border); }
            .about-stat-cell:nth-child(odd) { border-right: 1px solid var(--border) !important; }
            .about-stat-cell:last-child { border-bottom: none !important; }
          }
          @media (max-width: 480px) {
            .about-stats { grid-template-columns: 1fr !important; }
            .about-stat-cell { border-right: none !important; padding: 36px 0 !important; text-align: left !important; }
          }
        `}</style>
      </section>

      {/* ── VALORES ── */}
      <section style={{ padding: "100px 0", background: "var(--bg)" }}>
        <div className="container-main">
          <div style={{ marginBottom: 48 }}>
            <p className="reveal" style={{ fontFamily: "var(--font-dm-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 12 }}>Nuestros valores</p>
            <h2 className="reveal reveal-delay-1" style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(28px, 3vw, 44px)", letterSpacing: "-0.04em", lineHeight: 1.02, color: "var(--text)" }}>
              Lo que nos define<br />como empresa.
            </h2>
          </div>
          <div className="svc-cards reveal reveal-delay-2">
            {[
              {
                title: "Honestidad",
                desc: "Siempre te decimos la verdad sobre el estado de tu instalación y el coste real del trabajo. Sin sorpresas ni costes ocultos. Presupuesto detallado antes de empezar.",
                icon: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
              },
              {
                title: "Profesionalidad",
                desc: "Nuestros técnicos están continuamente formados y certificados. Aplicamos los mejores estándares en cada trabajo y usamos materiales de primera calidad.",
                icon: "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5",
              },
              {
                title: "Cercanía",
                desc: "Somos una empresa local que conoce bien el Baix Llobregat. Tratamos a cada cliente como nos gustaría ser tratados: con respeto, atención y respuesta rápida.",
                icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
              },
            ].map((v) => (
              <div key={v.title} className="bento-card" style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 12, padding: 32, transition: "border-color 0.2s, transform 0.2s" }}>
                <div className="bento-icon" style={{ width: 48, height: 48, border: "1px solid var(--border2)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)", marginBottom: 16, transition: "background 0.2s" }}>
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d={v.icon} />
                  </svg>
                </div>
                <h3 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: 15, letterSpacing: "-0.02em", color: "var(--text)", marginBottom: 8 }}>{v.title}</h3>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300, fontSize: 14, color: "var(--muted2)", lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MARCAS ── */}
      <section style={{ background: "var(--surface)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", padding: "60px 0" }}>
        <div className="container-main">
          <p className="reveal" style={{ fontFamily: "var(--font-dm-mono)", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--muted)", textAlign: "center", marginBottom: 32 }}>
            Marcas oficiales con las que trabajamos
          </p>
          <div className="reveal reveal-delay-1" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 60, flexWrap: "wrap" }}>
            {["Daikin", "Mitsubishi", "Fujitsu", "LG", "Samsung"].map((brand) => (
              <span key={brand} className="brand-name" style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: 20 }}>{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── UBICACIÓN ── */}
      <section style={{ padding: "100px 0", background: "var(--bg)" }}>
        <div className="container-main">
          <div className="detail-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center", direction: "rtl" }}>
            <div className="reveal" style={{ direction: "ltr", position: "relative" }}>
              <div style={{ aspectRatio: "4/3", borderRadius: 12, overflow: "hidden", position: "relative" }}>
                <Image src="/nkair-barometro.jpg" alt="NK Air sede Viladecans" fill className="object-cover detail-img" style={{ transition: "transform 0.4s ease" }} />
              </div>
              <div style={{ position: "absolute", top: -24, right: -24, background: "var(--accent)", color: "#000", borderRadius: 12, padding: "16px 20px" }}>
                <p style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: 28, letterSpacing: "-0.04em", lineHeight: 1 }}>9</p>
                <p style={{ fontFamily: "var(--font-dm-mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 4 }}>Municipios atendidos</p>
              </div>
            </div>
            <div className="reveal reveal-delay-2" style={{ direction: "ltr" }}>
              <p style={{ fontFamily: "var(--font-dm-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent)", marginBottom: 16 }}>Dónde estamos</p>
              <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(28px, 3vw, 44px)", letterSpacing: "-0.04em", lineHeight: 1.05, color: "var(--text)", marginBottom: 20 }}>
                Nuestra sede en el corazón de Viladecans.
              </h2>
              <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 10, padding: "24px 28px", marginBottom: 28 }}>
                <p style={{ fontFamily: "var(--font-dm-mono)", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 12 }}>Dirección</p>
                <p style={{ fontFamily: "var(--font-syne)", fontWeight: 600, fontSize: 15, color: "var(--text)", marginBottom: 6 }}>NK Air — Climatización, Aerotermia y Fontanería</p>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, color: "var(--muted2)", marginBottom: 4 }}>{SITE_CONFIG.address.street}</p>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, color: "var(--muted2)", marginBottom: 12 }}>{SITE_CONFIG.address.postalCode} {SITE_CONFIG.address.city} ({SITE_CONFIG.address.province})</p>
                <div style={{ borderTop: "1px solid var(--border)", paddingTop: 12 }}>
                  <p style={{ fontFamily: "var(--font-dm-mono)", fontSize: 10, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 6 }}>Horario</p>
                  <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 14, color: "var(--muted2)" }}>{SITE_CONFIG.schedule.days} · {SITE_CONFIG.schedule.hours}</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href={`tel:${SITE_CONFIG.phone}`} className="btn-primary">{SITE_CONFIG.phoneDisplay}</a>
                <a href="https://maps.google.com/?q=NK+Air,+Carretera+Barcelona+33,+Viladecans" target="_blank" rel="noopener noreferrer" className="btn-outline">Ver en Google Maps</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
