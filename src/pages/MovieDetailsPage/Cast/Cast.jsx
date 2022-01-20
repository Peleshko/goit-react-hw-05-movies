import { useState, useEffect } from 'react';
import { fetchMovieCredits } from '../../../services/api';
import defaultImage from '../../../image/defaultImg.png';
import s from './Cast.module.css';

export default function Cast({ movieId }) {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchMovieCredits(movieId).then(setCast);
  }, [movieId]);

  return (
    <>
      {cast.length > 0 && (
        <ul>
          {' '}
          {cast.map(actor => (
            <li key={actor.id}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                    : defaultImage
                }
                className={s.castImg}
                alt={actor.name}
              />
              <p>{actor.name}</p>
              <p>character: {actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
