import { Button, CircularProgress, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { POKEMON_API_URL } from '../config';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { connect } from 'react-redux'
import { toggleFavourite } from '../redux/actions';

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

    console.log(props.favourites)

    const favouriteChecker = (pokemon) => {
        let found = false;
        props.favourites?.map((p) => {
            if(p.id === pokemon.id) {
                found = true
            }
        })

        return found
    }
  return (
    <Box>


        { pokemon ? 
          
        <Box sx={{height:"84vh", backgroundColor:"black", textAlign:"center", borderRadius: 5, paddingTop: 10,}}>

            <Typography sx={{color: "white", textTransform:"upperCase", fontFamily:"Fantasy"}} variant='h1'>{pokemon.name}</Typography>
            <img src={pokemon.sprites.front_default} height="200px" width="200px" />
            
            <img src={pokemon.sprites.front_shiny} height="200px" width="200px" />
            <Box sx={{backgroundColor:"blues"}}>
                <hr style={{height:"0.01mm", width:"95%"}}/>
                <Grid container>
                    <Grid item md={1}>
                        <Button onClick={() => props.toggleFavourite(pokemon)}>
                           <FavoriteIcon sx={{color:favouriteChecker(pokemon) ? "red": "white", height: 50, width:50,}}/> 
                        </Button>
                    </Grid>
                    <Grid item md={2}>
                        <Typography sx={{fontSize: 30, color: "white"}}>
                            Name
                            <br/>
                            {pokemon.name}
                        </Typography>
                    </Grid>
                    <Grid item md={2}>
                        <Typography sx={{fontSize: 30, color: "white"}}>
                            Height
                            <br/>
                            {pokemon.height}m
                        </Typography>
                    </Grid>
                    <Grid item md={2}>
                        <Typography sx={{fontSize: 30, color: "white"}}>
                            Weight
                            <br/>
                            {pokemon.weight}kg
                        </Typography>
                    </Grid>
                    
                        {pokemon.types?.map((type, index) => {
                            const{name} = type.type
                            return(
                                <Grid item md={2} key={index}>
                                <Typography  sx={{color: "white", fontSize: 30, textTransform:"capitalize"}}>
                                    
                                    Type
                                    <br/>
                                    {name}

                                </Typography>
                                </Grid>
                            )
                        })}
                   
                </Grid>

            </Box>
            
        </Box>
            
         : <CircularProgress/> }
    </Box>
  )
}
const mapStateToProps = (state) => ({
    favourites : state.favourites
})

const mapDispatchToProps =(dispatch) => ({
    toggleFavourite : (pokemon) => dispatch(toggleFavourite(pokemon))
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetails)




