module.exports = {
  content: [
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          white: "#dddde6",
          dark: "#292929",
          darkalt: "#303030",
          lightgray: "#666666"
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
