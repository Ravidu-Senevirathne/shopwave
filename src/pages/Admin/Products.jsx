import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Plus, Filter, Edit, Trash } from 'lucide-react';
import AdminLayout from '../../components/Admin/Layout';

const Products = () => {
  const [viewMode, setViewMode] = useState('grid');
  
  const products = [
    {
      id: 1,
      name: 'Premium Hoodie',
      category: 'Clothing',
      price: '$59.99',
      stock: 45,
      status: 'In Stock',
      image: '/src/assets/images/hoodie.jpg'
    },
    {
      id: 2,
      name: 'Classic T-Shirt',
      category: 'Clothing',
      price: '$29.99',
      stock: 30,
      status: 'Low Stock',
      image: '/src/assets/images/Shirt.jpg'
    },
    // Add more products as needed
  ];

  return (
    <AdminLayout>
      <div className="p-6 bg-gray-50 min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Product Management</h1>
            <div className="flex gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fcecd8]"
                />
              </div>
              <button className="flex items-center gap-2 px-4 py-2 bg-[#fcecd8] text-gray-800 rounded-lg hover:bg-[#f8e0c5]">
                <Plus size={20} />
                Add Product
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h3 className="text-sm font-medium text-gray-500">Total Products</h3>
              <p className="text-2xl font-bold text-gray-800 mt-2">156</p>
              <p className="text-xs text-green-600 mt-1">+8 new this month</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h3 className="text-sm font-medium text-gray-500">Active Products</h3>
              <p className="text-2xl font-bold text-gray-800 mt-2">142</p>
              <p className="text-xs text-green-600 mt-1">90% active rate</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h3 className="text-sm font-medium text-gray-500">Low Stock</h3>
              <p className="text-2xl font-bold text-gray-800 mt-2">12</p>
              <p className="text-xs text-yellow-600 mt-1">Needs attention</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h3 className="text-sm font-medium text-gray-500">Out of Stock</h3>
              <p className="text-2xl font-bold text-gray-800 mt-2">2</p>
              <p className="text-xs text-red-600 mt-1">Action required</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-white border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900">{product.name}</h3>
                    <p className="text-sm text-gray-500">{product.category}</p>
                    <div className="mt-2 flex justify-between items-center">
                      <span className="text-lg font-bold text-gray-900">{product.price}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        product.status === 'In Stock' ? 'bg-green-100 text-green-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {product.status}
                      </span>
                    </div>
                    <div className="mt-4 flex justify-end gap-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                        <Edit size={18} />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                        <Trash size={18} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </AdminLayout>
  );
};

export default Products;
