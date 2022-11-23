import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import axios from "axios"
import {POKEMON_API_URL, IMAGE_API_URL} from "../config/index";
import { Grid } from '@mui/material';



function Pokedex() {
  const[pokemonData, setPokemonData] = useState(null)
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
          newPokemonData.push(pokemonObject)
          
        });

        setPokemonData(newPokemonData)

      }
    })
  },[])
  return (

    <Box>
      {pokemonData ? 
      <Grid container spacing={2}>
        {pokemonData.map((pokemon, index)=>{
          return <h1 key={index} >{pokemon.name}</h1>
        })}
        
      </Grid>
      
      :
       <CircularProgress style={{marginTop:"100px"}}/>}
    </Box>

    
  )
}

export default Pokedex