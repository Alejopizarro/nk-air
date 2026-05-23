"use client";

import { useState } from "react";
import { getWhatsAppUrl, SITE_CONFIG } from "@/lib/config";

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
      {/* HERO */}
      <section className="bg-gradient-to-br from-navy to-blue-900 pt-28 pb-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Contacta con NK Air
          </h1>
          <p className="text-blue-200 text-lg">
            Pide tu presupuesto gratuito o resuelve cualquier duda. Te respondemos
            en menos de 24 horas.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-light">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* FORMULARIO */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-navy mb-6">
              Solicitar presupuesto gratuito
            </h2>

            {sent ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="font-bold text-navy text-lg mb-2">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-gray-500 text-sm">
                  Hemos abierto WhatsApp con tu mensaje. Si no se abrió automáticamente,
                  contáctanos directamente al{" "}
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="text-cyan-brand hover:underline"
                  >
                    {SITE_CONFIG.phoneDisplay}
                  </a>
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="nombre" className="block text-xs font-semibold text-gray-dark mb-1">
                    Nombre *
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    required
                    value={form.nombre}
                    onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-dark focus:outline-none focus:border-cyan-brand focus:ring-1 focus:ring-cyan-brand"
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-gray-dark mb-1">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-dark focus:outline-none focus:border-cyan-brand focus:ring-1 focus:ring-cyan-brand"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="telefono" className="block text-xs font-semibold text-gray-dark mb-1">
                      Teléfono
                    </label>
                    <input
                      id="telefono"
                      type="tel"
                      value={form.telefono}
                      onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-dark focus:outline-none focus:border-cyan-brand focus:ring-1 focus:ring-cyan-brand"
                      placeholder="600 000 000"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="servicio" className="block text-xs font-semibold text-gray-dark mb-1">
                    Servicio de interés *
                  </label>
                  <select
                    id="servicio"
                    required
                    value={form.servicio}
                    onChange={(e) => setForm({ ...form, servicio: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-dark focus:outline-none focus:border-cyan-brand focus:ring-1 focus:ring-cyan-brand"
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
                  <label htmlFor="mensaje" className="block text-xs font-semibold text-gray-dark mb-1">
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    required
                    rows={4}
                    value={form.mensaje}
                    onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-dark focus:outline-none focus:border-cyan-brand focus:ring-1 focus:ring-cyan-brand resize-none"
                    placeholder="Describe brevemente lo que necesitas..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-eco hover:bg-green-600 text-white font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Enviar por WhatsApp
                </button>
                <p className="text-xs text-gray-400 text-center">
                  Al enviar, se abrirá WhatsApp con tu mensaje. No guardamos tus datos.
                </p>
              </form>
            )}
          </div>

          {/* INFO DE CONTACTO */}
          <div className="space-y-5">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-navy mb-5">Información de contacto</h2>
              <div className="space-y-4">
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-gray-light hover:bg-navy/5 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-cyan-brand/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-cyan-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Teléfono</p>
                    <p className="font-semibold text-navy text-sm">{SITE_CONFIG.phoneDisplay}</p>
                  </div>
                </a>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-gray-light hover:bg-green-eco/5 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-green-eco/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green-eco" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">WhatsApp</p>
                    <p className="font-semibold text-navy text-sm">Escríbenos ahora</p>
                  </div>
                </a>

                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-gray-light hover:bg-navy/5 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-cyan-brand/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-cyan-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Email</p>
                    <p className="font-semibold text-navy text-sm">{SITE_CONFIG.email}</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-light">
                  <div className="w-10 h-10 rounded-full bg-cyan-brand/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-cyan-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Dirección</p>
                    <p className="font-semibold text-navy text-sm">
                      {SITE_CONFIG.address.street}, {SITE_CONFIG.address.city}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-navy mb-3">Horario de atención</h3>
              <p className="text-gray-500 text-sm">
                <strong>{SITE_CONFIG.schedule.days}</strong><br />
                {SITE_CONFIG.schedule.hours}
              </p>
              <p className="text-gray-400 text-xs mt-3">
                Para urgencias, contáctanos por WhatsApp fuera del horario habitual.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
