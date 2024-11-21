// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-zinc-900 text-white py-4 px-6 shadow-lg">
      <div className="flex justify-between items-center">
        {/* Clueminaty Title */}
        <Link
          to="/"
          
        >
        <h1 className="text-lg font-bold text-yellow-500">Clueminati 2.O</h1>
        </Link>
        
      </div>
    </nav>
  );
};

export default Navbar;
