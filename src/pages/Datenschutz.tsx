import React from 'react';
import Layout from '../components/Layout';
import { Shield, Eye, Database, Mail } from 'lucide-react';

const Datenschutz = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>
            
            <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Shield className="h-6 w-6 text-blue-600 mr-2" />
                  Datenschutz auf einen Blick
                </h2>
                <div className="space-y-4 text-gray-700">
                  <h3 className="text-lg font-semibold">Allgemeine Hinweise</h3>
                  <p>
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
                    passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie 
                    persönlich identifiziert werden können.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Database className="h-5 w-5 text-blue-600 mr-2" />
                  Datenerfassung auf dieser Website
                </h3>
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h4 className="font-semibold mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
                    <p>
                      Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
                      können Sie dem Impressum dieser Website entnehmen.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Wie erfassen wir Ihre Daten?</h4>
                    <p>
                      Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich 
                      z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                    </p>
                    <p className="mt-2">
                      Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere 
                      IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder 
                      Uhrzeit des Seitenaufrufs).
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Eye className="h-5 w-5 text-blue-600 mr-2" />
                  Server-Log-Dateien
                </h3>
                <div className="text-gray-700 space-y-2">
                  <p>
                    Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
                    die Ihr Browser automatisch an uns übermittelt. Dies sind:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Browsertyp und Browserversion</li>
                    <li>verwendetes Betriebssystem</li>
                    <li>Referrer URL</li>
                    <li>Hostname des zugreifenden Rechners</li>
                    <li>Uhrzeit der Serveranfrage</li>
                    <li>IP-Adresse</li>
                  </ul>
                  <p className="mt-4">
                    Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser 
                    Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                  <Mail className="h-5 w-5 text-blue-600 mr-2" />
                  Kontakt
                </h3>
                <div className="text-gray-700 space-y-2">
                  <p>
                    Wenn Sie uns per E-Mail kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden 
                    personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert 
                    und verarbeitet.
                  </p>
                  <p>
                    Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der 
                    Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ihre Rechte</h3>
                <div className="text-gray-700 space-y-2">
                  <p>Sie haben jederzeit das Recht:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten</li>
                    <li>Berichtigung oder Löschung Ihrer gespeicherten Daten zu verlangen</li>
                    <li>eine Einschränkung der Datenverarbeitung zu verlangen</li>
                    <li>der Datenverarbeitung zu widersprechen</li>
                    <li>Datenübertragbarkeit zu verlangen</li>
                  </ul>
                  <p className="mt-4">
                    Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer 
                    personenbezogenen Daten durch uns zu beschweren.
                  </p>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="text-xl font-bold text-red-800 mb-2">Hinweis zur Insolvenz</h3>
                <p className="text-red-700">
                  Da sich das Unternehmen To-Sun Bau GmbH in einem Insolvenzverfahren befindet, können sich die 
                  Verantwortlichkeiten für die Datenverarbeitung ändern. Bei Fragen zum Datenschutz wenden Sie sich 
                  bitte an die im Impressum angegebene Adresse.
                </p>
              </div>

              <div className="text-sm text-gray-500">
                <p>Stand: Januar 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Datenschutz;
