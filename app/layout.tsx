import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieBanner from "@/components/CookieBanner";
import { localBusinessSchema } from "@/lib/schema";
import { SITE_CONFIG } from "@/lib/config";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });

export const metadata: Metadata = {
  title: {
    default: "NK Air | Climatización, Aerotermia y Fontanería en Viladecans",
    template: "%s | NK Air",
  },
  description: SITE_CONFIG.description,
  metadataBase: new URL(SITE_CONFIG.url),
  keywords: [
    "climatización Viladecans",
    "aire acondicionado Baix Llobregat",
    "aerotermia Barcelona",
    "fontanería Viladecans",
    "instalación aire acondicionado",
    "reparación climatización Castelldefels",
  ],
  openGraph: {
    siteName: SITE_CONFIG.name,
    locale: "es_ES",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = localBusinessSchema();

  return (
    <html lang="es" className={geist.variable}>
      <head>
        {/* Google Tag Manager — uncomment and replace GTM-XXXXXXX to activate */}
        {/* <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-XXXXXXX');` }} /> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        {/* Google Tag Manager (noscript) — uncomment to activate */}
        {/* <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX" height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript> */}
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}
