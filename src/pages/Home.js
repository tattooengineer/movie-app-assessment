import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieList from '../components/MovieList';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';

const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZDZiNGYxOGQwZWY4N2IzYTEzZWU1MDQ2N2M2NGE1YSIsIm5iZiI6MTcyMTk3ODA3OS4xMjQzNzEsInN1YiI6IjY2YTM0YTdmYmZmYjUzNGY4NGUxMWViNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2A_Tm_kP6Z1eGiOcHDr2h2U3MDcC8cZsuvMBAo0IZZ8';
const BASE_URL = 'https://api.themoviedb.org/3';

function Home() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const url = query
          ? `${BASE_URL}/search/movie?query=${query}&page=${page}`
          : `${BASE_URL}/movie/popular?page=${page}`;
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${API_TOKEN}`
          }
        });
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    fetchMovies();
  }, [page, query]);

  return (
    <div>
      <Header/>
      <SearchBar setQuery={setQuery} />
      <MovieList movies={movies} />
      <Pagination page={page} setPage={setPage} />


    </div>
  );
}

export default Home;
