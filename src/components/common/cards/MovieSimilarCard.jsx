import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const MovieSimilarCard = ({ movie }) => {
  return (
    <div className="flex flex-col items-center max-w-48 bg-background-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
       <Link href={`/movies/${movie.id}`}>
       <figure className="relative w-48 h-64">
          <Image
            src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w1280${movie.backdrop_path}`}
            alt={movie.title}
            fill
            sizes="100vw"
            className=" object-cover rounded-t-lg"
            priority
          />
        </figure>
        <h2 className=" W-full font-bold  Poppins p-3 text-white text-center mt-2">{movie.title}</h2>
        
       
       </Link> 
    </div>
  )
}

export default MovieSimilarCard