import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { connect } from 'react-redux'
import PokemonCard from '../components/PokemonCard'

export const Favourites = (props) => {
    const{favourites} = props
  return (
    <Box>
        <Grid container spacing={2} sx={{height:"100vh", backgroundColor:"rgb(68,68,68)", textAlign:"center", paddingTop: 5}}>
           {favourites.map((pokemon) => {
            return(
                <PokemonCard key={pokemon.id} pokemon={pokemon} image={pokemon.sprites.front_default}/>
            )
           })}
        </Grid>
    </Box>
  )
}

const mapStateToProps = (state) => ({
    favourites : state.favourites
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Favourites)