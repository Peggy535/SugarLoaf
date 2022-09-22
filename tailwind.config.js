/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        NeueMontrealThin: ["NeueMontrealThin"],
        NeueMontrealLight: ["NeueMontrealLight"],
        NeueMontrealRegular: ["NeueMontrealRegular"],
        NeueMontrealMedium: ["NeueMontrealMedium"],
        NeueMontrealBold: ["NeueMontrealBold"],
        NeueMontrealBook: ["NeueMontrealBook"],
        
      },
      fontSize: {
        "10xl": "12rem",
        "11xl": "11rem",
        "12xl": "12rem",
        "13xl": "13rem",
        "14xl": "14rem",
        "15xl": "15rem",
        "16xl": "16rem",
        "18xl": "18rem",
        "20xl": "20rem",
        "30xl": "30rem",
      },
    },
  },
  plugins: [],
};
