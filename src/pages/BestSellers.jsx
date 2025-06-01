import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import Navbar from '../components/Navbar';

const BestSellers = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Clothing', 'Shoes', 'Accessories'];
  
  const products = [
    {
      name: "Premium Hoodie",
      price: "$59.99",
      category: "Clothing",
      rating: 4.8,
      sales: 1200,
      image: "/src/assets/images/hoodie.jpg"
    },
    {
      name: "Classic T-Shirt",
      price: "$29.99",
      category: "Clothing",
      rating: 4.7,
      sales: 980,
      image: "/src/assets/images/Shirt.jpg"
    },
    {
      name: "Yoga Pants",
      price: "$49.99",
      category: "Clothing",
      rating: 4.9,
      sales: 850,
      image: "/src/assets/images/yoga_pants.jpg"
    },
    {
      name: "Running Shoes",
      price: "$89.99",
      category: "Shoes",
      rating: 4.6,
      sales: 750,
      image: "/src/assets/shoes.jpg"
    }
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-20 bg-gradient-to-b from-[#fcecd8] to-white">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
              Best Sellers
            </h1>
            <p className="text-xl text-gray-600">
              Our most popular products loved by customers
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex justify-center gap-4 mb-12"
          >
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-orange-500 text-white'
                    : 'bg-white text-gray-600 hover:bg-orange-100'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden group">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-white text-gray-800 px-6 py-2 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <ShoppingCart size={18} />
                      Add to Cart
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {product.name}
                  </h3>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-2xl font-bold text-orange-500">
                      {product.price}
                    </span>
                    <div className="flex items-center">
                      <span className="text-yellow-400">★</span>
                      <span className="ml-1 text-gray-600">{product.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">
                    {product.sales.toLocaleString()} sold
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSellers;
