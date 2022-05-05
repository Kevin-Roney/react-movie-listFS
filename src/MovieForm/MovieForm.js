import React from 'react';

export default function MovieForm({ 
  movieFormTitle,
  setMovieFormTitle,
  movieFormDirector,
  setMovieFormDirector,
  movieFormYear,
  setMovieFormYear,
  movieFormColor,
  setMovieFormColor,
  submitMovie 
}) {
  return (
    <div className='movie-form-container'>
      <form className='movie-form' onSubmit={submitMovie}>
        <label>
          Title:
          <input required value={movieFormTitle} onChange={e => setMovieFormTitle(e.target.value)}/>
        </label>
        <label>
          Director:
          <input required value={movieFormDirector} onChange={e => setMovieFormDirector(e.target.value)}/>
        </label>
        <label>
          Director:
          <input required type='number' value={movieFormYear} onChange={e => setMovieFormYear(e.target.value)}/>
        </label>
        <label>
          Color:
          <select required value={movieFormColor} onChange={e => setMovieFormColor(e.target.value)}>
            <option value='lightgreen'>Green</option>
            <option value='red'>Red</option>
            <option value='yellow'>Yellow</option>
            <option value='orange'>Orange</option>
          </select>
        </label>
        <button>Add Movie</button>
      </form>
    </div>
  );
}
