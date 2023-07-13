import { Route, Routes } from "react-router-dom"
import React from 'react'
import Header from './componants/Header'
import Body from './componants/Body'
import SignUp from "./pages/SignUp"
import LogIn from "./pages/LogIn"
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Body />}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<LogIn />} />
      </Routes>
    </>
  )
}

export default App
