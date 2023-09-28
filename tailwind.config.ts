import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        lg: "1250px",
        mobile: { max: "639px" },
        tablet: { max: "1250px" },
      },
    },
  },
  plugins: [],
}
export default config
