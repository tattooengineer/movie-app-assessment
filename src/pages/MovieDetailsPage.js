import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styling/MovieDetailsPage.css'
const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDZiNGYxOGQwZWY4N2IzYTEzZWU1MDQ2N2M2NGE1YSIsIm5iZiI6MTcyMTk3ODA3OS4xMjQzNzEsInN1YiI6IjY2YTM0YTdmYmZmYjUzNGY4NGUxMWViNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2A_Tm_kP6Z1eGiOcHDr2h2U3MDcC8cZsuvMBAo0IZZ8';
const BASE_URL = 'https://api.themoviedb.org/3';

function MovieDetailsPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/movie/${id}`, {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`
          }
        });
        setMovie(response.data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };
    fetchMovieDetails();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-details">
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title} className='image'
      />
      <h2>{movie.title}</h2>
      <p><strong>Release Year:</strong> {movie.release_date.substring(0, 4)}</p>
      <p><strong>Genre:</strong> {movie.genres.map(g => g.name).join(', ')}</p>
      <p><strong>Plot:</strong> {movie.overview}</p>
    </div>
  );
}

export default MovieDetailsPage;
