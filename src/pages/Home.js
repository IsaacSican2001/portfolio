import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <section style={{ padding: '2rem', textAlign: 'center' }}>
          <h2>Welcome to Our Team Portfolio</h2>
          <p>Discover our projects, meet our team, and learn more about what we do.</p>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
