import { Button, Menu, MenuItem, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";


const MenusHandle = () => {
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
    <Button variant="contained" onClick={handleClick}>Open Menu</Button>
    <Button variant="contained" onClick={handleClick}>Open Menu Again</Button>
      <Menu anchorEl={anchorElm} open={open} onClose={handleClose}>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Balance</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
  
      </Menu>
    </>
  );
};

export default MenusHandle;
