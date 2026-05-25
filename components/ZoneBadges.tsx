"use client";

import Link from "next/link";
import { ZONES } from "@/lib/config";

export default function ZoneBadges() {
  return (
    <section style={{ background: "var(--surface)", padding: "80px 0" }}>
      <div className="container-main">
        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <p
            className="reveal"
            style={{
              fontFamily: "var(--font-dm-mono)",
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--muted)",
              marginBottom: 12,
            }}
          >
            Cobertura
          </p>
          <h2
            className="reveal reveal-delay-1"
            style={{
              fontFamily: "var(--font-syne)",
              fontWeight: 800,
              fontSize: "clamp(28px, 3vw, 44px)",
              letterSpacing: "-0.04em",
              lineHeight: 1.0,
              color: "var(--text)",
            }}
          >
            Baix Llobregat<br />y zona sur de Barcelona.
          </h2>
        </div>

        {/* Zone grid */}
        <div
          className="zone-grid reveal reveal-delay-2"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 16,
          }}
        >
          {ZONES.map((zone) =>
            zone.slug ? (
              <Link
                key={zone.name}
                href={`/zonas/${zone.slug}`}
                className="zone-card"
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                  borderRadius: 10,
                  padding: "28px 32px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  transition: "border-color 0.2s ease, background 0.2s ease, transform 0.2s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(0,200,255,0.25)";
                  el.style.background = "var(--accent-dim)";
                  el.style.transform = "translateX(6px)";
                  const arrow = el.querySelector(".zone-arrow") as HTMLElement;
                  if (arrow) arrow.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--border)";
                  el.style.background = "var(--bg)";
                  el.style.transform = "translateX(0)";
                  const arrow = el.querySelector(".zone-arrow") as HTMLElement;
                  if (arrow) arrow.style.transform = "translateX(0)";
                }}
              >
                <div>
                  <p style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: 15, color: "var(--text)", marginBottom: 3 }}>
                    {zone.name}
                  </p>
                  <p style={{ fontFamily: "var(--font-dm-mono)", fontSize: 11, color: "var(--muted)", letterSpacing: "0.1em" }}>
                    Zona cubierta
                  </p>
                </div>
                <svg
                  className="zone-arrow"
                  width="18"
                  height="18"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="var(--accent)"
                  strokeWidth={2}
                  style={{ flexShrink: 0, transition: "transform 0.2s ease" }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ) : (
              <div
                key={zone.name}
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                  borderRadius: 10,
                  padding: "28px 32px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <p style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: 15, color: "var(--muted2)", marginBottom: 3 }}>
                    {zone.name}
                  </p>
                  <p style={{ fontFamily: "var(--font-dm-mono)", fontSize: 11, color: "var(--muted)", letterSpacing: "0.1em" }}>
                    Zona cubierta
                  </p>
                </div>
                <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="var(--muted)" strokeWidth={2} style={{ flexShrink: 0 }}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            )
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .zone-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .zone-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
