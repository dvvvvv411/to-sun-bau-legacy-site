
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">To-Sun Bau GmbH</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Ihr zuverlässiger Partner für Hoch- und Tiefbauarbeiten aller Art.
              Qualität und Termintreue stehen bei uns an erster Stelle.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Kontakt</h4>
            <div className="text-gray-300 text-sm">
              <p>Waldschmidtstr. 67</p>
              <p>D-60316 Frankfurt a. Main</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-8 pt-6">
          <p className="text-center text-gray-400 text-sm">
            © 2024 To-Sun Bau GmbH. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
