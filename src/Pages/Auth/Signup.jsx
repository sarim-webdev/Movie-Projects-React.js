import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const userameRegax = /^(?=.*_)(?=.*[A-Za-z])[A-Za-z0-9_]{3,15}$/;
const emailRegax = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
const passwordRegax = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const signupHandler = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    if (!username || !email || !password) {
      setError("Please fill all fields");
      return;
    }

    if (!userameRegax.test(username)) {
      setError("Username include underscore and letters");
      return;
    }

    if (!emailRegax.test(email)) {
      setError("Email not Valid");
      return;
    }

    if (!passwordRegax.test(password)) {
      setError("Weak Password");
      return;
    }

    // Check if email already exists
    const userExists = users.find((user) => user.email === email);
    if (userExists) {
      setError("User already exists with this email");
      return;
    }

    const newUser = { username, email, password };
    users.push(newUser);

    localStorage.setItem("users", JSON.stringify(users));

    alert("SignUp Successfully...");
    navigate("/login");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>SignUp</h1>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={signupHandler}>SignUp</button>
        <p>
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;