// components/MediaCard.jsx
import getGenreColor from '@/components/genres/GenreColors';
import Image from 'next/image';
import Link from 'next/link';
import VoteAverage from '../vote-average/VoteAverage';

export default function MediaCard({ media, isPopular, genres }) {
  // Fonction pour formater la date
  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('fr-FR', options);
  };

 
  return (
    <article className="w-[300px] h-[400px] relative bg-background-header/80 backdrop-blur-md rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-accent-primary/20">
      <Link href={`/movies/${media.id}`} passHref>
        {/* Titre "Films populaires" */}
        {isPopular && (
          <div className="absolute top-0 left-0 bg-red-600 text-white px-3 py-1 z-10 rounded-br-lg text-xs font-semibold">
            Films populaires
          </div>
        )}

        {/* Image du film */}
        <figure className="relative w-full h-48">
          <Image
            src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}/w500${media.backdrop_path}`}
            alt={media.title}
            fill
            className="rounded-t-lg object-cover"
            priority
          />
        </figure>

        {/* Contenu principal */}
        <section className="px-4 py-3">
          <h2 className="font-semibold text-lg text-white mb-2 truncate">
            {media.title}
          </h2>
          <p className="text-gray-400 text-xs leading-relaxed truncate">
            {media.overview}
          </p>

          {/* Affichage de la note moyenne */}
          <VoteAverage vote={media.vote_average} className="absolute text-text-primary top-44 right-4 rounded-lg bg-background-header shadow-md shadow-accent-primary/20 p-2" />
          {/* Affichage de la date de sortie */}
          <div className="mt-2 text-gray-400 text-xs">
            <span>{formatDate(media.release_date)}</span>
          </div>
        </section>

        {/* Tags dynamiques des genres */}
        <section className="px-4 py-2 flex flex-wrap gap-2">
          {media.genre_ids?.slice(0, 4).map((genreId) => {
            // Trouver le genre correspondant à l'ID
            const genre = genres?.find(g => g.id === genreId);
            return genre ? (
              <span 
                key={genreId}
                className={`inline-block ${getGenreColor(genre.name)} text-white rounded-full px-3 py-1 text-xs font-medium`}
              >
                {genre.name}
              </span>
            ) : null;
          })}
        </section>
      </Link>
    </article>
  );
}
