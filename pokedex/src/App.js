import Navbar from './components/Navbar'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Pokedex from './Pages/Pokedex';
import PokemonDetails from './Pages/PokemonDetails';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/pokemon/:id' element={<PokemonDetails/>}/>
        <Route path='/' element={<Pokedex/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
