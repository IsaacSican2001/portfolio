import React from 'react';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '../motionConfig';

export default function Projects() {
  return (
    <motion.div
      className="py-10"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="bg-[#3b3160] px-6 py-4 text-white">
        <h1 className="text-2xl font-bold">Team Portfolio – Projects</h1>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-12">
        {[
          { src: 'nota-screenshot.png',    alt: 'Nota'    , title: 'Google Cloud Notes Alternative – Nota'     },
          { src: 'roomcloud-screenshot.png', alt: 'RoomCloud', title: 'File Based Management System – RoomCloud' }
        ].map(p => (
          <div key={p.src} className="flex flex-col items-center">
            <img
              src={`/images/${p.src}`}
              alt={p.alt}
              className="w-full h-64 md:h-72 object-cover rounded-lg shadow-lg mb-4"
            />
            <h2 className="text-xl font-semibold text-center">{p.title}</h2>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
