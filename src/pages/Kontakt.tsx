
import React from 'react';
import Layout from '../components/Layout';

const Kontakt = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-blue-800 mb-8 text-center">Kontakt</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 border border-gray-300 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-bold text-blue-800 mb-6">Firmenadresse</h2>
                <div className="bg-gray-50 p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">To-Sun Bau GmbH</h3>
                  <div className="text-gray-700 text-base space-y-1">
                    <p>Waldschmidtstr. 67</p>
                    <p>D-60316 Frankfurt a. Main</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-lg font-bold text-blue-800 mb-3">Tätigkeitsbereich</h3>
                  <p className="text-gray-700 text-base">
                    Ausführung von Hoch- und Tiefbauarbeiten aller Art
                  </p>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-bold text-blue-800 mb-6">Standort</h2>
                <div className="bg-gray-50 p-6 border border-gray-200 h-64 flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <p className="text-base font-medium">Frankfurt am Main</p>
                    <p className="text-sm mt-2">Waldschmidtstraße 67</p>
                    <p className="text-sm">60316 Frankfurt</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-red-50 border border-red-200">
              <h3 className="text-lg font-bold text-red-800 mb-3">Wichtiger Hinweis</h3>
              <p className="text-red-700 text-base">
                Die To-Sun Bau GmbH befindet sich in Insolvenz. Für alle geschäftlichen Angelegenheiten 
                wenden Sie sich bitte an den zuständigen Insolvenzverwalter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Kontakt;
