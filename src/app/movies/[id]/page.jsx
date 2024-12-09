import Custom404 from "@/app/not-found";
import MovieDetails from "@/components/movies/movieDetails/MovieDetails";
import fetchMoviesFromAPI from "../../../lib/api/apiClentTmdb";

export const dynamic = 'force-dynamic';
export const revalidate = 3600;

export default async function MoviesIdPage({ params, searchParams }) {
    const { id } = await params;
    const movie = await fetchMoviesFromAPI(`/movie/${id}`);
    const credits = await fetchMoviesFromAPI(`/movie/${id}/credits`);

    if (!movie.original_title) {
        return <Custom404 />;
    }

    return <MovieDetails 
        movie={movie} 
        credits={credits}
        />;
}