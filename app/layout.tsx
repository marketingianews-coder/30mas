import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "30 Minutos Más", template: "%s · 30 Minutos Más" },
  description: "Solo 30 minutos para enterarte de todo lo que pasó hoy.",
  metadataBase: new URL("https://30mas.cl"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
