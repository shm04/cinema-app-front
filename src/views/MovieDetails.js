import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const MovieDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const { cinemaId } = location.state || {};
  const [movie, setMovie] = useState(null);
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(`http://localhost:3000/cinemas/${cinemaId}/movies/${id}`);
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovie();
  }, [cinemaId, id]);

  useEffect(() => {
    const fetchShow = async () => {
      try {
        const response = await fetch(`http://localhost:3000/cinemas/${cinemaId}/movies/${id}/shows`);
        const data = await response.json();
        setShows(data);
      } catch (error) {
        console.error('Error fetching show details:', error);
      }
    };

    fetchShow();
  }, [cinemaId, id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().slice(11, 16);
  };

  return (
    <section>
      <button onClick={() => window.history.back()}>Back</button>
      <div>
        <h2>{movie.title}</h2>
        <p>Description: {movie.description}</p>
        <p>Genre: {movie.genre}</p>
        <p>Duration: {movie.duration} minutes</p>
      </div>
      <div>
        {shows.map((show) => (
          <div key={show.id}>
            <p>
              <Link 
                to={`/movies/${movie.id}/rooms/${show.room_id}`} 
                state={{ cinemaId, roomId: show.room_id }}
              >
                Started: {formatTime(show.started)}
              </Link>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MovieDetails;