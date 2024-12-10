import fetchMoviesFromAPI from "@/lib/api/apiClentTmdb";
import MovieSimilarCard from "@/components/common/cards/MovieSimilarCard";

const MoviesSimilar = async ({ movieId }) => {
    try {
        const { results } = await fetchMoviesFromAPI(`/movie/${movieId}/similar`);
        
        if (!results || results.length === 0) {
            return null;
        }

        return (
            <div className="p-8">
                <h2 className="text-2xl text-center font-bold text-text-primary mb-4 shadow-text">
                    Films similaires
                </h2>
                <div className="flex justify-center gap-8 overflow-x-auto">
                    {results
                        .filter((movie) => movie.backdrop_path)
                        .slice (0, 6)
                        .map((movie) => (
                        <MovieSimilarCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        );
    } catch (error) {
        console.error('Error fetching similar movies:', error);
        return null;
    }
};

export default MoviesSimilar;
