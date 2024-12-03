import MediaCard from '@/components/common/cards/MediaCard';
import fetchMoviesFromAPI from '@/utils/moviesClient';
import React from 'react'

const SearchResults = async ({ searchParams, genreId }) => {
  const { results } = await fetchMoviesFromAPI(`/discover/movie`, [
    { key: 'with_genres', value: genreId },
    { key: 'sort_by', value: searchParams.sort },
    { key: 'release_date.gte', value: searchParams["release_date.gte"] },
    { key: 'release_date.lte', value: searchParams["release_date.lte"] },
  ]);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto my-16">
        {results.filter((movie) => movie.poster_path)
        .map((movie) => (
          <MediaCard key={movie.id} media={movie} />
        ))}
    </div>
  )
}

export default SearchResults