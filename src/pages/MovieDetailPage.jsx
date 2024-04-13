
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import movieData from '../data/db.json'; 

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const selectedMovie = movieData.movies.find((m) => m.id === parseInt(id));
    setMovie(selectedMovie);
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src={movie.image} alt={movie.title} />
      <h1>{movie.title}</h1>
      <p>Description: {movie.description}</p>
      <p>Actors: {movie.actors.join(', ')}</p>
      <p>Director: {movie.director}</p>
      <p>Genre: {movie.genre}</p>
      <p>Rating: {movie.rating}</p>
    </div>
  );
};

export default MovieDetailPage;
