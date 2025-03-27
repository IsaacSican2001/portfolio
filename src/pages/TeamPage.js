import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const teamData = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Frontend Developer',
    skills: ['React', 'Tailwind', 'CSS'],
    image: '/assets/images/john.jpg',
    github: 'https://github.com/johndoe',
    linkedin: 'https://www.linkedin.com/in/johndoe',
  },
  {
    id: 2,
    name: 'Jane Smith',
    role: 'Backend Developer',
    skills: ['Node.js', 'Express', 'MongoDB'],
    image: '/assets/images/jane.jpg',
    github: 'https://github.com/janesmith',
    linkedin: 'https://www.linkedin.com/in/janesmith',
  },
  // Add more members...
];

const TeamPage = () => {
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h2>Our Team</h2>
        <div style={styles.teamContainer}>
          {teamData.map(member => (
            <div key={member.id} style={styles.memberCard} className="glow-card">
              <img
                src={member.image}
                alt={member.name}
                style={styles.memberImage}
              />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <p><strong>Skills:</strong> {member.skills.join(', ')}</p>
              <div>
                <a href={member.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>{' '}
                |{' '}
                <a href={member.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

const styles = {
  teamContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    marginTop: '2rem',
  },
  memberCard: {
    width: '250px',
    padding: '1rem',
    borderRadius: '8px',
    textAlign: 'center',
  },
  memberImage: {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '1rem',
  },
};

export default TeamPage;
