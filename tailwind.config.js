// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#6366F1",   // your custom brand color (purple example, change if needed)
      },
      boxShadow: {
        soft: "0 4px 12px rgba(0,0,0,0.08)", // soft shadow
      },
      backdropBlur: {
        lg: "16px", // for your glass effect
      },
    },
  },
  plugins: [],
};
