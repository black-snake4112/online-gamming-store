import React from 'react';
import { Grid, Typography, Button, Card, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';



export const Home = () => {
  
  const products = [
    { id: 1, name: 'Gaming Laptop',description: 'High performance laptop for gaming.',price: '$1200',image: './src/images/f1.jpg' ,},
    { id: 2, name: 'Gaming Mouse',description: 'High precision gaming mouse.',price: '$50',image: './src/images/f2.webp',  },
    { id: 3, name: 'Gaming Chair',description: 'Comfortable chair for long gaming sessions.',price: '$200',image: './src/images/f4.jpg',},
    
  ];

  const cardStyle = { maxWidth: 345,margin: 'auto',padding: '0.5rem',
  };
return (
  <Grid container spacing={2} sx={{ padding: '2rem' , paddingTop: '30rem'}}>





<Grid item xs={12}>
        <div style={{ backgroundColor: '#cce7ff', padding: '2rem', textAlign: 'center', borderRadius: '10px' }}>
          <Typography variant="h4" component="div">  Welcome to Online Gaming Store &#128578; </Typography>
          <Typography variant="h6" component="div" sx={{ marginTop: '1rem' }}> Your one-stop shop for all gaming needs</Typography>
          <Button variant="contained" color="primary" to="/product" component={Link} sx={{ marginTop: '1rem' }}> Shop Now </Button>
        </div>
      </Grid>
      {/* Promotional Banner */}
      <Grid item xs={12}>
        <div style={{ backgroundColor: '#cce7ff', padding: '2rem', textAlign: 'center', borderRadius: '10px' }}>
          <Typography variant="h4" component="div">   &#127775;&#127775;&#127775;&#127775;&#127775; </Typography>
          <Typography variant="h6" component="div" sx={{ marginTop: '1rem' }}> yaaaaaaaaahoooooo Login Success</Typography>
          <Button variant="contained" color="primary" to="/product" component={Link} sx={{ marginTop: '1rem' }}> &#128722; </Button>
        </div>
      </Grid>

      {/* Featured Products */}
      <Grid item xs={12}><Typography variant="h5" sx={{ marginBottom: '1rem' }}>  Featured Products </Typography></Grid>

      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card style={cardStyle}>
            <CardMedia
              component="img"
              height="140"
              image={product.image}
              alt={product.name}
              style={{ objectFit: 'contain', width: '100%',  }}
             
              
            />


           
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">  {product.name} </Typography>
              <Typography variant="body2" color="text.secondary"> {product.description}  </Typography>
              <Typography variant="h6" color="primary"> {product.price} </Typography>
              <Button variant="contained" color="primary" to="/product" component={Link} sx={{ marginTop: '1rem' }}> Shop Now </Button>
            </CardContent>
          </Card>
        </Grid>
        
      ))}

    </Grid>
   
  );
};

