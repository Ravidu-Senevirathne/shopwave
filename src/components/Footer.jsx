import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Follow Us */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {/* Social Icons would go here */}
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">Facebook</span>
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">Twitter</span>
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <span className="sr-only">Instagram</span>
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Middle Column - Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Shopwave</h3>
            <ul className="space-y-2">
              <li>
                <a href="tel:123-456-7890" className="hover:text-white transition">123-456-7890</a>
              </li>
              <li>
                <a href="mailto:info@mysite.com" className="hover:text-white transition">info@mysite.com</a>
              </li>
              <li>
                <address className="not-italic">
                  500 Terry Francine Street,<br />
                  6th Floor, San Francisco,<br />
                  CA 94158
                </address>
              </li>
            </ul>
          </div>

          {/* Right Column - Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Accessibility Statement</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Shipping Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Terms & Conditions</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Refund Policy</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Shopwave. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;