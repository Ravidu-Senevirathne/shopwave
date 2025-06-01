import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  ShoppingBag, 
  Package, 
  Megaphone, 
  PercentCircle,
  BarChart3,
  Menu,
  X
} from 'lucide-react';

const AdminLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  const menuItems = [
    { path: '/admin-dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { path: '/admin-dashboard/orders', icon: ShoppingBag, label: 'Orders' },
    { path: '/admin-dashboard/customers', icon: Users, label: 'Customers' },
    { path: '/admin-dashboard/products', icon: Package, label: 'Products' },
    { path: '/admin-dashboard/marketing', icon: Megaphone, label: 'Marketing' },
    { path: '/admin-dashboard/discounts', icon: PercentCircle, label: 'Discounts' },
    { path: '/admin-dashboard/analytics', icon: BarChart3, label: 'Analytics' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Sidebar Toggle */}
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md lg:hidden"
      >
        {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full bg-white shadow-lg w-64 transform transition-transform duration-300 ease-in-out ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}>
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800">Shopwave Admin</h1>
        </div>
        <nav className="mt-6">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center px-6 py-3 text-gray-700 hover:bg-[#fcecd8] transition-colors duration-200 ${
                location.pathname === item.path ? 'bg-[#fcecd8] text-orange-600' : ''
              }`}
            >
              <item.icon size={20} className="mr-3" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className={`transition-all duration-300 ${
        isSidebarOpen ? 'lg:ml-64' : ''
      }`}>
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
