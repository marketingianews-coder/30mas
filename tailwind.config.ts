import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        tinta: "#0C0C0D",
        papel: "#FAFAF7",
        amarillo: "#FFD60A",
        // Tokens compartidos con los componentes (mismos nombres que santiagopost,
        // remapeados a la paleta de 30mas: acento = tinta, highlight = amarillo).
        rojo: "#FFD60A",
        "rojo-oscuro": "#0C0C0D",
      },
      fontFamily: {
        // "serif" se remapea a Space Grotesk para reutilizar las clases font-serif de los componentes.
        serif: ["Space Grotesk", "system-ui", "sans-serif"],
        sans: ["Space Grotesk", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
