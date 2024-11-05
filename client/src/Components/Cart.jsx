import React from 'react';
import { useNavigate } from 'react-router-dom';


export const Cart = ({ cart, removeFromCart, calculateTotalPrice }) => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty <br /> Add items to cart from Products</p>
      ) : (
        <div>
          {cart.map((product) => (
            <div key={product.id} style={{ borderBottom: '1px solid #ccc', paddingBottom: '10px', marginBottom: '10px' }}>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button onClick={() => removeFromCart(product.id)}>Remove</button>
            </div>
          ))}
          <h3>Total: {calculateTotalPrice()}rs</h3>
          <button onClick={() => navigate('/checkout')} style={{ marginTop: '20px', padding: '10px 20px', fontSize: '16px' }}>
  Proceed to Checkout
</button>

        </div>
      )}
    </div>
  );
};
