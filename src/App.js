import { useState, useEffect } from 'react';
import './App.css';
import Movie from './Movie/Movie';
import MovieForm from './MovieForm/MovieForm';
import MovieList from './MovieList/MovieList';

function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [movieFormTitle, setMovieFormTitle] = useState('');
  const [movieFormDirector, setMovieFormDirector] = useState('');
  const [movieFormYear, setMovieFormYear] = useState('');
  const [movieFormColor, setMovieFormColor] = useState('lightgreen');
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filterQuery, setFilterQuery] = useState('');

  useEffect(() => handleFilterMovies(filterQuery),
    [allMovies, filterQuery]);//eslint-disable-line

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
  function handleDeleteMovie(movieFormTitle) {
    const indexToRemove = allMovies.findIndex(movie => movie.movieFormTitle === movieFormTitle);
    allMovies.splice(indexToRemove, 1);
    setAllMovies([...allMovies]);
  }
  function handleFilterMovies(search) {
    if (search) {
      const matchingMovies = allMovies.filter(
        movie => movie.movieFormTitle.toLowerCase()
          .includes(search.toLowerCase()
          )
      );
      setFilteredMovies([...matchingMovies]);
    } else {
      setFilteredMovies([...allMovies]);
    }
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
        <Movie 
          movieFormTitle={movieFormTitle}
          movieFormDirector={movieFormDirector}
          movieFormYear={movieFormYear}
          movieFormColor={movieFormColor}
        />
      </section>
      <section className='middle-section'>
        <label>Filter
          <input className='filter-input' onChange={(e) => setFilterQuery(e.target.value)}/>
        </label>
      </section>
      <section className='lower-section'>
        <MovieList 
          allMovies={filterQuery ? filteredMovies : allMovies}
          handleDeleteMovie={handleDeleteMovie}
        />
      </section>
    </div>
  );
}

export default App;
