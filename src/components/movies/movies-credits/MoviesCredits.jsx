"use client";
import Image from 'next/image';

const MovieCredits = ({ credits }) => {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-20 bg-background-body/80 backdrop-blur-md rounded-lg p-8">
      <h2 className="text-2xl text-center font-bold text-text-primary mb-4 shadow-text">
        Acteurs principaux
      </h2>
      <div className="flex justify-center gap-8 overflow-x-auto">
        {credits.cast.slice(0, 6).map((actor) => (
          <div key={actor.id} className="flex flex-col items-center text-center">
            <Image
              src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w200${actor.profile_path}`}
              alt={actor.name}
              width={100}
              height={100}
              className="rounded-full mb-2"
            />
            <h3 className="text-lg font-medium text-text-primary shadow-text">
              {actor.name}
            </h3>
            <p className="text-text-secondary shadow-text">{actor.character}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieCredits;
