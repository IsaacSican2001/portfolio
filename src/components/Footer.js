import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} Team Name. All rights reserved.</p>
      <div className="social-icons">
        {/* Example social icons, replace # with actual links */}
        <a href="#" target="_blank" rel="noreferrer">
          <i className="fab fa-github" />
        </a>
        <a href="#" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin" />
        </a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#2a2a40',
    padding: '1rem',
    textAlign: 'center',
  },
};

export default Footer;
