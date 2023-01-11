import { CircularProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { POKEMON_API_URL } from '../config';

const PokemonDetails = (props) => {
    const [pokemon, setPokemon] = useState(null)
    const {id} = useParams();
    useEffect(() => {
        axios.get(POKEMON_API_URL + "/" + id).then((response) => {
            if(response.status >= 200 && response.status < 300){
                setPokemon(response.data)
                console.log(response.data)
            }
        })
    }, [])
  return (
    <Box>

        { pokemon ? 
          
        <Box sx={{height:"700vh", backgroundColor:"black", textAlign:"center", borderRadius: 5, paddingTop: 10,}}>

            <Typography sx={{color: "white", textTransform:"upperCase", fontFamily:"Fantasy"}} variant='h1'>{pokemon.name}</Typography>
            <img src={pokemon.sprites.front_default} height="200px" weight="200px" />
            
        </Box>
            
         : <CircularProgress/> }
    </Box>
  )
}

export default PokemonDetails