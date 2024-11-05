import React from 'react';
import { AppBar, Typography, Toolbar, Button } from "@mui/material";
import { Link } from 'react-router-dom';
import { Logout } from './Logout';

export const Navbar = ({ user, setUser }) => {
    const button = { marginRight: '20px', fontSize: '1.2rem', fontWeight: '700', padding: '0.3rem 1.4rem' };
    return (
        <>
            <AppBar>
                <Toolbar>
                    <Typography variant="h4" sx={{ flexGrow: 1 }}>Online Gaming Store</Typography>

                    {/* Show Login and Signup when user is not logged in */}
                    {!user && (
                        <>
                            <Button style={button} color="error" variant="contained" to="/login" component={Link}>Login</Button>
                            <Button style={button} color="success" variant="contained" to="/signup" component={Link}>Signup</Button>
                        </>
                    )}

                    {/* Show Home, Product, Cart, and Logout when user is logged in */}
                    {user && (
                        <>
                            <Button style={button} color="success" variant="contained" to="/home" component={Link}>Home</Button>
                            <Button style={button} color="success" variant="contained" to="/product" component={Link}>Product</Button>
                            <Button style={button} color="error" variant="contained" to="/cart" component={Link}>&#128722;</Button>
                            <Logout setUser={setUser} />
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </>
    );
};
