
import React from 'react';

const InsolvencyNotice = () => {
  return (
    <div className="bg-red-100 border-2 border-red-800 p-6 mb-8 mx-4">
      <div className="text-center">
        <h2 className="text-red-800 text-xl font-bold mb-3">
          WICHTIGER HINWEIS
        </h2>
        <p className="text-red-800 text-base mb-4 font-medium">
          Die To-Sun Bau GmbH befindet sich in Insolvenz.
        </p>
        <p className="text-red-700 text-sm mb-4">
          Für alle geschäftlichen Angelegenheiten wenden Sie sich bitte an den Insolvenzverwalter.
        </p>
        <div className="border-t-2 border-red-300 pt-4">
          <p className="text-red-800 text-sm font-medium">
            Kontakt zum Insolvenzverwalter:
          </p>
          <a 
            href="mailto:insolvenzverwalter@example.com" 
            className="text-red-800 text-sm underline hover:text-red-600"
          >
            insolvenzverwalter@example.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default InsolvencyNotice;
