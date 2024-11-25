import Image from 'next/image';

export default function MediaCard() {
  return (
    <article className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-gray-800 transform transition duration-300 hover:scale-105 hover:shadow-xl">
      {/* Image du film */}
      <figure className="relative h-56 w-full">
        <Image
          src="/assets/films/arcane.png"  // Remplace cette source par l'image d'Arcane
          alt="Arcane - League of Legends"
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </figure>

      {/* Contenu principal */}
      <section className="px-6 py-4">
        <h2 className="font-bold text-2xl text-white mb-2 truncate">
          Arcane - League of Legends
        </h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          Arcane est une série animée qui explore l'origine des célèbres personnages de "League of Legends". Plongez dans un monde rempli de tensions, de trahisons et de magie.
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
    </article>
  );
}
