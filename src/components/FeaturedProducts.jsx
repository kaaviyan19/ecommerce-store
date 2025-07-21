import React from 'react';
import { useCart } from '../context/CartContext'; // ✅ useCart hook

const FeaturedProducts = () => {
  const { cart, addToCart } = useCart();

  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 2599,
      category: 'Electronics',
      image: require('../assets/images/Wireless headphone.webp'),
    },
    {
      id: 2,
      name: 'Men T-Shirt',
      price: 799,
      category: 'Clothing',
      image: require('../assets/images/T-shirt.webp'),
    },
    {
      id: 3,
      name: 'Graphics Card RTX 5090',
      price: 410999,
      category: 'Electronics',
      image: require('../assets/images/Graphics Card.jpg'),
    },
  ];

  return (
    <div style={{ marginTop: '2rem', textAlign: 'center' }}>
      <h2>Newly Added Products</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          marginTop: '1rem',
          flexWrap: 'wrap',
        }}
      >
        {products.map((product) => {
          const inCart = cart.find((item) => item.id === product.id);

          return (
            <div
              key={product.id}
              style={{
                backgroundColor: 'white',
                padding: '1rem',
                borderRadius: '8px',
                width: '200px',
                boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
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
              <h4 style={{ margin: '0.5rem 0' }}>{product.name}</h4>
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
                  borderRadius: '4px',
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

export default FeaturedProducts;
