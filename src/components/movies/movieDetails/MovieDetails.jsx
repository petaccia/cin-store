import Image from 'next/image';
import getGenreColor from '@/components/genres/GenreColors';

const MovieDetails = ({ movie }) => {
  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('fr-FR', options);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image
        src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/original${movie.backdrop_path}`}
        alt={movie.title}
        fill
        sizes="100vw"
        quality={100}
        className="object-cover z-0"
        priority
      />

      <div className="absolute inset-0 z-10">
        <div className="h-full flex flex-col justify-end">
          <div className="w-full bg-gradient-to-t from-background-header/95 via-background-header/80 to-transparent backdrop-blur-sm p-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-8 mb-4">
                <h1 className="text-4xl font-bold text-text-primary leading-tight">
                  {movie.title}
                </h1>
                <div className="flex items-baseline">
                  <span className="text-accent-primary text-3xl font-bold">
                    {Math.round(movie.vote_average * 10) / 10}
                  </span>
                  <span className="text-text-secondary ml-2">/ 10</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-4 text-text-primary">
                {movie.genres?.map((genre) => (
                  <span
                    key={genre.id}
                    className={`${getGenreColor(genre.name)} px-3 py-1 rounded-full text-sm font-medium`}
                  >
                    {genre.name}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <p className="text-text-secondary leading-relaxed"> 
                  {movie.overview}
                </p>

                <div className="flex gap-8">
                  <div>
                    <h3 className="text-lg font-medium text-text-primary mb-2">Date de sortie</h3>
                    <p className="text-text-secondary">{formatDate(movie.release_date)}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-text-primary mb-2">Durée</h3>
                    <p className="text-text-secondary">{movie.runtime} minutes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
