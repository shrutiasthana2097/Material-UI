
import React,{useState} from 'react';
import {TextField, Typography} from '@mui/material';

function TextFieldhandle() {
    const [name, Setname] = useState("Shruti Asthana");
    const [email, Setemail] = useState("shruti200297@gmail.com");
    return (
    <>
        

        <TextField
        value={name}
        onChange={(e)=>Setname(e.target.value)}
        type="text"
        sx={{margin:3}}
        placeholder='Name'
        variant="outlined"
        />

        <TextField
        value={email}
        onChange={(e)=>Setemail(e.target.value)}
        type="text"
        sx={{margin:3}}
        placeholder='Email'
        variant="standard"
        />

        <TextField
            id="filled-password-input"
            label="Password"
            type="password"
            sx={{margin:3}}
            autoComplete="current-password"
            variant="filled"
        />

        <Typography>The entered name is : {name}</Typography>
        <Typography>The entered email is : {email}</Typography>
    </>
  );
}

export default TextFieldhandle;
