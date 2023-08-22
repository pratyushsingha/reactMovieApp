import React, { useEffect, useState } from "react";
import './App.css';
import MovieCard from "./components/MovieCard";
import Spinner from "./components/Spinner";
import { apiKey } from './config';

const API_URL = `http://www.omdbapi.com/?apikey=${apiKey}`;

function App() {
  const [movie, setMovie] = useState([]);
  const [search, setSearch] = useState('batman');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function fetchMovie(title) {
    setLoading(true);
    try {
      let response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();

      if (data.Error) {
        setError(`No movies found for: ${title}`);
        setMovie([]); // Clear movie data on error
      } else {
        setError('');
        setMovie(data.Search);
      }
    }
    catch (err) {
      setError(`Failed to get movies: ${err}`);
      setMovie([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchMovie(search);
  }, [search]);

  const changeHandler = (e) => {
    setSearch(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    fetchMovie(search);
  }

  return (
    <>
      <h1 className="flex flex-col justify-center items-center text-yellow-500 text-extrabold text-5xl py-8">MovieMania</h1>
      <div className="relative flex justify-center items-center">
        <input onChange={changeHandler} className="bg-[#202123] rounded-3xl text-white px-4 py-4 w-6/12" type="text" />
        <button onClick={submitHandler} className="self-center w-20">
          <span className="text-white material-symbols-rounded mx-3">
            search
          </span>
        </button>
      </div>
      <div className="flex justify-center my-10 mx-3">
        <div className="flex justify-center items-center">
          <h2 className="text-white text-2xl">Result For <span className="text-green-500 text-bold">{search}</span></h2>
        </div>
      </div>
      {loading && <Spinner />}
      {error && <div className="flex justify-center items-center text-red-500 text-bold text-xl">{error}😓</div>}
      <div className="my-10 mx-3 my-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {movie.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </>
  );
}

export default App;
