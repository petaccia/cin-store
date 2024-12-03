import React from 'react'
import SearchSidebarMovies from '../../../components/movies/moviesSearch/SearchSidebarMovies';
import fetchMoviesFromAPI from '@/lib/api/apiClentTmdb';

const MoviesSearchLayout = async ({ children }) => {
    const {genres} = await fetchMoviesFromAPI('/genre/movie/list');
  return (
    <div className="flex w-full mx-auto">
        <SearchSidebarMovies genres={genres} />
        {children}
    </div>
  )
}

export default MoviesSearchLayout