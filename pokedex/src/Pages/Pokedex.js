import React, {useEffect} from 'react';
import axios from "axios";
import { IMAGE_API_URL, POKEMON_API_URL } from '../config';
import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';



const Pokedex = () => {
    const[pokemonData, setPokemonData] = React.useState(null)
    useEffect(() => {

        axios.get(POKEMON_API_URL + "?limit=800").then((response) => {
            if(response.status >= 200 && response.status < 300) {
                const {results} = response.data;
                let newPokemonData = [] ;
                results.forEach((pokemon, index) => {
               
                        let pokemonObject = {
                            id: index,
                            url: IMAGE_API_URL+index+".png",
                            name: pokemon.name
                        }
                        newPokemonData.push(pokemonObject)
                    
                });
                setPokemonData(newPokemonData)
            }
        })

    }, [])
  return (
    <Box>
        {pokemonData ? pokemonData.map((pokemon) => {
            return (
                <h1 key={pokemon.id}>{pokemon.name}</h1>
            )
        }) : <CircularProgress sx={{marginTop:100}} />}
    </Box>
  )
}

export default Pokedex