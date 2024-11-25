'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Custom404() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white">
      {/* Image de fond */}
      <div className="absolute inset-0">
        <Image
          src="/assets/error/404.jpg" // Chemin vers l'image
          alt="Erreur 404"
          layout="fill"
          objectFit="cover"
          priority
        />
        {/* Overlay sombre pour améliorer la lisibilité */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      {/* Contenu superposé */}
      <div className="relative z-10 text-center max-w-xl px-4">
        <h1 className="text-9xl font-extrabold text-white drop-shadow-lg">
          404
        </h1>
        <p className="mt-6 text-2xl text-gray-200 drop-shadow-md">
          Oups ! La page que vous cherchez semble introuvable.
        </p>
        <button
          onClick={() => router.push('/')}
          className="mt-8 px-8 py-4 bg-red-600 hover:bg-red-700 text-white text-lg font-semibold rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
        >
          Retour à l'accueil
        </button>
      </div>
    </div>
  );
}
