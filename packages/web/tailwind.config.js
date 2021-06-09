module.exports = {
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#EF7202",
        primaryLight: "#FBD69F",
        dark: "#2B2B2B",
        darkLight: "#6C6C6C",
        navbar: "#523D32",
        friesCard: "#FCDBAB14"
      },
      spacing: {
        "160": "40rem"
      },
      fontFamily: {
        header: ["Bebas Neue", "cursive"],
        text: ["Poppins", "sans-serif"]
      },
      width: {
        '300': '300px'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
