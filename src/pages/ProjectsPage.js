import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'A cutting-edge web app that does amazing things.',
    technologies: ['React', 'Tailwind', 'Firebase'],
    image: '/assets/images/project1.png',
    demoLink: 'https://example.com/project-one',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'An innovative mobile solution to simplify daily tasks.',
    technologies: ['React Native', 'Express', 'MongoDB'],
    image: '/assets/images/project2.png',
    demoLink: 'https://example.com/project-two',
  },
  // More projects...
];

const ProjectsPage = () => {
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h2>Our Projects</h2>
        <div style={styles.projectsContainer}>
          {projects.map(project => (
            <div key={project.id} style={styles.projectCard} className="glow-card">
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  style={styles.projectImage}
                />
              )}
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <p>
                <strong>Technologies:</strong> {project.technologies.join(', ')}
              </p>
              {project.demoLink && (
                <a
                  href={project.demoLink}
                  className="neon-button"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: 'none', marginTop: '1rem', display: 'inline-block' }}
                >
                  Live Demo
                </a>
              )}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

const styles = {
  projectsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    marginTop: '2rem',
  },
  projectCard: {
    width: '300px',
    padding: '1rem',
    borderRadius: '8px',
  },
  projectImage: {
    width: '100%',
    height: 'auto',
    marginBottom: '1rem',
    borderRadius: '4px',
  },
};

export default ProjectsPage;
