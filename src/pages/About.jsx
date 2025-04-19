import React from 'react';

export default function About() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#4b0f6b] to-[#701f91] text-white overflow-hidden">
      {/* Background image faded */}
      <div className="absolute inset-0">
        <img
          src="/images/about-bg.png"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto py-20 px-6">
        {/* Page Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold mb-12">
          About Team Portfolio <span className="text-[#E5C07B]">TMP</span>
        </h1>

        {/* Intro Section with Portrait */}
        <div className="flex flex-col md:flex-row items-center mb-16">
          <img
            src="/images/team-photo.png"
            alt="Team Portrait"
            className="w-48 h-48 rounded-full border-4 border-white mb-6 md:mb-0 md:mr-10"
          />
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              Welcome to <strong>Team Portfolio TMP</strong>—a solo‑developer’s showcase
              built to look like a full team effort. We blend cutting‑edge front‑end
              design with a rock‑solid back‑end to deliver rich web experiences.
            </p>
            <p>
              Under the hood: React, Tailwind, Python, NodeJS, PHP, and more. Above all:
              a passion for pixel‑perfect UI and maintainable code.
            </p>
          </div>
        </div>

        {/* 3‑Column “Vision / Mission / Values” Block */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Vision */}
          <div className="flex flex-col items-center text-center">
            <img
              src="/images/icon-vision.svg"
              alt="Vision Icon"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">Our Vision</h3>
            <p className="text-sm leading-relaxed">
              To build engaging, accessible web apps that delight users and drive
              real‑world impact.
            </p>
          </div>

          {/* Mission */}
          <div className="flex flex-col items-center text-center">
            <img
              src="/images/icon-mission.svg"
              alt="Mission Icon"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
            <p className="text-sm leading-relaxed">
              To continuously learn, adapt, and apply the latest in web technologies
              for best‑in‑class solutions.
            </p>
          </div>

          {/* Values */}
          <div className="flex flex-col items-center text-center">
            <img
              src="/images/icon-values.svg"
              alt="Values Icon"
              className="w-16 h-16 mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">Our Values</h3>
            <p className="text-sm leading-relaxed">
              Quality, clarity, and collaboration—even if it’s just one person behind
              the scenes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
