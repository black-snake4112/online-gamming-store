import React, { useState } from 'react';
import { Grid, Paper, TextField, Typography, Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Login = ({ setUser }) => {
    const heading = { fontSize: "2.5rem", fontWeight: "600" };
    const paperStyle = { padding: "2rem", margin: "100px auto", borderRadius: "1rem", boxShadow: "10px 10px 10px" };
    const row = { display: "flex", marginTop: "2rem" };
    const btnStyle = { marginTop: "2rem", fontSize: "1.2rem", fontWeight: "700", backgroundColor: "blue", borderRadius: "0.5rem" };
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        axios.post("http://localhost:3001/login", { email, password }, { withCredentials: true })
            .then(result => {
                if (result.data === "Success") {
                    axios.get("http://localhost:3001/user", { withCredentials: true })
                        .then(response => {
                            if (response.data.user) {
                                setUser(response.data.user);
                                navigate("/home");
                            }
                        });
                } else {
                    alert("Login failed: User does not exist");
                }
            })
            .catch(err => console.log(err));
    };

    return (
        <Grid align="center">
            <Paper style={paperStyle} sx={{ width: { xs: "80vw", sm: "50vw", md: "40vw", lg: "30vw", xl: "20vw" }, height: '60vh' }}>
                <Typography style={heading}>Login</Typography>
                <form onSubmit={handleLogin}>
                    <TextField onChange={(e) => setEmail(e.target.value)} name="email" style={row} label="Enter Email" type="email" />
                    <TextField onChange={(e) => setPassword(e.target.value)} name='password' style={row} label="Enter Password" type="password" />
                    <Button type="submit" variant="contained" style={btnStyle}>Login</Button>
                </form>
            </Paper>
        </Grid>
    );
};
