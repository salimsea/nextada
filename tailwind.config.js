/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Source Sans Pro", "ui-sans-serif", "system-ui"],
        mono: ["IBM Plex Mono", "ui-monospace"],
      },
      colors: {
        yellow: {
          50: "#FFFCE1",
          100: "#FEF9CD",
          200: "#FEF5A4",
          300: "#FDF07C",
          400: "#FDEC54",
          500: "#FCE72D",
          600: "#ECD503",
          700: "#B09F02",
          800: "#746802",
          900: "#3C3601",
        },
      },
    },
  },
  plugins: [
    require("daisyui"),
    plugin(function ({ addUtilities }) {
      const utilities = {
        ".bg-hero": {
          // "background-color": "red",
          background: "#eb01a5",
          "background-image":
            "url('https://salimseal.com/_next/static/media/img-bglayer.e95ef302.png')",
          "background-image":
            "url('https://salimseal.com/_next/static/media/img-bglayer.e95ef302.png'), linear-gradient(#eb01a5, #d13531);",
        },
      };

      addUtilities(utilities);
    }),
  ],

  daisyui: {
    styled: true,
    themes: [
      {
        mytheme: {
          primary: "#57534e",
          secondary: "#F000B8",
          accent: "#37CDBE",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
