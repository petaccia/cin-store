"use client";
import Image from 'next/image';
import getGenreColor from '@/components/genres/GenreColors';

const MovieDetails = ({ movie, credits }) => {
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

      {/* Fond sombre amélioré */}
      <div className="absolute top-0 left-0 right-0 bottom-0 z-10 bg-gradient-to-b from-black/70 via-black/50 to-black/70 p-8">
        <div className="max-h-[500px] flex flex-col gap-8">
          {/* Contenu principal avec arrière-plan semi-transparent */}
          <div className="bg-black/60 p-6 rounded-lg">
            {/* Titre, Note, Date et Durée */}
            <div className="flex flex-col gap-8 mb-8">
              <div className="flex justify-between items-center">
                <h1 className="text-4xl font-bold text-text-primary leading-tight mb-2 shadow-text">
                  {movie.title}
                </h1>
                <div className="flex items-baseline">
                  <span className="text-accent-primary text-3xl font-bold shadow-text">
                    {Math.round(movie.vote_average * 10) / 10}
                  </span>
                  <span className="text-text-secondary ml-2 shadow-text">/ 10</span>
                </div>
              </div>

              {/* Genres */}
              <div className="flex flex-wrap gap-2 mb-4 text-text-primary">
                {movie.genres?.map((genre) => (
                  <span
                    key={genre.id}
                    className={`${getGenreColor(genre.name)} px-4 py-2 rounded-full text-sm font-medium shadow-text`}
                  >
                    {genre.name}
                  </span>
                ))}
              </div>

              {/* Résumé */}
              <div className="w-full max-w-xl">
                <p className="text-text-secondary leading-relaxed mb-8 shadow-text">{movie.overview}</p>
              </div>

              {/* Date et Durée */}
              <div className="flex justify-between text-text-primary">
                <div>
                  <h3 className="text-lg font-medium mb-2 shadow-text">Date de sortie</h3>
                  <p className="text-text-secondary shadow-text">{formatDate(movie.release_date)}</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 shadow-text">Durée</h3>
                  <p className="text-text-secondary shadow-text">{movie.runtime} minutes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Acteurs principaux */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-background-body/80 backdrop-blur-md rounded-lg p-8">
        <h2 className="text-2xl text-center font-bold text-text-primary mb-4 shadow-text">Acteurs principaux</h2>
        <div className="flex justify-center gap-8 overflow-x-auto">
          {credits.cast.slice(0, 6).map((actor) => (
            <div key={actor.id} className="flex flex-col items-center text-center">
              <Image
                src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w200${actor.profile_path}`}
                alt={actor.name}
                width={80}
                height={80}
                className="rounded-full mb-2"
              />
              <h3 className="text-lg font-medium text-text-primary shadow-text">{actor.name}</h3>
              <p className="text-text-secondary shadow-text">{actor.character}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default MovieDetails;