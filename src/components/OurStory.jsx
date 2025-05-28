import React from 'react';

const OurStory = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 font-sans bg-[#fcecd8] rounded-lg shadow-sm">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Image on left - only shows on medium screens and up */}
        <div className="md:w-1/2 w-full">
          <img
            src="src/assets/images/our-story.jpeg"
            alt="Our Story"
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Content on right */}
        <div className="md:w-1/2 w-full">
          {/* Discover Our Story */}
          <section className="mb-12 text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Discover Our Story</h1>
          </section>

          {/* Our Mission */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              At Shopwave, we are dedicated to revolutionizing your shopping experience. 
              Our curated collection and personalized recommendations ensure that you find 
              exactly what you need, every time.
            </p>
          </section>

          {/* Divider */}
          <div className="border-t border-gray-200 my-8"></div>

          {/* Why Choose Us */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us</h2>
            <p className="text-gray-600 leading-relaxed">
              Shopwave is not just a store; it's a lifestyle. We believe in combining 
              the latest technology with a human touch to offer you a shopping experience 
              like never before. Join us in shaping the future of e-commerce.
            </p>
          </section>

          {/* Divider */}
          <div className="border-t border-gray-200 my-8"></div>

          {/* Learn More Button */}
          <div className="text-center md:text-left">
            <button className="bg-white text-black font-medium py-2 px-6 rounded-md hover:bg-black hover:text-white transition duration-300 border-2">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;