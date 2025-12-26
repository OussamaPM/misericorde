import Image from "next/image";
import { Heart, ExternalLink } from "lucide-react";

export default function ActionsInternational() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Colonne Actions International */}
          <div className="group bg-white border rounded-xl overflow-hidden hover:shadow-xl transition duration-300 flex flex-col md:flex-row">
            <div className="md:w-1/3 h-48 sm:h-56 md:h-auto bg-gray-200 overflow-hidden relative">
              <Image
                src="/principal.jpg"
                alt="Actions humanitaires internationales"
                fill
                className="object-cover group-hover:scale-110 transition duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="p-5 sm:p-6 md:p-8 md:w-2/3 flex flex-col justify-center">
              <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                Autres Actions & International
              </h3>
              <p className="text-gray-600 text-sm mb-3 sm:mb-4">
                Notre engagement dépasse les frontières locales. Nous
                intervenons également pour des aides au cas par cas, des colis
                alimentaires d&apos;urgence et des actions humanitaires à
                l&apos;international (Syrie, Birmanie...).
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                  Colis Alimentaires
                </span>
                <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                  Vêtements
                </span>
                <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                  International
                </span>
                <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                  Aide au cas par cas
                </span>
              </div>
            </div>
          </div>

          {/* Colonne HelloAsso */}
          <div className="bg-gradient-to-br from-teal-700 to-teal-900 rounded-xl overflow-hidden shadow-xl flex flex-col justify-center items-center p-8 sm:p-10 text-center relative">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_50%)]"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.15),transparent_50%)]"></div>
            </div>
            <div className="relative z-10">
              <div className="bg-white/20 rounded-full p-4 mb-5 inline-block">
                <Heart className="w-10 h-10 text-amber-400" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Nous soutenir avec HelloAsso
              </h3>
              <p className="text-teal-100 text-sm sm:text-base mb-6 max-w-sm">
                Retrouvez toutes nos campagnes, formulaires de dons et actualités sur notre page HelloAsso.
              </p>
              <a
                href="https://www.helloasso.com/associations/association-misericorde-al-rahma"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg transition transform hover:-translate-y-0.5"
              >
                Découvrir notre page
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              <p className="text-teal-200/70 text-xs mt-4">
                Plateforme 100% sécurisée
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
