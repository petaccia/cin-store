import Image from 'next/image';
import Link from 'next/link';

export default function MovieSearchResult({ movies }) {
  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('fr-FR', options);
  };

  return (
    <div className="mt-2 bg-background-header/80 backdrop-blur-md border border-border rounded-lg shadow-xl absolute w-full z-10 max-h-[400px] overflow-auto">
      {movies.map((movie) => (
        <Link
          key={movie.id}
          href={`/movies/${movie.id}`}
          passHref
          onMouseDown={(e) => e.preventDefault()}
          className="flex items-center p-4 transition-all duration-300 border-b border-border hover:bg-background-hover/50 group"
        >
          <div className="flex-shrink-0 relative overflow-hidden rounded-md">
            <Image
              src={movie.backdrop_path 
                ? `${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w500${movie.backdrop_path}`
                : '/images/placeholder.jpg'
              }
              alt={movie.title}
              width={100}
              height={60}
              className="object-cover rounded-md"
            />
          </div>

          <div className="ml-4 flex-grow min-w-0">
            <h3 className="font-semibold text-text-primary group-hover:text-accent-primary transition-colors duration-300 overflow-hidden text-ellipsis whitespace-nowrap">
              {movie.title}
            </h3>
            <p className="text-sm text-text-secondary mt-1">
              {movie.release_date ? formatDate(movie.release_date) : 'Date inconnue'}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
