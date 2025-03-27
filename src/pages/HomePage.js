import React from 'react';
import './HomePage.css'; // Optionally create a separate CSS file or reuse neon.css
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="hero-section">
        <h2 className="neon-text">Welcome to Our Team</h2>
        <p>
          We are a dynamic group of developers committed to building world-class
          digital experiences.
        </p>
        <button className="neon-button">Learn More</button>
      </div>
      <section style={{ padding: '2rem' }}>
        <h3>Mission</h3>
        <p>
          To innovate and deliver cutting-edge solutions that empower businesses
          and enrich user experiences.
        </p>
        <h3>Vision</h3>
        <p>
          To be a leading force in technology, driving change through
          collaboration, creativity, and continuous learning.
        </p>
      </section>
      <Footer />
    </>
  );
};

export default HomePage;
