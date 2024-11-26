import Image from 'next/image';
import Link from 'next/link';

export default function MediaCard({ mediaId}) {
  return (
    <article className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-gray-800 transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <Link href={`/movies/${mediaId}`}>
      
      {/* Image du film */}
      <figure className="relative h-56 w-full">
        <Image
          src="/assets/films/arcane.png"
          alt="Arcane - League of Legends"
          fill
          className="rounded-t-lg object-cover object-center"
        />
      </figure>

      {/* Contenu principal */}
      <section className="px-6 py-4">
        <h2 className="font-bold text-2xl text-white mb-2 truncate">
          Arcane - League of Legends
        </h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Arcane est une série animée qui explore l&#39;origine des célèbres personnages de &#34;League of  Legends&#34;. Plongez dans un monde rempli de tensions, de trahisons et de magie.
        </p>
      </section>

      {/* Tags */}
      <section className="px-6 pt-4 pb-4 flex flex-wrap gap-2">
        <span className="inline-block bg-blue-600 text-white rounded-full px-3 py-1 text-xs font-medium">
          #Animation
        </span>
        <span className="inline-block bg-purple-600 text-white rounded-full px-3 py-1 text-xs font-medium">
          #Netflix
        </span>
        <span className="inline-block bg-red-600 text-white rounded-full px-3 py-1 text-xs font-medium">
          #Aventure
        </span>
        <span className="inline-block bg-green-600 text-white rounded-full px-3 py-1 text-xs font-medium">
          #Action
        </span>
      </section>
      </Link>
    </article>
  );
}
