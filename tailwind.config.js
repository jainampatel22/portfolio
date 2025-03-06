/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    extend: {
      fontFamily:{
        supply:['Supply-Bold'],
        roboto:['Roboto-Mono'],
        montreal:['Montreal-Bold'],
        montrealMedium:['montreal-medium'],
        montrealLight:['NeueMontreal-Light']
      }
    },
  },
  plugins: [],
}