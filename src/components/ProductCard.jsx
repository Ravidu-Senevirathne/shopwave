import React from 'react';

const ProductCard = ({ image, name, price }) => (
  <div className="text-center">
    <img src={image} alt={name} className="w-full h-48 object-cover rounded-md" />
    <h3 className="mt-2 text-sm">{name}</h3>
    <p className="font-semibold">Rs{price}.00</p>
  </div>
);

export default ProductCard;
