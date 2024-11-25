import React from 'react';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Replaced Twitter with LinkedIn
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="container mx-auto px-6 text-center">
        {/* Footer Content */}
        <div className="flex justify-center space-x-8 mb-4">
          {/* Social Media Icons */}
          <Link to="https://www.facebook.com/nayeb.qureshi.2024" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl hover:text-blue-500 transition-colors" />
          </Link>
          <Link to="https://www.linkedin.com/in/nayeb-qureshi-442373261/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-blue-700 transition-colors" />
          </Link>
          <Link to="https://www.instagram.com/nayeb_qureshi/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl hover:text-pink-500 transition-colors" />
          </Link>
        </div>

        {/* Footer Links */}
        <div className="text-sm mb-4">
          <a href="/about" className="hover:underline mx-3">About</a>
          <a href="/contact" className="hover:underline mx-3">Contact</a>
          <a href="/privacy" className="hover:underline mx-3">Privacy Policy</a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-400">
          &copy; {new Date().getFullYear()} CampTrail. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
