import React, { useRef } from "react";

import {
  latestTV,
  animeTV,
  crimeTV,
  dramaTV,
  romanceTV,
  mysteryTV
} from "../Data/MovieCards";

const TVRow = ({ title, data }) => {
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
          {data.map((item) => (
            <div className="movieCard" key={item.id}>
              <img src={item.image} alt="" />
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

const Tvshow = () => {
  return (
    <div className="moviesPage">

      <TVRow title="Latest TV" data={latestTV} />
      <TVRow title="Anime TV" data={animeTV} />
      <TVRow title="Crime TV" data={crimeTV} />
      <TVRow title="Drama TV" data={dramaTV} />
      <TVRow title="Romance TV" data={romanceTV} />
      <TVRow title="Mystery and Thriller TV" data={mysteryTV} />

    </div>
  );
};

export default Tvshow;