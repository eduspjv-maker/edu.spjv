import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useDarkMode } from '../../context/DarkModeContext';
import { FaBars, FaTimes, FaSun, FaMoon, FaUser } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useAuth();
  const { darkMode, toggleDarkMode } = useDarkMode();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Academics', path: '/academics' },
    { name: 'Achievements', path: '/pride' },
    { name: 'Alumni Gallery', path: '/gallery' },
    { name: 'Teachers & Staff', path: '/teachers' },
    { name: 'Events & News', path: '/events' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 dark:bg-darkBg/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-3">
            <img src="/logo.png" alt="School Logo" className="h-12 w-auto" />
            <span className="text-xl font-bold text-accent dark:text-primary">Elite School</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-700 dark:text-gray-200 hover:text-primary transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {darkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-gray-700" />}
            </button>
            {user ? (
              <button
                onClick={() => navigate('/admin')}
                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/80 transition"
              >
                Dashboard
              </button>
            ) : (
              <button
                onClick={() => navigate('/admin-login')}
                className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/80 transition"
              >
                Admin
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-4">
            <button onClick={toggleDarkMode} className="p-2">
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white dark:bg-darkCard rounded-lg shadow-xl mt-4 p-4 animate-slide-up">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block py-3 text-gray-700 dark:text-gray-200 hover:text-primary transition"
              >
                {link.name}
              </Link>
            ))}
            {user ? (
              <button
                onClick={() => {
                  setIsOpen(false);
                  navigate('/admin');
                }}
                className="w-full mt-2 bg-primary text-white px-4 py-2 rounded-lg"
              >
                Dashboard
              </button>
            ) : (
              <button
                onClick={() => {
                  setIsOpen(false);
                  navigate('/admin-login');
                }}
                className="w-full mt-2 bg-primary text-white px-4 py-2 rounded-lg"
              >
                Admin Login
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;