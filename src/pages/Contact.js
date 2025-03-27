import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h2>Contact Us</h2>
        <form style={{ maxWidth: '500px', margin: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
