import React,{ useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/home'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.scss'
import Watch from './pages/watching/watch';
import Register from './pages/register/register';
import Login from './pages/login/login'



function App() {


  return (
    <>
      <div>
      <Login />

      </div>
      
    </>
  )
}

export default App
