import { NavLink, useNavigate } from "react-router-dom";
import { FaUserCircle, FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser"))
  );

  // Listen to changes in localStorage across tabs
  useEffect(() => {
    const handleStorageChange = () => {
      const user = JSON.parse(localStorage.getItem("loggedInUser"));
      setLoggedInUser(user);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const loginBtnHandler = () => navigate("/login");
  const signupBtnHandler = () => navigate("/signup");

  const logoutHandler = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null); // Update state immediately
    navigate("/"); // redirect to home
  };

  return (
    <nav className="navbar">
      <div className="left-section">
        <div className="logo">CineVerse</div>
        <ul className="nav-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
          <li>
            <NavLink to="/tvshow">TV Shows</NavLink>
          </li>
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

      {mobileOpen && (
        <div className="mobile-menu">
          <NavLink to="/" onClick={() => setMobileOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/movies" onClick={() => setMobileOpen(false)}>
            Movies
          </NavLink>
          <NavLink to="/tvshow" onClick={() => setMobileOpen(false)}>
            TV Shows
          </NavLink>

          {!loggedInUser ? (
            <>
              <button
                className="signin-btn-mobile"
                onClick={() => {
                  loginBtnHandler();
                  setMobileOpen(false);
                }}
              >
                Login
              </button>
              <button
                className="signup-btn-mobile"
                onClick={() => {
                  signupBtnHandler();
                  setMobileOpen(false);
                }}
              >
                Sign Up
              </button>
            </>
          ) : (
            <button
              className="logout-btn-mobile"
              onClick={() => {
                logoutHandler();
                setMobileOpen(false);
              }}
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;