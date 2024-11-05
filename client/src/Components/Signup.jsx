import { Grid, Paper, TextField, Typography, Button } from '@mui/material'
import React, {useState} from 'react' ;
import axios from "axios" ;
import {useNavigate} from "react-router-dom";

export const Signup = () => {
  const heading={fontsize:"2.5rem", fontWeight:"600"};
  const paperStyle={padding:"2rem" , margin:"100px auto",borderRadius:"1rem", boxShadow:"10px 10px 10px"}
 const row={display:"flex", marginTop:"2rem"}
 const btnStyle={marginTop:"2rem", fontsize:"1.2rem", fontWeight:"700", backgroundColor:"blue", borderRadius:"0.5rem"}
  
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
const Navigate = useNavigate();

 const handleSignup=(e)=>{
      e.preventDefault();
      axios.post("http://localhost:3001/Signup", {name, email, password})
      .then(result=>{

            if (result.status === 201){
              Navigate("/Login");
             console.log ("User created successfully")
             
            }
      })
      .catch(err=>{
        if (err.response && (err.response.status===400)){
          window.alert("Email already esists. Please use a different email")
        }else{
          console.log(err)

        }
      })
}



 return (
    <>
          <Grid align="center">
            <Paper style={paperStyle} sx={{width:{
              xs:"80vw",
              sm:"50vw",
              md:"40vw",
              lg:"30vw",
              xl:"20vw"
            },                   
              height:'60vh'}}>

                {/*typography is the heading of sign up on page in center*/}
                <Typography style={heading}>Signup</Typography>

                <form onSubmit={handleSignup}>

                  <TextField onChange={(e)=>setName(e.target.value)}name="name" required sx={{label: {fontWeight:'700', fontsize:"1.3rem"}}}style={row} label="Enter Name" type="text"></TextField>
                  <TextField onChange={(e)=>setEmail(e.target.value)}name="email" required sx={{label: {fontWeight:'700', fontsize:"1.3rem"}}} style={row} label="Enter Email" type="email"></TextField>
                  <TextField onChange={(e)=>setPassword(e.target.value)}name="password" required sx={{label: {fontWeight:'700', fontsize:"1.3rem"}}} style={row} label="Enter Password" type="password"></TextField>
                  <Button type="submit" variant="contained" style={btnStyle}>Signup</Button>
                </form>
            </Paper>
          </Grid>
    </>
  )
}
 