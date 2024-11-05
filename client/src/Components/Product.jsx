import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Product = ({ addToCart }) => {
  const navigate = useNavigate();
  const products = [
    { id: 1, name: "Airpods pro , wireless", price: "2000rs", imageUrl: "./src/images/p1.webp" },
    { id: 2, name: "Wireless Gaming headphones ", price: "8000rs", imageUrl: "./src/images/p2.jpg" },
    { id: 3, name: "Orignal C-Type cable & Adapter", price: "1800", imageUrl: "./src/images/p3.jpg" },
    { id: 4, name: "Iphone 12,13,14,15 Pro max While, Black, Purpule", price: "300000rs", imageUrl: "./src/images/p4.jpg" },
    { id: 5, name: "Wireless Smart Watches with long lasting battery", price: "17000rs", imageUrl: "./src/images/p5.jpg" },
    { id: 6, name: " Wireless Smart Watches with long lasting battery ", price: "17000rs ", imageUrl: "./src/images/p6.png" },
    { id: 7, name: "Canon Digital Camera ", price: "64500rs ", imageUrl: "./src/images/p7.jpeg" },
    { id: 8, name: "Tripod Stand for video recording", price: "3199rs", imageUrl: "./src/images/p8.jpg" },
    { id: 9, name: "PlayStation orignal games", price: "5000rs", imageUrl: "./src/images/f8.jpg" },
    { id: 10, name: "Midasbuy 60+60 Uc purchase for Pubg", price: "325rs", imageUrl: "./src/images/f7.jpg" },
    {id: 11, name: "PlayStation Console, and wireless remotes", price: "150000rs", imageUrl: "./src/images/f6.webp" },
    { id: 12, name: "Stylish gaming wireless remote", price: "7500rs", imageUrl: "./src/images/f5.jpg" },
    { id: 13, name: "Gaming Chair , comfortable and stylish", price: "55000rs", imageUrl: "./src/images/f4.jpg" },
    { id: 14, name: "Lightening Gaming Keyboard", price: "4300rs", imageUrl: "./src/images/f3.jpg" },
    {id: 15, name: "Lightening Gaming wireless mouse", price: "1700rs", imageUrl: "./src/images/f2.webp" },
    { id: 16, name: "Awsome Gaming Laptops", price: "87000", imageUrl: "./src/images/f1.jpg" },

  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '20px' , height: '600px'  }}>
      {products.map(product => (
        <div key={product.id} style={{ border: '1px solid #ccc', padding: '20px', width: '200px', textAlign: 'center' }}>
          <img src={product.imageUrl} alt={product.name} style={{ width: '100%', height: '150px', objectFit: 'contain' }} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button onClick={() => handleAddToCart(product)}> &#128722; Add to Cart</button>
        </div>
      ))}
    </div>
  );
};
