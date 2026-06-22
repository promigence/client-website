/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        accent: "#0033A1",
        navy: "#0A192F",
        surface: "#112240",
        steel: "#0033A1",
        "on-surface": "#0A2342",
        "on-variant": "#45566F",
        outline: "#6E7E98",
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
