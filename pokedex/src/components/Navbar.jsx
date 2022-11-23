
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom";



export default function Navbar() {
  return (
   

    <Box sx={{ flexGrow: 1 }} style={{padding:"20px"}}>
      <AppBar position="fixed" style={{backgroundColor:"black"}}>
        <Toolbar variant="dense" >
          <Link to="/" className='Link' style={{textDecoration:"none", color:"white"}}>
          <Typography  variant="h6" color="inherit" component="div">
            Pokedex
          </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
    
  );
}