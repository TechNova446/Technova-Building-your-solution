import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 px-4 sm:px-6 pt-12 sm:pt-16 pb-8 border-t border-[#1b2630]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-12">
          {/* Brand + Blurb */}
          <div>
            <div className="flex flex-col sm:flex-row items-center sm:items-start mb-6">
              <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-2xl mb-4 sm:mb-0 sm:mr-8">
                <img src="/logo.png" alt="Technova Logo" className="w-full h-full object-contain" />
              </div>
              <div className="text-center sm:text-left">
                <div className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">Technova <span className="text-gray-400 font-medium">| Agency</span></div>
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base max-w-md mb-4">
                  At Technova, we build enterprise-grade technology solutions that drive digital transformation.
                  From custom software development to mobile applications and system integration—we deliver innovative results.
                </p>
                <Link to="/about" className="inline-block bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105">
                  Learn More
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <div className="text-white font-semibold mb-4 sm:mb-5 text-sm sm:text-base">QUICK LINKS</div>
            <ul className="space-y-2 sm:space-y-3">
              <li><Link to="/" className="hover:text-white text-sm sm:text-base transition-colors">Home</Link></li>
              <li><Link to="/portfolio" className="hover:text-white text-sm sm:text-base transition-colors">Portfolio</Link></li>
              <li><Link to="/blog" className="hover:text-white text-sm sm:text-base transition-colors">Blog</Link></li>
              <li><Link to="/about" className="hover:text-white text-sm sm:text-base transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-white text-sm sm:text-base transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="text-center sm:text-left">
            <div className="text-white font-semibold mb-4 sm:mb-5 text-sm sm:text-base">SERVICES</div>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link to="/we-offer" className="hover:text-green-400 text-sm sm:text-base transition-colors cursor-pointer group">
                  <span className="group-hover:underline">Web Application Development</span>
                </Link>
              </li>
              <li>
                <Link to="/we-offer" className="hover:text-green-400 text-sm sm:text-base transition-colors cursor-pointer group">
                  <span className="group-hover:underline">Mobile Application Development</span>
                </Link>
              </li>
              <li>
                <Link to="/we-offer" className="hover:text-green-400 text-sm sm:text-base transition-colors cursor-pointer group">
                  <span className="group-hover:underline">System Modernization</span>
                </Link>
              </li>
              <li>
                <Link to="/we-offer" className="hover:text-green-400 text-sm sm:text-base transition-colors cursor-pointer group">
                  <span className="group-hover:underline">Payment System Integration</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div className="text-center sm:text-left">
            <div className="text-white font-semibold mb-4 sm:mb-5 text-sm sm:text-base">WORKING HOURS</div>
            <div className="space-y-2 sm:space-y-3">
              <div className="text-sm sm:text-base">
                <div className="text-gray-400">Mon - Fri:</div>
                <div className="text-white">9AM to 6PM</div>
              </div>
              <div className="text-sm sm:text-base">
                <div className="text-gray-400">Weekend:</div>
                <div className="text-white">By Appointment</div>
              </div>
              <div className="mt-4">
                <Link to="/contact" className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left">
            <div className="text-white font-semibold mb-4 sm:mb-5 text-sm sm:text-base">CONTACT US</div>
            <div className="space-y-3 sm:space-y-4">
              <div>
                <div className="text-gray-400 text-sm sm:text-base">Phone:</div>
                <a href="tel:0712665257" className="text-white hover:text-green-400 transition-colors cursor-pointer text-sm sm:text-base">
                  0712 665 257
                </a>
              </div>
              <div>
                <div className="text-gray-400 text-sm sm:text-base">Email:</div>
                <a href="mailto:Technova446@gmail.com" className="text-white hover:text-green-400 transition-colors cursor-pointer text-sm sm:text-base">
                  Technova446@gmail.com
                </a>
              </div>
              <div>
                <div className="text-gray-400 text-sm sm:text-base">Website:</div>
                <a href="https://code4genius.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400 transition-colors cursor-pointer text-sm sm:text-base">
                  code4genius.com
                </a>
              </div>
              <div>
                <div className="text-gray-400 text-sm sm:text-base">Address:</div>
                <div className="text-white text-sm sm:text-base">
                  Kahawa Wendani, Nairobi<br />
                  P.O. Box 00100
                </div>
              </div>
              <div className="mt-4">
                <Link to="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>


        </div>

        <div className="mt-8 sm:mt-10 pt-6 border-t border-[#1b2630] flex flex-col md:flex-row items-center justify-between text-xs sm:text-sm text-gray-500">
          <div className="text-center md:text-left">© {new Date().getFullYear()} Technova. All rights reserved.</div>
          <Link to="/contact" className="hover:text-green-400 mt-3 md:mt-0 transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
