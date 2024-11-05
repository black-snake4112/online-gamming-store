import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./Components/Login";
import { Signup } from "./Components/Signup";
import { Home } from "./Components/Home";
import { Navbar } from "./Components/Navbar";
import { Product } from "./Components/Product";
import { Cart } from "./Components/Cart";
import { Checkout } from "./Components/Checkout"; // Import Checkout



function App() {
    const [user, setUser] = useState(null);
    const [cart, setCart] = useState([]); // State for cart

    useEffect(() => {
        // If you want to persist login status, add code here to check for existing session.
    }, []);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
    };

    const calculateTotalPrice = () => {
        return cart.reduce((total, product) => total + parseFloat(product.price.replace(/[^0-9.-]+/g,"")), 0);
    };

    const clearCart = () => {
        setCart([]); // Clear the cart
    };

    return (
        <BrowserRouter>
            <Navbar user={user} setUser={setUser} />
            <Routes>
                <Route path="/login" element={<Login setUser={setUser} />} />
                <Route path="/signup" element={<Signup />} />
                {user ? (
                    <>
                        <Route path="/home" element={<Home />} />
                        <Route path="/product" element={<Product addToCart={addToCart} />} />
                        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} calculateTotalPrice={calculateTotalPrice} />} />
                        <Route path="/checkout" element={<Checkout cart={cart} calculateTotalPrice={calculateTotalPrice} clearCart={clearCart} />} />
                       
                    </>
                ) : (
                    <Route path="*" element={<Login setUser={setUser} />} />
                )}
            </Routes>
            
                
               
           

        </BrowserRouter>
        
    );   
}


export default App;
