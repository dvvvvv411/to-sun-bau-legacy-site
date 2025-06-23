
import React from 'react';
import Layout from '../components/Layout';
import InsolvencyNotice from '../components/InsolvencyNotice';

const Index = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <InsolvencyNotice />
        
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-blue-800 mb-4">
            Willkommen bei To-Sun Bau GmbH
          </h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Ihr kompetenter Partner für Hoch- und Tiefbauarbeiten aller Art in Frankfurt am Main und Umgebung.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 border border-gray-300 shadow-sm">
            <h2 className="text-xl font-bold text-blue-800 mb-4">Unser Unternehmen</h2>
            <p className="text-gray-700 text-base leading-relaxed">
              Die To-Sun Bau GmbH ist ein etabliertes Bauunternehmen mit Sitz in Frankfurt am Main. 
              Wir führen Hoch- und Tiefbauarbeiten aller Art durch und stehen für Qualität, 
              Zuverlässigkeit und fachgerechte Ausführung.
            </p>
          </div>
          
          <div className="bg-white p-6 border border-gray-300 shadow-sm">
            <h2 className="text-xl font-bold text-blue-800 mb-4">Unsere Leistungen</h2>
            <ul className="text-gray-700 text-base space-y-2">
              <li>• Hochbauarbeiten</li>
              <li>• Tiefbauarbeiten</li>
              <li>• Rohbauarbeiten</li>
              <li>• Sanierungen</li>
              <li>• Umbaumaßnahmen</li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-8 border border-gray-300 shadow-sm text-center">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">Standort Frankfurt</h2>
          <p className="text-gray-700 text-base mb-4">
            Unser Firmensitz befindet sich in Frankfurt am Main:
          </p>
          <div className="text-gray-800 font-medium">
            <p>Waldschmidtstr. 67</p>
            <p>D-60316 Frankfurt a. Main</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
