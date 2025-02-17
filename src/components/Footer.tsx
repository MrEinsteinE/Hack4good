import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://twitter.com"
            className="transform hover:scale-110 hover:rotate-[15deg] hover:translate-y-[-5px] transition-all duration-300 ease-in-out hover:text-blue-400"
          >
            <FaTwitter size={24} className="transition-transform duration-500" />
          </a>
          <a
            href="https://linkedin.com"
            className="transform hover:scale-110 hover:rotate-[15deg] hover:translate-y-[-5px] transition-all duration-300 ease-in-out hover:text-blue-400"
          >
            <FaLinkedin size={24} className="transition-transform duration-500" />
          </a>
          <a
            href="https://github.com"
            className="transform hover:scale-110 hover:rotate-[15deg] hover:translate-y-[-5px] transition-all duration-300 ease-in-out hover:text-blue-400"
          >
            <FaGithub size={24} className="transition-transform duration-500" />
          </a>
        </div>
        <p>&copy; 2025 Hack4Good. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
