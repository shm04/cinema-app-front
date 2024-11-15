import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movies: [],
  rooms: [],
  shows: [],
  cinemas: [],
  seats: [],
};

const cinemaSlice = createSlice({
  name: 'cinema',
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setRooms: (state, action) => {
      state.rooms = action.payload;
    },
    setShows: (state, action) => {
      state.shows = action.payload;
    },
    setCinemas: (state, action) => {
      state.cinemas = action.payload;
    },
    setSeats: (state, action) => {
      state.seats = action.payload;
    },
  },
});

export const { setMovies, setRooms, setShows, setCinemas, setSeats } = cinemaSlice.actions;

export default cinemaSlice.reducer;