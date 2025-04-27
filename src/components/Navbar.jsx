import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const menuItems = [
  { to: '/',        label: 'Home'     },
  { to: '/about',   label: 'About'    },
  { to: '/projects',label: 'Projects' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(o => !o);
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-[#3b3160] text-white relative z-20">
      <Link to="/" onClick={() => setIsOpen(false)}>
        <h1 className="text-xl font-bold">Team Portfolio TMP</h1>
      </Link>

      {/* Desktop Links */}
      <ul className="hidden md:flex space-x-6">
        {menuItems.map(i => (
          <motion.li 
            key={i.to}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <Link to={i.to}>{i.label}</Link>
          </motion.li>
        ))}
      </ul>

      {/* Mobile Hamburger */}
      <motion.button
        className="md:hidden"
        onClick={toggle}
        whileTap={{ scale: 0.8 }}
      >
        {isOpen ? <FaTimes size={24}/> : <FaBars size={24}/>}
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 200, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 right-4 w-48 bg-[#4b0f6b] p-4 rounded-lg shadow-lg flex flex-col space-y-3"
          >
            {menuItems.map(i => (
              <motion.li
                key={i.to}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Link to={i.to} onClick={() => setIsOpen(false)}>
                  {i.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
