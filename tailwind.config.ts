import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#47637f", // Color principal
        secondary: "#38a0ca", // Color secundario
        tercero: "#19D3F5", 
        darkBg: "#00263e", // Fondo oscuro
        fondo: "#24455f", // Fondo claro
        lightBg: "#35546f", // Fondo más claro para contraste
        accent: "#12354e", // Color para detalles o hovers
      },
      backgroundImage: {
        "gradient-cover":
          " linear-gradient(90deg, rgba(52,122,163,1) 10%, rgba(39,106,145,1) 23%, rgba(36,95,126,1) 40%, rgba(33,89,121,1) 59%, rgba(47,101,133,1) 76%, rgba(48,96,122,1) 89%);",
      },
    },
  },
  plugins: [],
} satisfies Config;
