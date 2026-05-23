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

export default function ClimatizacionPage() {
  const schemaData = serviceSchema(
    "Instalación y Reparación de Aire Acondicionado",
    "Servicio profesional de instalación, reparación y mantenimiento de aire acondicionado en Viladecans y el Baix Llobregat.",
    `${SITE_CONFIG.url}/servicios/climatizacion`
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([schemaData, faqSchema(faqs)]),
        }}
      />

      {/* HERO */}
      <section className="bg-gradient-to-br from-navy to-blue-900 pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-cyan-brand/20 text-cyan-brand border border-cyan-brand/30 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-wide">
            Climatización
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 leading-tight">
            Instalación de Aire Acondicionado en Viladecans y Baix Llobregat
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-8">
            Servicio técnico profesional de climatización con más de 25 años de
            experiencia. Instalamos, reparamos y mantenemos todo tipo de equipos.
          </p>
          <a
            href={getWhatsAppUrl("Hola, me gustaría pedir presupuesto para instalación de aire acondicionado.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-eco hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition-colors"
          >
            Solicitar presupuesto gratuito
          </a>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              Especialistas en climatización en el Baix Llobregat
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              En NK Air somos especialistas en la instalación y reparación de
              sistemas de aire acondicionado para viviendas y negocios en
              Viladecans, Castelldefels, Gavà, L'Hospitalet de Llobregat y toda
              la zona del Baix Llobregat.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Nuestro equipo técnico tiene más de 25 años de experiencia
              trabajando con todas las marcas líderes del mercado: Daikin,
              Mitsubishi Electric, Fujitsu, LG, Samsung y Panasonic. Realizamos
              desde instalaciones sencillas de splits hasta complejos sistemas
              multisplit o de conductos para hoteles, oficinas y grandes
              superficies.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Ofrecemos presupuesto gratuito sin compromiso y garantía en todas
              nuestras instalaciones. Si tu equipo tiene una avería, podemos
              enviarte un técnico en 24-48 horas.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden h-72">
            <Image
              src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80"
              alt="Técnico instalando aire acondicionado"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="py-16 px-4 bg-gray-light">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-8 text-center">
            Servicios de climatización incluidos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: "🔧", title: "Instalación nueva", desc: "Splits, multisplits, conductos y VRV/VRF para todo tipo de inmuebles." },
              { icon: "🛠️", title: "Reparación de averías", desc: "Diagnóstico rápido y reparación de cualquier avería en 24-48h." },
              { icon: "🧹", title: "Limpieza y mantenimiento", desc: "Revisión y limpieza para mantener el equipo en óptimas condiciones." },
              { icon: "🔄", title: "Sustitución de equipos", desc: "Cambio de equipos obsoletos por nuevos de mayor eficiencia energética." },
              { icon: "📋", title: "Contratos de mantenimiento", desc: "Revisiones periódicas para empresas y comunidades de vecinos." },
              { icon: "❄️", title: "Recarga de gas", desc: "Recarga y verificación del gas refrigerante según normativa vigente." },
            ].map((s) => (
              <div key={s.title} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <div className="text-2xl mb-2">{s.icon}</div>
                <h3 className="font-semibold text-navy text-sm mb-1">{s.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUÉ ELEGIRNOS */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-8 text-center">
            ¿Por qué elegirnos para tu instalación de aire acondicionado?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Instaladores certificados", desc: "Técnicos con certificación oficial para manipulación de gases fluorados y registro RITE." },
              { title: "Todas las marcas", desc: "Trabajamos con Daikin, Mitsubishi, Fujitsu, LG, Samsung, Panasonic y más." },
              { title: "Garantía en mano de obra", desc: "Todas nuestras instalaciones y reparaciones incluyen garantía por escrito." },
              { title: "Presupuesto sin compromiso", desc: "Asesoramiento gratuito y presupuesto detallado sin ningún coste." },
            ].map((item) => (
              <div key={item.title} className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-cyan-brand/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-cyan-brand" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-navy text-sm mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="py-16 px-4 bg-gray-light">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-navy mb-10">
            Nuestro proceso de trabajo
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Contacto", desc: "Nos describes tu necesidad por WhatsApp o teléfono." },
              { step: "02", title: "Visita y presupuesto", desc: "Un técnico visita el lugar y te entrega presupuesto gratuito." },
              { step: "03", title: "Instalación", desc: "Realizamos la instalación en el día acordado con materiales de calidad." },
              { step: "04", title: "Puesta en marcha", desc: "Probamos el equipo y te explicamos su funcionamiento." },
            ].map((p) => (
              <div key={p.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-navy text-white font-bold text-lg flex items-center justify-center mx-auto mb-3">
                  {p.step}
                </div>
                <h3 className="font-semibold text-navy text-sm mb-1">{p.title}</h3>
                <p className="text-gray-500 text-xs">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="¿Necesitas instalar o reparar tu aire acondicionado?"
        whatsappMessage="Hola, me gustaría pedir presupuesto para instalación de aire acondicionado."
      />

      {/* FAQ */}
      <FAQSection faqs={faqs} title="Preguntas frecuentes sobre climatización" />
    </>
  );
}
