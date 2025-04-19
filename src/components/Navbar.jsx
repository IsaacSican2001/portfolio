// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu  = () => setIsOpen(false);

  // menu items array to DRY up code
  const menu = [
    { to: '/',      label: 'Home'    },
    { to: '/about', label: 'About'   },
    { to: '/projects',label: 'Projects' },
    // add {to:'/projects',label:'Projects'} etc.
  ];

  return (
    <>
      <nav className="flex items-center justify-between px-6 py-4 text-white">
        <div className="text-2xl font-bold tracking-wide">
          <Link to="/" onClick={closeMenu}>Team Portfolio <span className="font-extrabold">TMP</span></Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {menu.map(item => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="hover:text-gray-300"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden" onClick={toggleMenu}>
          <FaBars className="text-2xl cursor-pointer" />
        </div>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={closeMenu}
        />
      )}

      {/* Side Panel */}
      <div
        className={`
          fixed top-0 right-0 h-screen w-64 bg-[#4b0f6b]
          transform transition-transform duration-300 z-20
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <button className="flex justify-end p-4 text-white" onClick={closeMenu}>
          <FaTimes className="text-2xl" />
        </button>
        <ul className="flex flex-col px-4 text-white space-y-4">
          {menu.map(item => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="hover:text-gray-300 block"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
