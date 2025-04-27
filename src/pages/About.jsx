import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '../motionConfig';

export default function About() {
  return (
    <motion.div
      className="relative py-20"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="absolute inset-0">
        <img src="/images/about-bg.png" alt="" className="w-full h-full object-cover opacity-20"/>
      </div>
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-white">
        <h1 className="text-5xl font-extrabold mb-12">
          About Team Portfolio <span className="text-[#E5C07B]">TMP</span>
        </h1>
        <div className="flex flex-col md:flex-row items-center mb-16">
          <img src="/images/team-photo.png" alt="Team" className="w-48 h-48 rounded-full border-4 border-white mb-6 md:mb-0 md:mr-10"/>
          <div className="text-lg leading-relaxed space-y-4">
            <p>Welcome to <strong>Team Portfolio TMP</strong>—a solo-developer’s showcase built to look like a full team effort.</p>
            <p>Under the hood: React, Tailwind, Python, NodeJS, PHP, and more. Above all: a passion for pixel-perfect UI and maintainable code.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { icon: 'icon-vision.svg', title: 'Our Vision',  text: 'Build engaging, accessible web apps that delight users.' },
            { icon: 'icon-mission.svg',title: 'Our Mission', text: 'Continuously learn and apply the latest web technologies.' },
            { icon: 'icon-values.svg', title: 'Our Values',  text: 'Quality, clarity, and collaboration—even if it’s just one person.' }
          ].map(f => (
            <div key={f.title} className="flex flex-col items-center text-center">
              <img src={`/images/${f.icon}`} alt={f.title} className="w-16 h-16 mb-4"/>
              <h3 className="text-2xl font-semibold mb-2">{f.title}</h3>
              <p className="text-sm leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
