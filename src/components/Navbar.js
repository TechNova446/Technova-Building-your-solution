import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ onMobileMenuToggle }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleMobileMenuToggle = () => {
    const newOpenState = !open;
    setOpen(newOpenState);
    if (onMobileMenuToggle) {
      onMobileMenuToggle(newOpenState);
    }
  };

  return (
    <>
      <nav className={`bg-black px-6 py-4 transform transition-all duration-800 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo Section */}
          <div className="">
            <div className="w-40 h-40 rounded-xl">
              <img src="/logo.png" alt="Technova Logo" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-green-400 transition-colors font-medium">Home</Link>
            <Link to="/portfolio" className="text-green-400 font-medium">Portfolio</Link>
            <Link to="/blog" className="text-white hover:text-green-400 transition-colors font-medium">Blog</Link>
            <Link to="/about" className="text-white hover:text-green-400 transition-colors font-medium">About</Link>
            <Link to="/contact" className="text-white hover:text-green-400 transition-colors font-medium">Contact</Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden w-10 h-10 grid place-items-center rounded-lg border border-gray-700 text-white z-50"
            aria-label="Toggle menu"
            onClick={handleMobileMenuToggle}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Full Screen Mobile Menu Overlay */}
      {open && (
        <div className="md:hidden fixed inset-0 bg-black z-40 flex flex-col">
          {/* Close Button at Top */}
          <div className="flex justify-center pt-8 pb-4">
            <button
              onClick={handleMobileMenuToggle}
              className="w-12 h-12 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Items Centered */}
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center space-y-8">
              <Link 
                onClick={() => handleMobileMenuToggle()} 
                to="/" 
                className="block text-4xl font-bold text-white hover:text-green-400 transition-colors py-4"
              >
                Home
              </Link>
              <Link 
                onClick={() => handleMobileMenuToggle()} 
                to="/portfolio" 
                className="block text-4xl font-bold text-green-400 py-4"
              >
                Portfolio
              </Link>
              <Link 
                onClick={() => handleMobileMenuToggle()} 
                to="/blog" 
                className="block text-4xl font-bold text-white hover:text-green-400 transition-colors py-4"
              >
                Blog
              </Link>
              <Link 
                onClick={() => handleMobileMenuToggle()} 
                to="/about" 
                className="block text-4xl font-bold text-white hover:text-green-400 transition-colors py-4"
              >
                About
              </Link>
              <Link 
                onClick={() => handleMobileMenuToggle()} 
                to="/contact" 
                className="block text-4xl font-bold text-white hover:text-green-400 transition-colors py-4"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
