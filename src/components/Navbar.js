import React, { useState } from 'react';
import logo from '../images/logo 1 1.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#0B1033] p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8" />
        </div>

        {/* Toggle Button for Mobile */}
        <button
          className="text-white md:hidden"
          onClick={toggleSidebar}
        >
          ☰
        </button>

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-white hover:text-blue-400">Home</a>
          <a href="#" className="text-white hover:text-blue-400">AI Detector</a>
          <a href="#" className="text-white hover:text-blue-400">About</a>
          <div className="flex space-x-2">
            <button className="bg-blue-500 text-white px-4 py-1 rounded-full">Register</button>
            <button className="border border-white text-white px-4 py-1 rounded-full">Sign In</button>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={toggleSidebar}
      />
      <div 
        className={`fixed left-0 top-0 bg-[#0B1033] w-64 h-full shadow-lg transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex items-center justify-between p-4">
          <h2 className="text-white text-lg">Menu</h2>
          <button className="text-white" onClick={toggleSidebar}>✖</button>
        </div>

        <div className="flex flex-col p-4">
          <a href="#" className="block text-white hover:text-blue-400 py-2">Home</a>
          <a href="#" className="block text-white hover:text-blue-400 py-2">AI Detector</a>
          <a href="#" className="block text-white hover:text-blue-400 py-2">About</a>
          <div className="mt-4">
            <button className="bg-blue-500 text-white w-full mb-2 py-2 rounded-full">Register</button>
            <button className="border border-white text-white w-full py-2 rounded-full">Sign In</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;