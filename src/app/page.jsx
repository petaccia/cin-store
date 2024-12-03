import React from "react";
import PopularMovies from "@/components/movies/popular/PopularMovies";
import Genres from "@/components/genres/Genres";

// Revalidation toutes les 24 heures
export const revalidate = 86400;

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* En-tête */}
      <header className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-text-primary leading-tight mb-8">
          Découvrez les meilleurs films
        </h1>
        <p className="text-xl text-text-secondary mb-20">
          Explorez notre sélection de films populaires et trouvez votre prochain coup de cœur
        </p>
        <h2 className="text-3xl sm:text-4xl font-semibold text-text-highlight">
          Films populaires
        </h2>
      </header>

      {/* Contenu principal */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Barre latérale des genres */}
        <aside className="lg:col-span-1 bg-background-secondary rounded-lg p-4">
          <h3 className="text-xl text-text-highlight font-semibold mb-4">Genres</h3>
          <Genres />
        </aside>

        {/* Liste des films */}
        <section className="lg:col-span-3">
          <PopularMovies />
        </section>
      </div>
    </main>
  );
}
