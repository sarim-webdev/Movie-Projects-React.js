import { NavLink, useNavigate } from "react-router-dom";
import { FaUserCircle, FaBars, FaHome, FaFilm, FaTv } from "react-icons/fa";
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

  const loginBtnHandler = () => {
    setMobileOpen(false);
    navigate("/login");
  };
  
  const signupBtnHandler = () => {
    setMobileOpen(false);
    navigate("/signup");
  };

  const logoutHandler = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    setMobileOpen(false);
    navigate("/");
  };

  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="left-section">
        <div className="logo" onClick={() => navigate("/")}>CineVerse</div>
        <ul className="nav-links">
          <li><NavLink to="/" onClick={handleNavClick}>Home</NavLink></li>
          <li><NavLink to="/movies" onClick={handleNavClick}>Movies</NavLink></li>
          <li><NavLink to="/tvshow" onClick={handleNavClick}>TV Shows</NavLink></li>
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

      {/* Mobile Menu - Ab yeh properly dikhega */}
      {mobileOpen && (
        <div className="mobile-menu">
          <NavLink to="/" onClick={handleNavClick}>
            <FaHome style={{ marginRight: '10px' }} /> Home
          </NavLink>
          <NavLink to="/movies" onClick={handleNavClick}>
            <FaFilm style={{ marginRight: '10px' }} /> Movies
          </NavLink>
          <NavLink to="/tvshow" onClick={handleNavClick}>
            <FaTv style={{ marginRight: '10px' }} /> TV Shows
          </NavLink>
          
          <div className="mobile-divider"></div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;