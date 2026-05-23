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

export default function FontaneriaPage() {
  const schemaData = serviceSchema(
    "Fontanería en Viladecans y Baix Llobregat",
    "Servicio profesional de fontanería: instalaciones, reparaciones y mantenimiento para viviendas y negocios en el Baix Llobregat.",
    `${SITE_CONFIG.url}/servicios/fontaneria`
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
            Fontanería
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 leading-tight">
            Fontanería en Viladecans y el Baix Llobregat
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-8">
            Instalaciones, reparaciones y mantenimiento de fontanería para
            viviendas y negocios. Respuesta rápida en toda la zona.
          </p>
          <a
            href={getWhatsAppUrl("Hola, necesito un fontanero en Viladecans / Baix Llobregat.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-eco hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition-colors"
          >
            Contactar fontanero ahora
          </a>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              Fontaneros de confianza en Viladecans
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              En NK Air ofrecemos un servicio completo de fontanería en Viladecans,
              Castelldefels, L'Hospitalet de Llobregat, Gavà y toda la comarca del
              Baix Llobregat. Nuestros fontaneros tienen más de 25 años de
              experiencia resolviendo todo tipo de problemas de fontanería.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Desde una simple fuga de agua hasta una instalación completa de
              fontanería en una reforma, nuestro equipo está preparado para
              cualquier trabajo con total profesionalidad y garantía en los
              materiales utilizados.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Atendemos tanto a particulares como a comunidades de vecinos,
              empresas y locales comerciales. Presupuesto gratuito y sin compromiso.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden h-72">
            <Image
              src="https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?w=800&q=80"
              alt="Fontanero realizando instalación de fontanería"
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
            Servicios de fontanería disponibles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: "🔧", title: "Reparación de averías", desc: "Fugas, tuberías rotas, atascos y cualquier avería de fontanería." },
              { icon: "🚿", title: "Reforma de baños", desc: "Instalación completa de fontanería en reformas de baños y aseos." },
              { icon: "🍳", title: "Cocinas y office", desc: "Fontanería para cocinas residenciales y profesionales." },
              { icon: "🏢", title: "Comunidades de vecinos", desc: "Mantenimiento y reparaciones en edificios y comunidades." },
              { icon: "💧", title: "Calentadores y termos", desc: "Instalación y reparación de calentadores, termos y acumuladores." },
              { icon: "📋", title: "Instalaciones nuevas", desc: "Red de fontanería completa para obra nueva o reforma integral." },
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
            ¿Por qué elegir NK Air para fontanería?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Respuesta rápida", desc: "Atendemos tu avería en 24-48 horas en toda la zona del Baix Llobregat." },
              { title: "Presupuesto transparente", desc: "Te damos el precio antes de empezar el trabajo. Sin sorpresas." },
              { title: "Materiales de calidad", desc: "Solo utilizamos materiales de primera calidad con garantía." },
              { title: "Experiencia y confianza", desc: "25 años resolviendo problemas de fontanería en hogares y negocios." },
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
          <h2 className="text-2xl font-bold text-navy mb-10">Cómo trabajamos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Contacto", desc: "Llámanos o escríbenos por WhatsApp describiendo el problema." },
              { step: "02", title: "Diagnóstico", desc: "Un técnico realiza una visita para diagnosticar la avería." },
              { step: "03", title: "Presupuesto", desc: "Te entregamos presupuesto detallado y sin compromiso." },
              { step: "04", title: "Reparación", desc: "Resolvemos el problema con materiales de calidad y garantía." },
            ].map((p) => (
              <div key={p.step}>
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
