import { CardContent, CardMedia, Grid, Typography, Card} from '@mui/material';
import { Box } from '@mui/system';

import React from 'react'
import { Link } from 'react-router-dom';
import "./card.css";



function PokemonCard({pokemon, image}) {
    // const {pokemon} = props
    const {id, name} = pokemon;

  return (
   <Grid item xs={12} sm={2} className="grid">

    <Link to={"/pokemon/" + id} style={{textDecoration:"none"}}>

   <Box className="box" >

    <Card className="card" style={{ textAlign:"center"}} >
        <CardMedia image={image} style={{margin:"auto", width:"130px", height:"130px"}}></CardMedia>
        <CardContent >
            <Typography style={{color:"black"}}>
                {name}
            </Typography>
        </CardContent>
    </Card>
   </Box>
    </Link>
   
    
   </Grid>
  )
}

export default PokemonCard