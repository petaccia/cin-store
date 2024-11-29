"use client";

import ErrorPage from '@/app/error';
import Custom404 from '@/app/not-found';
import React, { useState } from 'react';
import { DebounceInput } from 'react-debounce-input';
import MovieSearchResult from './MovieSearchResult';

export default function MovieSearch () {
  const [results, setResults] = useState([]); // Résultats de la recherche
  const [hashFocused, setHashFocused] = useState(false); // État pour savoir si l'input est sur les résultats de recherche ou non

  const fetchMovies = async (searchQuery) => {
    try {
      const response = await fetch(`/api/movie/search?query=${searchQuery}`); // Requête à l'API du projet de TMDB pour la recherche de films 
      
      if (response.status === 400) {
        return <Custom404 />; // Afficher une page 404 si la recherche est vide
      }

      if (!response.ok) {
        return <ErrorPage />; // Afficher une page d'erreur si la requête échoue
      }

      // Récupérer les données et filtrer les résultats
      const { results: data } = await response.json();
      console.log("Résultats de recherche:", data);

      setResults(data.filter((movie) => movie.backdrop_path)); // Ajouter uniquement les films avec une image
    } catch (error) {
      console.error("Erreur lors de la recherche:", error);
      setResults([]); // Réinitialiser les résultats en cas d'erreur
    }
  };

  return (
    <div className="relative p-4 max-w-lg mx-auto">
      {/* Barre de recherche */}
      <DebounceInput
        type="text"
        placeholder="Rechercher un film..."
        className="w-full p-3 border rounded-lg text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-200 shadow-sm"
        minLength={2} // Déclenchement après 2 caractères
        onChange={(e) => fetchMovies(e.target.value)} // Fetch les résultats sur changement
        onFocus={() => setHashFocused(true)} // Activer le focus
        onBlur={() => setHashFocused(false)} // Désactiver le focus
      />

      {/* Résultats de la recherche */}
      {results.length > 0 && hashFocused && (
        <MovieSearchResult movies={results} /> // Afficher les résultats si la recherche est active du composant MovieSearchResult
      )}
    </div>
  );
};
