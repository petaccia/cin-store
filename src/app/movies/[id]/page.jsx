import MovieDetails from "@/components/movies/movieDetails/MovieDetails";
import MoviesSimilar from "@/components/movies/movies-similar/MoviesSimilar";
import fetchMoviesFromAPI from "@/lib/api/apiClentTmdb";
import { Suspense } from "react";

export default async function MoviesIdPage({ params }) {
    const { id } = params;
    const movie = await fetchMoviesFromAPI(`/movie/${id}`);
    const credits = await fetchMoviesFromAPI(`/movie/${id}/credits`);

    if (!movie.original_title) {
        return <Custom404 />;
    }

    return (
        <div>
            <MovieDetails movie={movie} credits={credits} />
            <Suspense fallback={<p>Chargement...</p>}>
                <MoviesSimilar movieId={id} />
            </Suspense>
        </div>
    );
}
