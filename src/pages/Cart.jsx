// src/pages/Cart.jsx
import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <img
                src={item.image}
                alt={item.name}
                style={{ width: '60px', height: '60px', marginRight: '10px' }}
              />
              <div style={{ flex: 1 }}>
                <strong>{item.name}</strong>
                <p>
                  ₹{item.price.toLocaleString('en-IN')} × {item.quantity} = ₹
                  {(item.price * item.quantity).toLocaleString('en-IN')}
                </p>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <hr />
          <h3>Total: ₹{total.toLocaleString('en-IN')}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
