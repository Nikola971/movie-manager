import React, { useState } from 'react';

const AddMovieForm = ({ onAddMovie, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    rating: '',
    release_date: '',
    image: '' // Change the initial state to an empty string
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMovie(formData);
    setFormData({
      title: '',
      description: '',
      rating: '',
      release_date: '',
      image: ''
    });
  };

  const handleCancel = () => {
    onCancel();
    setFormData({
      title: '',
      description: '',
      rating: '',
      release_date: '',
      image: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />

      <label htmlFor="description">Description:</label>
      <textarea id="description" name="description" value={formData.description} onChange={handleChange} required />

      <label htmlFor="rating">Rating:</label>
      <input type="number" id="rating" name="rating" value={formData.rating} onChange={handleChange} required />

      <label htmlFor="release_date">Release Date:</label>
      <input type="date" id="release_date" name="release_date" value={formData.release_date} onChange={handleChange} required />

      <label htmlFor="image">Image URL:</label> {/* Prompt users to enter the image URL */}
      <input type="text" id="image" name="image" value={formData.image} onChange={handleChange} required />

      <div>
        <button type="submit">Add Movie</button>
        <button type="button" onClick={handleCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default AddMovieForm;
