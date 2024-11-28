"use client";

import ErrorPage from '@/app/error';
import Custom404 from '@/app/not-found';
import React, { useState } from 'react';
import { DebounceInput } from 'react-debounce-input';

const MovieSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

 
  const fetchMovies = async (searchQuery) => {
    setIsLoading(true);
    try {
      const response = await fetch(`/api/movie/search?query=${searchQuery}`);
      if (response.status === 400) 
        return Custom404();
      if (!response.ok) 
        return ErrorPage();

      // Récupération des données de la réponse
      const data = await response.json();
      setResults(data.results || []);
    } catch (error) {
      console.error("Erreur de recherche:", error);
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  };
  
  fetchMovies(query);
  return (
    <div className="relative p-4 max-w-lg mx-auto">

      {/* DebounceInput pour la recherche */}
      <DebounceInput 
        type="text"
        placeholder="Rechercher un film..."
        className="w-full p-3 border rounded-lg text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition ease-in-out duration-200 shadow-sm"
        minLength={2} 
        value={query} 
        onChange={(e) => setQuery(e.target.value)}/>
      
      {/* Indicateur de chargement */}
      {isLoading && <p className="mt-2 text-gray-500">Recherche en cours...</p>}
      
      {/* Affichage des résultats */}
      {!isLoading && results.length > 0 && (
        <ul className="mt-2 bg-white border rounded-md shadow-lg absolute w-full z-10 max-h-60 overflow-y-auto">
          {results.map((movie) => (
            <li
              key={movie.id}
              className="p-3 hover:bg-blue-50 cursor-pointer transition ease-in-out duration-200"
            >
              <span className="font-semibold text-gray-900">{movie.title}</span>
              <span className="text-sm text-gray-600"> ({movie.release_date?.split("-")[0]})</span>
            </li>
          ))}
        </ul>
      )}
      
      {/* Message si aucun résultat trouvé */}
      {!isLoading && query && results.length === 0 && (
        <p className="mt-2 text-gray-500">Aucun résultat trouvé.</p>
      )}
    </div>
  );
};

export default MovieSearch;
