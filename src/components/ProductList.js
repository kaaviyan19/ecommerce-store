// ✅ ProductList.jsx
import React, { useState } from 'react';
import productsData from '../data/product';
import ProductCard from './ProductCard';

const ProductList = () => {
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [cart, setCart] = useState([]);

  const handleFilter = (category) => {
    if (category === 'All') {
      setFilteredProducts(productsData);
    } else {
      const filtered = productsData.filter(product => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      console.log('Cart:', updatedCart); // ✅ this shows correct updated cart
      return updatedCart;
    });
  };

  return (
    <div>
      <h2>Our Products</h2>

      <div style={{ marginBottom: '20px' }}>
        <button onClick={() => handleFilter('All')}>All</button>
        <button onClick={() => handleFilter('Electronics')}>Electronics</button>
        <button onClick={() => handleFilter('Toys')}>Toys</button>
        <button onClick={() => handleFilter('Clothing')}>Clothing</button>
      </div>

      <div className="product-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>

      {/* ✅ Cart Display */}
      <h3>Cart Items: {cart.length}</h3>
      <ul>
        {cart.map((item, idx) => (
          <li key={idx}>{item.name} - ₹{item.price.toLocaleString('en-IN')}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
