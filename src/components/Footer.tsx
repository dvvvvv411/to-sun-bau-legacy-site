
import React from 'react';
import { Building2, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">To-Sun Bau GmbH</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Ihr zuverlässiger Partner für Hoch- und Tiefbauarbeiten aller Art.
              Qualität und Termintreue stehen bei uns an erster Stelle.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Kontakt</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>Waldschmidtstr. 67</p>
                  <p>D-60316 Frankfurt a. Main</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Leistungen</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Hochbauarbeiten</li>
              <li>• Tiefbauarbeiten</li>
              <li>• Rohbauarbeiten</li>
              <li>• Sanierungen</li>
              <li>• Umbaumaßnahmen</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
              <p className="text-center text-gray-400 text-sm">
                © 2025 To-Sun Bau GmbH. Alle Rechte vorbehalten.
              </p>
              <div className="flex space-x-4 text-sm">
                <Link 
                  to="/impressum" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Impressum
                </Link>
                <Link 
                  to="/datenschutz" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Datenschutz
                </Link>
              </div>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="bg-red-900/20 border border-red-500/30 px-4 py-2 rounded-lg">
                <p className="text-red-300 text-xs font-medium">
                  Unternehmen befindet sich in Insolvenz
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
