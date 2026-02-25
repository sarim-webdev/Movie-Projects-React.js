import React, { useRef } from "react";
import {trendingCard} from "../Data/MovieCards";

const Home = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="home-container">
        <div className="home-content">
          <h1>
            Unlimited Movies, TV Shows, and Exclusive Originals – All in One
            Place
          </h1>
          <p>
            Starts at Rs 250. Cancel anytime.
            <br />
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <button>Start Watching Now</button>
        </div>
      </div>

      <section className="trending-section">
        <h2>Trending Now</h2>

        <div className="slider-wrapper">
          <button className="arrow-btn arrow-left" onClick={scrollLeft}>
            &#10094;
          </button>

          <div className="movie-row" ref={scrollRef}>
            {trendingCard.map((movie) => (
              <div key={movie.id} className="movie-card">
                <img src={movie.image} alt={`movie-${movie.id}`} />
              </div>
            ))}
          </div>

          <button className="arrow-btn arrow-right" onClick={scrollRight}>
            &#10095;
          </button>
        </div>
      </section>

      <section className="reasons-section">
        <h2>More Reasons to Join</h2>

        <div className="reasons-grid">
          <div className="reason-card">
            <h3>Enjoy on your TV</h3>
            <p>
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV
              and more.
            </p>
            <div className="reason-icon">📺</div>
          </div>

          <div className="reason-card">
            <h3>Download your shows to watch offline</h3>
            <p>
              Save your favorites easily and always have something to watch.
            </p>
            <div className="reason-icon">⬇️</div>
          </div>

          <div className="reason-card">
            <h3>Watch everywhere</h3>
            <p>
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
            <div className="reason-icon">📱</div>
          </div>

          <div className="reason-card">
            <h3>Create profiles for kids</h3>
            <p>
              Send kids on adventures with their favorite characters in a space
              made just for them .
            </p>
            <div className="reason-icon">🧒</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
