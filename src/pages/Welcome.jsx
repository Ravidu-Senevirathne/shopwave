import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const Welcome = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-20 bg-gradient-to-b from-[#fcecd8] to-white">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
              Welcome to Shopwave
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the latest trends in fashion and lifestyle
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {[
              {
                title: 'Latest Collection',
                description: 'Explore our newest arrivals in fashion',
                icon: '🌟',
              },
              {
                title: 'Special Offers',
                description: 'Get exclusive deals and discounts',
                icon: '💎',
              },
              {
                title: 'Premium Quality',
                description: 'Shop the finest quality products',
                icon: '✨',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16 text-center"
          >
            <button className="bg-[#fcecd8] hover:bg-orange-200 text-gray-800 font-semibold py-3 px-8 rounded-full transition-colors duration-300 transform hover:scale-105">
              Start Shopping
            </button>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Welcome;
