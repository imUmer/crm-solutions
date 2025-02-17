// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8',   
        secondary: '#EF4444',   
      },
      spacing: {
        128: '32rem',  
      },
    },
  },
  plugins: [],
};
