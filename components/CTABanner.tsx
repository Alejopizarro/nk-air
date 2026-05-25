"use client";

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
    <section style={{ padding: "80px 0", background: "var(--bg)" }}>
      <div className="container-main">
        <div
          className="reveal"
          style={{
            position: "relative",
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: 20,
            padding: "80px",
            overflow: "hidden",
          }}
        >
          {/* Glow pseudo — top right */}
          <div
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "50%",
              height: "100%",
              pointerEvents: "none",
              background: "radial-gradient(ellipse 60% 70% at 100% 0%, var(--accent-glow) 0%, transparent 70%)",
            }}
          />

          <div
            className="cta-grid"
            style={{
              position: "relative",
              zIndex: 1,
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: 60,
              alignItems: "center",
            }}
          >
            {/* Copy */}
            <div>
              <p style={{ fontFamily: "var(--font-dm-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 16 }}>
                Contacto
              </p>
              <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(26px, 3vw, 42px)", letterSpacing: "-0.04em", lineHeight: 1.05, color: "var(--text)", marginBottom: 16 }}>
                {title}
              </h2>
              <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300, fontSize: 16, color: "var(--muted2)", lineHeight: 1.7, maxWidth: 520 }}>
                {subtitle}
              </p>
            </div>

            {/* Actions */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-start", flexShrink: 0 }}>
              <a
                href={getWhatsAppUrl(whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  background: "var(--accent)",
                  color: "#000",
                  fontFamily: "var(--font-dm-sans)",
                  fontWeight: 500,
                  fontSize: 15,
                  padding: "16px 28px",
                  borderRadius: 10,
                  whiteSpace: "nowrap",
                  transition: "transform 0.15s, box-shadow 0.15s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px rgba(0,200,255,0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                {buttonText}
              </a>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                style={{
                  fontFamily: "var(--font-dm-mono)",
                  fontSize: 13,
                  color: "var(--muted)",
                  transition: "color 0.15s",
                  paddingLeft: 4,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
              >
                {SITE_CONFIG.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .cta-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .cta-grid > div:first-child ~ div {
            padding: 0 !important;
          }
        }
        @media (max-width: 540px) {
          .cta-grid {
            padding: 48px 32px !important;
          }
        }
      `}</style>
    </section>
  );
}
