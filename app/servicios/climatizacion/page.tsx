import type { Metadata } from "next";
import Image from "next/image";
import CTABanner from "@/components/CTABanner";
import FAQSection from "@/components/FAQSection";
import { getWhatsAppUrl, SITE_CONFIG } from "@/lib/config";
import { faqSchema, serviceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Instalación de Aire Acondicionado en Viladecans y Baix Llobregat",
  description:
    "Instalación, reparación y mantenimiento de aire acondicionado en Viladecans, Castelldefels y el Baix Llobregat. Daikin, Mitsubishi, Fujitsu. Presupuesto gratuito.",
  keywords: [
    "instalación aire acondicionado Viladecans",
    "reparación aire acondicionado Castelldefels",
    "mantenimiento climatización Baix Llobregat",
    "split Viladecans",
    "multisplit Barcelona sur",
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/servicios/climatizacion` },
};

const faqs = [
  {
    question: "¿Cuánto tiempo tarda la instalación de un split?",
    answer:
      "Una instalación estándar de un split individual suele completarse en 3-5 horas. Para sistemas multisplit o de conductos el tiempo varía según la complejidad, pero normalmente se completa en un día.",
  },
  {
    question: "¿Qué marcas de aire acondicionado instaláis?",
    answer:
      "Trabajamos con todas las marcas líderes del mercado: Daikin, Mitsubishi Electric, Fujitsu, LG, Samsung, Panasonic y más. Podemos asesorarte sobre la mejor opción según tu espacio y presupuesto.",
  },
  {
    question: "¿Con qué frecuencia debo hacer el mantenimiento?",
    answer:
      "Recomendamos al menos una revisión anual para mantener la eficiencia del equipo, prolongar su vida útil y garantizar la calidad del aire. El mantenimiento incluye limpieza de filtros, revisión del gas y comprobación del funcionamiento.",
  },
  {
    question: "¿Ofrecéis garantía en las instalaciones?",
    answer:
      "Sí. Todas nuestras instalaciones incluyen garantía en mano de obra. Además, los equipos tienen la garantía oficial del fabricante. Trabajamos con los mejores materiales para asegurar durabilidad y fiabilidad.",
  },
  {
    question: "¿Cuánto cuesta instalar un aire acondicionado en Viladecans?",
    answer:
      "El coste depende del tipo de equipo, la potencia necesaria y la complejidad de la instalación. Ofrecemos presupuesto gratuito y sin compromiso. Contáctanos por WhatsApp y te respondemos en menos de 24 horas.",
  },
];

const svgInstall =
  "M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z";
const svgRepair =
  "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z";
const svgClean =
  "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z";
const svgReplace =
  "M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99";
const svgContract =
  "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4";
const svgGas =
  "M12 3c0 0-5.5 6-5.5 10a5.5 5.5 0 0011 0C17.5 9 12 3 12 3z M9.5 13a2.5 2.5 0 005 0";

const Icon = ({ d }: { d: string }) => (
  <svg
    width="22"
    height="22"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    aria-hidden
  >
    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
  </svg>
);

export default function ClimatizacionPage() {
  const schemaData = serviceSchema(
    "Instalación y Reparación de Aire Acondicionado",
    "Servicio profesional de instalación, reparación y mantenimiento de aire acondicionado en Viladecans y el Baix Llobregat.",
    `${SITE_CONFIG.url}/servicios/climatizacion`,
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([schemaData, faqSchema(faqs)]),
        }}
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
        {/* Left */}
        <div
          className="svc-hero-left"
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
              Climatización · Viladecans · Baix Llobregat
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 800,
              fontSize: "clamp(36px, 4.5vw, 62px)",
              letterSpacing: "-0.04em",
              lineHeight: 0.98,
              color: "var(--text)",
              marginBottom: 24,
              animation: "fadeSlideUp 0.6s 0.1s ease both",
            }}
          >
            Instalación de <br />
            <span style={{ color: "var(--accent)" }}>aire acondicionado</span>
            <br />
            profesional
          </h1>

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
            Instalamos, reparamos y mantenemos todo tipo de equipos de
            climatización en Viladecans y el Baix Llobregat. Más de 25 años de
            experiencia con Daikin, Mitsubishi, Fujitsu, LG y Samsung.
          </p>

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
              href={getWhatsAppUrl(
                "Hola, me gustaría pedir presupuesto para instalación de aire acondicionado.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Solicitar presupuesto
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
            <a href="#servicios" className="btn-outline">
              Ver servicios
            </a>
          </div>

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

        {/* Right */}
        <div
          className="svc-hero-right"
          style={{ position: "relative", overflow: "hidden" }}
        >
          <Image
            src="/nkair-working.jpg"
            alt="Técnico instalando sistema de aire acondicionado en Viladecans"
            fill
            className="object-cover"
            priority
            style={{
              filter: "grayscale(20%)",
              animation: "heroImgIn 1.2s 0s cubic-bezier(0.16,1,0.3,1) both",
            }}
          />
          <div className="hero-overlay-desktop" />
          <div className="hero-overlay-mobile" />
        </div>
      </section>

      {/* ── QUÉ INCLUYE ── */}
      <section
        id="servicios"
        style={{ padding: "100px 0", background: "var(--bg)" }}
      >
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
              Servicios incluidos
            </p>
            <h2
              className="reveal reveal-delay-1"
              style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 800,
                fontSize: "clamp(28px, 3vw, 44px)",
                letterSpacing: "-0.04em",
                lineHeight: 1.02,
                color: "var(--text)",
              }}
            >
              Todo lo que necesitas
              <br />
              para tu climatización.
            </h2>
          </div>

          <div className="svc-cards reveal reveal-delay-2">
            {[
              {
                icon: svgInstall,
                title: "Instalación nueva",
                desc: "Splits, multisplits, conductos y VRV/VRF para hogares y negocios de cualquier tamaño.",
              },
              {
                icon: svgRepair,
                title: "Reparación de averías",
                desc: "Diagnóstico rápido y reparación de cualquier avería en 24-48h con garantía de trabajo.",
              },
              {
                icon: svgClean,
                title: "Limpieza y mantenimiento",
                desc: "Revisión y limpieza de filtros y componentes para mantener el equipo en óptimas condiciones.",
              },
              {
                icon: svgReplace,
                title: "Sustitución de equipos",
                desc: "Cambio de equipos obsoletos por nuevos modelos de mayor eficiencia energética A+++.",
              },
              {
                icon: svgContract,
                title: "Contratos de mantenimiento",
                desc: "Revisiones periódicas programadas para empresas y comunidades de vecinos.",
              },
              {
                icon: svgGas,
                title: "Recarga de gas",
                desc: "Recarga y verificación del gas refrigerante con cumplimiento de la normativa F-Gas vigente.",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="bento-card"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: 12,
                  padding: 32,
                  transition: "border-color 0.2s, transform 0.2s",
                }}
              >
                <div
                  className="bento-icon"
                  style={{
                    width: 48,
                    height: 48,
                    border: "1px solid var(--border2)",
                    borderRadius: 10,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent)",
                    marginBottom: 16,
                    transition: "background 0.2s",
                  }}
                >
                  <Icon d={s.icon} />
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-syne)",
                    fontWeight: 700,
                    fontSize: 15,
                    letterSpacing: "-0.02em",
                    color: "var(--text)",
                    marginBottom: 8,
                  }}
                >
                  {s.title}
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
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DETALLE 1 — texto izquierda, imagen derecha ── */}
      <section style={{ padding: "100px 0", background: "var(--surface)" }}>
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
                Instalación profesional
              </p>
              <h2
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
                Splits, multisplits y sistemas de conductos.
              </h2>
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
                Instalamos todo tipo de sistemas de climatización para
                viviendas, oficinas y locales comerciales. Realizamos el
                dimensionado correcto del equipo según la superficie y
                orientación para garantizar la máxima eficiencia.
              </p>
              <ul style={{ listStyle: "none", padding: 0, marginBottom: 32 }}>
                {[
                  "Splits de pared individuales y multisplits",
                  "Sistemas de conductos ocultos",
                  "Cassettes para techos de oficinas",
                  "Sistemas VRV/VRF para grandes superficies",
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
                  alt="Instalación profesional de aire acondicionado"
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

      {/* ── DETALLE 2 — imagen izquierda, texto derecha ── */}
      <section style={{ padding: "100px 0", background: "var(--bg)" }}>
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
                  alt="Reparación y mantenimiento de equipos de climatización"
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
                  24h
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
                  Respuesta garantizada
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
                Reparación y mantenimiento
              </p>
              <h2
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
                Reparamos cualquier avería en el mínimo tiempo.
              </h2>
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
                Si tu equipo tiene una avería o rinde por debajo de lo esperado,
                nuestro equipo técnico lo diagnostica y repara en 24-48h.
                También ofrecemos contratos de mantenimiento preventivo para
                alargar la vida útil de tu instalación.
              </p>
              <ul style={{ listStyle: "none", padding: 0, marginBottom: 32 }}>
                {[
                  "Diagnóstico de averías sin coste",
                  "Reparación de todas las marcas",
                  "Limpieza profunda de filtros y serpentines",
                  "Revisión del gas refrigerante incluida",
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
                  "Hola, tengo una avería en mi equipo de aire acondicionado.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Reportar avería
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
            Marcas oficiales con las que trabajamos
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

      <CTABanner
        title="¿Necesitas instalar o reparar tu aire acondicionado?"
        whatsappMessage="Hola, me gustaría pedir presupuesto para instalación de aire acondicionado."
      />

      <FAQSection
        faqs={faqs}
        title="Preguntas frecuentes sobre climatización"
      />
    </>
  );
}
