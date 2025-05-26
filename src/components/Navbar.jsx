import React from "react";
import { ShoppingCart, Search } from "lucide-react";

export default function Navbar() {
  return (
<<<<<<< HEAD
    <nav className="bg-[#fcecd8] fixed py-4 px-6 flex items-center justify-between shadow-sm w-full">
      <div className="text-xl font-bold">Shopwave</div>
      <ul className="flex items-center gap-6 text-sm font-medium text-gray-800">
        <li><a href="#">Home</a></li>
        <li><a href="#">Welcome</a></li>
        <li><a href="#">Promotion</a></li>
        <li><a href="#">Best Sellers</a></li>
        <li><a href="#">More</a></li>
        <li className="flex items-center gap-1 cursor-pointer">
          <Search size={18} />
=======
    <nav className="bg-[#fcecd8] fixed top-0 left-0 py-4 px-6 flex items-center justify-between shadow-sm w-full z-10">
      <div className="text-xl font-bold hover:text-orange-500 transition-colors duration-200 cursor-pointer">Shopwave</div>
      <ul className="flex items-center gap-6 text-sm font-medium text-gray-600">
        <li><a href="#" className="hover:text-gray-950 hover:underline transition-colors duration-200">Home</a></li>
        <li><a href="#" className="hover:text-gray-950 hover:underline transition-colors duration-200">Welcome</a></li>
        <li><a href="#" className="hover:text-gray-950 hover:underline transition-colors duration-200">Promotion</a></li>
        <li><a href="#" className="hover:text-gray-950 hover:underline transition-colors duration-200">Best Sellers</a></li>
        <li><a href="#" className="hover:text-gray-950 hover:underline transition-colors duration-200">More</a></li>
        <li className="flex items-center gap-1 cursor-pointer hover:text-gray-950 transition-colors duration-200 group">
          <Search size={18} className="group-hover:scale-110 transition-transform duration-200" />
>>>>>>> development
          <span>Search</span>
        </li>
        <li className="flex items-center gap-1 cursor-pointer hover:text-orange-500 transition-colors duration-200 group relative">
          <ShoppingCart size={18} className="group-hover:scale-110 transition-transform duration-200" />
          <span className="group-hover:bg-orange-500 group-hover:text-white transition-colors duration-200 rounded-full px-1.5 py-0.5 text-xs">0</span>
        </li>
      </ul>
    </nav>
  );
}
