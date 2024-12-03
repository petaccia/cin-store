import fetchMoviesFromAPI from '@/lib/api/apiClentTmdb';
import Link from 'next/link';
import React from 'react';

export default async function Genres() {
  const { genres } = await fetchMoviesFromAPI('/genre/movie/list');
  return (
    <div className="w-full max-w-screen-lg mx-auto">
      {/* Titre de la section */}
      <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6 text-center">
        Parcourir les genres
      </h2>

      {/* Liste des genres */}
      <div className="flex flex-col gap-3 bg-background-body rounded-lg p-4 max-h-96 overflow-y-auto shadow-lg">
        {genres.map((genre) => (
          <div
            key={genre.id}
            className="group hover:bg-background-hover transition-all duration-200 rounded-md p-2"
          >
            <Link
              href={`movies/genres/${genre.id}`}
              className="block text-lg font-medium text-text-primary group-hover:text-text-highlight transition-all duration-200"
            >
              {genre.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
