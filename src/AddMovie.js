import React, { useState } from "react";

const AddMovie = ({ addMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
  });

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      newMovie.title &&
      newMovie.description &&
      newMovie.posterURL &&
      newMovie.rating
    ) {
      addMovie(newMovie);
      setNewMovie({ title: "", description: "", posterURL: "", rating: "" }); // Réinitialiser le formulaire
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-movie-form">
      <input
        type="text"
        name="title"
        placeholder="Titre"
        value={newMovie.title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={newMovie.description}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="posterURL"
        placeholder="URL de l'affiche"
        value={newMovie.posterURL}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="rating"
        placeholder="Note"
        value={newMovie.rating}
        onChange={handleChange}
        required
      />
      <button type="submit">Ajouter un film</button>
    </form>
  );
};

export default AddMovie;
