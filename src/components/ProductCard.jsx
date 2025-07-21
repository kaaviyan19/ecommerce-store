import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '16px',
        width: '200px',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '150px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '10px',
          backgroundColor: '#fff',
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
          }}
        />
      </div>
      <h4>{product.name}</h4>
      <p>₹{product.price.toLocaleString('en-IN')}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
