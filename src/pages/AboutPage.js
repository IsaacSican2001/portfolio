import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <main style={styles.container}>
        <h2>About Us</h2>
        <p>
          Our team was formed with a shared passion for creating exceptional
          digital solutions. We combine diverse expertise—from front-end design
          to back-end architecture—to tackle complex challenges and deliver
          results that exceed expectations.
        </p>
        <div style={styles.focusAreas}>
          <h3>Expertise & Focus Areas</h3>
          <ul>
            <li>Web and Mobile Application Development</li>
            <li>UI/UX Design and Prototyping</li>
            <li>Cloud Infrastructure and DevOps</li>
            <li>Machine Learning and Data Analytics</li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
};

const styles = {
  container: {
    padding: '2rem',
  },
  focusAreas: {
    marginTop: '1rem',
  },
};

export default AboutPage;
