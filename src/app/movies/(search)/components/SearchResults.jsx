import MediaCard from '@/components/common/cards/MediaCard';
import fetchMoviesFromAPI from '../../../../lib/api/apiClentTmdb';

const SearchResults = async ({ searchParams, genreId }) => {
  const { genres } = await fetchMoviesFromAPI('/genre/movie/list');
  const { results } = await fetchMoviesFromAPI(`/discover/movie`, {
    with_genres: genreId,
    sort_by: searchParams.sort,
    'release_date.gte': searchParams["release_date.gte"],
    'release_date.lte': searchParams["release_date.lte"],
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-20">
      {results
        .filter((movie) => movie.backdrop_path)
        .map((movie) => (
          <MediaCard 
            key={movie.id} 
            media={movie} 
            genres={genres}
          />
        ))}
    </div>
  )
}

export default SearchResults