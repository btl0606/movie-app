import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;


export const fetchMovieData = createAsyncThunk(
    'movies/fetchMovieData',
    async ({ search, year, type, page }) => {
      try {
        const response = await axios.get(`${API_URL}?apikey=${API_KEY}&s=${search}&y=${year}&type=${type}&page=${page}`);
        return response.data;
      } catch (error) {
        return error.message; 
      }
    }
  );


const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],
    status: 'idle',
    error: null,
    totalResults: 0,
    currentPage: 1,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovieData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMovieData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movies = action.payload.Search || [];
        state.totalResults = action.payload.totalResults || 0;
      })
      .addCase(fetchMovieData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default moviesSlice.reducer;
