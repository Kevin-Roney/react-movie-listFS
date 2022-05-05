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
  const [movieFormColor, setMovieFormColor] = useState('green');
  return (
    <div className="App">
      <h1>Welcome to MovieList!</h1>
      <section className='upper-section'>
        <MovieForm />
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
