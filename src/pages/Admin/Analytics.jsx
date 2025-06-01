import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  ShoppingBag, 
  DollarSign,
  ChevronUp,
  ChevronDown,
  Calendar
} from 'lucide-react';
import AdminLayout from '../../components/Admin/Layout';

const Analytics = () => {
  const [dateRange, setDateRange] = useState('7d');

  const stats = [
    {
      title: 'Total Revenue',
      value: '$12,345',
      change: '+12.5%',
      isPositive: true,
      icon: DollarSign
    },
    {
      title: 'Total Orders',
      value: '156',
      change: '+8.2%',
      isPositive: true,
      icon: ShoppingBag
    },
    {
      title: 'New Customers',
      value: '64',
      change: '-2.4%',
      isPositive: false,
      icon: Users
    },
    {
      title: 'Conversion Rate',
      value: '3.2%',
      change: '+1.2%',
      isPositive: true,
      icon: TrendingUp
    }
  ];

  return (
    <AdminLayout>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Analytics</h1>
          <div className="flex items-center gap-2">
            <Calendar className="text-gray-500" size={20} />
            <select
              className="px-4 py-2 border rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
              <option value="12m">Last 12 months</option>
            </select>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <stat.icon size={24} className="text-orange-600" />
                </div>
                <span className={`text-sm font-medium flex items-center gap-1 ${
                  stat.isPositive ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.isPositive ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-500">{stat.title}</p>
            </motion.div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Revenue Chart */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Revenue Overview</h3>
            <div className="h-80 flex items-center justify-center text-gray-500">
              Revenue Chart will be implemented here
            </div>
          </div>

          {/* Orders Chart */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Orders Trend</h3>
            <div className="h-80 flex items-center justify-center text-gray-500">
              Orders Chart will be implemented here
            </div>
          </div>
        </div>

        {/* Additional Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Top Products</h3>
            <div className="space-y-4">
              {/* Add top products list here */}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Customer Demographics</h3>
            <div className="space-y-4">
              {/* Add demographics chart here */}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Sales by Category</h3>
            <div className="space-y-4">
              {/* Add category breakdown here */}
            </div>
          </div>
        </div>
      </motion.div>
    </AdminLayout>
  );
};

export default Analytics;
