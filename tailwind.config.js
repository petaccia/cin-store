/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs de fond principales
        background: {
          body: '#0A1F44',    // Bleu profond pour le fond principal
          header: '#1A2A56',  // Bleu clair pour le header
          card: '#2E3C74',    // Bleu foncé pour les cards de films
          hover: '#3A4B8C',   // Bleu plus clair pour les hovers
        },
        // Couleurs d'accent et interactives
        accent: {
          primary: '#FF6347',    // Rouge corail pour CTA principal
          secondary: '#FF7F50',  // Corail plus doux pour hover
        },
        // Couleurs de texte
        text: {
          primary: '#F5F5F5',    // Blanc cassé pour texte principal
          secondary: '#A9B4C2',  // Gris clair pour texte secondaire
          muted: '#8A9BAE',      // Gris bleuâtre pour texte tertiaire
          highlight: '#FFD700',  // Jaune doré pour attirer l'attention sur certains éléments
        },
        // Bordures
        border: '#4A5568',      // Gris bleuté pour les bordures
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
