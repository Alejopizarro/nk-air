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

export default function CamarasFrigorificasPage() {
  const schemaData = serviceSchema(
    "Instalación y Mantenimiento de Cámaras Frigoríficas",
    "Instalación y mantenimiento de cámaras frigoríficas y equipos de frío comercial e industrial en el Baix Llobregat y Barcelona.",
    `${SITE_CONFIG.url}/servicios/camaras-frigorificas`
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
      <section className="bg-gradient-to-br from-navy to-blue-950 pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-cyan-brand/20 text-cyan-brand border border-cyan-brand/30 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-wide">
            Frío Comercial e Industrial
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 leading-tight">
            Cámaras Frigoríficas en el Baix Llobregat y Barcelona
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-8">
            Instalación y mantenimiento de cámaras frigoríficas y equipos de frío
            para restaurantes, supermercados y negocios del sector alimentario.
          </p>
          <a
            href={getWhatsAppUrl("Hola, me gustaría pedir presupuesto para instalación de cámara frigorífica.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-eco hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition-colors"
          >
            Solicitar presupuesto
          </a>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              Especialistas en frío comercial e industrial
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              En NK Air somos especialistas en la instalación y mantenimiento de
              cámaras frigoríficas y equipos de frío para el sector comercial e
              industrial en el Baix Llobregat y Barcelona.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Trabajamos con restaurantes, hoteles, carnicerías, pescaderías,
              pastelerías, supermercados y cualquier negocio que necesite conservar
              alimentos a temperatura controlada. Instalamos cámaras de conservación
              positiva, cámaras de congelación y todo tipo de equipos de frío.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Ofrecemos contratos de mantenimiento preventivo para asegurar la
              continuidad de tu negocio y el cumplimiento de la normativa de
              seguridad alimentaria.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden h-72">
            <Image
              src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80"
              alt="Cámara frigorífica comercial"
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
            Servicios de frío comercial e industrial
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: "🏗️", title: "Instalación de cámaras", desc: "Diseño e instalación de cámaras frigoríficas a medida según tus necesidades." },
              { icon: "🔧", title: "Mantenimiento preventivo", desc: "Contratos de mantenimiento periódico para garantizar el funcionamiento óptimo." },
              { icon: "🚨", title: "Reparación de averías", desc: "Servicio de reparación urgente para minimizar el tiempo de inactividad." },
              { icon: "📦", title: "Vitrinas expositoras", desc: "Instalación de vitrinas frigoríficas para exposición de productos." },
              { icon: "❄️", title: "Cámaras de congelación", desc: "Instalación de cámaras de congelación para almacenamiento a largo plazo." },
              { icon: "📋", title: "Certificaciones", desc: "Tramitación de certificados y documentación reglamentaria." },
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

      {/* PROCESO */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-navy mb-10">Proceso de instalación</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Consulta", desc: "Analizamos tus necesidades y el espacio disponible en tu local." },
              { step: "02", title: "Diseño", desc: "Diseñamos la solución óptima para tu negocio y presupuestamos." },
              { step: "03", title: "Instalación", desc: "Instalamos con mínima interrupción de tu actividad comercial." },
              { step: "04", title: "Puesta en marcha", desc: "Verificamos el funcionamiento y entregamos la documentación." },
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
        title="¿Necesitas instalar o mantener una cámara frigorífica?"
        subtitle="Presupuesto gratuito para tu negocio. Respondemos en menos de 24 horas."
        whatsappMessage="Hola, me gustaría pedir presupuesto para instalación o mantenimiento de cámara frigorífica."
      />

      <FAQSection faqs={faqs} title="Preguntas frecuentes sobre cámaras frigoríficas" />
    </>
  );
}
