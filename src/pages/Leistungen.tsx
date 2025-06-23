
import React from 'react';
import Layout from '../components/Layout';

const Leistungen = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-blue-800 mb-8 text-center">Unsere Leistungen</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 border border-gray-300 shadow-sm mb-8">
            <p className="text-gray-700 text-lg leading-relaxed mb-8 text-center">
              Die To-Sun Bau GmbH führt Hoch- und Tiefbauarbeiten aller Art durch. 
              Unsere Leistungen umfassen ein breites Spektrum im Baubereich.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-bold text-blue-800 mb-4">Hochbau</h2>
                <ul className="text-gray-700 text-base space-y-2">
                  <li>• Rohbauarbeiten</li>
                  <li>• Maurerarbeiten</li>
                  <li>• Betonarbeiten</li>
                  <li>• Sanierungsarbeiten</li>
                  <li>• Umbaumaßnahmen</li>
                  <li>• Renovierungen</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-blue-800 mb-4">Tiefbau</h2>
                <ul className="text-gray-700 text-base space-y-2">
                  <li>• Erdarbeiten</li>
                  <li>• Fundamentarbeiten</li>
                  <li>• Kanalbauarbeiten</li>
                  <li>• Straßenbauarbeiten</li>
                  <li>• Pflasterarbeiten</li>
                  <li>• Drainage-Systeme</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-gray-50 border border-gray-200">
              <h3 className="text-lg font-bold text-blue-800 mb-3">Qualität und Zuverlässigkeit</h3>
              <p className="text-gray-700 text-base leading-relaxed">
                Bei allen unseren Projekten stehen Qualität, fachgerechte Ausführung und Termintreue 
                im Vordergrund. Wir arbeiten nach den neuesten Standards und Vorschriften der Baubranche.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Leistungen;
