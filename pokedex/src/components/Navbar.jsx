import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:"black",  }}>
        <Toolbar >
         <Link to="/" style={{textDecoration: "none", color:"white"}} >
          <Typography variant="h5" component="div" sx={{ flexGrow: 1,}}>
            Pokedex
          </Typography>
          </Link>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar