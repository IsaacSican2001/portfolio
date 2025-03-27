import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';

const teamMembers = [
  {
    image: '/assets/profile1.jpg',
    title: 'Member 1',
    description: 'Front-end Developer',
  },
  {
    image: '/assets/profile2.jpg',
    title: 'Member 2',
    description: 'Back-end Developer',
  },
  // Add more members as needed...
];

const Team = () => {
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h2>Our Team</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {teamMembers.map((member, index) => (
            <Card key={index} image={member.image} title={member.title} description={member.description} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Team;
