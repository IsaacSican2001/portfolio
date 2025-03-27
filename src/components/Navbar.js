import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'; // Example: your team logo

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logoContainer}>
        {/* If you have a logo image, include it here */}
        <img src={logo} alt="Team Logo" style={styles.logo} />
        <h1 style={styles.title}>Team Name</h1>
      </div>
      <ul style={styles.navLinks}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/team">Team Members</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '1rem 2rem',
    backgroundColor: '#2a2a40',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  logo: {
    width: '40px',
    height: '40px',
  },
  title: {
    fontSize: '1.2rem',
    fontWeight: '600',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '1.5rem',
  },
};

export default Navbar;
