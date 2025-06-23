
import React, { useState, useEffect } from 'react';
import { X, AlertTriangle, Phone, Mail } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const InsolvencyPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already seen the popup today
    const lastSeen = localStorage.getItem('insolvencyPopupLastSeen');
    const today = new Date().toDateString();
    
    if (lastSeen !== today) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Remember that user has seen the popup today
    localStorage.setItem('insolvencyPopupLastSeen', new Date().toDateString());
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md mx-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center text-red-800 font-bold text-lg">
            <AlertTriangle className="h-6 w-6 text-red-600 mr-2" />
            Wichtiger Hinweis
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-800 font-semibold mb-2">
              Insolvenzverfahren eröffnet
            </p>
            <p className="text-red-700 text-sm">
              Über das Vermögen der To-Sun Bau GmbH wurde am [Datum] das Insolvenzverfahren eröffnet.
            </p>
          </div>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-3">
              Insolvenzverwalter
            </h4>
            <div className="space-y-2 text-sm text-gray-700">
              <p className="font-medium">
                Lonquich, Külper & Kollegen Rechtsanwälte PartG
              </p>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-gray-500" />
                <span>+49 (0) 69 / 24 00 73 - 0</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-gray-500" />
                <span>info@lkk-rechtsanwaelte.de</span>
              </div>
            </div>
          </div>
          
          <p className="text-xs text-gray-600">
            Für Rückfragen wenden Sie sich bitte direkt an den Insolvenzverwalter.
          </p>
        </div>
        
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Schließen</span>
        </button>
      </DialogContent>
    </Dialog>
  );
};

export default InsolvencyPopup;
