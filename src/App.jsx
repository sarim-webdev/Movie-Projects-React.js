import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import "./App.css"
import Home from "./Pages/Home";
import Movies from "./Pages/Movies";
import Tvshow from "./Pages/Tvshow";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Navbar + Footer wali pages */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tvshow" element={<Tvshow />} />
        </Route>

        {/* Login Signup pages */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;