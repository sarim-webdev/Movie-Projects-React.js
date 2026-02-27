import { NavLink, useNavigate } from "react-router-dom";
import { FaUserCircle, FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate("")
  const [mobileOpen, setMobileOpen] = useState(false);

  const loginBtnHandler = () => {
    navigate("/login")
  }
  const signupBtnHandler = () => {
    navigate("/signup")
  }

  return (
    <nav className="navbar">
      <div className="left-section">
        <div className="logo">CineVerse</div>
        <ul className="nav-links">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/movies">Movies</NavLink></li>
          <li><NavLink to="/tvshow">TV Shows</NavLink></li>
        </ul>
      </div>

      <div className="right-section">
        <button className="signin-btn" onClick={loginBtnHandler}>Login</button>
        <button className="signup-btn" onClick={signupBtnHandler}>Sign Up</button>
        <FaUserCircle className="profile-icon" />
        <FaBars
          className="mobile-menu-icon"
          onClick={() => setMobileOpen(!mobileOpen)}
        />
      </div>
      {mobileOpen && (
        <div className="mobile-menu">
          <NavLink to="/" onClick={() => setMobileOpen(false)}>Home</NavLink>
          <NavLink to="/movies" onClick={() => setMobileOpen(false)}>Movies</NavLink>
          <NavLink to="/tvshow" onClick={() => setMobileOpen(false)}>TV Shows</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
