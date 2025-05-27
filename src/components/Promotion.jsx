import React from "react";



const Promotion = () => (
  <div className="grid grid-cols-2 min-h-[250px]">
    {/* Left Section */}
    <div className="bg-[#FFF6F0] flex flex-col items-center justify-center p-6 text-center">
      <h2 className="text-2xl font-bold text-black">Special Promotion</h2>
      <p className="mt-2 text-gray-700">Don't Miss Out</p>
      <button className="mt-4 px-6 py-2 bg-pink-200 hover:bg-pink-300 text-black rounded border border-pink-300">
        Shop Now
      </button>
    </div>

    {/* Right Section */}
    <div className="bg-[#FFF3E0] flex items-center justify-center px-4 text-sm text-gray-800 text-center">
      <p>
        Hurry! Grab our exclusive deals<br />before they disappear.
      </p>
    </div>
  </div>
);

export default Promotion;

