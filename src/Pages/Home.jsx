import React from "react";
import trendingCard from "../Data/MovieCards"; 

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-content">
          <h1>Unlimited Movies, TV Shows, and Exclusive Originals – All in One Place</h1>
          <p>
            Starts at Rs 250. Cancel anytime.
            <br />
            Ready to watch? Enter your email to create or restart your membership.
          </p>
          <button>Start Watching Now</button>
        </div>
      </div>
      <section className="trending-section">
        <h2>Trending Now</h2>
        <div className="movie-grid">
          {trendingCard.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img src={movie.image} alt={`movie-${movie.id}`} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
