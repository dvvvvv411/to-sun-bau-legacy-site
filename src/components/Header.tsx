
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-white border-b-2 border-blue-800 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <Link to="/" className="text-blue-800 text-2xl font-bold no-underline">
              To-Sun Bau GmbH
            </Link>
          </div>
          <nav>
            <ul className="flex space-x-8 list-none m-0 p-0">
              <li>
                <Link 
                  to="/" 
                  className="text-blue-800 text-base font-medium no-underline hover:text-blue-600 transition-colors"
                >
                  Startseite
                </Link>
              </li>
              <li>
                <Link 
                  to="/ueber-uns" 
                  className="text-blue-800 text-base font-medium no-underline hover:text-blue-600 transition-colors"
                >
                  Über uns
                </Link>
              </li>
              <li>
                <Link 
                  to="/leistungen" 
                  className="text-blue-800 text-base font-medium no-underline hover:text-blue-600 transition-colors"
                >
                  Leistungen
                </Link>
              </li>
              <li>
                <Link 
                  to="/kontakt" 
                  className="text-blue-800 text-base font-medium no-underline hover:text-blue-600 transition-colors"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
