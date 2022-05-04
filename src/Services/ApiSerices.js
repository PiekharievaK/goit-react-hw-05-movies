import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const apiKey = '718b7347396ac1052bb7bdc76b11dbfa';

export const FetchTrendingMovies = async () => {
  const response = await axios.get(
    `/trending/movie/day?page=1&api_key=${apiKey}`
  );
  return response.data.results;
};

export const FetchMovieDetails = async (id, options = '') => {
  const response = await axios.get(`/movie/${id}${options}?api_key=${apiKey}`);

  return response.data;
};

export const FetchSearchMovie = async query => {
  const response = await axios.get(
    `/search/movie?api_key=${apiKey}&query=${query}`
  );

  return response.data.results;
};
