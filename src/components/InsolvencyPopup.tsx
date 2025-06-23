
import React, { useState, useEffect } from 'react';
import { X, AlertTriangle, Phone, Mail, Globe } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface InsolvencyPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const InsolvencyPopup = ({ isOpen, onClose }: InsolvencyPopupProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center text-orange-800 font-bold text-lg">
            <AlertTriangle className="h-6 w-6 text-orange-600 mr-2" />
            Wichtiger Hinweis
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
            <p className="text-orange-800 font-semibold mb-3">
              Herzlichen Dank für Ihr Vertrauen
            </p>
            <p className="text-orange-700 text-sm leading-relaxed">
              Wir bedanken uns herzlich für Ihr Vertrauen und Ihre Unterstützung in den vergangenen Jahren. Leider müssen wir Ihnen mitteilen, dass über das Vermögen der To-Sun Bau GmbH das Insolvenzverfahren eröffnet wurde. Für alle weiteren Anliegen wenden Sie sich bitte an unseren Insolvenzverwalter.
            </p>
          </div>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-4">
              Insolvenzverwalter
            </h4>
            <div className="space-y-3 text-sm text-gray-700">
              <div>
                <p className="font-medium text-gray-900 mb-2">
                  Lonquich, Külper & Kollegen Rechtsanwälte PartG, Frankfurt a. Main
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-gray-500 flex-shrink-0" />
                  <span>+49 69 94321306</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-gray-500 flex-shrink-0" />
                  <a 
                    href="mailto:info@kuelper-kanzlei.de"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    info@kuelper-kanzlei.de
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-4 w-4 text-gray-500 flex-shrink-0" />
                  <a 
                    href="https://kuelper-kanzlei.de"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    kuelper-kanzlei.de
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <p className="text-xs text-gray-600 text-center">
            Für Rückfragen wenden Sie sich bitte direkt an den Insolvenzverwalter.
          </p>
        </div>
        
        <button
          onClick={onClose}
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
