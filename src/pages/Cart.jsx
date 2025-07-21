// src/pages/Cart.jsx
import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} style={{ marginBottom: '10px' }}>
              <img
                src={item.image}
                alt={item.name}
                style={{ width: '60px', height: 'auto', marginRight: '10px' }}
              />
              {item.name} — ₹{item.price.toLocaleString('en-IN')}
            </div>
          ))}
          <h3>Total: ₹{total.toLocaleString('en-IN')}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
