
import React from 'react';
import Layout from '../components/Layout';
import { Building2, MapPin, Phone, Mail, Clock, Navigation, Globe } from 'lucide-react';

const Kontakt = () => {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-transparent"></div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="text-blue-700">Kontakt</span> & Standort
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Nehmen Sie Kontakt mit uns auf. Unser Standort in Frankfurt am Main ist 
                zentral gelegen und gut erreichbar.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Company Information */}
              <div className="space-y-8">
                <div className="bg-white border border-gray-200 shadow-lg rounded-xl p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Building2 className="h-6 w-6 text-blue-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-blue-800">Firmeninformationen</h2>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 mb-3">To-Sun Bau GmbH</h3>
                      <div className="bg-gray-50 p-6 border border-gray-200 rounded-lg">
                        <div className="flex items-start space-x-3">
                          <MapPin className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                          <div>
                            <p className="text-gray-800 font-medium">Waldschmidtstr. 67</p>
                            <p className="text-gray-800 font-medium">D-60316 Frankfurt a. Main</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-6 border border-blue-200 rounded-lg">
                      <h4 className="text-lg font-bold text-blue-800 mb-3">Tätigkeitsbereich</h4>
                      <p className="text-blue-700 text-base leading-relaxed">
                        Ausführung von Hoch- und Tiefbauarbeiten aller Art. Unser erfahrenes Team 
                        steht für Qualität, Zuverlässigkeit und fachgerechte Ausführung.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg text-center">
                        <Clock className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                        <p className="text-sm font-medium text-gray-700">Seit 4 Jahren</p>
                        <p className="text-xs text-gray-600">Im Geschäft</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg text-center">
                        <Navigation className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                        <p className="text-sm font-medium text-gray-700">Frankfurt</p>
                        <p className="text-xs text-gray-600">Zentral gelegen</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Location & Map */}
              <div className="space-y-8">
                <div className="bg-white border border-gray-200 shadow-lg rounded-xl p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <MapPin className="h-6 w-6 text-blue-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-blue-800">Unser Standort</h2>
                  </div>
                  
                  <div className="relative">
                    <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-xl h-64 flex items-center justify-center">
                      <div className="text-center text-blue-800">
                        <Building2 className="h-12 w-12 mx-auto mb-4" />
                        <p className="text-lg font-bold mb-2">Frankfurt am Main</p>
                        <p className="text-base">Waldschmidtstraße 67</p>
                        <p className="text-base">60316 Frankfurt</p>
                        <div className="mt-4 p-3 bg-white/80 rounded-lg inline-block">
                          <p className="text-sm text-blue-700">Zentral gelegen in Frankfurt</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-800 mb-2">Erreichbarkeit</h4>
                    <p className="text-blue-700 text-sm">
                      Unser Firmensitz befindet sich in einer zentral gelegenen Lage in Frankfurt am Main 
                      und ist gut mit öffentlichen Verkehrsmitteln sowie dem Auto erreichbar.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Insolvency Notice */}
        <section className="py-20 bg-orange-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-orange-100 border border-orange-200 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-orange-800 mb-6">Herzlichen Dank für Ihr Vertrauen</h3>
                <p className="text-orange-700 text-lg leading-relaxed mb-6">
                  Wir bedanken uns herzlich für Ihr Vertrauen und Ihre Unterstützung in den vergangenen Jahren. Leider müssen wir Ihnen mitteilen, dass über das Vermögen der To-Sun Bau GmbH das Insolvenzverfahren eröffnet wurde. Für alle weiteren Anliegen wenden Sie sich bitte an unseren Insolvenzverwalter.
                </p>
                
                <div className="bg-white/50 p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-orange-800 mb-4">
                    Insolvenzverwalter
                  </h4>
                  <div className="space-y-3 text-sm text-orange-700">
                    <div>
                      <p className="font-medium text-orange-900 mb-3">
                        Lonquich, Külper & Kollegen Rechtsanwälte PartG, Frankfurt a. Main
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <Phone className="h-4 w-4 text-orange-600 flex-shrink-0" />
                        <span>+49 69 94321306</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="h-4 w-4 text-orange-600 flex-shrink-0" />
                        <a 
                          href="mailto:info@kuelper-kanzlei.de"
                          className="text-orange-700 hover:text-orange-600 underline"
                        >
                          info@kuelper-kanzlei.de
                        </a>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Globe className="h-4 w-4 text-orange-600 flex-shrink-0" />
                        <a 
                          href="https://kuelper-kanzlei.de"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-orange-700 hover:text-orange-600 underline"
                        >
                          kuelper-kanzlei.de
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Kontakt;
