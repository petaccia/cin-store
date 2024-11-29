import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function MovieSearchResult({ movies }) {
  // Fonction pour formater la date
  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('fr-FR', options);
  };

  return (
    <div className="mt-2 bg-white border rounded-md shadow-lg absolute w-full z-10 max-h-60 overflow-auto">
      {movies.map((movie) => (
        <Link
          key={movie.id}
          href={`/movie/${movie.id}`}
          className="flex items-center py-4 px-2 transition ease-in-out duration-200 border-b border-background-header shadow-sm shadow-background-body group hover:bg-background-hover"
        >
          {/* Image du film */}
          <div className="flex-shrink-0">
            <Image
              src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}${movie.backdrop_path}`}
              alt={movie.title}
              width={90}
              height={50}
              className="rounded-md object-cover"
            />
          </div>

          {/* Informations du film */}
          <div className="ml-3">
            {/* Titre */}
            <p className="font-bold text-gray-800 text-sm truncate max-w-[200px] group-hover:text-white">
              {movie.title}
            </p>
            {/* Date */}
            <p className="text-xs text-gray-500 group-hover:text-yellow-400">
              {movie.release_date ? formatDate(movie.release_date) : 'Date inconnue'}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
