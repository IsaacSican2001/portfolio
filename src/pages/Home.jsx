import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import { pageVariants, pageTransition } from '../motionConfig';

export default function Home() {
  return (
    <motion.div
      className="py-10"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-white">Team Portfolio TMP</h1>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <Card title="Team Background">
            <p>
              Welcome. While it may look like a team effort, this project is driven by a single passionate individual dedicated to delivering innovative IT solutions.
            </p>
          </Card>
          <Card title="Purpose">
            <p>
              The goal of this portfolio is to showcase my skills, projects, and expertise in a dedicated space...
            </p>
          </Card>
        </div>
        <div className="grid gap-8 md:grid-cols-2 mt-8">
          <Card title="Front-End Development">
            <ul className="list-disc list-inside">
              <li>Languages: HTML, CSS, JavaScript</li>
              <li>Frameworks: ReactJS, Angular, VueJS</li>
              <li>Styling: Bootstrap, Tailwind CSS</li>
            </ul>
          </Card>
          <Card title="Back-End Development">
            <ul className="list-disc list-inside">
              <li>Languages: Python, NodeJS, PHP</li>
              <li>Frameworks: Django, .NET</li>
              <li>Database: MySQL, Microsoft Access</li>
            </ul>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}
