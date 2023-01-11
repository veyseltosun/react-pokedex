import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'

const PokemonCard = ({ pokemon, image }) => {
  const { id, name } = pokemon;
  return (
    <Grid item xs={12} sm={2} >

      <Card sx={{ cursor: "pointer", backgroundColor: "black", color: "white", "&:hover": { backgroundColor: "rgb(90, 90, 90)", }, }}>
        <CardMedia sx={{ margin: "auto", width: 130, height: 130, }} image={image}></CardMedia>
        <CardContent sx={{textAlign:"center"}}>
          <Typography>
            {name}
          </Typography>
        </CardContent>
      </Card>

    </Grid>
  )
}

export default PokemonCard