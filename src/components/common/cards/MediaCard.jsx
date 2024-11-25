import Image from 'next/image';

export default function MediaCard() {
  return (
    <article className="max-w-sm rounded overflow-hidden shadow-lg bg-darkSecondary">
    <figure className="relative h-48 w-full">
      <Image
        src="/assets/films/arcane.jpg"
        alt="Arcane - League of Legends"
        layout="fill"
        objectFit="cover"
      />
    </figure>
    <section className="px-6 py-4">
      <h2 className="font-bold text-xl mb-2 text-textLight">Arcane: League of Legends</h2>
      <p className="text-textDark text-base">
        Découvrez le monde d'Arcane, un anime inspiré de l'univers de League of Legends. Plongez dans cette série captivante.
      </p>
    </section>
    <div className="px-6 pt-4 pb-2">
      <span className="inline-block bg-accent rounded-full px-3 py-1 text-sm font-semibold text-textDark mr-2 mb-2">
        #Action
      </span>
      <span className="inline-block bg-accent rounded-full px-3 py-1 text-sm font-semibold text-textDark mr-2 mb-2">
        #Animation
      </span>
      <span className="inline-block bg-accent rounded-full px-3 py-1 text-sm font-semibold text-textDark mr-2 mb-2">
        #2021
      </span>
    </div>
  </article>
  );
}
