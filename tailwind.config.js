/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts,tsx}"],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', 'cgs', 'mgs'],
  },
  theme: {
    extend: {
      colors: {
        primaryBg: "#101827"
      }
      ,spacing: {
        '100' :'600px'
      }
    },
  },
  plugins: [],
}

