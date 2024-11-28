import fetchMoviesFromAPI from '../../utils/moviesClient';

export default async function fetchPopularMovies () {
    try {
        const popularMovies = await fetchMoviesFromAPI('/movie/popular');
        console.log(popularMovies); 
    } catch (error) {
        console.error('Erreur lors de la récupération des films populaires:', error);
    }
};

fetchPopularMovies();
