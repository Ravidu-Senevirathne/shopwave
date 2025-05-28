import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <span className="text-xl font-bold">Shopwave</span>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-6">
        <a href="#" className="text-gray-600 hover:text-gray-800">Orders</a>
        <a href="#" className="text-gray-600 hover:text-gray-800">Customers</a>
        <a href="#" className="text-gray-600 hover:text-gray-800">Products</a>
        <a href="#" className="text-gray-600 hover:text-gray-800">Marketing</a>
        <a href="#" className="text-gray-600 hover:text-gray-800">Discounts</a>
        <a href="#" className="text-gray-600 hover:text-gray-800">Analytics</a>
      </nav>

      {/* User Actions */}
      <div className="flex items-center space-x-4">
        <button className="bg-secondary rounded-full p-2 text-black bg-black hover:bg-gray-500">
          <img src="/src/assets/icons/Shape.png" alt="Notification" className="h-6 w-6" />
        </button>
        <button className="bg-secondary rounded-full p-2 text-black bg-black hover:bg-gray-500">
          <img src="/src/assets/icons/Account.png" alt="Settings" className="h-6 w-6" />
        </button>
        
        <img src="https://via.placeholder.com/30 " alt="User Profile" className="w-8 h-8 rounded-full" />
      </div>
    </header>
  );
};

export default Header;