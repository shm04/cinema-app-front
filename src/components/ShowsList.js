import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setShows} from '../redux/slices/cinemaSlice';

const ShowsList = () => {
  const dispatch = useDispatch();
  const shows = useSelector((state) => state.cinema.shows);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await fetch('http://localhost:3000/cinemas/19/shows');
        const data = await response.json();
        dispatch(setShows(data));
      } catch (error) {
        console.error('Error fetching cinemas:', error);
      }
    };

    fetchShows();
  }, [dispatch]);

  return (
    <div>
      <h2>Shows</h2>
      <ul>
        {shows.map((show) => (
          <li key={show.id}>{show.started}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShowsList;