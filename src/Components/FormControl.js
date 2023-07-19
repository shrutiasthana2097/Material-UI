import React, { useState } from "react";
import { TextField, Typography, Button, FormGroup, FormControlLabel, Checkbox, FormControl, InputLabel, Select, MenuItem, FormLabel, RadioGroup, Radio } from "@mui/material";

const TextFieldFormhandle = () => {
  const [inputs, Setinputs] = useState({
    name: "Shruti Asthana",
    email: "shru200297@gmail.com",
    password: "",
    subscribe:true,
    age:undefined,
    gender:""
  });

  const handleChange = (e) => {
    /*Setinputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));*/
    const inputCopy = {...inputs};
    inputCopy[e.target.name]=e.target.value;
    Setinputs(inputCopy);
    console.log("second commit");
  };

  const handleSubmit = (e) => {

      e.preventDefault();
      console.log(inputs);
  };

  const HandleCheckBoxChange = () => {
    let stateCopy = {...inputs};
    stateCopy.subscribe=!stateCopy.subscribe;
    Setinputs(stateCopy);
  }

  return (
    <>
      <form onSubmit={handleSubmit} style={{display : "flex", flexDirection : "column",margin:"20px"}}>
        <TextField
          name="name"
          value={inputs.name}
          onChange={handleChange}
          type="text"
          sx={{ margin: 3 }}
          placeholder="Name"
          variant="outlined"
        />

        <TextField
          name="email"
          value={inputs.email}
          onChange={handleChange}
          type="text"
          sx={{ margin: 3 }}
          placeholder="Email"
          variant="standard"
        />

        <TextField
          id="filled-password-input"
          name="password"
          label="Password"
          type="password"
          sx={{ margin: 3 }}
          value={inputs.password}
          onChange={handleChange}
          autoComplete="current-password"
          variant="filled"
        />

        <Typography>The entered name is : {inputs.name}</Typography>
        <Typography>The entered email is : {inputs.email}</Typography>
        <Typography>The entered password is : {inputs.password}</Typography>

        <FormGroup>
          <FormControlLabel 
          control={
          <Checkbox
          checked={inputs.subscribe} 
          onChange={HandleCheckBoxChange}/>} 
          label="Subscribe to Newsletter" />
  
        </FormGroup>

        <FormControl fullWidth>
          <InputLabel>Age</InputLabel>
          <Select
            value={inputs.age}
            label="Age"
            name="age"
            onChange={handleChange}>

            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel >Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="gander"
            onChange={handleChange}
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
        <Button variant="contained" type="submit"> Submit </Button>
      </form>
    </>
  );
};

export default TextFieldFormhandle;
