
import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-lg relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-blue-800/5"></div>
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-700 p-2 rounded-lg">
              <Building2 className="h-8 w-8 text-white" />
            </div>
            <Link to="/" className="text-blue-800 text-2xl font-bold no-underline hover:text-blue-600 transition-colors">
              To-Sun Bau GmbH
            </Link>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8 list-none m-0 p-0">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-700 text-base font-medium no-underline hover:text-blue-600 transition-colors py-2 px-4 rounded-lg hover:bg-blue-50"
                >
                  Startseite
                </Link>
              </li>
              <li>
                <Link 
                  to="/ueber-uns" 
                  className="text-gray-700 text-base font-medium no-underline hover:text-blue-600 transition-colors py-2 px-4 rounded-lg hover:bg-blue-50"
                >
                  Über uns
                </Link>
              </li>
              <li>
                <Link 
                  to="/leistungen" 
                  className="text-gray-700 text-base font-medium no-underline hover:text-blue-600 transition-colors py-2 px-4 rounded-lg hover:bg-blue-50"
                >
                  Leistungen
                </Link>
              </li>
              <li>
                <Link 
                  to="/kontakt" 
                  className="text-gray-700 text-base font-medium no-underline hover:text-blue-600 transition-colors py-2 px-4 rounded-lg hover:bg-blue-50"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </nav>
          <div className="md:hidden">
            <Menu className="h-6 w-6 text-gray-700" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
