// components/MediaCard.jsx
import getGenreColor from '@/components/genres/GenreColors';
import Image from 'next/image';
import Link from 'next/link';

export default function MediaCard({ media, isPopular, genres }) {
  // Fonction pour formater la date
  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('fr-FR', options);
  };

  // Fonction pour arrondir le vote average à 1 décimal
  const roundVote = (vote) => {
    return Math.round(vote * 10) / 10;
  }

  return (
    <article className="relative max-w-xs rounded-lg overflow-hidden shadow-lg bg-gray-800 transform transition duration-300 hover:scale-105 hover:shadow-xl">
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
            src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_BASE_PATH}${media.backdrop_path}`}
            alt={media.title}
            width={400}
            height={225}
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
          <div className="flex items-center mt-2">
            <div className="text-yellow-400">{roundVote(media.vote_average)}</div>
            <span className="ml-2 text-gray-300 text-xs"> / 10</span>
          </div>

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
