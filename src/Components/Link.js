import { Link, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";


const LinkHandle = () => {

  return (
    <>
       <Link 
       href="https://www.google.co.in/webhp" 
       color="primary" 
       underline="hover"
       variant="h2"> 
       Visit Google
       </Link>
    </>
  );
};

export default LinkHandle;
