/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#ccd0ff",

          "secondary": "#b2ffe6",

          "accent": "#8dd2ef",

          "neutral": "#241C30",

          "base-100": "#EEF4F7",

          "info": "#92C7E8",

          "success": "#71EAAD",

          "warning": "#CA850C",

          "error": "#F55F5C",
        },
      },
    ],
  },
  plugins: [require("daisyui")]
}
