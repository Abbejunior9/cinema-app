import React from "react";
import { useParams } from "react-router-dom";

const MovieDescription = ({ movies }) => {
  const { title } = useParams(); // Utilisation du paramètre d'URL 'title'
  const movie = movies.find((m) => m.title === title); // Trouver le film par son titre

  if (!movie) return <div>Film non trouvé</div>; // Si aucun film n'est trouvé, afficher un message

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>Note : {movie.rating}</p>
      <a href={movie.trailerLink} target="_blank" rel="noopener noreferrer">
        Voir la bande-annonce
      </a>
    </div>
  );
};

export default MovieDescription;
