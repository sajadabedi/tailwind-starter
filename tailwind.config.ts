import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"inter", sans-serif'],
    },
    extend: {
      colors: {
        primary: "color(display-p3 var(--color-primary) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
export default config;
