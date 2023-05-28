import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'db1fc310bcef39c6a9a836ce0736e327';

export const getTrendingMovies = async () => {
  const { data } = await axios.get(
    `${BASE_URL}trending/all/day?api_key=${API_KEY}`
  );
  return data;
};

export const getSearchMovies = async () => {
  const { data } = await axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}`
  );
  return data;
};

export const getMovieDetails = async () => {
  const { data } = await axios.get(
    `${BASE_URL}movie/movie_id?api_key=${API_KEY}`
  );
  return data;
};

export const getMovieCredits = async () => {
  const { data } = await axios.get(
    `${BASE_URL}movie/movie_id/credits?api_key=${API_KEY}`
  );
  return data;
};

export const getMovieReviews = async () => {
  const { data } = await axios.get(
    `${BASE_URL}movie/movie_id/reviews?page=1&api_key=${API_KEY}`
  );
  return data;
};
