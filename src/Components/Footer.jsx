import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          CineVerse
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4>Explore</h4>
            <Link to="/movies">Movies</Link>
            <Link to="/tvshow">TV Shows</Link>
          </div>

          <div className="footer-column">
            <h4>Legal</h4>
            <Link to="/terms">Terms of Use</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} CineVerse. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
