module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#535da1',       
        secondary: '#ff6b6b',     
        dark: '#2d3748',          
        light: '#f8f9fa',        
        border: '#e2e8f0',        
        section: '#f7fafc',       
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'], 
      },
      fontSize: {
        h1: '3.5rem',
        h2: '2.5rem',
        h3: '2rem',
        h4: '1.5rem',
        h5: '1.25rem',
        h6: '1rem',
        p: '1rem',
        menu: '0.875rem',
        copyright: '0.75rem',
      },
      borderRadius: {
        small: '0.25rem',
        medium: '0.5rem',
        large: '1rem',
      },
      spacing: {
        120: '30rem', 
      },
    },
  },
  plugins: [],
}