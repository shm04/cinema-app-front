import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import TicketsTable from '../components/common/TicketsTable';
import SeatsSelector from '../components/common/SeatsSelector';

const RoomDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const { cinemaId, roomId } = location.state || {};
  const [movie, setMovie] = useState(null);
  const [room, setRoom] = useState(null);
  const [totalTickets, setTotalTickets] = useState(0);

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
    const fetchRoom = async () => {
      try {
        const response = await fetch(`http://localhost:3000/cinemas/${cinemaId}/rooms/${roomId}`);
        const data = await response.json();
        setRoom(data);
        console.log(data);
      } catch (error) {
        console.error('Error fetching room details:', error);
      }
    };

    fetchRoom();
  }, [cinemaId, roomId]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <section>
      <button onClick={() => window.history.back()}>Back</button>
      <div>
        <h2>{movie.title}</h2>
      </div>
      <div>
        <h3>Room Details</h3>
        {room ? (
          <div>
            <p>{room.room_name}</p>
            <p>{room.room_type}</p>
          </div>
        ) : (
          <div>Loading room details...</div>
        )}
      </div>
      <div>
        <div>
          <TicketsTable onTotalChange={setTotalTickets} />
        </div>
        <div>
          {Array.from({ length: totalTickets }).map((_, index) => (
            <SeatsSelector key={index} cinemaId={cinemaId} roomId={roomId} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomDetails;