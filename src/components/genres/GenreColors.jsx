const getGenreColor = (genre) => {
  // Use toLowerCase to handle case variations
  const normalizedGenre = genre?.toLowerCase() || '';

  // Switch statement to return Tailwind background color classes
  switch (normalizedGenre) {
    case 'action': return 'bg-red-600';
    case 'aventure': return 'bg-green-600';
    case 'animation': return 'bg-blue-600';
    case 'comédie': return 'bg-yellow-600';
    case 'drame': return 'bg-purple-600';
    case 'horreur': return 'bg-black';
    case 'science-fiction': return 'bg-cyan-600';
    case 'romance': return 'bg-pink-600';
    case 'thriller': return 'bg-orange-600';
    case 'fantastique': return 'bg-indigo-600';
    case 'famille': return 'bg-teal-600';
    case 'documentaire': return 'bg-gray-600';
    default: return 'bg-slate-600';
  }
};

export default getGenreColor;