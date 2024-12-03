import React from 'react'
import SearchSidebarMovies from '@/components/movies/moviesSearch/SearchSidebarMovies';
import fetchMoviesFromAPI from '../../../lib/api/apiClentTmdb';

const MoviesSearchLayout = async ({ children }) => {
    const {genres} = await fetchMoviesFromAPI('/genre/movie/list');
    
    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <aside className="lg:col-span-1">
                    <SearchSidebarMovies genres={genres} />
                </aside>
                <section className="lg:col-span-3">
                    {children}
                </section>
            </div>
        </div>
    )
}

export default MoviesSearchLayout
