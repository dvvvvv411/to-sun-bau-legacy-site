
import React from 'react';
import Layout from '../components/Layout';
import { Building2, Mail, MapPin } from 'lucide-react';

const Impressum = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Impressum</h1>
            
            <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Building2 className="h-6 w-6 text-blue-600 mr-2" />
                  Angaben gemäß § 5 TMG
                </h2>
                <div className="space-y-2 text-gray-700">
                  <p className="text-lg font-semibold">To-Sun Bau GmbH</p>
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p>Waldschmidtstr. 67</p>
                      <p>60316 Frankfurt a. Main</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Kontakt</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-blue-600" />
                    <p>E-Mail: https://tosun-baumaschinen.de</p>
                  </div>
                  <p>Internet: tosun-baumaschinen.de</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Handelsregister</h3>
                <div className="text-gray-700 space-y-1">
                  <p>Registergericht: Amtsgericht Frankfurt am Main</p>
                  <p>Registernummer: HRB 124951</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Geschäftsführung</h3>
                <p className="text-gray-700">George Tataru</p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Umsatzsteuer-ID</h3>
                <p className="text-gray-700">
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                  DE545976064
                </p>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="text-xl font-bold text-red-800 mb-2">Hinweis zur Insolvenz</h3>
                <p className="text-red-700">
                  Das Unternehmen To-Sun Bau GmbH befindet sich derzeit in einem Insolvenzverfahren. 
                  Alle Angaben auf dieser Website dienen ausschließlich Informationszwecken.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Haftungsausschluss</h3>
                <div className="text-gray-700 space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Haftung für Inhalte</h4>
                    <p>
                      Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                      allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                      unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
                      Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Haftung für Links</h4>
                    <p>
                      Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                      Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten 
                      Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Impressum;
