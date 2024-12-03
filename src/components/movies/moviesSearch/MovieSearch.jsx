"use client";
import React, { useState } from 'react';
import { DebounceInput } from 'react-debounce-input';
import MovieSearchResult from './MovieSearchResult';
import { FaSearch } from 'react-icons/fa';

export default function MovieSearch() {
  const [results, setResults] = useState([]);
  const [hasFocus, setHasFocus] = useState(false);

  const fetchMovies = async (searchQuery) => {
    if (!searchQuery) {
      setResults([]);
      return;
    }

    try {
      const response = await fetch(`/api/movie/search?query=${searchQuery}`);
      
      if (!response.ok) {
        throw new Error('Erreur lors de la recherche');
      }

      const { results: data } = await response.json();
      setResults(data.filter(movie => movie.backdrop_path));
      
    } catch (error) {
      console.error("Erreur de recherche:", error);
      setResults([]);
    }
  };

  return (
    <div className="relative">
      <div className="relative">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" />
        <DebounceInput
          type="text"
          placeholder="Rechercher un film..."
          className="w-full pl-10 pr-4 py-2 bg-background-body/80  border border-border rounded-lg text-text-primary placeholder-text-secondary focus:outline-none focus:border-accent-primary transition-colors duration-300"
          minLength={2}
          debounceTimeout={300}
          onChange={(e) => fetchMovies(e.target.value)}
          onFocus={() => setHasFocus(true)}
          onBlur={() => setTimeout(() => setHasFocus(false), 200)}
        />
      </div>

      {results.length > 0 && hasFocus && (
        <MovieSearchResult movies={results} />
      )}
    </div>
  );
};
