import React from "react";
import PopularMovies from "../components/movies/popular/PopularMovies";
import Genres from "@/components/genres/Genres";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Conteneur principal */}
      <main className="px-4 sm:px-8 lg:px-16 py-12">
        {/* Titre principal */}
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-semibold text-white leading-tight mb-4">
            Bienvenue sur notre site de films!
          </h1>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white opacity-80">
            Films populaires
          </h2>
        </header>

        {/* Layout avec une grille */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Colonne de gauche pour les genres */}
          <aside className="lg:col-span-1">
            <Genres />
          </aside>

          {/* Section des films populaires */}
          <section className="lg:col-span-3">
            <PopularMovies />
          </section>
        </div>
      </main>
    </div>
  );
}
