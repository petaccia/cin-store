import Link from "next/link";
import Image from "next/image";
import fetchMoviesFromAPI from "@/lib/api/apiClentTmdb";

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
                    {results.slice(0, 6).map((movie) => (
                        <Link href={`/movies/${movie.id}`} key={movie.id}>
                            <div className="flex flex-col items-center text-center">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w200${movie.poster_path}`}
                                    alt={movie.title}
                                    width={150}
                                    height={225}
                                    className="rounded-lg transition-transform duration-200 hover:scale-105"
                                />
                                <h3 className="max-w-[150px] text-lg font-medium text-text-primary shadow-text mt-2">
                                    {movie.title}
                                </h3>
                            </div>
                        </Link>
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
