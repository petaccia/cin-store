import React from 'react'
import SearchSidebarMovies from '../../../components/movies/moviesSearch/SearchSidebarMovies';
import fetchMoviesFromAPI from '@/utils/moviesClient';

const MoviesSearchLayout = async ({ children }) => {
    const {genres} = await fetchMoviesFromAPI('/genre/movie/list');
  return (
    <div>
        <SearchSidebarMovies genres={genres} />
        {children}
    </div>
  )
}

export default MoviesSearchLayout