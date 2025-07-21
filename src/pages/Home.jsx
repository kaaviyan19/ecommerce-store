// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import FeaturedProducts from '../components/FeaturedProducts';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      {/* Hero Section */}
      <section className="hero" style={{ marginBottom: '2rem' }}>
        <h1>Welcome to MyShop</h1>
        <p>Find the best products at unbeatable prices</p>
        <Link to="/products">
          <button style={{
            backgroundColor: 'teal',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            fontSize: '1rem',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '1rem'
          }}>
            Shop Now
          </button>
        </Link>
      </section>

      {/* Featured Products */}
      <section>
        <FeaturedProducts />
      </section>
    </div>
  );
};

export default Home;
