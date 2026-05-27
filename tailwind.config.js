export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07111f",
        midnight: "#0a1627",
        navy: "#0d2744",
        steel: "#7f8fa3",
        pewter: "#a9b5c4",
        frost: "#e8eef6",
        signal: "#6fb7d8",
        mint: "#8fd6bd",
        amber: "#d3ad68"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        premium: "0 24px 80px rgba(0, 0, 0, 0.35)",
        line: "inset 0 1px 0 rgba(255,255,255,0.08)"
      }
    }
  },
  plugins: []
};
