import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "30 Minutos Más",
  description: "Solo 30 minutos para enterarte de todo lo que pasó hoy",
  metadataBase: new URL("https://30mas.cl"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
