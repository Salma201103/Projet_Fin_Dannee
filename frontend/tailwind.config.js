/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    container: {
      padding: {
        md: "10rem",//make things centered and apply only for medium sized screens and up 
      },
    },
  },
  plugins: [],
};
