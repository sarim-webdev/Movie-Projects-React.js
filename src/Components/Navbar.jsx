import { NavLink, useNavigate } from "react-router-dom";
import { FaUserCircle, FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser"))
  );

  useEffect(() => {
    const updateUser = () => {
      const user = JSON.parse(localStorage.getItem("loggedInUser"));
      setLoggedInUser(user);
    };

    window.addEventListener("login", updateUser);
    window.addEventListener("storage", updateUser);

    return () => {
      window.removeEventListener("login", updateUser);
      window.removeEventListener("storage", updateUser);
    };
  }, []);

  const loginBtnHandler = () => navigate("/login");
  const signupBtnHandler = () => navigate("/signup");

  const logoutHandler = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    navigate("/");
  };

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
        {!loggedInUser ? (
          <>
            <button className="signin-btn" onClick={loginBtnHandler}>
              Login
            </button>
            <button className="signup-btn" onClick={signupBtnHandler}>
              Sign Up
            </button>
          </>
        ) : (
          <button className="logout-btn" onClick={logoutHandler}>
            Logout
          </button>
        )}

        <FaUserCircle className="profile-icon" />
        <FaBars
          className="mobile-menu-icon"
          onClick={() => setMobileOpen(!mobileOpen)}
        />
      </div>
    </nav>
  );
};

export default Navbar;