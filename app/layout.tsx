import type { Metadata } from 'next'
import './globals.css'
import { WhatsAppButton } from '@/components/WspButn'
import Head from 'next/head'

export const metadata: Metadata = {
  title:
    "Lonko - Servicios de Desinfección y Control de Plagas en Chos Malal, Neuquén",
  description:
    "Lonko ofrece servicios profesionales de desinfección, sanitización y control de plagas en Chos Malal, Neuquén. Trabajamos con equipos especializados y productos certificados.",
  keywords:
    "desinfección, sanitización, control de plagas, Chos Malal, fumigación, control de plagas, limpieza industrial",
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
    images: ["/public/favicon.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "LFs_m431UFBMiGv1lV7phR1wXeOzjcI3dECZNzMEEoM",
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
      <Head>
        {/* ✅ Datos estructurados Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Lonko",
              url: "https://www.lonkomip.com/",
              telephone: "+54 351 123-4567",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Estrecho de Magallanes 311",
                addressLocality: "Chos Malal",
                addressRegion: "Neuquén",
                postalCode: "5000",
                addressCountry: "AR",
              },

              description:
                "Lonko ofrece servicios profesionales de desinfección, sanitización y control de plagas en Chos Malal, Neuquén. Trabajamos con equipos especializados y productos certificados.",
            }),
          }}
        />

        {/* ✅ Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-E7K55VT53P"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-E7K55VT53P');
            `,
          }}
        />

        {/* ✅ Manifest */}
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <body>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
