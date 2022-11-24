import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React,{useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import { POKEMON_API_URL } from '../config';
import FavoriteIcon from "@mui/icons-material/Favorite"
import { toggleFavourite } from "../redux/actions";


function PokemonDetails(props) {
    const[pokemon, setPokemon] = useState(null);
    const{id} = useParams()
    
    useEffect(()=>{
        
        axios.get(POKEMON_API_URL + "/" + id).then((response) => {
            if(response.status >= 200 && response.status < 300) {
                setPokemon(response.data);
                
                
                
            }
        })
    }, [])

    const favouriteChecker = (pokemon)  =>{
        let found = false
        this.props.favourites?.map((p) => {
          if(p.id === pokemon.id) {
            found = true
          }
        })
        return found
      };
      const mapStateToProps = (state) => ({
        favourites: state.favourites
      });
      
      const mapDispatchToProps = (dispatch) => ({
        toggleFavourite: (pokemon) => dispatch(toggleFavourite(pokemon)),
      });
      
      export default withStyles(styles)(
        connect(mapStateToProps, mapDispatchToProps)(PokemonDetails)
      );
    

 

   


   return (
    <Box>
        {pokemon ? <Box style={{height:"80vh", backgroundColor:"black", textAlign:"center", borderRadius:"5px"}}>
                
                <Box style={{paddingTop:"20px"}}>
                    <Typography variant='h2' style={{textTransform:"upperCase", fontFamily:"Chalkduster", color:"white"}}>
                        {pokemon.name}
                    </Typography>
                    
                    <img src={pokemon.sprites.front_default} style={{height:"190px", weight:"180px"}}/>
                    <Box style={{bottom:"60", position:"absolute", width:"99%"}}>
                        <hr style={{height:"0.01mm", width:"99%"}}></hr>
                        <Grid container spacing={2}>
                            <Grid item md={1}>
                                <Button style={{height:"50", weight:"50", marginTop:"15"}} onClick={() => this.props.toggleFavourite(pokemon)}>
    
                                    <FavoriteIcon style={{ color: this.favouriteChecker(pokemon) ? "red" : "white", fontSize:"50px"}}></FavoriteIcon>
    
                                </Button>
                            </Grid>
                            <Grid item md={2}>
                                <Typography style={{color:"white",fontSize:"30px"}}>
                                    Name
                                    <br/>
                                    {pokemon.name} 
    
                                </Typography>
    
                            </Grid>
                            <Grid item md={2}>
                                <Typography style={{color:"white",fontSize:"30px"}}>
                                    Height
                                    <br/>
                                    {pokemon.height}m
    
                                </Typography>
    
                            </Grid>
                            <Grid item md={2}>
                                <Typography style={{color:"white",fontSize:"30px"}}>
                                    Weight
                                    <br/>
                                    {pokemon.weight}kg 
    
                                </Typography>
    
                            </Grid>
                            {pokemon.types.map((type,index)=>{
                                const {name} = type.type;
                                console.log("name",name);
                                return(
                                    <Grid item md={2} key={index}>
                                      <Typography style={{color:"white",fontSize:"30px"}} >
                                         Type
                                        < br/>
                                       {name}
    
                                      </Typography>
    
                                    </Grid>
                                )
                            })
    
                            }
                        </Grid>
    
        
    
                    </Box>
                </Box>
    
              </Box> : null }

    </Box>
    
  )
}

export default PokemonDetails