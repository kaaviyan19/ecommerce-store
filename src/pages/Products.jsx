import React, { useState, useContext } from 'react';
import products from '../data/products';
import ProductCard from '../components/ProductCard';
import { CartContext } from '../context/CartContext'; // ✅ import context

const Products = () => {
  const [filter, setFilter] = useState('All');
  const { addToCart } = useContext(CartContext); // ✅ get addToCart from context

  const filteredProducts =
    filter === 'All' ? products : products.filter((p) => p.category === filter);

  return (
    <div>
      <h2>Products</h2>
      <select onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Toys">Toys</option>
      </select>

      <div className="product-grid">
  {filteredProducts.map((product) => (
    <ProductCard key={product.id} product={product} addToCart={addToCart} />
  ))}
</div>
    </div>
  );
};

export default Products;
