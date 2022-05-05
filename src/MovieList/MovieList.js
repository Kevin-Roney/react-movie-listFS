import React from 'react';
import Movie from '../Movie/Movie';

export default function MovieList({ allMovies, handleDeleteMovie }) {
  return (
    <div className='movie-list'>
      {
        allMovies.map((movie, i) => 
          <Movie 
            key={`${movie.movieFormTitle}-${i}`}
            movieFormTitle={movie.movieFormTitle}
            movieFormDirector={movie.movieFormDirector}
            movieFormYear={movie.movieFormYear}
            movieFormColor={movie.movieFormColor}
            handleDeleteMovie={handleDeleteMovie}
          />)
      }
    </div>
  );
}
