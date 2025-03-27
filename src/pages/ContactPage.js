import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Implement form submission logic here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <Navbar />
      <main style={styles.container}>
        <h2>Contact Us</h2>
        <form style={styles.form} onSubmit={handleSubmit}>
          <input
            style={styles.input}
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            style={styles.input}
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            style={styles.textarea}
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button className="neon-button" type="submit">
            Send Message
          </button>
        </form>
        <div style={styles.socialContainer}>
          <h3>Connect with Us</h3>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noreferrer">
              <i className="fab fa-github" />
            </a>
            <a href="#" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin" />
            </a>
            {/* Add more links if needed */}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

const styles = {
  container: {
    padding: '2rem',
    textAlign: 'center',
  },
  form: {
    maxWidth: '400px',
    margin: '1rem auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '0.8rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  textarea: {
    padding: '0.8rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    minHeight: '120px',
  },
  socialContainer: {
    marginTop: '2rem',
  },
};

export default ContactPage;
