import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMovies } from '../redux/slices/cinemaSlice';
import { Link } from 'react-router-dom';

const MoviesView = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.cinema.movies);
  const [selectedCinema, setSelectedCinema] = useState(null);
  const [cinemas, setCinemas] = useState([]);
      
  useEffect(() => {
    const fetchCinemas = async () => {
      try {
        const response = await fetch('http://localhost:3000/cinemas');
        const data = await response.json();
        setCinemas(data);
      } catch (error) {
        console.error('Error fetching cinemas:', error);
      }
    };

    fetchCinemas();
  }, []);

  useEffect(() => {
    if (!selectedCinema) return;

    const fetchMovies = async () => {
      try {
        const response = await fetch(`http://localhost:3000/cinemas/${selectedCinema}/movies`);
        const data = await response.json();
        dispatch(setMovies(data));
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, [selectedCinema, dispatch]);

  return (
    <div>
      <h2>Select a Cinema</h2>
      <select
        onChange={(e) => setSelectedCinema(e.target.value)}
        value={selectedCinema || ''}
      >
        <option value="" disabled>
          Select a cinema
        </option>
        {cinemas.map((cinema) => (
          <option key={cinema.id} value={cinema.id}>
            {cinema.cinema_name}
          </option>
        ))}
      </select>

      <h2>Movies</h2>
      {selectedCinema ? (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <h3>
                <Link to={`/movies/${movie.id}`} state={{ cinemaId: selectedCinema}}>{movie.title}</Link>
              </h3>
              <p>{movie.description}</p>
              <p>{movie.duration}</p>
              <p>{movie.genre}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Please select a cinema to see its movies.</p>
      )}
    </div>
  );
};

export default MoviesView;
