import type { Metadata } from "next";
import Image from "next/image";
import CTABanner from "@/components/CTABanner";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Sobre NK Air | Empresa de Climatización en Viladecans",
  description:
    "Conoce NK Air, especialistas en climatización, aerotermia y fontanería en Viladecans con más de 25 años de experiencia en el Baix Llobregat.",
  alternates: { canonical: `${SITE_CONFIG.url}/sobre-nosotros` },
};

export default function SobreNosotrosPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-navy to-blue-900 pt-28 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5">
            Sobre NK Air
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Más de 25 años al servicio de hogares y empresas en Viladecans y el
            Baix Llobregat. Una empresa local, de confianza.
          </p>
        </div>
      </section>

      {/* HISTORIA */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              Quiénes somos
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              NK Air es una empresa de climatización, aerotermia y fontanería con
              sede en Viladecans (Barcelona). Llevamos más de 25 años ofreciendo
              servicio técnico profesional a hogares y negocios del Baix Llobregat
              y la zona sur de Barcelona.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Somos una empresa familiar que ha crecido gracias a la confianza de
              nuestros clientes. No somos una gran corporativa; somos técnicos
              expertos que conocen de cerca las necesidades de cada cliente y ofrecen
              soluciones honestas, eficientes y duraderas.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Nuestro equipo está formado por profesionales certificados con amplia
              experiencia en instalación y reparación de sistemas de climatización,
              aerotermia y fontanería. Trabajamos con las mejores marcas y los
              mejores materiales para garantizar resultados de calidad.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden h-72">
            <Image
              src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80"
              alt="Equipo técnico de NK Air"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="py-16 px-4 bg-gray-light">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-navy mb-10">Nuestros valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Honestidad",
                text: "Siempre te decimos la verdad sobre el estado de tu instalación y el coste real del trabajo. Sin sorpresas ni costes ocultos.",
              },
              {
                icon: "💪",
                title: "Profesionalidad",
                text: "Nuestros técnicos están continuamente formados y certificados. Aplicamos los mejores estándares en cada trabajo.",
              },
              {
                icon: "❤️",
                title: "Cercanía",
                text: "Somos una empresa local que conoce bien el Baix Llobregat. Tratamos a cada cliente como nos gustaría ser tratados nosotros.",
              },
            ].map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-7 shadow-sm">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-bold text-navy text-lg mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DATOS */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-8 text-center">NK Air en números</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: "+25", label: "Años de experiencia" },
              { num: "+1.000", label: "Instalaciones realizadas" },
              { num: "9", label: "Municipios atendidos" },
              { num: "24h", label: "Respuesta garantizada" },
            ].map((stat) => (
              <div key={stat.label} className="text-center bg-gray-light rounded-2xl p-6">
                <div className="text-3xl font-black text-cyan-brand mb-1">{stat.num}</div>
                <div className="text-gray-500 text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICACIONES */}
      <section className="py-16 px-4 bg-gray-light">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-navy mb-8 text-center">
            Certificaciones y homologaciones
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { title: "Carnet de gases fluorados", desc: "Nuestros técnicos están autorizados para la manipulación de gases refrigerantes." },
              { title: "RITE — Instaladores Autorizados", desc: "Empresa instaladora autorizada bajo el Reglamento de Instalaciones Térmicas en Edificios." },
              { title: "Técnicos especializados en aerotermia", desc: "Formación específica en instalación y mantenimiento de bombas de calor aerotérmicas." },
              { title: "Registrados en instaladores fontanería", desc: "Alta en el registro de instaladores de fontanería de la Generalitat de Catalunya." },
            ].map((cert) => (
              <div key={cert.title} className="bg-white rounded-xl p-5 border border-gray-100 flex gap-3">
                <div className="w-8 h-8 rounded-full bg-cyan-brand/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-cyan-brand" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-navy text-sm mb-1">{cert.title}</h3>
                  <p className="text-gray-500 text-xs">{cert.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UBICACIÓN */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-navy mb-6">Dónde estamos</h2>
          <div className="bg-gray-light rounded-2xl p-6 inline-block text-left">
            <p className="text-gray-dark text-sm mb-1">
              <strong>NK Air — Climatización, Aerotermia y Fontanería</strong>
            </p>
            <p className="text-gray-500 text-sm">{SITE_CONFIG.address.street}</p>
            <p className="text-gray-500 text-sm">
              {SITE_CONFIG.address.postalCode} {SITE_CONFIG.address.city} ({SITE_CONFIG.address.province})
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Horario: {SITE_CONFIG.schedule.days} · {SITE_CONFIG.schedule.hours}
            </p>
            <a
              href="https://maps.google.com/?q=NK+Air,+Carretera+Barcelona+33,+Viladecans"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-3 text-cyan-brand hover:underline text-sm font-medium"
            >
              Ver en Google Maps →
            </a>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
