/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "rgb(138 92 246)"
      },
      backgroundImage: {
        'hero-grad': "radial-gradient(1200px 600px at 10% 10%, rgba(138,92,246,0.20), transparent 60%), radial-gradient(800px 500px at 90% 10%, rgba(56,189,248,0.15), transparent 60%)",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(2,6,23,0.35)"
      }
    },
  },
  plugins: [],
}
