/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        body: ['"DM Sans", sans-serif'],
      },
      spacing: {
        30: "7.5rem", // 120px
      },
      colors: {
        "regal-blue": "#4287F6",
        body: "#0C0C0C",
        "border-1": "#2C2C2C",
        skyline: "#3F3261",
        "sky-1": "#4186F3",
      },
      fontSize: {
        "5.5xl": "3.5rem", //56px
      },
      lineHeight: {
        12: "3rem", //48px
      },
    },
  },
  plugins: [],
};
