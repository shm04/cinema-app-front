import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setCinemas} from '../redux/slices/cinemaSlice';

const CinemasList = () => {
  const dispatch = useDispatch();
  const cinemas = useSelector((state) => state.cinema.cinemas);

  useEffect(() => {
    const fetchCinemas = async () => {
      try {
        const response = await fetch('http://localhost:3000/cinemas');
        const data = await response.json();
        dispatch(setCinemas(data));
      } catch (error) {
        console.error('Error fetching cinemas:', error);
      }
    };

    fetchCinemas();
  }, [dispatch]);

  return (
    <div>
      <h2>Cines</h2>
      <ul>
        {cinemas.map((cinema) => (
          <li key={cinema.id}>{cinema.cinema_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CinemasList;