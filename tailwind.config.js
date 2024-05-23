/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        mobile: "440px",
      },
      blur: {
        "2.5xl": "55px",
      },
      fontFamily: {
        body: ['"DM Sans", sans-serif'],
        ui: ['"Segoe UI", sans-serif'],
      },
      spacing: {
        18: "4.375rem", // 70px
        30: "7.5rem", // 120px
        62: "15.75rem", //252px
      },
      colors: {
        "regal-blue": "#4287F6",
        body: "#0C0C0C",
        "border-1": "#2C2C2C",
        skyline: "#3F3261",
        "sky-1": "#4186F3",
        folder: "#F1C159",
        "night-sky": "#292D34",
        "slate-tint": "#7C828D",
      },
      fontSize: {
        "extra-xs": "0.813rem", //17px
        "1.2xl": "1.063rem", //17px
        "1.5xl": "1.375rem", //22px
        "4.5xl": "2.5rem", //40px
        "5.5xl": "3.5rem", //56px
      },
      lineHeight: {
        12: "3rem", //48px
      },
      borderRadius: {
        "3.5xl": "2rem", //2px
        "4xl": "2.25rem", //36px
        "5xl": "2.5rem", //40px
      },
    },
  },
  plugins: [],
};
