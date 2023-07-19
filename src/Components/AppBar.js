import React, { useState } from "react";
import {AppBar, Button, Menu, MenuItem, Tab, Tabs, Toolbar, Typography } from "@mui/material";

const AppBarHandle = () => {
  const[value,Setvalue] = useState();

  const handleChange = (e, val) => {
        Setvalue(val);
  }
  const[anchorElm,SetanchorElm] = useState(null);
  const[open,Setopen] = useState(null);


  const handleClose = () =>{
      SetanchorElm(null);
      Setopen(false);
  }
  const handleClick = (e) => {
      console.log(e.currentTarget);
      SetanchorElm(e.currentTarget);
      Setopen(true);

  }
  return (
    <>
      <AppBar>
      <Toolbar>
          <Typography>LOGO</Typography>
          <Button variant="contained" onClick={handleClick}>Open Menu</Button>
          <Tabs
            indicatorColor="secondary"
            textColor="inherit"
            value={value} 
            onChange={handleChange} 
            aria-label="basic tabs example">

            <Tab label=" One"  />
            <Tab label=" Two"  />
            <Tab label=" Three"  />
        </Tabs>
        
        
          <Menu anchorEl={anchorElm} open={open} onClose={handleClose}>
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>Balance</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
      
          </Menu>
          <Button variant="contained" sx={{marginLeft:"auto"}} color="warning">LOGIN</Button>
    </Toolbar>

    
      </AppBar>
    </>
  );
};

export default AppBarHandle;
