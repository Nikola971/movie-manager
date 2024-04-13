import React, { useState, useEffect } from 'react';
import movieData from '../../data/db.json';
import './MovieList.modul.css';
import { Link } from 'react-router-dom';
import AddMovieForm from '../AddForm/AddForm';

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  useEffect(() => {
    setMovies(movieData.movies);
  }, []);

  useEffect(() => {
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMovies(filtered);
  }, [movies, searchTerm]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddMovie = () => {
    setShowAddForm(true);
  };

  const handleCancelAddMovie = () => {
    setShowAddForm(false);
  };

  const handleAddMovieSubmit = (formData) => {
    const id = movies.length + 1;
    const updatedMovies = [...movies, { id, ...formData }];
    setMovies(updatedMovies);
    setShowAddForm(false);

    // Update db.json (simulate backend behavior)
    updateDbJson(updatedMovies);
  };

  const handleDeleteMovie = (movieId) => {
    const updatedMovies = movies.filter((movie) => movie.id !== movieId);
    setMovies(updatedMovies);

    // Update db.json (simulate backend behavior)
    updateDbJson(updatedMovies);
  };

  const updateDbJson = (updatedMovies) => {
    // Simulate updating db.json by logging the updated movie list
    console.log('Updated Movie List:', updatedMovies);
  };

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={handleChange}
        />
        <button onClick={handleAddMovie}>Add Movie</button>
      </div>
      {showAddForm && <AddMovieForm onAddMovie={handleAddMovieSubmit} onCancel={handleCancelAddMovie} />}
      <div className="movie-list">
        {filteredMovies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <Link to={`/movie/${movie.id}`}>
              <img src={movie.image} alt={movie.title} />
            </Link>
            <div className="movie-details">
              <h2>{movie.title}</h2>
              <p>Rating: {movie.rating}</p>
              <p>Release Date: {movie.release_date}</p>
              <div className="movie-actions">
                <Link to={`/edit/${movie.id}`} key={`edit-${movie.id}`}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => handleDeleteMovie(movie.id)} key={`delete-${movie.id}`}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
