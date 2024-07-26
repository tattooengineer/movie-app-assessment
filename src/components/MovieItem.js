import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function MovieItem({ movie }) {
  return (
    <div className="movie-item">
      <Link to={`/movie/${movie.id}`}>
        <LazyLoadImage
          alt={movie.title}
          effect="blur"
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          loading="lazy"
        />
        <h3>{movie.title}</h3>
        <p>{movie.release_date.substring(0, 4)}</p>
      </Link>
    </div>
  );
}

export default MovieItem;
