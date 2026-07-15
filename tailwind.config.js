/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        accent: "#82D4F6",
        navy: "#0A2240",
        surface: "#113C65",
        steel: "#82D4F6",
        "on-surface": "#FFFFFF",
        "on-variant": "#BCC6D4",
        outline: "#8FA6C4",
      },
      fontFamily: {
        display: ["Montserrat", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      maxWidth: { container: "1440px" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
