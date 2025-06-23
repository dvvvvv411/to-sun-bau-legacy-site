
import React from 'react';
import Layout from '../components/Layout';
import { Building2, MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';

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
                        <p className="text-sm font-medium text-gray-700">Seit 2008</p>
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

        {/* Services Overview */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Was wir für Sie tun können
                </h2>
                <p className="text-xl text-gray-600">
                  Umfassende Bauleistungen aus einer Hand
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="relative mb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=400&h=200&fit=crop&crop=center" 
                      alt="Hochbau Dienstleistungen" 
                      className="w-full h-40 object-cover rounded-lg"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg">
                      <span className="text-sm font-semibold text-blue-600">Hochbau</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Hochbauarbeiten</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Rohbauarbeiten und Maurerarbeiten</li>
                    <li>• Betonarbeiten und Sanierungen</li>
                    <li>• Umbaumaßnahmen und Renovierungen</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="relative mb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=400&h=200&fit=crop&crop=center" 
                      alt="Tiefbau Dienstleistungen" 
                      className="w-full h-40 object-cover rounded-lg"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg">
                      <span className="text-sm font-semibold text-blue-600">Tiefbau</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Tiefbauarbeiten</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Erdarbeiten und Fundamentarbeiten</li>
                    <li>• Kanalbau und Straßenbauarbeiten</li>
                    <li>• Pflasterarbeiten und Drainage-Systeme</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Insolvency Notice */}
        <section className="py-20 bg-red-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-red-100 border border-red-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-red-800 mb-6">Wichtiger Hinweis zur Insolvenz</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <p className="text-red-700 text-lg leading-relaxed mb-4">
                    Die To-Sun Bau GmbH befindet sich in Insolvenz. Für alle geschäftlichen Angelegenheiten 
                    wenden Sie sich bitte an den zuständigen Insolvenzverwalter.
                  </p>
                </div>
                <div className="bg-white/50 p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-red-800 mb-3">
                    Kontakt zum Insolvenzverwalter
                  </h4>
                  <a 
                    href="mailto:insolvenzverwalter@example.com" 
                    className="inline-flex items-center space-x-2 text-red-700 font-medium hover:text-red-600 transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    <span className="underline">insolvenzverwalter@example.com</span>
                  </a>
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
