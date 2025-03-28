import React, { useState } from "react";
import MovieList from "./MovieList";
import Filter from "./filter";
import AddMovie from "./AddMovie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieDescription from "./MovieDescription"; // Nouveau fichier pour afficher la description

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "Un film de science-fiction réalisé par Christopher Nolan.",
      posterURL: "images/inception.jpg",
      rating: 8.8,
      trailerLink: "https://www.youtube.com/watch?v=YoHD9XEInc0", // Lien vers la bande-annonce
    },
    {
      title: "The Dark Knight",
      description: "Le chevalier noir doit combattre le Joker.",
      posterURL: "images/thedark.jpeg",
      rating: 9.0,
      trailerLink: "https://www.youtube.com/watch?v=EXeTwQWrcwY", // Lien vers la bande-annonce
    },
    {
      title: "Interstellar",
      description: "Un voyage spatial au-delà des limites de l’univers connu.",
      posterURL: "images/inters.jpeg",
      rating: 8.6,
      trailerLink: "https://www.youtube.com/watch?v=Lm8p5rlrSkY", // Lien vers la bande-annonce
    },
  ]);

  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState("");

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
      (searchRating === "" || movie.rating >= parseFloat(searchRating))
  );

  return (
    <Router>
      <div>
        <h1>Application de cinéma 🎬</h1>
        <Filter
          setSearchTitle={setSearchTitle}
          setSearchRating={setSearchRating}
        />
        <AddMovie addMovie={(newMovie) => setMovies([...movies, newMovie])} />
        <Routes>
          <Route path="/" element={<MovieList movies={filteredMovies} />} />
          <Route
            path="/movie/:title"
            element={<MovieDescription movies={movies} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
