import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokedex from './Pages/Pokedex';
import PokemonDetails from './Pages/PokemonDetails';
import { Provider } from 'react-redux';
import { persistor, store } from "./redux/store"
import { PersistGate } from 'redux-persist/integration/react';
import Favourites from './Pages/Favourites';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/pokemon/:id' element={<PokemonDetails />} />
            <Route path='/favourites' element={<Favourites />} />
            <Route path='/' element={<Pokedex />} />
          </Routes>
        </BrowserRouter>

      </PersistGate>


    </Provider>
  )
}

export default App
