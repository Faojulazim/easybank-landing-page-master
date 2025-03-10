/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        DarkBlue: "hsl(233, 26%, 24%)",
        LimeGreen: "hsl(136, 65%, 51%)",
        BrightCyan: "hsl(192, 70%, 51%)",
        GrayishBlue: "hsl(233, 8%, 62%)",
        LightGrayishBlue: "hsl(220, 16%, 96%)",
        VeryLightGray: "hsl(0, 0%, 98%)",
        White: "hsl(0, 0%, 100%)",
      },

      fontFamily: {
        PublicSans: ["Public Sans", "sans-serif"],
      },
      screens: {
        375: "375px",
        425: "425px",
        550: "550px",
        800: "800px",
      },
      backgroundImage: {
        "gradient-24": "linear-gradient(80deg, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
