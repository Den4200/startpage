module.exports = {
  content: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      animation: {
        blink: "blink 1250ms ease-in-out infinite",
      },
      colors: {
        theme: {
          beige: "#eadbb2",
          dark: "#292929",
          darkalt: "#303030",
          gold: "#e2b714",
          lightgray: "#666666",
          white: "#dddde6",
        },
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
