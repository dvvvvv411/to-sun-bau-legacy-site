import React from 'react';
import Layout from '../components/Layout';
import { Building2, Hammer, Users, Award } from 'lucide-react';

const Index = () => {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-transparent"></div>
          <div className="container mx-auto px-4 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                    Willkommen bei<br /><span className="text-blue-700">To-Sun Bau GmbH</span>
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Ihr kompetenter Partner für Hoch- und Tiefbauarbeiten aller Art in Frankfurt am Main und Umgebung.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border">
                    <Award className="h-5 w-5 text-blue-600" />
                    <span className="text-sm font-medium text-gray-700">Qualität</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border">
                    <Users className="h-5 w-5 text-blue-600" />
                    <span className="text-sm font-medium text-gray-700">Erfahrung</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border">
                    <Hammer className="h-5 w-5 text-blue-600" />
                    <span className="text-sm font-medium text-gray-700">Zuverlässigkeit</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img 
                    src="https://i.imgur.com/bdKer9v.jpeg" 
                    alt="Modernes Bauwerk" 
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Building2 className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Frankfurt a.M.</p>
                      <p className="text-sm text-gray-600">Unser Standort</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Unsere Leistungen
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Wir führen Hoch- und Tiefbauarbeiten aller Art durch und stehen für Qualität, 
                Zuverlässigkeit und fachgerechte Ausführung.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img 
                  src="https://i.imgur.com/13fj2fB.jpeg" 
                  alt="Hochbau" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Hochbauarbeiten</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Rohbauarbeiten</li>
                    <li>• Maurerarbeiten</li>
                    <li>• Sanierungen</li>
                    <li>• Umbaumaßnahmen</li>
                  </ul>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img 
                  src="https://i.imgur.com/izaOBW5.jpeg" 
                  alt="Tiefbau" 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Tiefbauarbeiten</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Erdarbeiten</li>
                    <li>• Fundamentarbeiten</li>
                    <li>• Kanalbauarbeiten</li>
                    <li>• Straßenbauarbeiten</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                  Unser Unternehmen
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Die To-Sun Bau GmbH ist ein etabliertes Bauunternehmen mit Sitz in Frankfurt am Main. 
                  Wir führen Hoch- und Tiefbauarbeiten aller Art durch und stehen für Qualität, 
                  Zuverlässigkeit und fachgerechte Ausführung.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-blue-600 mb-2">4+</div>
                    <div className="text-gray-600">Jahre Erfahrung</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                    <div className="text-gray-600">Projekte</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://i.imgur.com/1RuhxOw.jpg" 
                  alt="Bauunternehmen" 
                  className="w-full h-96 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section className="py-20 bg-blue-700">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <h2 className="text-3xl lg:text-4xl font-bold mb-8">Standort Frankfurt</h2>
              <p className="text-xl mb-8 opacity-90">
                Unser Firmensitz befindet sich in Frankfurt am Main
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-md mx-auto">
                <div className="text-white">
                  <p className="text-lg font-medium">Waldschmidtstr. 67</p>
                  <p className="text-lg font-medium">D-60316 Frankfurt a. Main</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
