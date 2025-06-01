import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#fcecd8] to-[#ffe7d6]">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
          {/* Logo and Title */}
          <div className="p-8 text-center animate-fadeIn">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h2>
            <p className="text-gray-600">Login to continue shopping</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-8 pt-0">
            <div className="space-y-6">
              {/* Email */}
              <div className="group">
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#fcecd8] transition-all duration-300"
                  placeholder="Email"
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              {/* Password */}
              <div className="group">
                <input
                  type="password"
                  required
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#fcecd8] transition-all duration-300"
                  placeholder="Password"
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
              </div>

              {/* Remember & Forgot */}
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="rounded border-gray-300 text-[#fcecd8] focus:ring-[#fcecd8]"/>
                  <span className="text-gray-600">Remember me</span>
                </label>
                <a href="#" className="text-[#fcecd8] hover:underline">Forgot password?</a>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                className="w-full py-3 px-4 bg-gradient-to-r from-[#fcecd8] to-[#ffe7d6] hover:from-[#ffe7d6] hover:to-[#fcecd8] text-black font-semibold rounded-lg shadow transition-all duration-300 hover:shadow-lg"
              >
                Login
              </button>

              {/* Sign Up Link */}
              <p className="text-center text-gray-600 mt-4">
                Don't have an account?{' '}
                <Link to="/signup" className="text-gray-600 hover:underline font-semibold">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
