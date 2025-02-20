import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Menu Icons
import "../App.css";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed w-full z-30 bg-white/5 backdrop-blur-sm text-white px-4 md:px-8 py-4 rounded-lg shadow-md flex justify-between items-center">
      
      {/* Left Side Navigation (Hidden on Mobile) */}
      <ul className="hidden md:flex items-center font-bold space-x-4 md:space-x-6">
        {[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: "Projects", path: "/projects" },
        ].map((item) => (
          <li
            key={item.name}
            className={`${
              location.pathname === item.path
                ? "text-black opacity-100"
                : "opacity-70"
            } hover:opacity-100`}
          >
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>

      {/* Brand Name - Centered */}
      <p className="text-2xl lg:text-3xl font-bold cursor-pointer lg:pl-20">
        Devfolio
      </p>

      {/* Right Side Navigation (Hidden on Mobile) */}
      <div className="hidden md:flex items-center space-x-6">
        <ul className="flex items-center font-bold space-x-4 md:space-x-6">
          {[
            { name: "Experience", path: "/experience" },
            { name: "Certificates", path: "/certificates" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <li
              key={item.name}
              className={`${
                location.pathname === item.path
                  ? "text-black opacity-100"
                  : "opacity-70"
              } hover:opacity-100`}
            >
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>

        {/* Download Resume Button */}
        <a
          href="/resume.pdf"
          download
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Download Resume
        </a>
      </div>

      {/* Mobile Menu Button - Visible on Small Screens */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black/80 backdrop-blur-md text-white p-5 flex flex-col items-center md:hidden">
          {[
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
            { name: "Projects", path: "/projects" },
            { name: "Experience", path: "/experience" },
            { name: "Certificates", path: "/certificates" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="py-3 text-lg font-bold hover:text-gray-300"
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              {item.name}
            </Link>
          ))}

          {/* Resume Button in Mobile Menu */}
          <a
            href="/resume.pdf"
            download
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Download Resume
          </a>
        </div>
      )}
    </div>
  );
};

export default Header;
