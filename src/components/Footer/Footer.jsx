import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-3">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
        {/* Join Our Club Section */}
        <div>
          <h3 className="font-bold text-lg mb-3">Join Our Club, Get 15% Off For Your Birthday</h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="bg-gray-700 text-white p-3 rounded-l w-full focus:outline-none"
            />
            <button className="bg-gray-600 px-4 py-2 rounded-r text-white hover:bg-gray-500 focus:outline-none">
              ➔
            </button>
          </div>
          <label className="mt-2 block text-sm text-gray-400">
            <input type="checkbox" className="mr-2" /> By submitting your email, you agree to receive advertising emails from Modimal.
          </label>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" aria-label="Pinterest" className="text-gray-400 hover:text-white">
              <i className="fab fa-pinterest"></i>
            </a>
            <a href="#" aria-label="TikTok" className="text-gray-400 hover:text-white">
              <i className="fab fa-tiktok"></i>
            </a>
          </div>
        </div>

        {/* About Modimal Section */}
        <div>
          <h3 className="font-bold text-lg mb-3">About Modimal</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Collection</a></li>
            <li><a href="#" className="hover:text-white">Sustainability</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Support System</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-white">Copyright Notice</a></li>
          </ul>
        </div>

        {/* Help & Support Section */}
        <div>
          <h3 className="font-bold text-lg mb-3">Help & Support</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Orders & Shipping</a></li>
            <li><a href="#" className="hover:text-white">Returns & Refunds</a></li>
            <li><a href="#" className="hover:text-white">FAQs</a></li>
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Join Up Section */}
        <div>
          <h3 className="font-bold text-lg mb-3">Join Up</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#" className="hover:text-white">Modimal Club</a></li>
            <li><a href="#" className="hover:text-white">Careers</a></li>
            <li><a href="#" className="hover:text-white">Visit Us</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 text-gray-400 text-sm">
          <p>© 2023 Modimal. All Rights Reserved.</p>
          <a href="#" className="bg-gray-600 p-2 rounded-full hover:bg-gray-500">
            <i className="fas fa-arrow-up text-white"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
