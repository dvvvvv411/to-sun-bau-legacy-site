
import React from 'react';
import { AlertTriangle } from 'lucide-react';

const InsolvencyNotice = () => {
  return (
    <div className="bg-gradient-to-r from-red-50 to-red-100 border-2 border-red-200 shadow-lg mx-4 mt-4 rounded-xl overflow-hidden">
      <div className="bg-red-600 text-white px-6 py-2">
        <div className="flex items-center justify-center space-x-2">
          <AlertTriangle className="h-5 w-5" />
          <h2 className="text-lg font-bold">WICHTIGER HINWEIS</h2>
        </div>
      </div>
      <div className="p-6 text-center">
        <p className="text-red-800 text-lg mb-4 font-semibold">
          Die To-Sun Bau GmbH befindet sich in Insolvenz.
        </p>
        <p className="text-red-700 text-base mb-6">
          Für alle geschäftlichen Angelegenheiten wenden Sie sich bitte an den Insolvenzverwalter.
        </p>
        <div className="bg-white rounded-lg p-4 border border-red-200">
          <p className="text-red-800 text-sm font-medium mb-2">
            Kontakt zum Insolvenzverwalter:
          </p>
          <a 
            href="mailto:insolvenzverwalter@example.com" 
            className="text-red-700 text-sm font-medium underline hover:text-red-600 transition-colors"
          >
            insolvenzverwalter@example.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default InsolvencyNotice;
