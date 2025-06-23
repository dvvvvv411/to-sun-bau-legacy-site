
import React from 'react';
import Layout from '../components/Layout';

const UeberUns = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-blue-800 mb-8 text-center">Über uns</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 border border-gray-300 shadow-sm mb-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">To-Sun Bau GmbH</h2>
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              Die To-Sun Bau GmbH ist ein erfahrenes Bauunternehmen mit Sitz in Frankfurt am Main. 
              Unser Unternehmen hat sich auf die Ausführung von Hoch- und Tiefbauarbeiten aller Art spezialisiert 
              und verfügt über langjährige Erfahrung in der Baubranche.
            </p>
            
            <h3 className="text-xl font-bold text-blue-800 mb-4">Unser Firmensitz</h3>
            <div className="bg-gray-50 p-4 border border-gray-200 mb-6">
              <p className="text-gray-800 font-medium">
                Waldschmidtstr. 67<br />
                D-60316 Frankfurt a. Main
              </p>
            </div>
            
            <h3 className="text-xl font-bold text-blue-800 mb-4">Unser Tätigkeitsbereich</h3>
            <p className="text-gray-700 text-base leading-relaxed">
              Wir führen Hoch- und Tiefbauarbeiten aller Art durch und stehen unseren Kunden 
              als zuverlässiger Partner zur Seite. Dabei legen wir besonderen Wert auf 
              fachgerechte Ausführung, Termintreue und Qualität in allen Bereichen.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UeberUns;
