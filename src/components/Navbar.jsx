import React, { useState } from "react";
import { ShoppingCart, Search, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-[#fcecd8] fixed top-0 left-0 py-4 px-6 flex items-center justify-between shadow-sm w-full z-10">
      <div className="text-xl font-bold hover:text-orange-500 transition-colors duration-200 cursor-pointer">Shopwave</div>
      <ul className="flex items-center gap-6 text-sm font-medium text-gray-600">        <li><Link to="/" className="hover:text-gray-950 hover:underline transition-colors duration-200">Home</Link></li>
        <li><Link to="/welcome" className="hover:text-gray-950 hover:underline transition-colors duration-200">Welcome</Link></li>
        <li><Link to="/promotions" className="hover:text-gray-950 hover:underline transition-colors duration-200">Promotion</Link></li>
        <li><Link to="/best-sellers" className="hover:text-gray-950 hover:underline transition-colors duration-200">Best Sellers</Link></li>
        <li className="relative">
          <button 
            className="flex items-center gap-1 hover:text-gray-950 transition-colors duration-200 focus:outline-none"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            More
            <ChevronDown size={16} className={`transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl animate-fadeIn">
              <Link 
                to="/login" 
                className="block px-4 py-2 text-gray-600 hover:bg-[#fcecd8] hover:text-gray-900 transition-colors duration-200"
              >
                Login
              </Link>
              <Link 
                to="/signup" 
                className="block px-4 py-2 text-gray-600 hover:bg-[#fcecd8] hover:text-gray-900 transition-colors duration-200"
              >
                Sign Up
              </Link>
            </div>
          )}
        </li>
        <li className="flex items-center gap-1 cursor-pointer hover:text-gray-950 transition-colors duration-200 group">
          <Search size={18} className="group-hover:scale-110 transition-transform duration-200" />
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
