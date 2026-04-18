import type { Metadata } from "next";
import "./globals.css";
import MouseHalo from "@/components/layout/MouseHalo";
import RevealObserver from "@/components/layout/RevealObserver";

export const metadata: Metadata = {
  title: "AIA LAB | Master Edition Deep Azure",
  description: "Studio de design premium et performance digitale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <div className="page-bg" id="master-bg" />
        <MouseHalo />
        <RevealObserver />
        {children}
      </body>
    </html>
  );
}
