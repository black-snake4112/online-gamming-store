import React, { useState } from 'react';
import { TextField, Button, Typography, Grid, Paper, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const Checkout = ({ cart, calculateTotalPrice, clearCart }) => {
    const [shippingDetails, setShippingDetails] = useState({
        fullName: '',
        address: '',
        city: '',
        postalCode: '',
        country: '',
    });

    const [paymentMethod, setPaymentMethod] = useState('');
    const [transactionID, setTransactionID] = useState('');

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setShippingDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };

    const handlePaymentChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    const handleTransactionIDChange = (e) => {
        setTransactionID(e.target.value);
    };

    const handleCheckout = () => {
        // Here, you'd normally send the shipping and payment details to the backend for processing.
        alert(`Order placed successfully using ${paymentMethod}!`);
        clearCart(); // Clear the cart after successful order
        navigate('/home'); // Redirect to the home page after checkout
    };

    return (
        <Grid container justifyContent="center" spacing={2} sx={{ padding: '2rem', paddingTop: '400px' }}>
            <Grid item xs={12} md={8}>
                <Paper sx={{ padding: '2rem' }}>
                    <Typography variant="h4" gutterBottom>
                        Checkout
                    </Typography>

                    <Typography variant="h6" gutterBottom>
                        Shipping Details
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                label="Full Name"
                                name="fullName"
                                value={shippingDetails.fullName}
                                onChange={handleInputChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Address"
                                name="address"
                                value={shippingDetails.address}
                                onChange={handleInputChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="City"
                                name="city"
                                value={shippingDetails.city}
                                onChange={handleInputChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                label="Postal Code"
                                name="postalCode"
                                value={shippingDetails.postalCode}
                                onChange={handleInputChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                label="Country"
                                name="country"
                                value={shippingDetails.country}
                                onChange={handleInputChange}
                                fullWidth
                                required
                            />
                        </Grid>
                    </Grid>

                    <Typography variant="h6" gutterBottom sx={{ marginTop: '2rem' }}>
                        Payment Details
                    </Typography>
                    <FormControl fullWidth sx={{ marginTop: '1rem' }}>
                        <InputLabel id="payment-method-label">Payment Method</InputLabel>
                        <Select
                            labelId="payment-method-label"
                            value={paymentMethod}
                            label="Payment Method"
                            onChange={handlePaymentChange}
                            required
                        >
                            <MenuItem value="JazzCash">JazzCash</MenuItem>
                            <MenuItem value="EasyPaisa">EasyPaisa</MenuItem>
                        </Select>
                    </FormControl>

                    {paymentMethod && (
                        <Grid container spacing={2} sx={{ marginTop: '1rem' }}>
                            <Grid item xs={12}>
                                <Typography variant="body1">
                                    {paymentMethod} Account Details:
                                </Typography>
                                <Typography variant="body2">
                                    Account No: 03091474977
                                </Typography>
                                <Typography variant="body2">
                                    Name: Saad Hassan
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Transaction ID"
                                    value={transactionID}
                                    onChange={handleTransactionIDChange}
                                    fullWidth
                                    required
                                />
                            </Grid>
                        </Grid>
                    )}

                    <Typography variant="h6" gutterBottom sx={{ marginTop: '2rem' }}>
                        Order Summary
                    </Typography>
                    {cart.map((item) => (
                        <Typography key={item.id}>
                            {item.name}: {item.price}
                        </Typography>
                    ))}
                    <Typography variant="h6" sx={{ marginTop: '1rem' }}>
                        Total: {calculateTotalPrice()} Rs
                    </Typography>

                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleCheckout}
                        sx={{ marginTop: '2rem' }}
                    >
                        Place Order
                    </Button>
                </Paper>
            </Grid>
        </Grid>
    );
};
