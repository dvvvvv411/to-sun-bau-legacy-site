
import React from 'react';
import Layout from '../components/Layout';
import { Hammer, Building2, Wrench, Truck, HardHat, CheckCircle, Phone, Mail, Globe } from 'lucide-react';

const Leistungen = () => {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-transparent"></div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Unsere <span className="text-blue-700">Leistungen</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Professionelle Hoch- und Tiefbauarbeiten aller Art. Von der Planung bis zur Fertigstellung 
                stehen wir Ihnen als kompetenter Partner zur Seite.
              </p>
              <div className="relative overflow-hidden rounded-2xl shadow-2xl max-w-3xl mx-auto">
                <img 
                  src="https://i.imgur.com/OquGx7k.jpeg" 
                  alt="Baustelle im Hochbau" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Hochbau */}
              <div className="bg-white border border-gray-200 shadow-lg rounded-xl overflow-hidden">
                <div className="relative">
                  <img 
                    src="https://i.imgur.com/13fj2fB.jpeg" 
                    alt="Hochbau Arbeiten" 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Building2 className="h-5 w-5 text-blue-600" />
                      <span className="font-semibold text-gray-800">Hochbau</span>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-blue-800 mb-6">Hochbauarbeiten</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Umfassende Hochbauarbeiten von der Rohbauphase bis zur Fertigstellung. 
                    Wir realisieren Ihre Bauvorhaben mit höchster Präzision und Qualität.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">Rohbauarbeiten</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">Maurerarbeiten</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">Betonarbeiten</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">Sanierungsarbeiten</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">Umbaumaßnahmen</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">Renovierungen</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tiefbau */}
              <div className="bg-white border border-gray-200 shadow-lg rounded-xl overflow-hidden">
                <div className="relative">
                  <img 
                    src="https://i.imgur.com/izaOBW5.jpeg" 
                    alt="Tiefbau Arbeiten" 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Truck className="h-5 w-5 text-blue-600" />
                      <span className="font-semibold text-gray-800">Tiefbau</span>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-blue-800 mb-6">Tiefbauarbeiten</h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Professionelle Tiefbauarbeiten für Infrastruktur und Fundamente. 
                    Von Erdarbeiten bis hin zu komplexen Drainage-Systemen.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">Erdarbeiten</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">Fundamentarbeiten</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">Kanalbauarbeiten</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">Straßenbauarbeiten</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">Pflasterarbeiten</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">Drainage-Systeme</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Warum To-Sun Bau wählen?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Unser Engagement für Qualität und Zuverlässigkeit macht den Unterschied
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-6">
                  <HardHat className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Fachkompetenz</h3>
                <p className="text-gray-600 leading-relaxed">
                  Unser erfahrenes Team verfügt über tiefgreifende Kenntnisse in allen 
                  Bereichen des Hoch- und Tiefbaus.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-6">
                  <Wrench className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Moderne Technik</h3>
                <p className="text-gray-600 leading-relaxed">
                  Einsatz modernster Baumaschinen und -technik für effiziente und 
                  präzise Arbeitsausführung.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Qualitätsgarantie</h3>
                <p className="text-gray-600 leading-relaxed">
                  Wir garantieren höchste Qualitätsstandards und arbeiten nach 
                  aktuellen Normen und Vorschriften.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Section */}
        <section className="py-20 bg-blue-700">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8">Qualität und Zuverlässigkeit</h2>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Bei allen unseren Projekten stehen Qualität, fachgerechte Ausführung und Termintreue 
                im Vordergrund. Wir arbeiten nach den neuesten Standards und Vorschriften der Baubranche.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-3xl font-bold text-white mb-2">100%</div>
                  <div className="text-blue-100">Qualitätsstandard</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-3xl font-bold text-white mb-2">4+</div>
                  <div className="text-blue-100">Jahre Erfahrung</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-3xl font-bold text-white mb-2">24/7</div>
                  <div className="text-blue-100">Projektsupport</div>
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

export default Leistungen;
