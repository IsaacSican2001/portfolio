// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar   from './components/Navbar';
import Home     from './pages/Home';
import About    from './pages/About';
import Projects from './pages/Projects';    // ← new import

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-b from-[#4b0f6b] to-[#701f91]">
        <Navbar />

        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/about"    element={<About />} />
          <Route path="/projects" element={<Projects />} />   {/* ← new route */}
          {/* future pages: /contact, etc. */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
