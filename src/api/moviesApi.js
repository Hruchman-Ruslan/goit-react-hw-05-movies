import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'db1fc310bcef39c6a9a836ce0736e327';

export const getTrendingMovies = async () => {
  const { data } = await axios.get(
    `${BASE_URL}trending/all/day?api_key=${API_KEY}`
  );

  return data.results.map(({ id, title }) => {
    return {
      id,
      title,
    };
  });
};

export const getSearchMovies = async query => {
  const { data } = await axios.get(
    `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`
  );
  return data.results.map(({ id, title }) => {
    return {
      id,
      title,
    };
  });
};

export const getMovieDetails = async id => {
  const { data } = await axios.get(`${BASE_URL}movie/${id}?api_key=${API_KEY}`);

  return data;
};

export const getMovieCredits = async id => {
  const { data } = await axios.get(
    `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`
  );
  return data.cast.map(({ id, character, original_name, profile_path }) => {
    return {
      id,
      character,
      original_name,
      profile_path,
    };
  });
};

export const getMovieReviews = async id => {
  const { data } = await axios.get(
    `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`
  );
  return data.results.map(({ id, content, author }) => {
    return {
      id,
      content,
      author,
    };
  });
};
