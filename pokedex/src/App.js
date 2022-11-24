import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Pokedex from "./pages/Pokedex";
import Navbar from "./components/Navbar";
import PokemonDetails from "./pages/PokemonDetails";
import Favourites from "./pages/Favourites";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import PersistCombineReducers from "redux-persist/lib/persistCombineReducers";
import { PersistGate } from "redux-persist/integration/react";




function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

      <Router>
        <Navbar/>
        <Routes>
  
         <Route path="/" element={<Pokedex/>}/>
         <Route path="/pokemon/:id" element={<PokemonDetails/>}/>
         <Route path="/favourites" element={<Favourites/>}/>
  
        </Routes>
      </Router>
      </PersistGate>

    </Provider>
    )
}

export default App
