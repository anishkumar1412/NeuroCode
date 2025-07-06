import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-black text-white flex items-center justify-between px-6 py-3 shadow-md">
      {/* Logo */}
      <div className="text-2xl font-semibold">
        <Link to='/'>
        <span className="italic text-green-500">Neuro</span>
        <span className="italic text-white">Code</span>
        </Link>
      </div>

      {/* Buttons */}
      <div className="space-x-3">
        <Link
          to="/login"
          className="px-4 py-2 border border-white rounded-md hover:bg-white hover:text-black transition"
        >
          Log In
        </Link>
        <Link
          to="/signup"
          className="px-4 py-2 rounded-md bg-gradient-to-r from-green-500 to-green-600 text-white hover:opacity-90 transition"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
