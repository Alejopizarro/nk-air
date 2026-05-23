import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-1 mb-4">
              <span className="text-2xl font-black text-white">NK</span>
              <span className="text-2xl font-black text-cyan-brand">Air</span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Especialistas en climatización, aerotermia y fontanería en
              Viladecans y el Baix Llobregat. Más de 25 años de experiencia.
            </p>
            <div className="mt-4 text-sm text-gray-300">
              <p>{SITE_CONFIG.address.street}</p>
              <p>
                {SITE_CONFIG.address.city} ({SITE_CONFIG.address.province})
              </p>
              <p className="mt-2">{SITE_CONFIG.schedule.days}</p>
              <p>{SITE_CONFIG.schedule.hours}</p>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Servicios
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Aire Acondicionado", href: "/servicios/climatizacion" },
                { name: "Aerotermia", href: "/servicios/aerotermia" },
                { name: "Fontanería", href: "/servicios/fontaneria" },
                { name: "Cámaras Frigoríficas", href: "/servicios/camaras-frigorificas" },
              ].map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-gray-300 hover:text-cyan-brand transition-colors"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Zonas */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Zonas de Servicio
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Viladecans", href: "/zonas/viladecans" },
                { name: "Castelldefels", href: "/zonas/castelldefels" },
                { name: "L'Hospitalet", href: "/zonas/lhospitalet" },
                { name: "Gavà", href: null },
                { name: "El Prat de Llobregat", href: null },
                { name: "Cornellà de Llobregat", href: null },
                { name: "Sant Boi de Llobregat", href: null },
              ].map((z) =>
                z.href ? (
                  <li key={z.name}>
                    <Link
                      href={z.href}
                      className="text-gray-300 hover:text-cyan-brand transition-colors"
                    >
                      {z.name}
                    </Link>
                  </li>
                ) : (
                  <li key={z.name} className="text-gray-400">
                    {z.name}
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Contacto
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center gap-2 text-gray-300 hover:text-cyan-brand transition-colors"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-300 hover:text-green-eco transition-colors"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-2 text-gray-300 hover:text-cyan-brand transition-colors"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li className="pt-2">
                <Link
                  href="/contacto"
                  className="inline-block bg-cyan-brand hover:bg-blue-500 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors"
                >
                  Formulario de contacto
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <p>© 2025 NK Air. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link href="/politica-de-privacidad" className="hover:text-cyan-brand transition-colors">
              Política de Privacidad
            </Link>
            <Link href="/aviso-legal" className="hover:text-cyan-brand transition-colors">
              Aviso Legal
            </Link>
            <Link href="/politica-de-cookies" className="hover:text-cyan-brand transition-colors">
              Política de Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
