import React, { useState, useEffect } from "react";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../components/css/MovieList.css";
import MovieCard1 from "./MovieCard1";

const MovieList = ({ it }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);
  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular",
        {
          params: {
            api_key: "fcdcf37d8779f435786606a2ddd02898",
            language: "en-US",
            page: 1,
          },
        }
      );

      setMovies(response.data.results);
    } catch (error) {
      console.error("API Error:", error);
    }
  };

  return (
    <div className="MovieList">
      <h3>{it}</h3>

      <div className="carousel">
        {movies.map((it) => (
          <MovieCard1 it={it} key={it.id} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
