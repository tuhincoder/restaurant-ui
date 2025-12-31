import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      // colors: {
      //   "dark-teal": "#114b57", // custom color name
      // },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"],
  },
};

// import daisyui from "daisyui";

// /** @type {import('tailwindcss').Config} */
// export default {
//   darkMode: "class",
//   content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
//   plugins: [daisyui],
//   daisyui: {
//     themes: ["light"], // 🔒 only light theme
//     darkTheme: "light", // fallback
//   },
// };
