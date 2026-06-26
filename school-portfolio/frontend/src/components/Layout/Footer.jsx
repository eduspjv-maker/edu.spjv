import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">SUTARPARA JATIYA VIDYALAYA</h3>
            <p className="text-gray-400 mb-4">Shaping futures with excellence in education since 2004.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition"><FaFacebook size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition"><FaInstagram size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition"><FaYoutube size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition"><FaWhatsapp size={24} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-primary transition">About Us</Link></li>
              <li><Link to="/academics" className="text-gray-400 hover:text-primary transition">Academics</Link></li>
              <li><Link to="/teachers" className="text-gray-400 hover:text-primary transition">Teachers</Link></li>
              <li><Link to="/events" className="text-gray-400 hover:text-primary transition">Events</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <p className="flex items-center gap-3 text-gray-400"><FaMapMarkerAlt /> 123 Education Street, City, State - 123456</p>
              <p className="flex items-center gap-3 text-gray-400"><FaPhone /> +91 98765 43210</p>
              <p className="flex items-center gap-3 text-gray-400"><FaEnvelope /> info@eliteschool.edu</p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe for updates and news</p>
            <form className="flex">
              <input type="email" placeholder="Your email" className="flex-1 px-4 py-2 rounded-l-lg text-gray-900" />
              <button className="bg-primary px-4 py-2 rounded-r-lg hover:bg-primary/80 transition">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">&copy; 2024 SUTARPARA JATIYA VIDYALAYA. All rights reserved.</p>
          <p className="text-gray-500 text-sm mt-2">Developed with ❤️ by School Team</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;