import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Top Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 text-white">
        <div className="text-2xl font-bold tracking-wide">
          Team Portfolio <span className="font-extrabold">TMP</span>
        </div>

        {/* Desktop Menu (hidden on small screens) */}
        <ul className="hidden md:flex space-x-6">
          <li className="cursor-pointer hover:text-gray-300">Home</li>
          <li className="cursor-pointer hover:text-gray-300">About</li>
          <li className="cursor-pointer hover:text-gray-300">Projects</li>
          <li className="cursor-pointer hover:text-gray-300">Contact</li>
        </ul>

        {/* Hamburger Icon (visible on small screens) */}
        <div className="md:hidden" onClick={toggleMenu}>
          <FaBars className="text-2xl cursor-pointer" />
        </div>
      </nav>

      {/* Overlay (dark background behind side panel) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={closeMenu}
        ></div>
      )}

      {/* Side Panel Menu */}
      <div
        className={`
          fixed top-0 right-0 h-screen w-64 bg-[#4b0f6b]
          transform transition-transform duration-300
          z-20
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* Close Button */}
        <button className="flex justify-end p-4 text-white" onClick={closeMenu}>
          <FaTimes className="text-2xl" />
        </button>

        {/* Menu Items */}
        <ul className="flex flex-col px-4 text-white space-y-4">
          <li className="hover:text-gray-300 cursor-pointer" onClick={closeMenu}>
            Home
          </li>
          <li className="hover:text-gray-300 cursor-pointer" onClick={closeMenu}>
            About
          </li>
          <li className="hover:text-gray-300 cursor-pointer" onClick={closeMenu}>
            Projects
          </li>
          <li className="hover:text-gray-300 cursor-pointer" onClick={closeMenu}>
            Contact
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
