import type { Metadata } from 'next'
import './globals.css'
import { WhatsAppButton } from '@/components/WspButn'
import Script from 'next/script'

export const metadata: Metadata = {
  title:
    "Lonko - Servicios de Desinfección y Control de Plagas en Chos Malal, Neuquén",
  description:
    "Lonko ofrece servicios profesionales de desinfección, sanitización y control de plagas en Chos Malal, Neuquén. Trabajamos con equipos especializados y productos certificados.",
  keywords:
    "desinfección, sanitización, control de plagas, Chos Malal, fumigación, limpieza industrial",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/x-icon" },
      { url: "/favicon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.png", type: "image/png", sizes: "16x16" },
    ],
  },
  authors: [{ name: "Lonko" }],
  creator: "Lonko",
  publisher: "Lonko",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  category: "Servicios de Desinfección y Control de Plagas",
  applicationName: "Lonko",
  themeColor: "#2c3e50",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://www.lonkomip.com/",
    title:
      "Lonko - Servicios de Desinfección y Control de Plagas en Chos Malal, Neuquén",
    description:
      "Lonko ofrece servicios profesionales de desinfección, sanitización y Control de Plagas en Chos Malal, Neuquén. Trabajamos con equipos especializados.",
    siteName: "Lonko",
    images: [
      {
        url: "https://www.lonkomip.com/favicon.png",
        width: 1200,
        height: 630,
        alt: "Lonko - Servicios de Desinfección y Control de Plagas en Chos Malal, Neuquén",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Lonko - Servicios de Desinfección y Control de Plagas en Chos Malal, Neuquén",
    description:
      "Lonko ofrece servicios profesionales de desinfección, sanitización y Control de Plagas en Chos Malal, Neuquén.",
    images: ["/favicon.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "CZacylOgdRSV9uU3fjvbjubEnn4nq8TOy5bNHxvDCKw",
  },
  generator: "Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta
          name="google-site-verification"
          content="CZacylOgdRSV9uU3fjvbjubEnn4nq8TOy5bNHxvDCKw"
        />

        {/* ✅ Datos estructurados Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Lonko",
              url: "https://www.lonkomip.com/",
              telephone: "+54 2942-409108",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Estrecho de Magallanes 311",
                addressLocality: "Chos Malal",
                addressRegion: "Neuquén",
                postalCode: "5000",
                addressCountry: "AR",
              },
              description:
                "Lonko ofrece servicios profesionales de desinfección, sanitización y control de plagas en Chos Malal, Neuquén.",
            }),
          }}
        />

        {/* ✅ Manifest */}
        <link rel="manifest" href="/manifest.json" />
      </head>

      <body>
        {children}
        <WhatsAppButton />

        {/* ✅ Google Analytics + Google Ads */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-E7K55VT53P"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            // Google Analytics (GA4)
            gtag('config', 'G-E7K55VT53P');

            // Google Ads
            gtag('config', 'AW-17201041594');
          `}
        </Script>
      </body>
    </html>
  );
}
