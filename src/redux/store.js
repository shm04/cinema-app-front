import { configureStore } from '@reduxjs/toolkit';
import cinemaReducer from './slices/cinemaSlice';

const store = configureStore({
  reducer: {
    cinema: cinemaReducer,
  },
});

export default store;
