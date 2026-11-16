import type { Metadata } from "next";
import { Audiowide } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// Tipografía de marca (display): Audiowide. El cuerpo usa un sans legible por defecto.
const audiowide = Audiowide({ subsets: ["latin"], weight: "400", variable: "--font-audiowide", display: "swap" });

export const metadata: Metadata = {
  title: { default: "30 Minutos Más", template: "%s · 30 Minutos Más" },
  description: "Solo 30 minutos para enterarte de todo lo que pasó hoy.",
  metadataBase: new URL("https://30mas.cl"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={audiowide.variable}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
