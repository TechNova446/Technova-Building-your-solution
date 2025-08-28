import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <nav className={`bg-black px-6 py-4 transform transition-all duration-800 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center ring-2 ring-white/70 hover:ring-white transition">
            <img src="/logo%20(2).png" alt="Technova Logo" className="w-8 h-8 object-contain" />
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-green-400 font-medium hover:text-white hover:scale-105 transition-all transform">Home</Link>
          <Link to="/portfolio" className="text-white hover:text-green-400 hover:scale-105 transition-all transform">Portfolio</Link>
          <Link to="/blog" className="text-white hover:text-green-400 hover:scale-105 transition-all transform">Blog</Link>
          <Link to="/we-offer" className="text-white hover:text-green-400 hover:scale-105 transition-all transform">We Offer</Link>
          <Link to="/about" className="text-white hover:text-green-400 hover:scale-105 transition-all transform">About</Link>
          <Link to="/contact" className="text-white hover:text-green-400 hover:scale-105 transition-all transform">Contact</Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden w-10 h-10 grid place-items-center rounded-lg border border-gray-700 text-white"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 space-y-2">
          <Link onClick={() => setOpen(false)} to="/" className="block px-3 py-2 rounded-lg bg-[#0f1316] text-green-400">Home</Link>
          <Link onClick={() => setOpen(false)} to="/portfolio" className="block px-3 py-2 rounded-lg bg-[#0f1316] text-white">Portfolio</Link>
          <Link onClick={() => setOpen(false)} to="/blog" className="block px-3 py-2 rounded-lg bg-[#0f1316] text-white">Blog</Link>
          <Link onClick={() => setOpen(false)} to="/we-offer" className="block px-3 py-2 rounded-lg bg-[#0f1316] text-white">We Offer</Link>
          <Link onClick={() => setOpen(false)} to="/about" className="block px-3 py-2 rounded-lg bg-[#0f1316] text-white">About</Link>
          <Link onClick={() => setOpen(false)} to="/contact" className="block px-3 py-2 rounded-lg bg-[#0f1316] text-white">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
