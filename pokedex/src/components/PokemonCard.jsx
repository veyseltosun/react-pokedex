import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

const PokemonCard = ({ pokemon, image }) => {
  const { id, name } = pokemon;
  return (
    <Grid item xs={12} sm={2} >

      <Link to={"/pokemon/" + id } style={{textDecoration:"none"}}>

        <Card sx={{ cursor: "pointer", backgroundColor: "black", color: "white", "&:hover": { backgroundColor: "rgb(90, 90, 90)", }, }}>
          <CardMedia sx={{ margin: "auto", width: 130, height: 130, }} image={image}></CardMedia>
          <CardContent sx={{ textAlign: "center" }}>
            <Typography>
              {name}
            </Typography>
          </CardContent>
        </Card>

      </Link>


    </Grid>
  )
}

export default PokemonCard