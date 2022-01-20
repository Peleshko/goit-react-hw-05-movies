import {
  NavLink,
  useParams,
  useRouteMatch,
  Route,
  useLocation,
  useHistory,
} from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { fetchMovieDetails } from '../../services/api';
import Cast from './Cast';
import Reviews from './Reviews';
import defaultImage from '../../image/defaultImg.png';
import s from './MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const routerState = useRef(null);
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (routerState.current) return;
    routerState.current = location.state;
  }, [location.state]);

  useEffect(() => {
    fetchMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  const handleGoBack = () => {
    const url = routerState.current
      ? `/movies?${routerState.current?.params}`
      : '/movies';
    history.push(url);
  };

  return (
    <>
      <button type="button" className={s.backBtn} onClick={handleGoBack}>
        &#60;&#60;&#60; Go back
      </button>
      {movie && (
        <>
          <div className={s.movieInfo}>
            <img
              src={
                movie.backdrop_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                  : defaultImage
              }
              alt={movie.title}
              className={s.movieInfoImg}
            />
            <div>
              <h2>
                {movie.title} ({movie.release_date.substring(0, 4)})
              </h2>
              <p>User Score {movie.vote_average}</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <ul className={s.genres}>
                {movie.genres.map(genre => {
                  return <li key={genre.id}>{genre.name}</li>;
                })}
              </ul>
            </div>
          </div>
          <hr />
          <ul>
            Additional information
            <li>
              <NavLink to={`${url}/cast`} className={s.infoLink}>
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink to={`${url}/reviews`} className={s.infoLink}>
                Reviews
              </NavLink>
            </li>
          </ul>
          <hr />
        </>
      )}
      <Route path={`${path}/cast`}>
        {movie && <Cast movieId={movie.id} />}
      </Route>

      <Route path={`${path}/reviews`}>
        {movie && <Reviews movieId={movie.id} />}
      </Route>
    </>
  );
}
