import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Pokedex from "./pages/Pokedex";
import Navbar from "./components/Navbar";




function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>

       <Route path="/" element={<Pokedex/>}/>

      </Routes>
    </Router>
  )
}

export default App
