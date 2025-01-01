/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "rgba(255, 255, 255, 0.15)",
          "200": "rgba(16, 16, 16, 0.8)",
          "300": "rgba(255, 255, 255, 0.8)",
          "400": "rgba(16, 16, 16, 0.5)",
          "500": "rgba(0, 12, 19, 0.6)",
        },
        yellow: "#f3f300",
        orange: "#ee930e",
      },
      spacing: {},
      fontFamily: {
        rajdhani: "Rajdhani",
      },
    },
    fontSize: {
      lgi: "1.188rem",
      lg: "1.125rem",
      base: "1rem",
      "11xl": "1.875rem",
      "5xl": "1.5rem",
      "27xl": "2.875rem",
      inherit: "inherit",
    },
    screens: {
      mq1800: {
        raw: "screen and (max-width: 1800px)",
      },
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
