import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const PromotionPage = () => {
  const promotions = [
    {
      title: "Summer Sale",
      discount: "50% OFF",
      description: "On selected summer collection",
      bgColor: "bg-orange-100",
      endDate: "June 30, 2025"
    },
    {
      title: "Flash Deal",
      discount: "30% OFF",
      description: "Limited time offer on accessories",
      bgColor: "bg-yellow-100",
      endDate: "June 15, 2025"
    },
    {
      title: "Special Bundle",
      discount: "Buy 2 Get 1",
      description: "On all premium products",
      bgColor: "bg-[#fcecd8]",
      endDate: "June 20, 2025"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-20 bg-gradient-to-b from-[#fcecd8] to-white">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
              Current Promotions
            </h1>
            <p className="text-xl text-gray-600">
              Don't miss out on these amazing deals!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {promotions.map((promo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`${promo.bgColor} rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
              >
                <div className="p-8">
                  <div className="text-2xl font-bold text-gray-800 mb-2">
                    {promo.title}
                  </div>
                  <div className="text-4xl font-extrabold text-orange-500 mb-4">
                    {promo.discount}
                  </div>
                  <p className="text-gray-600 mb-4">{promo.description}</p>
                  <div className="text-sm text-gray-500">
                    Ends on {promo.endDate}
                  </div>
                  <button className="mt-6 bg-white text-gray-800 font-semibold py-2 px-6 rounded-full hover:bg-gray-100 transition-colors duration-300">
                    Shop Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-600 mb-4">
              Subscribe to our newsletter for exclusive deals
            </p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-full border focus:outline-none focus:border-orange-300"
              />
              <button className="bg-orange-500 text-white px-6 py-2 rounded-r-full hover:bg-orange-600 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PromotionPage;
