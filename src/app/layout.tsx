import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/contexts/language-context";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "IMM Corporation SARL — Équipements de Sécurité & Services Professionnels en RDC",
  description:
    "IMM Corporation est une entreprise multi-services basée à Kinshasa, spécialisée dans les équipements de sécurité, vêtements de travail et solutions d'hygiène aux standards internationaux.",
  keywords: [
    "équipements de sécurité",
    "EPI",
    "vêtements de travail",
    "RDC",
    "Kinshasa",
    "IMM Corporation",
    "gel hydroalcoolique",
    "sécurité au travail",
  ],
  openGraph: {
    title: "IMM Corporation SARL",
    description:
      "Votre partenaire de confiance en équipements de sécurité et services professionnels en République Démocratique du Congo.",
    type: "website",
    locale: "fr_CD",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
