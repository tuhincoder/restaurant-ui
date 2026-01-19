import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "main-bg": "#051117",
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [],
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
