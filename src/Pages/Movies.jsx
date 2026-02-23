import React, { useRef } from "react";

import {
  latestMovies,
  featuredMovies,
  crimeMovies,
  actionMovies,
  romanceMovies,
  comedyMovies,
} from "../Data/MovieCards";

const MovieRow = ({ title, data }) => {
  const rowRef = useRef();

  const scrollLeft = () => {
    rowRef.current.scrollBy({
      left: -800,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    rowRef.current.scrollBy({
      left: 800,
      behavior: "smooth",
    });
  };

  return (
    <div className="movieSection">

      <h2 className="movieTitle">{title}</h2>

      <div className="sliderWrapper">

        <button className="arrow left" onClick={scrollLeft}>
          ◀
        </button>

        <div className="movieRow" ref={rowRef}>
          {data.map((movie) => (
            <div className="movieCard" key={movie.id}>
              <img src={movie.image} alt="" />
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={scrollRight}>
          ▶
        </button>

      </div>
    </div>
  );
};

const Movies = () => {
  return (
    <div className="moviesPage">

      <MovieRow title="Latest Movies" data={latestMovies} />

      <MovieRow
        title="Featured Originals and Exclusives"
        data={featuredMovies}
      />

      <MovieRow title="Crime Movies" data={crimeMovies} />

      <MovieRow
        title="Action and Adventure Movies"
        data={actionMovies}
      />

      <MovieRow title="Romance Movies" data={romanceMovies} />

      <MovieRow title="Comedy Movies" data={comedyMovies} />

    </div>
  );
};

export default Movies;