import React from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav id="nav-menu" className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#home" className="text-xl font-bold text-gray-800">
              Portfolio
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="nav-link home text-gray-600 hover:text-gray-900"
            >
              Home
            </a>
            <a
              href="#about"
              className="nav-link about text-gray-600 hover:text-gray-900"
            >
              About
            </a>
            <a
              href="#skills"
              className="nav-link skills text-gray-600 hover:text-gray-900"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="nav-link projects text-gray-600 hover:text-gray-900"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="nav-link contact text-gray-600 hover:text-gray-900"
            >
              Contact
            </a>
            <a
              href="/DeepakPatil_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link resume bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              id="resume-link-1"
            >
              Resume
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button className="text-gray-600 hover:text-gray-900">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
