import fetchMoviesFromAPI from '../../../utils/moviesClient';
import MediaCard from '../../common/cards/MediaCard';

export default async function PopularMovies() {
  try {
    // Appel de l'API pour récupérer les films populaires
    const data = await fetchMoviesFromAPI('/movie/popular');
    const genresData = await fetchMoviesFromAPI('/genre/movie/list');

    // Vérifie si la data est bien un tableau de films sinon retourne un tableau vide
    const movies = Array.isArray(data.results) ? data.results.slice(0, 6) : [];
    const genres = genresData.genres || [];

    // Ajout des noms de genres aux films
    const moviesWithGenres = movies.map((movie) => {
      const movieGenres = movie.genre_ids.map(
        (genreId) => genres.find((genre) => genre.id === genreId)?.name || 'Inconnu'
      );
      return { ...movie, genres: movieGenres };
    });

    return (
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mt-4 justify-items-center">
        {moviesWithGenres.map((movie) => (
          <div key={movie.id}>
            {/* Passe les propriétés spécifiques du film au composant MediaCard */}
            <MediaCard media={movie} genres={genres} isPopular />
          </div>
        ))}
      </section>
    );
  } catch (error) {
    console.error('Erreur lors de la récupération des films populaires:', error);
    return (
      <p className="text-center text-red-500">
        Une erreur s'est produite lors du chargement des films populaires.
      </p>
    );
  }
}
