import React from 'react';
import { useDarkMode } from '../../context/DarkModeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary text-white shadow-lg hover:bg-primary/80 transition-all duration-300 hover:scale-110"
    >
      {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
    </button>
  );
};

export default DarkModeToggle;