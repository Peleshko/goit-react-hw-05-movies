import axios from 'axios';

const apiKey = '961c0ec5d41119b20a04fc6b07024024';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = { api_key: apiKey };

export async function fetchTrendingMovies() {
  try {
    const response = await axios.get(`/trending/movie/day`);
    return response.data.results;
  } catch (e) {
    console.error(e);
  }
}

export async function fetchMovieDetails(id) {
  try {
    const response = await axios.get(`/movie/${id}`);
    return response.data;
  } catch (e) {
    console.error(e);
  }
}

export async function fetchMovieCredits(id) {
  try {
    const response = await axios.get(`/movie/${id}/credits`);
    return response.data.cast;
  } catch (e) {
    console.error(e);
  }
}

export async function fetchMovieReviews(id) {
  try {
    const response = await axios.get(`/movie/${id}/reviews`);
    return response.data.results;
  } catch (e) {
    console.error(e);
  }
}

export async function fetchMovieSearch(query, page = 1) {
  try {
    const response = await axios.get(
      `/search/movie?language=en-US&page=${page}&include_adult=false&query=${query}`,
    );
    return response.data.results;
  } catch (e) {
    console.error(e);
  }
}
