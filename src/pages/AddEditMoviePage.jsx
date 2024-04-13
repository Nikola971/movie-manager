// AddMoviePage.js
import React from 'react';
import NewMovieForm from '../components/MovieForm/MovieForm';
const AddMoviePage = () => {
  const handleAddMovie = (formData) => {
    // Implement the logic to add the new movie to your data source (e.g., database)
    console.log('New movie data:', formData);
    // You can also redirect the user to a different page after adding the movie
  };

  return (
    <div>
      <h1>Add New Movie</h1>
      <NewMovieForm onAddMovie={handleAddMovie} />
    </div>
  );
};

export default AddMoviePage;
