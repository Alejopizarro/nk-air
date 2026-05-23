import type { Metadata } from "next";
import Link from "next/link";
import CTABanner from "@/components/CTABanner";
import { getWhatsAppUrl, SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Instalación Aire Acondicionado en Viladecans | NK Air",
  description:
    "Servicio de climatización, aerotermia y fontanería en Viladecans. Empresa local con más de 25 años de experiencia. Instalación y reparación de aire acondicionado. Presupuesto gratuito.",
  keywords: [
    "aire acondicionado Viladecans",
    "climatización Viladecans",
    "fontanero Viladecans",
    "aerotermia Viladecans",
    "instalador aire acondicionado Viladecans 08840",
  ],
  alternates: { canonical: `${SITE_CONFIG.url}/zonas/viladecans` },
};

export default function ViladecanePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-navy to-blue-900 pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-cyan-brand/20 text-cyan-brand border border-cyan-brand/30 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-wide">
            Viladecans · 08840
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 leading-tight">
            Instalación y Reparación de Aire Acondicionado en Viladecans
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto mb-8">
            Empresa local especializada en climatización, aerotermia y fontanería
            con más de 25 años sirviendo a Viladecans y sus alrededores.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={getWhatsAppUrl("Hola, necesito un presupuesto en Viladecans.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-eco hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition-colors"
            >
              Pedir presupuesto en Viladecans
            </a>
            <a
              href={`https://maps.google.com/?q=NK+Air,+Carretera+Barcelona+33,+Viladecans`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-navy font-bold px-8 py-4 rounded-xl transition-colors"
            >
              Ver en Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* CONTENIDO LOCAL */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-5">
            Tu empresa de climatización en Viladecans
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-4">
            NK Air tiene su sede en Viladecans, en la Carretera Barcelona 33. Somos
            una empresa local que conoce bien el municipio: desde los barrios de Can
            Lleopard y Can Tió hasta la zona industrial de la Fontsanta y los
            polígonos del sur. Hemos realizado instalaciones en todo Viladecans y
            conocemos bien las características de las viviendas y los locales de la zona.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed mb-4">
            Ofrecemos servicios de instalación y reparación de aire acondicionado,
            aerotermia, fontanería y cámaras frigoríficas para particulares y
            empresas en Viladecans. Somos la empresa de referencia para climatización
            en el municipio con más de 25 años de experiencia.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Si tienes una avería en tu equipo de climatización, necesitas instalar
            un nuevo sistema de aire acondicionado o quieres informarte sobre
            aerotermia y las subvenciones disponibles, contáctanos y te asesoramos
            sin compromiso.
          </p>

          <div className="bg-gray-light rounded-2xl p-5 mb-6">
            <h3 className="font-bold text-navy text-sm mb-2">Nuestra ubicación en Viladecans:</h3>
            <p className="text-gray-500 text-sm">
              <strong>NK Air</strong><br />
              Carretera Barcelona 33<br />
              08840 Viladecans (Barcelona)<br />
              Tel: <a href={`tel:${SITE_CONFIG.phone}`} className="text-cyan-brand hover:underline">{SITE_CONFIG.phoneDisplay}</a>
            </p>
          </div>
        </div>
      </section>

      {/* SERVICIOS EN VILADECANS */}
      <section className="py-16 px-4 bg-gray-light">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-8 text-center">
            Servicios disponibles en Viladecans
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                title: "Aire Acondicionado",
                href: "/servicios/climatizacion",
                desc: "Instalación, reparación y mantenimiento de splits y multisplits en hogares y negocios de Viladecans.",
              },
              {
                title: "Aerotermia",
                href: "/servicios/aerotermia",
                desc: "Bombas de calor aerotérmicas para climatización y agua caliente. Gestión de subvenciones en Viladecans.",
              },
              {
                title: "Fontanería",
                href: "/servicios/fontaneria",
                desc: "Fontaneros en Viladecans para instalaciones, reformas y reparaciones de averías.",
              },
              {
                title: "Cámaras Frigoríficas",
                href: "/servicios/camaras-frigorificas",
                desc: "Instalación y mantenimiento de cámaras frigoríficas para restaurantes y negocios de Viladecans.",
              },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="bg-white rounded-xl p-5 border border-gray-100 hover:border-cyan-brand hover:shadow-sm transition-all group"
              >
                <h3 className="font-bold text-navy text-base mb-2 group-hover:text-cyan-brand transition-colors">
                  {s.title} en Viladecans
                </h3>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="¿Necesitas climatización en Viladecans?"
        subtitle="Empresa local con 25 años de experiencia. Presupuesto gratuito en menos de 24 horas."
        whatsappMessage="Hola, necesito presupuesto para un servicio de climatización en Viladecans."
      />
    </>
  );
}
