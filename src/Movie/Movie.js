import React from 'react';

export default function Movie({ 
  movieFormTitle,
  movieFormDirector, 
  movieFormYear, 
  movieFormColor, 
  handleDeleteMovie 
}) {
  return (
    <div 
      className='movie'
      onClick={() => handleDeleteMovie && handleDeleteMovie(movieFormTitle)}
      style={{ backgroundColor: movieFormColor }}
    >
      <h3>{movieFormTitle}</h3>
      <p>{movieFormDirector}</p>
      <p>{movieFormYear}</p>
    </div>
  );
}
