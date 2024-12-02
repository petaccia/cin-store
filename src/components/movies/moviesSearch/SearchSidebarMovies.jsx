"use client"
import React from 'react'
import { useSelectedLayoutSegment, useParams } from 'next/navigation'
import Custom404 from '@/app/not-found';

const SearchSidebarMovies = ({ genres }) => {
    const segment = useSelectedLayoutSegment();
    const { id } = useParams();
   
    // Fonction pour le titre des films
    const getSidebarTitle = () => {
        if (!segment) {
          return 'Tous les films';
        }

        const genre = genres.find((genre) => genre.id === Number(id));
        if (!genre) {
            // retourner la page 404
            return Custom404;
        }

        return genre.name;
    };

    const title = getSidebarTitle();

  return (
    <div className="w-1/4">
        <h1 className="text-2xl lg:text-3xl font-bold text-text-primary mb-6 text-center">Tous les films d' 
             <span className="text-text-highlight"> {title} </span></h1>
    </div>
  )
}

export default SearchSidebarMovies