import fetchMoviesFromAPI from '../../utils/moviesClient';
import MediaCard from '../common/cards/MediaCard';

export default async function PopularMovies() {
    try {
        // Appel de l'API pour récupérer les films populaires
        const data = await fetchMoviesFromAPI('/movie/popular');
        
        // Vérifie si la data est bien un tableau de films sinon retourne un tableau vide
        const movies = Array.isArray(data.results) ? data.results : [];
        
        // Retourne les 6 premiers films populaires
        const topMovies = movies.slice(0, 6);

        return (
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 mt-4 justify-items-center ">
                {topMovies.map((movie) => (
                    <div key={movie.id}>
                        {/* Passe les propriétés spécifiques du film au composant MediaCard */}
                        <MediaCard movie={movie} />
                    </div>
                ))}
            </section>
        );
    } catch (error) {
        // En cas d'erreur, on log l'erreur et retourne un tableau vide
        console.error('Erreur lors de la récupération des films populaires:', error);
        return [];
    }
}
