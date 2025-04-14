import React from 'react';
import Card from '../components/Card'; // or wherever Card is located

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid gap-8 md:grid-cols-2">
        <Card title="Team Background">
	<p>
    Welcome. While it may look like a team effort, this project is driven by 
              a single person, carefully curated to appear like a collaborative creation. 
              Our mission is to create visually appealing web experiences using React 
              and Tailwind for the front-end, while harnessing Python, Node, JS, and PHP 
              for back-end functionality.
	</p>
        </Card>
        <Card title="Purpose">
          <p> The goal of this portfolio is to showcase my skills, presence, and expertise 
              in a unified platform. Here, you’ll find examples of my previous projects, 
              an outline of my development stack, and the best ways to contact me. I’ve 
              carefully curated each section to emphasize my strengths and demonstrate 
              high-quality results.
          </p>
        </Card>
      </div>
      <div className="grid gap-8 md:grid-cols-2 mt-8">
        <Card title="Front-End Development">
            <p><strong>Languages:</strong> HTML, CSS, JavaScript</p>
            <p><strong>Frameworks:</strong> ReactJS, Angular, VueJS</p>
            <p><strong>Styling:</strong> Bootstrap, Tailwind CSS</p>
        </Card>
        <Card title="Back-End Development">
	    <p><strong>Languages:</strong> Python, NodeJS, PHP</p>
            <p><strong>Frameworks:</strong> Django, .NET</p>
            <p><strong>Database:</strong> MySQL, Microsoft Access</p>
        </Card>
      </div>
    </div>
  );
}

export default Home;
