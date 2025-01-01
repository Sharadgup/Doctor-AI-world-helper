import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:text-blue-200 transition duration-300">
          Doctor AI Assistant
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/login" className="hover:text-blue-200 transition duration-300">Login</Link></li>
            <li><Link to="/register" className="hover:text-blue-200 transition duration-300">Register</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

