import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "../../globals.css";
import MouseHalo from "@/components/ui/MouseHalo";
import RevealObserver from "@/components/layout/RevealObserver";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AIA LAB | Artificial Intelligence & Art Laboratory",
  description: "Studio de design premium et performance digitale.",
  icons: {
    icon: "/images/logo.png",
  },
};

import {setRequestLocale} from 'next-intl/server';

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="page-bg home" id="master-bg" />
          <div className="bg-blob blob-1" />
          <div className="bg-blob blob-2" />
          <MouseHalo />
          <RevealObserver />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
