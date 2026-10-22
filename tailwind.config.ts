import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        void: "#060711",
        panel: "rgba(13, 18, 36, 0.72)",
        cyanGlow: "#20d9ff",
        violetGlow: "#8b5cf6"
      },
      boxShadow: {
        neon: "0 0 28px rgba(32, 217, 255, 0.18), 0 0 54px rgba(139, 92, 246, 0.14)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;

