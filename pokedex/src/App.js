import Navbar from './components/Navbar'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Pokedex from './Pages/Pokedex';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Pokedex/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
