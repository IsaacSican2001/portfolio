import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';

const projects = [
  {
    title: 'Project One',
    description: 'Description of project one...',
  },
  {
    title: 'Project Two',
    description: 'Description of project two...',
  },
  // Add more projects as needed...
];

const Projects = () => {
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h2>Projects</h2>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {projects.map((project, index) => (
            <Card key={index} title={project.title} description={project.description} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Projects;
