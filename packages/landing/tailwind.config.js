module.exports = {
  mode: "jit",
  content: {
    files: [
      "./components/**/*.{vue,js}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./app.vue",
      "./plugins/**/*.{js,ts}",
    ],
  },
  theme: {
    fontFamily: {
      header: ["Bebas Neue", "ui-sans-serif", "system-ui"],
    },
    extend: {
      colors: {
        primary: {
          900: "#ED7102",
          800: "#EF7F1B",
          700: "#F18D35",
          600: "#F29C4E",
          500: "#F4AA67",
          400: "#F6B881",
          300: "#F8C69A",
          200: "#FAD4B3",
          100: "#FBE3CC",
          50: "#FDF1E6",
        },
        secondary: {
          900: "#3F2417",
          800: "#523A2E",
          700: "#655045",
          600: "#79665D",
          500: "#8C7C74",
          400: "#9F928B",
          300: "#B2A7A2",
          200: "#C5BDB9",
          100: "#D9D3D1",
          50: "#ECE9E8",
        },
        beige: "#FFF3DA",
      },
    },
    variants: {
      extend: {},
    },
    plugins: [require("@tailwindcss/forms")],
  },
  plugins: [],
};
