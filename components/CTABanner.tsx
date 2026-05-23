import { getWhatsAppUrl, SITE_CONFIG } from "@/lib/config";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  whatsappMessage?: string;
}

export default function CTABanner({
  title = "¿Necesitas instalar o reparar tu climatización?",
  subtitle = "Presupuesto gratuito y sin compromiso. Te respondemos en menos de 24 horas.",
  buttonText = "Pedir presupuesto por WhatsApp",
  whatsappMessage,
}: CTABannerProps) {
  return (
    <section className="relative bg-[#0a1628] py-24 px-6 sm:px-8 lg:px-12 overflow-hidden">
      {/* Subtle ambient glow — right side */}
      <div
        className="absolute inset-y-0 right-0 w-1/2 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 100% 50%, rgba(0,174,239,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center">
        {/* Left: copy */}
        <div>
          <p className="text-cyan-brand/60 text-[11px] tracking-[0.2em] uppercase font-medium mb-4">
            Contacto
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tighter mb-4">
            {title}
          </h2>
          <p className="text-blue-200/55 text-base leading-relaxed max-w-[55ch]">
            {subtitle}
          </p>
        </div>

        {/* Right: actions */}
        <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
          <a
            href={getWhatsAppUrl(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-green-eco hover:bg-[#4cae4c] active:scale-[0.98] active:translate-y-px text-white font-semibold text-sm px-7 py-3.5 rounded-xl transition-all duration-200 shadow-[0_4px_24px_-4px_rgba(92,184,92,0.35)] whitespace-nowrap"
            aria-label="Contactar por WhatsApp"
          >
            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            {buttonText}
          </a>
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="inline-flex items-center justify-center gap-2 text-white/45 hover:text-white/80 text-sm font-medium transition-colors duration-200 py-2 whitespace-nowrap"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" />
            </svg>
            {SITE_CONFIG.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
