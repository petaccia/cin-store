import fetchMoviesFromAPI from '../../lib/api/apiClentTmdb';
import Link from 'next/link';

export default async function Genres() {
  const { genres } = await fetchMoviesFromAPI('/genre/movie/list');

  return (
    <div className="w-full max-w-screen-lg mx-auto">
      <h2 className="text-2xl lg:text-3xl font-bold text-text-primary mb-6 text-center">
        Catégories
      </h2>

      <div className="flex flex-col gap-2 bg-background-header/80 backdrop-blur-md rounded-lg p-4 max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-accent-primary scrollbar-track-background-body">
        {genres.map((genre) => (
          <Link
            key={genre.id}
            href={`movies/genres/${genre.id}`}
            className="block p-3 rounded-md bg-background-body/50 hover:bg-background-hover/50 transition-all duration-300 group"
          >
            <span className="text-lg font-medium text-text-primary group-hover:text-accent-primary transition-colors duration-300">
              {genre.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}