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

export default function AerotermiaPage() {
  const schemaData = serviceSchema(
    "Instalación de Aerotermia y Bombas de Calor",
    "Instalación profesional de sistemas de aerotermia y bombas de calor en Viladecans y el Baix Llobregat. Ahorra hasta un 70% en energía.",
    `${SITE_CONFIG.url}/servicios/aerotermia`
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
      <section className="bg-gradient-to-br from-navy to-green-900 pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-green-eco/20 text-green-eco border border-green-eco/30 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-wide">
            💚 Energía Sostenible
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 leading-tight">
            Instalación de Aerotermia en Viladecans y Baix Llobregat
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-8">
            Ahorra hasta un 70% en calefacción y agua caliente. Te asesoramos y
            gestionamos las subvenciones disponibles.
          </p>
          <a
            href={getWhatsAppUrl("Hola, me gustaría consultar sobre instalación de aerotermia y subvenciones disponibles.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-eco hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition-colors"
          >
            Consultar instalación y subvenciones
          </a>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              La solución más eficiente para tu hogar
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              La aerotermia extrae energía del aire exterior para calefacción,
              refrigeración y agua caliente sanitaria. Es la tecnología más
              eficiente del mercado para hogares y negocios en el Baix Llobregat
              y zona metropolitana de Barcelona.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              En NK Air llevamos años instalando bombas de calor aerotérmicas en
              Viladecans, Castelldefels, Gavà y toda la comarca. Trabajamos con
              las marcas más fiables: Daikin, Mitsubishi, Fujitsu, LG y Panasonic.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Además, te asesoramos y gestionamos los trámites para acceder a
              las subvenciones del Gobierno y la Generalitat de Catalunya,
              reduciendo significativamente la inversión inicial.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden h-72">
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
              alt="Bomba de calor aerotérmica instalada"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* VENTAJAS */}
      <section className="py-16 px-4 bg-gray-light">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-8 text-center">
            Servicios de aerotermia incluidos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: "🌡️", title: "Instalación de bomba de calor", desc: "Instalación completa de sistemas aerotérmicos para calefacción, refrigeración y ACS." },
              { icon: "🏠", title: "Integración con suelo radiante", desc: "Conexión con sistemas de suelo radiante existentes o nuevos para máxima eficiencia." },
              { icon: "💧", title: "Agua caliente sanitaria", desc: "Producción de ACS con hasta 4 veces más eficiencia que un calentador eléctrico." },
              { icon: "📋", title: "Gestión de subvenciones", desc: "Tramitación completa de ayudas MOVES III y subvenciones de la Generalitat." },
              { icon: "🔄", title: "Mantenimiento anual", desc: "Revisiones y mantenimiento preventivo para garantizar la vida útil del equipo." },
              { icon: "📊", title: "Estudio de viabilidad", desc: "Análisis personalizado del ahorro esperado y tiempo de amortización." },
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

      {/* POR QUÉ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-8 text-center">
            ¿Por qué instalar aerotermia con NK Air?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Ahorro garantizado", desc: "Nuestras instalaciones garantizan el ahorro energético prometido gracias a una correcta dimensión del sistema." },
              { title: "Gestión de subvenciones", desc: "Nos encargamos de toda la burocracia para que accedas a las ayudas disponibles sin complicaciones." },
              { title: "Técnicos especializados", desc: "Nuestro equipo está formado específicamente en sistemas aerotérmicos y bombas de calor." },
              { title: "Marcas líderes", desc: "Solo instalamos equipos de marcas reconocidas con garantía fabricante de mínimo 2 años." },
            ].map((item) => (
              <div key={item.title} className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-green-eco/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-green-eco" fill="currentColor" viewBox="0 0 20 20">
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
          <h2 className="text-2xl font-bold text-navy mb-10">Proceso de instalación</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Consulta gratuita", desc: "Analizamos tus necesidades y el espacio disponible." },
              { step: "02", title: "Estudio y presupuesto", desc: "Calculamos el ahorro esperado y preparamos el presupuesto." },
              { step: "03", title: "Gestión de subvenciones", desc: "Tramitamos las ayudas disponibles antes de la instalación." },
              { step: "04", title: "Instalación y puesta en marcha", desc: "Instalamos y configuramos el sistema para máxima eficiencia." },
            ].map((p) => (
              <div key={p.step}>
                <div className="w-12 h-12 rounded-full bg-green-eco text-white font-bold text-lg flex items-center justify-center mx-auto mb-3">
                  {p.step}
                </div>
                <h3 className="font-semibold text-navy text-sm mb-1">{p.title}</h3>
                <p className="text-gray-500 text-xs">{p.desc}</p>
              </div>
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
