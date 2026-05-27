"use client";

import { useState } from "react";
import { getWhatsAppUrl, SITE_CONFIG, ZONES } from "@/lib/config";

export default function ContactoPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    servicio: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hola, soy ${form.nombre}. Necesito información sobre: ${form.servicio}. ${form.mensaje} Tel: ${form.telefono}`;
    window.open(getWhatsAppUrl(msg), "_blank");
    setSent(true);
  };

  return (
    <>
      {/* ── HERO COMPACTO ── */}
      <section style={{ background: "var(--bg)", paddingTop: 140, paddingBottom: 80, paddingLeft: 32, paddingRight: 32 }}>
        <div className="container-main">
          <div style={{ maxWidth: 680 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--accent-dim)", border: "1px solid rgba(0,200,255,0.2)", borderRadius: 100, padding: "6px 14px", marginBottom: 28, animation: "fadeSlideUp 0.6s 0s ease both" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", animation: "dotPulse 2s ease-in-out infinite" }} />
              <span style={{ fontFamily: "var(--font-dm-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--accent)" }}>
                Contacto · Respuesta en 24h
              </span>
            </div>
            <h1 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(40px, 5vw, 68px)", letterSpacing: "-0.04em", lineHeight: 0.98, color: "var(--text)", marginBottom: 20, animation: "fadeSlideUp 0.6s 0.1s ease both" }}>
              Contacta<br />con NK Air
            </h1>
            <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300, fontSize: 17, color: "var(--muted2)", lineHeight: 1.75, animation: "fadeSlideUp 0.6s 0.2s ease both" }}>
              Pide tu presupuesto gratuito o resuelve cualquier duda. Te respondemos en menos de 24 horas.
            </p>
          </div>
        </div>
      </section>

      {/* ── GRID CONTACTO ── */}
      <section style={{ padding: "0 0 100px", background: "var(--bg)" }}>
        <div className="container-main">
          <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>

            {/* ── INFORMACIÓN DE CONTACTO (izquierda) ── */}
            <div>
              {/* Datos de contacto */}
              <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 16, padding: "40px", marginBottom: 20 }}>
                <p style={{ fontFamily: "var(--font-dm-mono)", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 24 }}>
                  Información de contacto
                </p>

                {[
                  {
                    label: "Teléfono",
                    value: SITE_CONFIG.phoneDisplay,
                    href: `tel:${SITE_CONFIG.phone}`,
                    icon: "M2.25 6.338c0 4.95 4.001 9.937 9 11.565 4.999-1.628 9-6.616 9-11.565V3.75M2.25 6.338V3.75m0 0h19.5M2.25 3.75h19.5M12 15V9m0 0l-3 3m3-3l3 3",
                  },
                  {
                    label: "WhatsApp",
                    value: "Escríbenos ahora",
                    href: getWhatsAppUrl(),
                    icon: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z",
                    isFilled: true,
                  },
                  {
                    label: "Email",
                    value: SITE_CONFIG.email,
                    href: `mailto:${SITE_CONFIG.email}`,
                    icon: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75",
                  },
                  {
                    label: "Dirección",
                    value: `${SITE_CONFIG.address.street}, ${SITE_CONFIG.address.city}`,
                    href: "https://maps.google.com/?q=NK+Air,+Carretera+Barcelona+33,+Viladecans",
                    isExternal: true,
                    icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
                  },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.isExternal ? "_blank" : undefined}
                    rel={item.isExternal ? "noopener noreferrer" : undefined}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                      padding: "14px 0",
                      borderBottom: "1px solid var(--border)",
                      textDecoration: "none",
                    }}
                  >
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: "var(--accent-dim)", border: "1px solid rgba(0,200,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="18" height="18" fill={item.isFilled ? "var(--accent)" : "none"} viewBox="0 0 24 24" stroke={item.isFilled ? "none" : "var(--accent)"} strokeWidth={1.5} aria-hidden>
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                      </svg>
                    </div>
                    <div>
                      <p style={{ fontFamily: "var(--font-dm-mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 3 }}>{item.label}</p>
                      <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 500, fontSize: 14, color: "var(--text)" }}>{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Horario y zonas */}
              <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 16, padding: "32px 40px" }}>
                <p style={{ fontFamily: "var(--font-dm-mono)", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 16 }}>Horario de atención</p>
                <p style={{ fontFamily: "var(--font-syne)", fontWeight: 600, fontSize: 15, color: "var(--text)", marginBottom: 4 }}>{SITE_CONFIG.schedule.days}</p>
                <p style={{ fontFamily: "var(--font-dm-mono)", fontSize: 14, color: "var(--muted2)", marginBottom: 16 }}>{SITE_CONFIG.schedule.hours}</p>
                <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300, fontSize: 13, color: "var(--muted)", marginBottom: 24 }}>Para urgencias, contáctanos por WhatsApp fuera del horario habitual.</p>
                <p style={{ fontFamily: "var(--font-dm-mono)", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 12 }}>Zonas de cobertura</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {ZONES.map((z) => (
                    <span key={z.name} style={{ fontFamily: "var(--font-dm-mono)", fontSize: 11, letterSpacing: "0.08em", color: "var(--muted2)", background: "var(--bg)", border: "1px solid var(--border)", borderRadius: 100, padding: "4px 12px" }}>
                      {z.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* ── FORMULARIO (derecha) ── */}
            <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 16, padding: "40px" }}>
              <p style={{ fontFamily: "var(--font-dm-mono)", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 12 }}>
                Solicitar presupuesto
              </p>
              <h2 style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: 26, letterSpacing: "-0.03em", color: "var(--text)", marginBottom: 32 }}>
                Cuéntanos qué necesitas
              </h2>

              {sent ? (
                <div style={{ textAlign: "center", padding: "48px 0" }}>
                  <div style={{ width: 64, height: 64, borderRadius: "50%", background: "var(--accent-dim)", border: "1px solid rgba(0,200,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
                    <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="var(--accent)" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: 20, color: "var(--text)", marginBottom: 12 }}>¡Mensaje enviado!</h3>
                  <p style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300, fontSize: 15, color: "var(--muted2)", lineHeight: 1.7 }}>
                    Hemos abierto WhatsApp con tu mensaje. Si no se abrió automáticamente, contáctanos directamente al{" "}
                    <a href={`tel:${SITE_CONFIG.phone}`} style={{ color: "var(--accent)" }}>{SITE_CONFIG.phoneDisplay}</a>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                  <div>
                    <label htmlFor="nombre" style={{ display: "block", fontFamily: "var(--font-dm-mono)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 8 }}>
                      Nombre *
                    </label>
                    <input
                      id="nombre"
                      type="text"
                      required
                      value={form.nombre}
                      onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                      placeholder="Tu nombre"
                      style={{ width: "100%", background: "var(--bg)", border: "1px solid var(--border2)", borderRadius: 8, padding: "12px 16px", fontFamily: "var(--font-dm-sans)", fontSize: 14, color: "var(--text)", outline: "none", boxSizing: "border-box", transition: "border-color 0.15s" }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--border2)")}
                    />
                  </div>

                  <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div>
                      <label htmlFor="email" style={{ display: "block", fontFamily: "var(--font-dm-mono)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 8 }}>
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="tu@email.com"
                        style={{ width: "100%", background: "var(--bg)", border: "1px solid var(--border2)", borderRadius: 8, padding: "12px 16px", fontFamily: "var(--font-dm-sans)", fontSize: 14, color: "var(--text)", outline: "none", boxSizing: "border-box", transition: "border-color 0.15s" }}
                        onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                        onBlur={(e) => (e.target.style.borderColor = "var(--border2)")}
                      />
                    </div>
                    <div>
                      <label htmlFor="telefono" style={{ display: "block", fontFamily: "var(--font-dm-mono)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 8 }}>
                        Teléfono
                      </label>
                      <input
                        id="telefono"
                        type="tel"
                        value={form.telefono}
                        onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                        placeholder="600 000 000"
                        style={{ width: "100%", background: "var(--bg)", border: "1px solid var(--border2)", borderRadius: 8, padding: "12px 16px", fontFamily: "var(--font-dm-sans)", fontSize: 14, color: "var(--text)", outline: "none", boxSizing: "border-box", transition: "border-color 0.15s" }}
                        onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                        onBlur={(e) => (e.target.style.borderColor = "var(--border2)")}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="servicio" style={{ display: "block", fontFamily: "var(--font-dm-mono)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 8 }}>
                      Servicio de interés *
                    </label>
                    <select
                      id="servicio"
                      required
                      value={form.servicio}
                      onChange={(e) => setForm({ ...form, servicio: e.target.value })}
                      style={{ width: "100%", background: "var(--bg)", border: "1px solid var(--border2)", borderRadius: 8, padding: "12px 16px", fontFamily: "var(--font-dm-sans)", fontSize: 14, color: form.servicio ? "var(--text)" : "var(--muted)", outline: "none", boxSizing: "border-box", cursor: "pointer", transition: "border-color 0.15s" }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--border2)")}
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="Aire Acondicionado">Aire Acondicionado</option>
                      <option value="Aerotermia">Aerotermia</option>
                      <option value="Fontanería">Fontanería</option>
                      <option value="Cámaras Frigoríficas">Cámaras Frigoríficas</option>
                      <option value="Mantenimiento">Contrato de Mantenimiento</option>
                      <option value="Otro">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="mensaje" style={{ display: "block", fontFamily: "var(--font-dm-mono)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 8 }}>
                      Mensaje *
                    </label>
                    <textarea
                      id="mensaje"
                      required
                      rows={4}
                      value={form.mensaje}
                      onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                      placeholder="Describe brevemente lo que necesitas..."
                      style={{ width: "100%", background: "var(--bg)", border: "1px solid var(--border2)", borderRadius: 8, padding: "12px 16px", fontFamily: "var(--font-dm-sans)", fontSize: 14, color: "var(--text)", outline: "none", boxSizing: "border-box", resize: "none", transition: "border-color 0.15s" }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--border2)")}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 10,
                      background: "var(--accent)",
                      color: "#000",
                      fontFamily: "var(--font-dm-sans)",
                      fontWeight: 500,
                      fontSize: 15,
                      padding: "16px 28px",
                      borderRadius: 10,
                      border: "none",
                      cursor: "pointer",
                      transition: "box-shadow 0.15s, transform 0.1s",
                      width: "100%",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px rgba(0,200,255,0.4)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "none")}
                    onMouseDown={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(0.97)")}
                    onMouseUp={(e) => ((e.currentTarget as HTMLElement).style.transform = "scale(1)")}
                  >
                    <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Enviar por WhatsApp
                  </button>

                  <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: 12, color: "var(--muted)", textAlign: "center" }}>
                    Al enviar, se abrirá WhatsApp con tu mensaje. No guardamos tus datos.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .contact-grid { grid-template-columns: 1fr !important; }
          }
          @media (max-width: 560px) {
            .form-row { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </>
  );
}
