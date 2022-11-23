import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Pokedex from "./pages/Pokedex";
import Navbar from "./components/Navbar";
import PokemonDetails from "./pages/PokemonDetails";




function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>

       <Route path="/" element={<Pokedex/>}/>
       <Route path="/pokemon/:id" element={<PokemonDetails/>}/>

      </Routes>
    </Router>
  )
}

export default App
