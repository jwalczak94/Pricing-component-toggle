module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#6D72DE",
        primary100: "#6E728E",
        primary400: "#4A4D60",
        gradientEnd: "#696EDD",
        gradientStart: "#A2A7F0",
        bgColor: "#F7F7FE",
      },
      fontFamily: {
        bodyFont: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        sm: "15px",
      },
      boxShadow: {
        cardShadow: "0px 20px 40px rgba(212, 210, 244, 0.5)",
      },
    },
  },
  plugins: [],
};
