import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-700 p-4 shadow flex flex-col justify-between h-stretch">
      <div>
        <div className="mb-4">
          <h2 className="text-white font-bold">Acme Vendor</h2>
          <p className="text-[#fcecd8]">San Francisco, CA</p>
        </div>
        <nav>
          <ul>
            <li className="mb-2">
              <a href="#" className="flex items-center p-2 rounded-md hover:bg-secondary text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7m-7 7l-5.657 5.657L12 21l9.643-9.643a2.036 2.036 0 000-2.828l-8-8z" />
                </svg>
                Dashboard
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center p-2 rounded-md hover:bg-secondary text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                Orders
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center p-2 rounded-md hover:bg-secondary text-white">
                <img src="src/assets/icons/Shopping Cart.png" className="h-6 w-6 mr-2" alt="Products" />
                Products
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center p-2 rounded-md hover:bg-secondary text-white">
                <img src="src/assets/icons/customers.png" className="h-6 w-6 mr-2" alt="Customers" />
                Customers
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center p-2 rounded-md hover:bg-secondary text-white">
                <img src="src/assets/icons/Commercial.png" className="h-6 w-6 mr-2" alt="Marketing" />
                Marketing
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center p-2 rounded-md hover:bg-secondary text-white">
                <img src="src/assets/icons/Laptop Analytic.png" className="h-6 w-6 mr-2" alt="Analytics" />
                Analytics
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Create Product Button */}
      <div className="mt-4">
        <button className="w-full bg-[#ffe7d6] text-gray-900 font-semibold py-2 rounded-md hover:bg-[#ffd6b3]">
          Create Product
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
