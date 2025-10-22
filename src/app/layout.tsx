import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Тантра Москва - Семинары, Ретриты и Практики | Центр Ресурсные",
  description: "Тантрические практики Москва: семинары, ретриты, индивидуальные сессии. Мягкая телесная терапия и работа с близостью в безопасном пространстве.",
  keywords: "тантра, москва, семинары, ретриты, телесная терапия, близость, тантрические практики",
  authors: [{ name: "Центр Ресурсные" }],
  creator: "Центр Ресурсные",
  publisher: "Центр Ресурсные",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://4ai.ru",
    title: "Тантра Москва - Семинары, Ретриты и Практики | Центр Ресурсные",
    description: "Тантрические практики Москва: семинары, ретриты, индивидуальные сессии. Мягкая телесная терапия и работа с близостью в безопасном пространстве.",
    siteName: "4ai.ru",
  },
  twitter: {
    card: "summary_large_image",
    title: "Тантра Москва - Семинары, Ретриты и Практики | Центр Ресурсные",
    description: "Тантрические практики Москва: семинары, ретриты, индивидуальные сессии. Мягкая телесная терапия и работа с близостью в безопасном пространстве.",
  },
  alternates: {
    canonical: "https://4ai.ru",
  },
  verification: {
    google: "G-VLPK3J2RE3",
    yandex: "yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="canonical" href="https://4ai.ru" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#8b5cf6" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-VLPK3J2RE3"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-VLPK3J2RE3');
            `,
          }}
        />
        
        {/* Yandex Metrika */}
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
              (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(100916718, "init", {
                   clickmap:true,
                   trackLinks:true,
                   accurateTrackBounce:true,
                   webvisor:true
              });
            `,
          }}
        />
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/100916718" style={{position:'absolute', left:'-9999px'}} alt="" />
          </div>
        </noscript>
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}