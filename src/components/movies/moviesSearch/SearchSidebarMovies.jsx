"use client"
import React from 'react'
import { useSelectedLayoutSegment, useParams } from 'next/navigation'
import Custom404 from '@/app/not-found'
import FormsearchSidebarMovies from './formSearchSidebarMovies/FormsearchSidebarMovies'

const SearchSidebarMovies = ({ genres }) => {
    const segment = useSelectedLayoutSegment();
    const { id } = useParams();
   
    const getSidebarTitle = () => {
        if (!segment) {
            return 'Tous les films';
        }

        const genre = genres?.find((genre) => genre.id === Number(id));
        if (!genre) {
            return Custom404;
        }

        return genre.name;
    };

    const title = getSidebarTitle();
    
    if (title === Custom404) {
        return <Custom404 />;
    }

    return (
        <div className="w-full flex flex-col items-center justify-center mt-16">
            <header className="w-full flex flex-col items-center justify-center mr-40"> 
                <h1 className="text-center text-2xl lg:text-3xl font-bold text-text-primary ">
                    Films de la catégorie{' '}
                    <span className="text-text-highlight">
                        {title}
                    </span>
                </h1>
            </header>
            
            <section className='w-full  mr-40'>
                <FormsearchSidebarMovies />
            </section>
        </div>
    )
}

export default SearchSidebarMovies
