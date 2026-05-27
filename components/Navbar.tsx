"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { getWhatsAppUrl } from "@/lib/config";
import Image from "next/image";

const services = [
  { name: "Aire Acondicionado", href: "/servicios/climatizacion" },
  { name: "Aerotermia", href: "/servicios/aerotermia" },
  { name: "Fontanería", href: "/servicios/fontaneria" },
  { name: "Cámaras Frigoríficas", href: "/servicios/camaras-frigorificas" },
];

const zones = [
  { name: "Viladecans", href: "/zonas/viladecans" },
  { name: "Castelldefels", href: "/zonas/castelldefels" },
  { name: "L'Hospitalet", href: "/zonas/lhospitalet" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [zonesOpen, setZonesOpen] = useState(false);

  const servicesCloseRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const zonesCloseRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openServices = () => {
    if (servicesCloseRef.current) clearTimeout(servicesCloseRef.current);
    setServicesOpen(true);
  };
  const closeServices = () => {
    servicesCloseRef.current = setTimeout(() => setServicesOpen(false), 200);
  };
  const openZones = () => {
    if (zonesCloseRef.current) clearTimeout(zonesCloseRef.current);
    setZonesOpen(true);
  };
  const closeZones = () => {
    zonesCloseRef.current = setTimeout(() => setZonesOpen(false), 200);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.3s ease, border-color 0.3s ease",
        background: scrolled
          ? "rgba(249,249,249,0.96)"
          : "rgba(249,249,249,0.82)",
        backdropFilter: "blur(20px)",
        borderBottom: scrolled
          ? "1px solid var(--border)"
          : "1px solid transparent",
      }}
    >
      <nav
        style={{ maxWidth: 1320, margin: "0 auto", padding: "0 32px" }}
        className="flex items-center justify-between h-16 lg:h-[72px]"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <Image
            src="/nkair-logo.png"
            alt="NK Air Logo"
            width={100}
            height={40}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-7">
          <div
            className="relative"
            onMouseEnter={openServices}
            onMouseLeave={closeServices}
          >
            <button
              className="flex items-center gap-1 text-sm"
              style={{
                color: "var(--muted2)",
                fontFamily: "var(--font-dm-sans)",
                fontWeight: 400,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--text)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--muted2)")
              }
            >
              Servicios
              <svg
                style={{
                  width: 14,
                  height: 14,
                  transition: "transform 0.2s ease",
                  transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {servicesOpen && (
              <div
                onMouseEnter={openServices}
                onMouseLeave={closeServices}
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  width: 220,
                  background: "var(--surface)",
                  border: "1px solid var(--border2)",
                  borderRadius: 10,
                  padding: "6px 0",
                  zIndex: 50,
                  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                  animation: "fadeSlideUp 0.18s ease both",
                }}
              >
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    style={{
                      display: "block",
                      padding: "10px 16px",
                      fontSize: 13,
                      color: "var(--muted2)",
                      fontFamily: "var(--font-dm-sans)",
                      transition: "color 0.15s, background 0.15s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--text)";
                      e.currentTarget.style.background = "var(--bg)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--muted2)";
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div
            className="relative"
            onMouseEnter={openZones}
            onMouseLeave={closeZones}
          >
            <button
              className="flex items-center gap-1 text-sm"
              style={{
                color: "var(--muted2)",
                fontFamily: "var(--font-dm-sans)",
                fontWeight: 400,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--text)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--muted2)")
              }
            >
              Zonas
              <svg
                style={{
                  width: 14,
                  height: 14,
                  transition: "transform 0.2s ease",
                  transform: zonesOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {zonesOpen && (
              <div
                onMouseEnter={openZones}
                onMouseLeave={closeZones}
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  width: 200,
                  background: "var(--surface)",
                  border: "1px solid var(--border2)",
                  borderRadius: 10,
                  padding: "6px 0",
                  zIndex: 50,
                  boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                  animation: "fadeSlideUp 0.18s ease both",
                }}
              >
                {zones.map((z) => (
                  <Link
                    key={z.href}
                    href={z.href}
                    style={{
                      display: "block",
                      padding: "10px 16px",
                      fontSize: 13,
                      color: "var(--muted2)",
                      fontFamily: "var(--font-dm-sans)",
                      transition: "color 0.15s, background 0.15s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "var(--text)";
                      e.currentTarget.style.background = "var(--bg)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "var(--muted2)";
                      e.currentTarget.style.background = "transparent";
                    }}
                  >
                    {z.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {["Sobre Nosotros", "Contacto"].map((label) => (
            <Link
              key={label}
              href={`/${label === "Sobre Nosotros" ? "sobre-nosotros" : "contacto"}`}
              style={{
                fontSize: 14,
                color: "var(--muted2)",
                fontFamily: "var(--font-dm-sans)",
                fontWeight: 400,
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--text)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--muted2)")
              }
            >
              {label}
            </Link>
          ))}

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: "var(--accent)",
              color: "#000",
              fontFamily: "var(--font-dm-sans)",
              fontWeight: 500,
              fontSize: 13,
              padding: "8px 18px",
              borderRadius: 7,
              transition: "transform 0.15s, box-shadow 0.15s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 0 18px rgba(0,200,255,0.35)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.boxShadow = "none";
            }}
          >
            Pedir presupuesto
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden p-2"
          style={{ color: "var(--muted2)" }}
          aria-label="Abrir menú"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: "var(--surface)",
            borderTop: "1px solid var(--border)",
          }}
          className="lg:hidden"
        >
          <div
            className="px-5 py-5 space-y-1"
            style={{ maxWidth: 1320, margin: "0 auto" }}
          >
            <p
              style={{
                fontFamily: "var(--font-dm-mono)",
                fontSize: 10,
                color: "var(--muted)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                paddingBottom: 8,
              }}
            >
              Servicios
            </p>
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  padding: "9px 0",
                  fontSize: 14,
                  color: "var(--muted2)",
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                {s.name}
              </Link>
            ))}
            <p
              style={{
                fontFamily: "var(--font-dm-mono)",
                fontSize: 10,
                color: "var(--muted)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                paddingTop: 12,
                paddingBottom: 8,
              }}
            >
              Zonas
            </p>
            {zones.map((z) => (
              <Link
                key={z.href}
                href={z.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  padding: "9px 0",
                  fontSize: 14,
                  color: "var(--muted2)",
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                {z.name}
              </Link>
            ))}
            <div
              style={{
                borderTop: "1px solid var(--border)",
                paddingTop: 12,
                marginTop: 12,
              }}
              className="space-y-1"
            >
              <Link
                href="/sobre-nosotros"
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  padding: "9px 0",
                  fontSize: 14,
                  color: "var(--muted2)",
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                Sobre Nosotros
              </Link>
              <Link
                href="/contacto"
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  padding: "9px 0",
                  fontSize: 14,
                  color: "var(--muted2)",
                  fontFamily: "var(--font-dm-sans)",
                }}
              >
                Contacto
              </Link>
            </div>
            <div style={{ paddingTop: 16 }}>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  textAlign: "center",
                  background: "var(--accent)",
                  color: "#000",
                  fontFamily: "var(--font-dm-sans)",
                  fontWeight: 500,
                  fontSize: 14,
                  padding: "12px",
                  borderRadius: 8,
                }}
              >
                Pedir presupuesto
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
