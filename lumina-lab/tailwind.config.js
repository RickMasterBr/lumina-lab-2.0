// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  // Garanta que esta seção content esteja assim:
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // O resto do arquivo (theme, plugins) pode continuar como definimos antes.
  theme: {
    extend: {
      colors: {
        "brand-primary": "#8C52FF",
        "brand-secondary": "var(--cor-secundaria-usr)",
        "brand-accent": "#CDF5FD",
        "dark-bg": "var(--fundo-escuro-principal)",
        "dark-card": "var(--fundo-escuro-secundario)",
        "dark-border": "#30363D",
        "light-text": "var(--texto-principal)",
        "medium-text": "var(--texto-secundario)",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "subtle-pulse": "subtlePulse 2s infinite ease-in-out",
        "move-aurora-1": "move-aurora-1 20s infinite alternate ease-in-out",
        "move-aurora-2": "move-aurora-2 25s infinite alternate ease-in-out 3s",
        "move-aurora-3":
          "move-aurora-3 18s infinite alternate ease-in-out 1.5s",
        "gradient-border-flow": "gradientBorderFlow 4s linear infinite",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        subtlePulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
        "move-aurora-1": {
          to: {
            transform: "translate(120px, 100px) rotate(130deg) scale(1.25)",
          },
        },
        "move-aurora-2": {
          to: {
            transform: "translate(-100px, 60px) rotate(190deg) scale(0.95)",
          },
        },
        "move-aurora-3": {
          to: {
            transform: "translate(60px, -120px) rotate(100deg) scale(1.15)",
          },
        },
        gradientBorderFlow: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      boxShadow: {
        "glow-brand-primary-sm": "0 0 8px 0px var(--cor-primaria-usr)",
        "glow-brand-primary-md": "0 0 15px 2px var(--cor-primaria-usr)",
        "glow-brand-secondary-sm": "0 0 8px 0px var(--cor-secundaria-usr)",
      },
    },
  },
  plugins: [],
};
