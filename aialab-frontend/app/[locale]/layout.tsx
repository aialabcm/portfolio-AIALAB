import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../../globals.css";
import MouseHalo from "@/components/ui/MouseHalo";
import RevealObserver from "@/components/layout/RevealObserver";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AIA LAB | Artificial Intelligence & Art Laboratory",
  description: "Studio de design premium et performance digitale.",
  icons: {
    icon: "/images/logo.png",
  },
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} className={roboto.variable}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <div className="page-bg home" id="master-bg" />
          <MouseHalo />
          <RevealObserver />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
