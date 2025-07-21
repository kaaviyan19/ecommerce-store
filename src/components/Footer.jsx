// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: '#333',
      color: 'white',
      padding: '1rem',
      textAlign: 'center',
      marginTop: '0'
    }}>
      <p>&copy; {new Date().getFullYear()} MyShop. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
