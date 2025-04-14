import React from 'react';

function Card({ title, children }) {
  return (
    <div className="bg-[#5f249f]/80 text-white rounded-lg p-6 shadow-lg max-w-md">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="leading-relaxed">
        {children}
      </div>
    </div>
  );
}

export default Card;
