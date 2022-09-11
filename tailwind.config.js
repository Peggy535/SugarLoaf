/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js}", "./components/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Cirka: ["Cirka"],
        EditorialNew: ["EditorialNew"],
        Eiko: ["Eiko"],
        Hatton: ["Hatton"],
        Migra: ["Migra"],
        NeueWorld: ["NeueWorld"],
        PangramSans: ["PangramSans"],
        Woodland: ["Woodland"],
        Charlevoix: ["Charlevoix"],
        NeueMontreal: ["NeueMontreal"],
        ObjectSans: ["ObjectSans"],
        PierSans: ["PierSans"],
        RightGrotesk: ["RightGrotesk"],
        Telegraf: ["Telegraf"],
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
