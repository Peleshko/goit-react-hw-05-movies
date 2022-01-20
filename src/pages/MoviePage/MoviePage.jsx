import { Link, useRouteMatch, useHistory, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { fetchMovieSearch } from '../../services/api';
import s from './MoviePage.module.css';

export default function MoviePage() {
  const [movies, setMovies] = useState(null);
  const { url } = useRouteMatch();
  const history = useHistory();
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('query') ?? '';

  const handleSubmit = e => {
    e.preventDefault();
    const queryInput = e.target.elements.query.value.toLowerCase();
    if (!queryInput.trim()) {
      toast('Enter query');
      return;
    }

    if (query === queryInput) {
      return;
    }
    history.push({ ...location, search: `query=${queryInput}` });
    e.target.elements.query.value = '';
  };

  useEffect(() => {
    if (!query) return;
    fetchMovieSearch(query).then(setMovies);
  }, [query]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="query" />
        <button type="submit" className={s.btn}>
          Search
        </button>
      </form>
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `${url}/${movie.id}`,
                  state: { params: `query=${query}` },
                }}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
