import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MoviesView from './views/MoviesView';
import MovieDetails from './views/MovieDetails';
import RoomDetails from './views/RoomDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MoviesView />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/movies/:id/rooms/:roomId" element={<RoomDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
