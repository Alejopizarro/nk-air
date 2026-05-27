"use client";

import Link from "next/link";
import { SITE_CONFIG } from "@/lib/config";
import Image from "next/image";

export default function Footer() {
  const colHead: React.CSSProperties = {
    fontFamily: "var(--font-dm-mono)",
    fontSize: 10,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: "var(--muted)",
    marginBottom: 20,
  };

  const colLink: React.CSSProperties = {
    display: "block",
    fontFamily: "var(--font-dm-sans)",
    fontSize: 14,
    color: "var(--muted2)",
    marginBottom: 10,
    transition: "color 0.15s",
  };

  return (
    <footer
      style={{ borderTop: "1px solid var(--border)" }}
      className="bg-gray-light"
    >
      <div
        className="container-main"
        style={{ paddingTop: 64, paddingBottom: 0 }}
      >
        {/* 4-col grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 64,
          }}
          className="footer-grid"
        >
          {/* Brand col */}
          <div>
            <Image
              src="/nkair-logo.png"
              alt="NK Air logo"
              width={120}
              height={40}
            />
            <p
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: 13,
                color: "var(--muted)",
                lineHeight: 1.7,
                maxWidth: 260,
                marginBottom: 20,
              }}
            >
              Especialistas en climatización, aerotermia y fontanería en
              Viladecans y el Baix Llobregat.
            </p>
            <div
              style={{
                fontFamily: "var(--font-dm-mono)",
                fontSize: 12,
                color: "var(--muted)",
                lineHeight: 1.8,
              }}
            >
              <p>{SITE_CONFIG.address.street}</p>
              <p>
                {SITE_CONFIG.address.city} ({SITE_CONFIG.address.province})
              </p>
              <p style={{ marginTop: 8 }}>{SITE_CONFIG.schedule.days}</p>
              <p>{SITE_CONFIG.schedule.hours}</p>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <p style={colHead}>Servicios</p>
            {[
              { name: "Aire Acondicionado", href: "/servicios/climatizacion" },
              { name: "Aerotermia", href: "/servicios/aerotermia" },
              { name: "Fontanería", href: "/servicios/fontaneria" },
              {
                name: "Cámaras Frigoríficas",
                href: "/servicios/camaras-frigorificas",
              },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                style={colLink}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--text)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--muted2)")
                }
              >
                {s.name}
              </Link>
            ))}
          </div>

          {/* Zonas */}
          <div>
            <p style={colHead}>Zonas</p>
            {[
              { name: "Viladecans", href: "/zonas/viladecans" },
              { name: "Castelldefels", href: "/zonas/castelldefels" },
              { name: "L'Hospitalet", href: "/zonas/lhospitalet" },
              { name: "Gavà", href: null },
              { name: "El Prat", href: null },
              { name: "Cornellà", href: null },
              { name: "Sant Boi", href: null },
            ].map((z) =>
              z.href ? (
                <Link
                  key={z.name}
                  href={z.href}
                  style={colLink}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "var(--text)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--muted2)")
                  }
                >
                  {z.name}
                </Link>
              ) : (
                <span key={z.name} style={{ ...colLink, cursor: "default" }}>
                  {z.name}
                </span>
              ),
            )}
          </div>

          {/* Contacto */}
          <div>
            <p style={colHead}>Contacto</p>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              style={{
                ...colLink,
                fontFamily: "var(--font-dm-mono)",
                fontSize: 13,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--muted2)")
              }
            >
              {SITE_CONFIG.phoneDisplay}
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              style={{
                ...colLink,
                fontFamily: "var(--font-dm-mono)",
                fontSize: 13,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--muted2)")
              }
            >
              {SITE_CONFIG.email}
            </a>
            <Link
              href="/contacto"
              style={{
                display: "inline-block",
                marginTop: 8,
                fontFamily: "var(--font-dm-sans)",
                fontSize: 13,
                color: "var(--muted2)",
                border: "1px solid var(--border2)",
                borderRadius: 7,
                padding: "8px 14px",
                transition: "color 0.15s, border-color 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--text)";
                e.currentTarget.style.borderColor = "rgba(0,0,0,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--muted2)";
                e.currentTarget.style.borderColor = "var(--border2)";
              }}
            >
              Formulario de contacto
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            marginTop: 48,
            paddingTop: 24,
            paddingBottom: 24,
            borderTop: "1px solid var(--border)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-dm-mono)",
              fontSize: 11,
              color: "var(--muted)",
            }}
          >
            © 2026 NK Air. Todos los derechos reservados.
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            {[
              { label: "Privacidad", href: "/politica-de-privacidad" },
              { label: "Aviso Legal", href: "/aviso-legal" },
              { label: "Cookies", href: "/politica-de-cookies" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  fontFamily: "var(--font-dm-mono)",
                  fontSize: 11,
                  color: "var(--muted)",
                  transition: "color 0.15s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--muted2)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--muted)")
                }
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 540px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </footer>
  );
}
