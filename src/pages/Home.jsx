// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import FeaturedProducts from '../components/FeaturedProducts';

const Home = () => {
  return (
    <div className="home-content">
      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to MyShop</h1>
        <p>Find the best products at unbeatable prices</p>
        <Link to="/products"><button className="cta-button">Shop Now</button></Link>
      </section>

      {/* Featured Products */}
      <section className="featured">
        <h2>Featured Products</h2>
        <FeaturedProducts />
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <h2>Why Choose Us</h2>
        <ul>
          <li>✅ Free Shipping</li>
          <li>✅ 24/7 Support</li>
          <li>✅ Easy Returns</li>
          <li>✅ Secure Payments</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;