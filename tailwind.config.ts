import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#05070A",
        panel: "#0D141C",
        panel2: "#121B26",
        cyan: {
          DEFAULT: "#22D3EE",
          dim: "#0E7490",
          glow: "#67E8F9",
        },
        ink: "#EAF2F7",
        muted: "#7C8B99",
        line: "#1C2732",
        signal: "#34D399",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(34,211,238,0) 0%, rgba(5,7,10,1) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
