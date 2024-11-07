import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'top-shadow': '0 -4px 6px -1px rgba(0, 0, 0, 0.1)',
      },
      colors: {
        gradient1:"#1d5b79",
			  gradient2:"#0000008c",

      },
    },
  },
  plugins: [],
};
export default config;
