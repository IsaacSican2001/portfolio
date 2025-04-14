import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#4b0f6b] to-[#701f91]">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
