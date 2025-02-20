import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Menu Icons
import '../App.css';

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed w-full z-30 bg-white/5 backdrop-blur-sm text-white px-4 md:px-8 py-4 rounded-lg shadow-md flex justify-between items-center">
      
      {/* Left Side Navigation (Hidden on Mobile) */}
      <ul className="hidden md:flex items-center font-bold space-x-4 md:space-x-6">
        {["Home", "About", "Projects"].map((item) => (
          <li key={item} className={`${location.pathname === `/${item.toLowerCase()}` ? 'text-black opacity-100' : 'opacity-70'} hover:opacity-100`}>
            <Link to={`/${item.toLowerCase()}`}>{item}</Link>
          </li>
        ))}
      </ul>

      {/* Brand Name - Centered */}
      <p className="text-2xl md:text-3xl font-bold cursor-pointer lg:pl-20">Devfolio</p>

      {/* Right Side Navigation (Hidden on Mobile) */}
      <ul className="hidden md:flex items-center font-bold space-x-4 md:space-x-6">
        {["Experience", "Certificates", "Contact"].map((item) => (
          <li key={item} className={`${location.pathname === `/${item.toLowerCase()}` ? 'text-black opacity-100' : 'opacity-70'} hover:opacity-100`}>
            <Link to={`/${item.toLowerCase()}`}>{item}</Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button - Visible on Small Screens */}
      <button className="md:hidden text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black/80 backdrop-blur-md text-white p-5 flex flex-col items-center md:hidden">
          {["Home", "About", "Projects", "Experience", "Certificates", "Contact"].map((item) => (
            <Link 
              key={item} 
              to={`/${item.toLowerCase()}`} 
              className="py-7 text-lg font-bold hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default Header;
