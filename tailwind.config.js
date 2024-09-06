/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
      colors: {
        "primary-text": "#403F3F",
        "secondary-text": "#706F6F",
        "button-color": "#D72050",
        "bg-color": "#F3F3F3",
        "card-bg": "#05001DCC",
        "news-bg": "#F3F3F3"
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

// const withMT = require("@material-tailwind/react/utils/withMT");
 
// module.exports = withMT({
//   content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// });