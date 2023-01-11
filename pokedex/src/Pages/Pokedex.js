import React, {useEffect} from 'react';
import axios from "axios";
import { IMAGE_API_URL, POKEMON_API_URL } from '../config';
import CircularProgress from '@mui/material/CircularProgress';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import PokemonCard from '../components/PokemonCard';



const Pokedex = () => {
    const[pokemonData, setPokemonData] = React.useState(null)
    useEffect(() => {

        axios.get(POKEMON_API_URL + "?limit=800").then((response) => {
            if(response.status >= 200 && response.status < 300) {
                const {results} = response.data;
                let newPokemonData = [] ;
                results.forEach((pokemon, index) => {
                    index++
               
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
    <Box sx={{backgroundColor:"rgb(68, 68, 68)"}}>
        {pokemonData ? <Grid container spacing={2}>
            {pokemonData.map((pokemon) => {
            return (
                <PokemonCard pokemon={pokemon} image={pokemon.url} key={pokemon.id}/>
            )
        })}
        </Grid> : <CircularProgress sx={{marginTop:100}} />}
    </Box>
  )
}

export default Pokedex