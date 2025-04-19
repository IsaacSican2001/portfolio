// src/pages/Projects.jsx
import React from 'react';

export default function Projects() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#4b0f6b] to-[#701f91] text-white">
      
      {/* Top bar */}
      <div className="bg-[#3b3160] px-6 py-4">
        <h1 className="text-2xl font-bold">Team Portfolio – Projects</h1>
      </div>

      {/* Content grid */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Project 1: Nota */}
        <div className="flex flex-col items-center">
          <img
            src="/images/nota-screenshot.png"
            alt="Google Cloud Notes Alternative – Nota"
            className="w-full h-64 md:h-72 object-cover rounded-lg shadow-lg mb-4"
          />
          <h2 className="text-xl font-semibold text-center">
            Google Cloud Notes Alternative – Nota
          </h2>
        </div>

        {/* Project 2: RoomCloud */}
        <div className="flex flex-col items-center">
          <img
            src="/images/roomcloud-screenshot.png"
            alt="File Based Management System – RoomCloud"
            className="w-full h-64 md:h-72 object-cover rounded-lg shadow-lg mb-4"
          />
          <h2 className="text-xl font-semibold text-center">
            File Based Management System – RoomCloud
          </h2>
        </div>

      </div>
    </div>
  );
}
