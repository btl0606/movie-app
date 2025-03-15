import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;

export const searchMovies = async (search, year, type, page) => {
  const response = await axios.get(
    `${API_URL}?apikey=${API_KEY}&s=${search}&y=${year}&type=${type}&page=${page}`
  );
  return response.data;
};

export const getMovieDetails = async (id) => {
  const response = await axios.get(
    `${API_URL}?apikey=${API_KEY}&i=${id}`
  );
  return response.data;
};