/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: { // Adding colors to the platform
        primary: "#FFFFFF",
        secondary: "#000000",
        baseprimary: "#1e90ff",
        basesecondary: "#D3D3D3",
        baseextra1: "#0C090A",
        baseextra2: "#fcfcfc",
        baseextra3: "#f0f0f0",
        baseextra4: "#02203c",
        baseextra5: "#171614"
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        russoone: ['Russo One', 'sans-serif'],
        kdamThmorPro: ['Kdam Thmor Pro', 'sans-serif'],
        lorniasolid: ['Londrina Solid', 'sans-serif'],
        bebasneue: ['Bebas Neue', 'sans-serif'],
        bricolagegrotesque: ['Bricolage Grotesque', 'sans-serif'],
        kanit: ['Kanit', 'sans-serif'],
        ibmplexsans: ['IBM Plex Sans', 'sans-serif'],
      },
      screens: {
        'sms': { 'min': '10px','max': '639px' }, // screens <= 640px
        'mds': { 'min': '639px','max': '1023px'}, // screens <= 1023px
        'lgs': { 'min': '1023px','max': '100000px'} // screen <= 1536px
      },
      inset: {
        '5': '5px',
      }
    },
  },
  plugins: [],
};

export default config; // Use ES module export
