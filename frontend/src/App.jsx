import { useState } from 'react'
import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Signup from './pages/SignUp/SignUp'

function App() {


  return (
   <>
<Navbar/>
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/login" element={<Login/>} />
  <Route path="/signup" element={<Signup/>} />
</Routes>
   </>
  )
}

export default App
