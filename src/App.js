import React, { useState } from "react";
import MovieList from "./MovieList";
import Filter from "./filter";
import AddMovie from "./AddMovie";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "Un film de science-fiction réalisé par Christopher Nolan.",
      posterURL: "images/inception.jpg",
      rating: 8.8,
    },
    {
      title: "The Dark Knight",
      description: "Le chevalier noir doit combattre le Joker.",
      posterURL: "images/thedark.jpeg",
      rating: 9.0,
    },
    {
      title: "Interstellar",
      description: "Un voyage spatial au-delà des limites de l’univers connu.",
      posterURL: "images/inters.jpeg",
      rating: 8.6,
    },
  ]);

  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState("");

  // Fonction pour ajouter un film
  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  // Filtrer les films selon la recherche
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
      (searchRating === "" || movie.rating >= parseFloat(searchRating))
  );

  return (
    <div>
      <h1>Application de cinéma 🎬</h1>
      <Filter
        setSearchTitle={setSearchTitle}
        setSearchRating={setSearchRating}
      />
      <AddMovie addMovie={addMovie} />
      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
