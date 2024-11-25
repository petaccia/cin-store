"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ErrorPage({ statusCode }) {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white relative">
      {/* Image d'erreur avec figure et figcaption */}
      <figure className="absolute inset-0 z-0">
        <Image
          src="/assets/error/error.jpg"
          alt="Erreur"
          layout="fill"
          objectFit="cover" 
          priority
        />
        <figcaption className="absolute inset-0 z-10 flex items-center justify-center text-center text-white bg-black bg-opacity-60 px-4 py-2">
          Une erreur est survenue
        </figcaption>
      </figure>

      {/* Message d'erreur */}
      <div className="relative z-20 text-center px-4 py-6 bg-black bg-opacity-70 rounded-lg">
        <h1 className="text-6xl font-extrabold mb-4 text-white">
          {statusCode ? `Erreur ${statusCode}` : 'Erreur'}
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          {statusCode
            ? `Une erreur ${statusCode} est survenue sur le serveur.`
            : "Une erreur s'est produite sur le client."}
        </p>

        <button
          onClick={() => router.push('/')}
          className="mt-6 px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-lg transition duration-300"
        >
          Retour à l'accueil
        </button>
      </div>
    </div>
  );
}
