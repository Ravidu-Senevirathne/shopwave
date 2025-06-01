// src/components/Card.js
import React from 'react';

const Card = ({ title, value }) => {
  return (
    <div className="bg-secondary p-4 rounded-md shadow mb-4">
      <p className="text-sm text-gray-600">{title}</p>
      <p className="text-xl font-bold mt-1">{value}</p>
    </div>
  );
};

export default Card;