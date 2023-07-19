import { Tab, Tabs } from "@mui/material";
import React, { useState } from "react";


const TabsHandle = () => {
const[value,Setvalue] = useState();

const handleChange = (e, val) => {
    Setvalue(val);
}
  return (
    <>
       <Tabs
            indicatorColor="secondary"
            textColor="secondary"
            value={value} 
            onChange={handleChange} 
            aria-label="basic tabs example">

            <Tab label=" One"  />
            <Tab label=" Two"  />
            <Tab label=" Three"  />
       </Tabs>
    </>
  );
};

export default TabsHandle;
