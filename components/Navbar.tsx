"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SITE_CONFIG, getWhatsAppUrl } from "@/lib/config";

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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1 flex-shrink-0">
          <span
            className={`text-2xl font-black tracking-tight transition-colors ${
              scrolled ? "text-navy" : "text-white"
            }`}
          >
            NK
          </span>
          <span className="text-2xl font-black tracking-tight text-cyan-brand">
            Air
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Servicios Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className={`flex items-center gap-1 font-medium text-sm transition-colors hover:text-cyan-brand ${
                scrolled ? "text-gray-dark" : "text-white"
              }`}
            >
              Servicios
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50">
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="block px-4 py-2.5 text-sm text-gray-dark hover:bg-gray-light hover:text-cyan-brand transition-colors"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Zonas Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setZonesOpen(true)}
            onMouseLeave={() => setZonesOpen(false)}
          >
            <button
              className={`flex items-center gap-1 font-medium text-sm transition-colors hover:text-cyan-brand ${
                scrolled ? "text-gray-dark" : "text-white"
              }`}
            >
              Zonas
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {zonesOpen && (
              <div className="absolute top-full left-0 mt-1 w-52 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-50">
                {zones.map((z) => (
                  <Link
                    key={z.href}
                    href={z.href}
                    className="block px-4 py-2.5 text-sm text-gray-dark hover:bg-gray-light hover:text-cyan-brand transition-colors"
                  >
                    {z.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/sobre-nosotros"
            className={`font-medium text-sm transition-colors hover:text-cyan-brand ${
              scrolled ? "text-gray-dark" : "text-white"
            }`}
          >
            Sobre Nosotros
          </Link>
          <Link
            href="/contacto"
            className={`font-medium text-sm transition-colors hover:text-cyan-brand ${
              scrolled ? "text-gray-dark" : "text-white"
            }`}
          >
            Contacto
          </Link>

          {/* CTA Button */}
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-eco hover:bg-green-600 text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
          >
            Pedir presupuesto
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`lg:hidden p-2 rounded-md transition-colors ${
            scrolled ? "text-navy" : "text-white"
          }`}
          aria-label="Abrir menú"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2 pt-2">
              Servicios
            </p>
            {services.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                onClick={() => setMenuOpen(false)}
                className="block px-2 py-2 text-gray-dark hover:text-cyan-brand text-sm"
              >
                {s.name}
              </Link>
            ))}
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-2 pt-3">
              Zonas
            </p>
            {zones.map((z) => (
              <Link
                key={z.href}
                href={z.href}
                onClick={() => setMenuOpen(false)}
                className="block px-2 py-2 text-gray-dark hover:text-cyan-brand text-sm"
              >
                {z.name}
              </Link>
            ))}
            <div className="border-t border-gray-100 pt-3 mt-3 space-y-1">
              <Link
                href="/sobre-nosotros"
                onClick={() => setMenuOpen(false)}
                className="block px-2 py-2 text-gray-dark hover:text-cyan-brand text-sm font-medium"
              >
                Sobre Nosotros
              </Link>
              <Link
                href="/contacto"
                onClick={() => setMenuOpen(false)}
                className="block px-2 py-2 text-gray-dark hover:text-cyan-brand text-sm font-medium"
              >
                Contacto
              </Link>
            </div>
            <div className="pt-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-green-eco hover:bg-green-600 text-white font-semibold text-sm px-5 py-3 rounded-lg transition-colors"
              >
                Pedir presupuesto por WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
