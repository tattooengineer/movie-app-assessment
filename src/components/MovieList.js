// MovieList.js
import React from 'react';
import MovieItem from './MovieItem';
import '../styling/MovieList.css'

function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
