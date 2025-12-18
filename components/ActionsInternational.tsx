export default function ActionsInternational() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="group bg-white border rounded-xl overflow-hidden hover:shadow-xl transition duration-300 flex flex-col md:flex-row">
          <div className="md:w-1/3 h-48 sm:h-56 md:h-auto bg-gray-200 overflow-hidden">
            <img
              src="/principal.jpg"
              alt="International"
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
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
      </div>
    </section>
  );
}
