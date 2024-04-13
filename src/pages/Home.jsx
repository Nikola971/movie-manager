// Home.js
import React, { useState } from 'react';
import MovieList from '../components/MovieList/MovieList';

import movieData from '../data/db.json';

const Home = () => {
  const [movies, setMovies] = useState(movieData.movies);
  const [filteredMovies, setFilteredMovies] = useState(movieData.movies);


  return (
    <div>
      <h1>Movie List</h1>

      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default Home;