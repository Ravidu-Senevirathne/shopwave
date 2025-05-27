import React from "react";
import ProductCard from "./ProductCard";

const products = [
  { name: "Women's Yoga Pants", price: 4500, image: "src/assets/images/yoga_pants.jpg" },
  { name: "Unisex Hoodie", price: 5000, image: "src/assets/images/hoodie.jpg" },
  { name: "Men's Casual Shirt", price: 3500, image: "src/assets/images/Shirt.jpg" },
  { name: "Smartphone Stand", price: 2500, image: "src/assets/images/stand.jpg" },
];

const TopPicks = () => (
  <div className="bg-[#FFF3E0] p-8">
    <h2 className="text-xl font-bold mb-4">Top Picks</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {products.map((product, idx) => (
        <ProductCard key={idx} {...product} />
      ))}
    </div>
  </div>
);

export default TopPicks;
