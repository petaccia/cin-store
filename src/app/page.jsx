import React from "react";
import NavbarDesktop from "@/components/layout/navbar/NavbarDesktop";
import PopularMovies from "../components/movies/PopularMovies";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <NavbarDesktop />

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

        {/* Section des films populaires */}
        <section className="w-full max-w-screen-xl mx-auto">
          <PopularMovies />
        </section>
      </main>
    </div>
  );
}
