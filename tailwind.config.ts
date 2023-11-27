import type { Config } from 'tailwindcss'

const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Sen", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        brown: "#603D1D",
        yellow: "#FFC670"
      },
      screens: {
        lg: "1250px",
        mobile: { max: "639px" }, //sm 
        tablet: { max: "1249px" }, //md
      },
    },
  },
  plugins: [],
}
export default config
