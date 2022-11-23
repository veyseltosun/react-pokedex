import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import axios from "axios"
import {POKEMON_API_URL, IMAGE_API_URL} from "../config/index";


function Pokedex() {
  useEffect(() =>{
    axios.get(POKEMON_API_URL + "?limit=800").then((response)=>{
      if(response.status >= 200 && response.status < 300) {
        const {results} = response.data
        let newPokemonData = []
        results.forEach((pokemon, index) => {
          index++
          let pokemonObject = {
            id:index,
            url: IMAGE_API_URL + index + ".png",
            name: pokemon.name
          }
          
        });
      }
    })
  },[])
  return (

    <Box>
      hello
    </Box>

    
  )
}

export default Pokedex