/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        majorMonoDisplay: ["Major Mono Display", "monospace"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#2c3e50",
        secondary: "#9b59b6",
        info: "#34495e",
      },
    },
  },
  plugins: [],
};
