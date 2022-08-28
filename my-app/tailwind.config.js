/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme")
const plugins = require('tailwindcss/plugin')

module.exports = {
  
  mode: "jit",
  plugins: [require('@tailwindcss/forms')],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      sans: ["Open Sans", ...fontFamily.sans],
      serif: ["Scope One", ...fontFamily.serif],
    },
    container: {
      screens: {
        sm: "100%",
        md: "450px",
        lg: "1024px",
        xl: "1264px",
      },
    },
    extend: {
      colors: {
        white: "#ffffff",
        black: "#000000",
        blue: {
          100: "#EDF5FC",
          200: "#D8ECFA",
          400: "#3399E1",
          500: "#2071BD",
          700: "#1B4C8D",
          900: "#152E5F"
        },
        gray: {
          900: "#1A202C",
          700: "#4A5468",
          500: "#A0AEC0",
          300: "#E2E8F0",
          100: "#F5F8FA"
        },
        green: {
          900: "#22543D",
          700: "#2B7E52",
          600: "#38A169",
          100: "#F0FFF4",
        },

        red: {
          900: "#882B2B",
          700: "#C53030",
          600: "#E53E3E",
          100: "#FFF5F5",
        },

        yellow: {
          700: "#F7B500",
          300: "#FFEAB0",
          200: "#FDF8E1",
          100: "#FFFCF4",
        },
        lime: {
          400:"#a3e635"
        }

      },
      fontSize: {
        'xs': '.75rem',
        'sm': '.875rem',
        'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        DEFAULT: '4px',
        'md': '0.375rem',
        'lg': '2rem',
        'full': '9999px',
        'large': '12px',
      },
      zIndex: {
        '001':'-1',
        '002':'-2',
        '003':'-3'
      }
    },
  },
}
