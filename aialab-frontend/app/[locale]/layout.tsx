import type { Metadata } from "next";
import "../../globals.css";
import MouseHalo from "@/components/layout/MouseHalo";
import RevealObserver from "@/components/layout/RevealObserver";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

export const metadata: Metadata = {
  title: "AIA LAB | Master Edition Deep Azure",
  description: "Studio de design premium et performance digitale.",
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
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <div className="page-bg" id="master-bg" />
          <MouseHalo />
          <RevealObserver />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
