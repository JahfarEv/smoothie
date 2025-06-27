// components/Navbar.js
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="bg-green-600 w-10 h-10 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xl">SD</span>
              </div>
              <span className="ml-3 text-xl font-bold text-green-800">Smoothie Diet</span>
            </div>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#benefits" className="text-gray-700 hover:text-green-600 font-medium">Benefits</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-green-600 font-medium">How It Works</a>
            <a href="#program" className="text-gray-700 hover:text-green-600 font-medium">Program</a>
            <a href="#testimonials" className="text-gray-700 hover:text-green-600 font-medium">Success Stories</a>
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-medium transition duration-300 cursor-pointer"
             onClick={() =>
              window.open(
                "https://65edc9bfs953u66e1nqnt5n-wa.hop.clickbank.net"
              )
            }>
              Get Started
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#benefits" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50">Benefits</a>
            <a href="#how-it-works" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50">How It Works</a>
            <a href="#program" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50">Program</a>
            <a href="#testimonials" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50">Success Stories</a>
            <button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-medium"  onClick={() =>
              window.open(
                "https://65edc9bfs953u66e1nqnt5n-wa.hop.clickbank.net"
              )
            }>
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;