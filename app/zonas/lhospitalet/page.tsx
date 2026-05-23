import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import { getWhatsAppUrl, SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Instalación Aire Acondicionado en L'Hospitalet de Llobregat | NK Air",
  description:
    "Servicio de climatización, aerotermia y fontanería en L'Hospitalet de Llobregat. Instalación y reparación de aire acondicionado. Presupuesto gratuito.",
  keywords: [
    "aire acondicionado Hospitalet Llobregat",
    "climatización L'Hospitalet",
    "fontanero Hospitalet",
    "aerotermia Hospitalet Llobregat",
    "instalación aire acondicionado Hospitalet 08901",
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/zonas/lhospitalet` },
};

export default function LhospitaletPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-navy to-blue-900 pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-cyan-brand/20 text-cyan-brand border border-cyan-brand/30 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-wide">
            L&apos;Hospitalet de Llobregat
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 leading-tight">
            Instalación de Aire Acondicionado en L&apos;Hospitalet de Llobregat
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-8">
            Servicio profesional de climatización y fontanería en L&apos;Hospitalet.
            Expertos en instalación y reparación de aires acondicionados para pisos y locales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={getWhatsAppUrl("Hola, necesito un presupuesto en L'Hospitalet de Llobregat.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-eco hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition-colors"
            >
              Pedir presupuesto en L&apos;Hospitalet
            </a>
            <a
              href="https://maps.google.com/?q=NK+Air,+Carretera+Barcelona+33,+Viladecans"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-navy font-bold px-8 py-4 rounded-xl transition-colors"
            >
              Ver nuestra oficina en Maps
            </a>
          </div>
        </div>
      </section>

      {/* CONTENIDO LOCAL */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-5">
            Climatización en L&apos;Hospitalet de Llobregat
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-4">
            NK Air ofrece servicio de instalación y reparación de aire acondicionado
            en L&apos;Hospitalet de Llobregat y sus barrios: Centre, Sant Josep, La Florida,
            Les Planes, Can Serra, Bellvitge, Gornal, Santa Eulàlia, Les Planes y más.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed mb-4">
            L&apos;Hospitalet es una ciudad densa donde la instalación de climatización
            en pisos y apartamentos requiere técnicos experimentados. Nuestro equipo
            conoce bien los edificios de la ciudad y sabe cómo instalar sistemas
            eficientes minimizando el impacto estético y estructural.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Atendemos tanto instalaciones nuevas como reparaciones de urgencia.
            Si tu equipo de aire acondicionado ha dejado de funcionar, podemos
            enviarte un técnico en 24-48 horas.
          </p>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="py-16 px-4 bg-gray-light">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-8 text-center">
            Servicios disponibles en L&apos;Hospitalet
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                title: "Aire Acondicionado",
                href: "/servicios/climatizacion",
                desc: "Instalación y reparación de splits en pisos y locales de L'Hospitalet. Todas las marcas.",
              },
              {
                title: "Aerotermia",
                href: "/servicios/aerotermia",
                desc: "Soluciones aerotérmicas para comunidades y viviendas en L'Hospitalet con subvenciones.",
              },
              {
                title: "Fontanería",
                href: "/servicios/fontaneria",
                desc: "Fontaneros en L'Hospitalet para reparaciones, reformas e instalaciones nuevas.",
              },
              {
                title: "Cámaras Frigoríficas",
                href: "/servicios/camaras-frigorificas",
                desc: "Frío comercial para negocios del sector alimentario en L'Hospitalet.",
              },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="bg-white rounded-xl p-5 border border-gray-100 hover:border-cyan-brand hover:shadow-sm transition-all group"
              >
                <h3 className="font-bold text-navy text-base mb-2 group-hover:text-cyan-brand transition-colors">
                  {s.title} en L&apos;Hospitalet
                </h3>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="¿Necesitas climatización en L'Hospitalet?"
        subtitle="Técnicos disponibles en 24-48 horas. Presupuesto gratuito y sin compromiso."
        whatsappMessage="Hola, necesito presupuesto para un servicio en L'Hospitalet de Llobregat."
      />
    </>
  );
}
