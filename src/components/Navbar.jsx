import React from "react";
import { ShoppingCart, Search } from "lucide-react";

export default function Navbar() {
  return (

   
     

    <nav className="bg-[#fcecd8] fixed py-4 px-6 flex items-center justify-between shadow-sm">
      <div className="text-xl font-bold">Shopwave</div>
      <ul className="flex items-center gap-6 text-sm font-medium text-gray-800">
        <li><a href="#">Home</a></li>
        <li><a href="#">Welcome</a></li>
        <li><a href="#">Promotion</a></li>
        <li><a href="#">Best Sellers</a></li>
        <li><a href="#">More</a></li>
        <li className="flex items-center gap-1 cursor-pointer">
          <Search size={18} />
          <span>Search</span>
        </li>
        <li className="flex items-center gap-1 cursor-pointer">
          <ShoppingCart size={18} />
          <span>0</span>
        </li>
      </ul>
    </nav>
  );
}
