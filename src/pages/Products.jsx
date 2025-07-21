// src/pages/Products.jsx
import React, { useState } from 'react';
import products from '../data/products';
import { useCart } from '../context/CartContext'; // ✅ using hook

const Products = () => {
  const [filter, setFilter] = useState('All');
  const { cart, addToCart } = useCart(); // ✅ use cart and addToCart

  const filteredProducts =
    filter === 'All' ? products : products.filter((p) => p.category === filter);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Products</h2>
      <select
        onChange={(e) => setFilter(e.target.value)}
        style={{ marginBottom: '1rem', padding: '0.5rem' }}
      >
        <option value="All">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Toys">Toys</option>
      </select>

      <div
        className="product-grid"
        style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}
      >
        {filteredProducts.map((product) => {
          const inCart = cart.find((item) => item.id === product.id);

          return (
            <div
              key={product.id}
              style={{
                backgroundColor: 'white',
                padding: '1rem',
                borderRadius: '8px',
                width: '220px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
                textAlign: 'center',
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: '100%',
                  height: '150px',
                  objectFit: 'contain',
                  marginBottom: '1rem',
                }}
              />
              <h4>{product.name}</h4>
              <p style={{ fontWeight: 'bold', color: '#333', marginBottom: '0.5rem' }}>
                ₹{product.price.toLocaleString('en-IN')}
              </p>
              <button
                onClick={() => addToCart(product)}
                disabled={inCart}
                style={{
                  backgroundColor: inCart ? 'gray' : 'teal',
                  color: 'white',
                  border: 'none',
                  padding: '6px 12px',
                  cursor: inCart ? 'not-allowed' : 'pointer',
                  borderRadius: '4px'
                }}
              >
                {inCart ? 'Added' : 'Add to Cart'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
