import React from "react";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-[#fcecd8] p-8">
      <div className="md:w-1/2 text-center md:text-left space-y-4">
        <h1 className="text-4xl font-bold">Elevate Your Lifestyle with Shopwave</h1>
        <p className="text-gray-700">
          Welcome to Shopwave, where every click leads you to a world of endless possibilities.
          Our aim is to provide you with a seamless shopping journey filled with quality products
          and personalized recommendations tailored just for you.
        </p>
        <button className="px-6 py-2 border border-black hover:bg-black hover:text-white transition duration-300">
          Explore Now
        </button>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img
          src="/shopwave-hero.jpg"
          alt="Woman using tablet"
          className="rounded-lg max-w-full h-auto"
        />
      </div>
    </div>
  );
}
