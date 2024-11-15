import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setRooms} from '../redux/slices/cinemaSlice';

const RoomsList = () => {
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.cinema.rooms);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch('http://localhost:3000/cinemas/19/rooms');
        const data = await response.json();
        dispatch(setRooms(data));
      } catch (error) {
        console.error('Error fetching cinemas:', error);
      }
    };

    fetchRooms();
  }, [dispatch]);

  return (
    <div>
      <h2>Rooms</h2>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>{room.room_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default RoomsList;