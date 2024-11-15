import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setSeats} from '../redux/slices/cinemaSlice';

const SeatsList = () => {
  const dispatch = useDispatch();
  const seats = useSelector((state) => state.cinema.seats);

  useEffect(() => {
    const fetchSeats = async () => {
      try {
        const response = await fetch('http://localhost:3000/cinemas/19/rooms/25/seats');
        const data = await response.json();
        dispatch(setSeats(data));
      } catch (error) {
        console.error('Error fetching cinemas:', error);
      }
    };

    fetchSeats();
  }, [dispatch]);

  return (
    <div>
      <h2>Seats</h2>
      <ul>
        {seats.map((seat) => (
          <li key={seat.id}>{seat.row}</li>
        ))}
      </ul>
    </div>
  );
};

export default SeatsList;