import React from 'react';

const Card = ({ image, title, description }) => {
  return (
    <div className="card">
      {image && <img src={image} alt={title} style={{ width: '100%', height: 'auto' }} />}
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
