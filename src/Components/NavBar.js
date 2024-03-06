import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Home from './Home';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate =useNavigate()
const loginhandle=()=>{
navigate("/login")
}

  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>    
       <h3></h3>
        <Button color='inherit' onClick={loginhandle}>Login</Button>
      </Toolbar>
    </AppBar>
  </Box>
      <Home />
    </div>
  );
}

export default NavBar;
