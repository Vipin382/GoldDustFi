const { url } = require("inspector");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',   
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        coin: "url('coin.jpg')",
        banking: "url('banking.jpg')",
        gamble: "url('gamble.jpg')",
        phone: "url('phone.jfif')",
        money: "url('money.jpg')",
      },
    },
    screens: {
      xsm: "412px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      NunitoBold: ["Nunito-Bold", "sans-serif"],
      NunitoRegular: ["Nunito-Regular", "sans-serif"],
      RobotoRegular: ["Roboto-Regular", "sans-serif"],
      RobotoBold: ["Roboto-Bold", "sans-serif"],
      RalewaySemiBold: ["Raleway-SemiBold", "sans-serif"],
      RobotoMedium: ["Roboto-Medium", "sans-serif"],
      RalewayBold: ["Raleway-Bold", "sans-serif"],
      RalewayMedium: ["Raleway-Medium", "sans-serif"],
      RalewayRegular: ["Raleway-Regular", "sans-serif"],
    },
  },
  plugins: [],
};
