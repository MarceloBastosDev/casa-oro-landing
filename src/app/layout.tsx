import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Casa Oro — Ateliê de Velas e Cerâmica",
  description:
    "Casa Oro é a celebração do essencial elevado à sua forma mais pura. Velas artesanais e cerâmica feita à mão em Capão da Canoa, RS.",
  keywords:
    "velas artesanais, cerâmica, Casa Oro, Capão da Canoa, velas de soja, ateliê, decoração consciente",
  openGraph: {
    title: "Casa Oro — Ateliê de Velas e Cerâmica",
    description:
      "Velas artesanais e cerâmica feita à mão. O espaço sagrado da abundância consciente.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
