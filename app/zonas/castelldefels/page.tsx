import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import { getWhatsAppUrl, SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Instalación Aire Acondicionado en Castelldefels | NK Air",
  description:
    "Servicio de climatización, aerotermia y fontanería en Castelldefels. Instalación y reparación de aire acondicionado para viviendas y negocios. Presupuesto gratuito.",
  keywords: [
    "aire acondicionado Castelldefels",
    "climatización Castelldefels",
    "fontanero Castelldefels",
    "aerotermia Castelldefels",
    "instalador aire acondicionado Castelldefels 08860",
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/zonas/castelldefels` },
};

export default function CastelldefelsPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-navy to-blue-900 pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-cyan-brand/20 text-cyan-brand border border-cyan-brand/30 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-wide">
            Castelldefels · 08860
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 leading-tight">
            Instalación y Reparación de Aire Acondicionado en Castelldefels
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-8">
            Servicio profesional de climatización, aerotermia y fontanería en
            Castelldefels. Respuesta rápida y garantía en todas las instalaciones.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={getWhatsAppUrl("Hola, necesito un presupuesto en Castelldefels.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-eco hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition-colors"
            >
              Pedir presupuesto en Castelldefels
            </a>
            <a
              href={`https://maps.google.com/?q=NK+Air,+Carretera+Barcelona+33,+Viladecans`}
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
            Climatización en Castelldefels: servicio de proximidad
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-4">
            Desde nuestra base en Viladecans, atendemos con rapidez todos los
            municipios vecinos, incluyendo Castelldefels. Realizamos instalaciones
            y reparaciones en todo Castelldefels: Can Bera, el centro, la zona de
            playa, el Golf, Montemar, Castelldefels Est y toda la zona residencial
            de la sierra.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed mb-4">
            La demanda de climatización en Castelldefels es alta, especialmente en
            verano. Las viviendas de la zona necesitan equipos que soporten las
            temperaturas mediterráneas con eficiencia. Instalamos splits y sistemas
            multisplit de las principales marcas para asegurar el confort en tu hogar
            durante todo el año.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            También instalamos sistemas de aerotermia para quienes buscan mayor
            eficiencia energética, y realizamos todo tipo de trabajos de fontanería
            en viviendas unifamiliares, apartamentos y negocios de Castelldefels.
          </p>
        </div>
      </section>

      {/* SERVICIOS EN CASTELLDEFELS */}
      <section className="py-16 px-4 bg-gray-light">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-8 text-center">
            Servicios disponibles en Castelldefels
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                title: "Aire Acondicionado",
                href: "/servicios/climatizacion",
                desc: "Instalación y reparación de aires acondicionados en apartamentos, chalets y negocios de Castelldefels.",
              },
              {
                title: "Aerotermia",
                href: "/servicios/aerotermia",
                desc: "Bombas de calor para viviendas unifamiliares y chalets en Castelldefels con gestión de subvenciones.",
              },
              {
                title: "Fontanería",
                href: "/servicios/fontaneria",
                desc: "Fontaneros para reformas y reparaciones en Castelldefels. Respuesta en 24-48h.",
              },
              {
                title: "Cámaras Frigoríficas",
                href: "/servicios/camaras-frigorificas",
                desc: "Instalación de frío comercial para bares, restaurantes y negocios de Castelldefels.",
              },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="bg-white rounded-xl p-5 border border-gray-100 hover:border-cyan-brand hover:shadow-sm transition-all group"
              >
                <h3 className="font-bold text-navy text-base mb-2 group-hover:text-cyan-brand transition-colors">
                  {s.title} en Castelldefels
                </h3>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="¿Necesitas climatización en Castelldefels?"
        subtitle="Técnicos en Castelldefels en 24-48 horas. Presupuesto gratuito y sin compromiso."
        whatsappMessage="Hola, necesito presupuesto para un servicio de climatización en Castelldefels."
      />
    </>
  );
}
