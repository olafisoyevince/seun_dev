/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ClashDisplayRegular: "ClashDisplayRegular",
      },
      fontSize: {
        headline: [
          "60px",
          {
            lineHeight: "64px",
            letterSpacing: "-1.21px",
            fontWeight: 300,
          },
        ],
        "headline-1": [
          "45px",
          {
            lineHeight: "58px",
            letterSpacing: "-1.21px",
            fontWeight: 300,
          },
        ],
        "headline-2": [
          "24px",
          {
            lineHeight: "32px",
            letterSpacing: "-0.1px",
            fontWeight: 400,
          },
        ],
        "headline-3": [
          "20px",
          {
            lineHeight: "28px",
            letterSpacing: "-0.1px",
            fontWeight: 300,
          },
        ],
        body: [
          "14px",
          {
            lineHeight: "24px",
            fontWeight: 400,
            letterSpacing: "-0.12px",
          },
        ],
        "body-note": [
          "16px",
          {
            lineHeight: "24px",
            fontWeight: 400,
            letterSpacing: "0.12px",
          },
        ],
        "body-0": [
          "14px",
          {
            lineHeight: "24px",
            fontWeight: 600,
            letterSpacing: "-0.12px",
          },
        ],
        "body-1": [
          "14px",
          {
            lineHeight: "20px",
            fontWeight: 400,
            letterSpacing: "-0.12px",
          },
        ],
        "body-2": [
          "12px",
          {
            lineHeight: "22px",
            fontWeight: 400,
            letterSpacing: "-0.12px",
          },
        ],
        "body-3": [
          "11px",
          {
            lineHeight: "15px",
            fontWeight: 600,
            letterSpacing: "0.82px",
          },
        ],
        title: [
          "12px",
          {
            lineHeight: "15px",
            fontWeight: 600,
            letterSpacing: "0.41px",
          },
        ],
        "title-1": [
          "18px",
          {
            lineHeight: "26px",
            fontWeight: 500,
            letterSpacing: "-0.2px",
          },
        ],
        button: [
          "15px",
          {
            lineHeight: "23px",
            fontWeight: 500,
            letterSpacing: "-0.12px",
          },
        ],
      },
    },
  },
  plugins: [],
};
