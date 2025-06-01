// src/components/SignupForm.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Add API call or validation logic here
  };

  return (    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#fcecd8] to-[#ffe7d6]">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
          {/* Logo and Title */}
          <div className="p-8 text-center animate-fadeIn">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Create Account</h2>
            <p className="text-gray-600">Join us and start shopping</p>
          </div>          {/* Form */}
          <form onSubmit={handleSubmit} className="p-8 pt-0">
            <div className="space-y-6">
              {/* Username Input */}
              <div className="group">
                <input
                  type="text"
                  name="username"
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#fcecd8] transition-all duration-300"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>

              {/* Email Input */}
              <div className="group">
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#fcecd8] transition-all duration-300"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* Password Input */}
              <div className="group">
                <input
                  type="password"
                  name="password"
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#fcecd8] transition-all duration-300"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              {/* Terms and Conditions */}
              <div className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-gray-300 text-[#fcecd8] focus:ring-[#fcecd8]"/>
                <span className="text-sm text-gray-600">I agree to the Terms and Conditions</span>
              </div>

              {/* Sign Up Button */}
              <button
                type="submit"
                className="w-full py-3 px-4 bg-gradient-to-r from-[#fcecd8] to-[#ffe7d6] hover:from-[#ffe7d6] hover:to-[#fcecd8] text-black font-semibold rounded-lg shadow transition-all duration-300 hover:shadow-lg"
              >
                Create Account
              </button>

              {/* Login Link */}
              <p className="text-center text-gray-600 mt-4">
                Already have an account?{' '}
                <Link to="/login" className="text-gray-600 hover:underline font-semibold">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;