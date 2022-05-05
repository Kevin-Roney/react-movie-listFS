import { useState } from 'react';
import './App.css';
import Movie from './Movie/Movie';
import MovieForm from './Movie/Movie';
import MovieList from './MovieList/MovieList';

function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [movieFormTitle, setMovieFormTitle] = useState('');
  const [movieFormDirector, setMovieFormDirector] = useState('');
  const [movieFormYear, setMovieFormYear] = useState('');
  const [movieFormColor, setMovieFormColor] = useState('lightgreen');

  function submitMovie(e) {
    e.preventDefault();
    const newMovie = {
      movieFormTitle,
      movieFormDirector,
      movieFormYear,
      movieFormColor,
    };
    setAllMovies([...allMovies, newMovie]);
    setMovieFormTitle('');
    setMovieFormDirector('');
    setMovieFormYear('');
    setMovieFormColor('lightgreen');
  }
  return (
    <div className="App">
      <h1>Welcome to MovieList!</h1>
      <section className='upper-section'>
        <MovieForm 
          movieFormTitle={movieFormTitle}
          setMovieFormTitle={setMovieFormTitle}
          movieFormDirector={movieFormDirector}
          setMovieFormDirector={setMovieFormDirector}
          movieFormYear={movieFormYear}
          setMovieFormYear={setMovieFormYear}
          movieFormColor={movieFormColor}
          setMovieFormColor={setMovieFormColor}
          submitMovie={submitMovie}
        />
        <Movie />
      </section>
      <section className='middle-section'>
        <label>Filter
          <input className='filter-input'/>
        </label>
      </section>
      <section className='lower-section'>
        <MovieList />
      </section>
    </div>
  );
}

export default App;
