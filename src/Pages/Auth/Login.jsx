import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const loginHandler = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (!email || !password) {
      setError("Please fill all fields");
      return;
    }

    const matchedUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!matchedUser) {
      setError("Invalid Email or Password");
      return;
    }

    localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));

    // 🔥 IMPORTANT — this triggers Navbar instantly
    window.dispatchEvent(new Event("login"));

    alert("Login Successfully...");
    navigate("/");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Login</h1>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={loginHandler}>Login</button>
        <p>
          Don't have an account? <Link to="/signup">SignUp</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;