
import React from 'react';
import Layout from '../components/Layout';
import { Building2, Users, Award, Target, Clock, Shield, Phone, Mail, Globe } from 'lucide-react';

const UeberUns = () => {
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
                    Über <span className="text-blue-700">To-Sun Bau GmbH</span>
                  </h1>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Ein etabliertes Bauunternehmen mit langjähriger Erfahrung im Hoch- und Tiefbau, 
                    das für Qualität, Zuverlässigkeit und fachgerechte Ausführung steht.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=600&h=400&fit=crop&crop=center" 
                    alt="Bauunternehmen Team" 
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Info Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 border border-gray-200 shadow-lg rounded-xl mb-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-3xl font-bold text-blue-800 mb-6">Unser Unternehmen</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      Die To-Sun Bau GmbH ist ein erfahrenes Bauunternehmen mit Sitz in Frankfurt am Main. 
                      Unser Unternehmen hat sich auf die Ausführung von Hoch- und Tiefbauarbeiten aller Art spezialisiert 
                      und verfügt über langjährige Erfahrung in der Baubranche.
                    </p>
                    <p className="text-gray-700 text-base leading-relaxed">
                      Wir führen Hoch- und Tiefbauarbeiten aller Art durch und stehen unseren Kunden 
                      als zuverlässiger Partner zur Seite. Dabei legen wir besonderen Wert auf 
                      fachgerechte Ausführung, Termintreue und Qualität in allen Bereichen.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-800 mb-4">Unser Firmensitz</h3>
                    <div className="bg-gray-50 p-6 border border-gray-200 rounded-lg mb-6">
                      <p className="text-gray-800 font-medium text-lg">
                        Waldschmidtstr. 67<br />
                        D-60316 Frankfurt a. Main
                      </p>
                    </div>
                    <div className="bg-blue-50 p-6 border border-blue-200 rounded-lg">
                      <h4 className="text-lg font-bold text-blue-800 mb-3">Tätigkeitsbereich</h4>
                      <p className="text-blue-700 text-base">
                        Ausführung von Hoch- und Tiefbauarbeiten aller Art
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Unsere Werte
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Was uns als Bauunternehmen auszeichnet und antreibt
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 p-3 rounded-lg w-fit mb-6">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Qualität</h3>
                <p className="text-gray-600 leading-relaxed">
                  Höchste Qualitätsstandards bei allen Bauarbeiten. Wir verwenden nur erstklassige 
                  Materialien und arbeiten nach neuesten Vorschriften.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 p-3 rounded-lg w-fit mb-6">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Termintreue</h3>
                <p className="text-gray-600 leading-relaxed">
                  Zuverlässige Einhaltung aller vereinbarten Termine. Ihre Projekte werden 
                  pünktlich und nach Plan abgeschlossen.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 p-3 rounded-lg w-fit mb-6">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Zuverlässigkeit</h3>
                <p className="text-gray-600 leading-relaxed">
                  Als vertrauensvoller Partner stehen wir Ihnen von der Planung bis zur 
                  Fertigstellung kompetent zur Seite.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 p-3 rounded-lg w-fit mb-6">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Erfahrung</h3>
                <p className="text-gray-600 leading-relaxed">
                  Jahrelange Expertise im Baubereich garantiert professionelle Lösungen 
                  für alle Ihre Bauvorhaben.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 p-3 rounded-lg w-fit mb-6">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Präzision</h3>
                <p className="text-gray-600 leading-relaxed">
                  Sorgfältige Planung und präzise Ausführung aller Arbeiten nach 
                  höchsten handwerklichen Standards.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 p-3 rounded-lg w-fit mb-6">
                  <Building2 className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Vielseitigkeit</h3>
                <p className="text-gray-600 leading-relaxed">
                  Breites Leistungsspektrum von Hochbau bis Tiefbau - alles aus einer Hand 
                  für Ihre Bauvorhaben.
                </p>
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

export default UeberUns;
