import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white fixed z-10 w-full justify-between shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-lg font-bold">VILLA</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="text-black hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link to="/Contact" className="text-black hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium">Contact Us</Link>
                <Link to="/" className="text-black hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium">Property Details</Link>
                <Link to="/" className="text-black hover:text-green-700 px-3 py-2 rounded-md text-sm font-medium">Properties</Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <Link to="#" className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-600">
              SCHEDULE VISIT
            </Link>
          </div>
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-black hover:text-gray-700 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-green-500 hover:text-green-700 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to="/Contact" className="text-black hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium">Contact Us</Link>
            <Link to="/" className="text-black hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium">Property Details</Link>
            <Link to="/" className="text-black hover:text-gray-700 block px-3 py-2 rounded-md text-base font-medium">Properties</Link>
            <Link to="/" className="bg-green-500 text-white block text-center px-4 py-2 rounded-full text-sm font-medium hover:bg-green-600">
              SCHEDULE VISIT
            </Link>
          </div>
        </div>
      )}
    </nav>
    
  );
};

export default Navbar;
