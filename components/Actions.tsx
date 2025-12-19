import { MapPin, Clock } from "lucide-react";

export default function Actions() {
  return (
    <section id="actions" className="py-8 sm:py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-teal-800">
            Nos Actions sur le Terrain
          </h2>
          <p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base px-4">
            Humanitaire et social : Une présence quotidienne auprès des plus
            fragiles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {/* Action 1 - Hôtels Sociaux */}
          <div className="group bg-white border rounded-xl overflow-hidden hover:shadow-xl transition duration-300">
            <div className="h-40 sm:h-48 bg-gray-200 overflow-hidden">
              <img
                src="/hotel-social.jpeg"
                alt="Distribution dans les hôtels sociaux"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                width={400}
                height={192}
                loading="lazy"
              />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                Distribution Hôtels Sociaux
              </h3>
              <p className="text-gray-600 text-sm mb-3 sm:mb-4">
                Nous allons directement à la porte des chambres pour distribuer
                repas et colis alimentaires aux familles isolées.
              </p>
              <div className="border-t pt-3 sm:pt-4 mt-2">
                <span className="block text-2xl sm:text-3xl font-bold text-teal-700">
                  450+
                </span>
                <span className="text-xs text-gray-500 uppercase tracking-wide">
                  Repas / Semaine
                </span>
              </div>
            </div>
          </div>

          {/* Action 2 - Distribution Paris */}
          <div className="group bg-white border rounded-xl overflow-hidden hover:shadow-xl transition duration-300">
            <div className="h-40 sm:h-48 bg-gray-200 overflow-hidden relative">
              <img
                src="/la-chapelle-paris.jpg"
                alt="Distribution de repas à Paris La Chapelle"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                width={400}
                height={192}
                loading="lazy"
              />
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-amber-500 text-white text-xs font-bold px-2 sm:px-3 py-1 rounded-full">
                Hebdomadaire
              </div>
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                Distribution de Repas à Paris
              </h3>
              <p className="text-gray-600 text-sm mb-3 sm:mb-4">
                Chaque mercredi soir, nous distribuons environ{" "}
                <strong>300 repas</strong> au 62 boulevard de la Chapelle. Une
                aide alimentaire cruciale pour les sans-abris.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li className="flex items-center">
                  <MapPin className="text-teal-600 mr-2 h-4 w-4 flex-shrink-0" />
                  <span>Paris (Chapelle)</span>
                </li>
                <li className="flex items-center">
                  <Clock className="text-teal-600 mr-2 h-4 w-4 flex-shrink-0" />
                  <span>Mercredi soir</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Action 3 */}
          <div className="group bg-white border rounded-xl overflow-hidden hover:shadow-xl transition duration-300 sm:col-span-2 lg:col-span-1">
            <div className="h-40 sm:h-48 bg-gray-200 overflow-hidden relative">
              <img
                src="/ramadan-action.jpg"
                alt="Action spéciale Ramadan distribution de repas"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                width={400}
                height={192}
                loading="lazy"
              />
              <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-teal-600 text-white text-xs font-bold px-2 sm:px-3 py-1 rounded-full">
                Saisonnier
              </div>
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                Action Spéciale Ramadan
              </h3>
              <p className="text-gray-600 text-sm mb-3 sm:mb-4">
                Distribution quotidienne de repas aux jeûneurs dans les mosquées
                et foyers durant le mois béni.
              </p>
              <div className="border-t pt-3 sm:pt-4 mt-2">
                <span className="block text-2xl sm:text-3xl font-bold text-teal-700">
                  70 à 240
                </span>
                <span className="text-xs text-gray-500 uppercase tracking-wide">
                  Repas tous les soirs
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
