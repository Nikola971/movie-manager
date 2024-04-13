// NewMovieForm.js
import React, { useState } from 'react';

const NewMovieForm = ({ onAddMovie }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    // Add other fields as needed (actors, director, genre, rating, etc.)
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onAddMovie function with the form data
    onAddMovie(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Add input fields for each movie attribute */}
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={formData.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />
      {/* Add other input fields for other movie attributes */}
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default NewMovieForm;
