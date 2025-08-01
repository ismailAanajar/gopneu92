import type { Metadata } from "next";
import { Quicksand, Roboto, Roboto_Serif } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Script from "next/script";

const geistMono = Roboto({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const quick = Quicksand({
  variable: "--font-quick",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GoPneu - Spécialiste Pneumatiques | Vente, Montage & Services",
  description:
    "GoPneu, votre expert en pneumatiques. Vente de pneus neufs et d'occasion, montage, équilibrage, gonflage. Service professionnel, prix compétitifs. Devis gratuit.",
  keywords:
    "pneus, pneumatiques, montage, équilibrage, gonflage, vente pneus neufs, pneus occasion, garage, automobile, GoPneu",
  authors: [{ name: "GoPneu92" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "GoPneu - Spécialiste Pneumatiques | Vente, Montage & Services",
    description:
      "GoPneu, votre expert en pneumatiques. Vente de pneus neufs et d'occasion, montage, équilibrage, gonflage. Service professionnel, prix compétitifs.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "GoPneu - Spécialiste Pneumatiques",
    description:
      "Votre expert en pneumatiques. Vente, montage, équilibrage et services professionnels.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${quick.variable} ${geistMono.variable} antialiased`}>
        <Header />
        {children}
        <Footer />

        <Script id="chat" type="text/javascript">
          {`
   (function(d, t) {
      var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
      v.onload = function() {
        window.voiceflow.chat.load({
          verify: { projectID: '676fe1e7cbabbcd8e3fc3a56' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production',
          voice: {
            url: "https://runtime-api.voiceflow.com"
          }
        });
      }
      v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
  })(document, 'script');
  `}
        </Script>
      </body>
    </html>
  );
}
