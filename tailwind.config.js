/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        blob: {
          "0%":   { transform: "translate(0,0) scale(1)" },
          "33%":  { transform: "translate(20px,-30px) scale(1.05)" },
          "66%":  { transform: "translate(-10px,10px) scale(0.98)" },
          "100%": { transform: "translate(0,0) scale(1)" }
        }
      },
      animation: {
        blob: "blob 22s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
