import React from "react";

const Card = ({ imgSrc, altText }) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
      <img
        src={imgSrc}
        alt={altText}
        className="w-full h-auto transition-transform duration-500 hover:scale-110"
      />
    </div>
  );
};

export default Card;