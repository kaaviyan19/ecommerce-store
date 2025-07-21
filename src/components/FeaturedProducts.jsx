// ✅ Always at the top
import React from 'react';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 2599,
      category: 'Electronics',
      image: '/images/Wireless headphone.webp'
    },
    {
      id: 2,
      name: 'Men T-Shirt',
      price: 799,
      category: 'Clothing',
      image: '/images/T-shirt.webp'
    },
    {
      id: 3,
      name: 'Graphics Card RTX 5090',
      price: 410999,
      category: 'Electronics',
      image: '/images/Graphics Card.jpg'
    }
  ];

  return (
    <div style={{ marginTop: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '1rem' }}>
        {products.map((product) => (
          <div key={product.id} style={{
            backgroundColor: 'white',
            padding: '1rem',
            borderRadius: '8px',
            width: '180px',
            textAlign: 'center',
            boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
          }}>
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: '100%',
                height: '150px',
                objectFit: 'contain',
                marginBottom: '1rem'
              }}
            />
            <p>{product.name}</p>
            <p>₹{product.price}</p>
            <button style={{
              backgroundColor: 'teal',
              color: 'white',
              border: 'none',
              padding: '6px 12px',
              cursor: 'pointer'
            }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// ✅ Only ONE export default here
export default FeaturedProducts;
