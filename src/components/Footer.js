import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 px-6 pt-16 pb-8 border-t border-[#1b2630]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand + Blurb */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/>
                </svg>
              </div>
              <div className="text-white text-xl font-bold">Technova <span className="text-gray-400 font-medium">| Agency</span></div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              At Technova, we build modern, user‑friendly, and scalable digital solutions that help
              businesses thrive. From websites and mobile apps to payment integration—we deliver results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <div className="text-white font-semibold mb-5">QUICK LINKS</div>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-white">Home</Link></li>
              <li><Link to="/portfolio" className="hover:text-white">Portfolio</Link></li>
              <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
              <li><Link to="/about" className="hover:text-white">About</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <div className="text-white font-semibold mb-5">PRODUCT</div>
            <ul className="space-y-3">
              <li className="hover:text-white">Website Development</li>
              <li className="hover:text-white">Mobile Applications</li>
              <li className="hover:text-white">System Revamp</li>
              <li className="hover:text-white">M‑Pesa Integration</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-white font-semibold mb-5">CONTACT US</div>
            <div className="space-y-4">
              <div>
                <div className="text-gray-400">Phone:</div>
                <div className="text-white">0793 515 066</div>
              </div>
              <div>
                <div className="text-gray-400">Email:</div>
                <div className="text-white">Technova446@gmail.com</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-[#1b2630] flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <div>© {new Date().getFullYear()} Technova. All rights reserved.</div>
          <a href="#" className="hover:text-white mt-3 md:mt-0">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
