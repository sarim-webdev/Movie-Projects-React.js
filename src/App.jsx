import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Movies from './Pages/Movies'
import Tvshow from './Pages/Tvshow'
import "./App.css"
import Footer from './Components/Footer'
import Login from './Pages/Auth/Login'
import Signup from './Pages/Auth/Signup'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/movies' element={<Movies/>}></Route>
      <Route path='/tvshow' element={<Tvshow/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
