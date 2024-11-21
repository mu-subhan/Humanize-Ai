import React, { useState } from 'react';
import logo from "../images/logo 1 1.png"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#0B1033] p-4 font-[Poppins]">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 text-white">
          <a href="#" className="">Home</a>
  
          <a href="#" className="">AI Detector</a>
  
          <a href="#" className="">Contact Us</a>
  
          <a href="#" className="text-[#7F90FF]">About</a>

         
        </div>
         {/* Register and Sign-In Buttons */}
         <div className="ml-6  hidden md:flex ">
            <button className="bg-blue-500 text-white px-4 py-1 rounded-full ">Register</button>
            <button className="border border-white text-white px-4 py-1 rounded-full">Sign In</button>
          </div>

        {/* Mobile Menu Button */}
        <button className="text-white md:hidden" onClick={toggleSidebar}>
          ☰
        </button>
      </div>

      {/* Sidebar Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={toggleSidebar}
      />
      
      {/* Mobile Sidebar */}
      <div 
        className={`fixed left-0 top-0 bg-[#0B1033] w-64 h-full shadow-lg transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex items-center justify-between p-4">
          <img src={logo} alt="Logo" className="h-8" />
          <button className="text-white" onClick={toggleSidebar}>✖</button>
        </div>

        <div className="flex flex-col p-4 space-y-2">
          <a href="#" className="text-white  py-2">Home</a>
          <a href="#" className="text-white  py-2">AI Detector</a>
          <a href="#" className="text-[#7f90ff] py-2">Contact Us</a>
          <a href="#" className="text-white  py-2">About</a>
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
