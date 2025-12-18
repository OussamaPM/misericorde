import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MentionsLegales() {
  return (
    <>
      <Navbar />
      <main className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8 md:p-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-800 mb-8 sm:mb-10 text-center">
              Mentions Légales
            </h1>

            {/* Éditeur du site */}
            <section className="mb-8 sm:mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-teal-700 mb-4 border-b-2 border-amber-500 pb-2">
                Éditeur du site
              </h2>
              <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
                <li>
                  <strong className="text-gray-800">Nom de l&apos;association :</strong> MISÉRICORDE
                </li>
                <li>
                  <strong className="text-gray-800">Objet :</strong> Aide aux personnes les plus démunies, handicapées ou vulnérables
                </li>
                <li>
                  <strong className="text-gray-800">Moyens d&apos;actions :</strong> Recherche, formation, édition, manifestations et rencontres
                </li>
                <li>
                  <strong className="text-gray-800">Siège social :</strong> 41, rue Beaufils, 93120 La Courneuve
                </li>
                <li>
                  <strong className="text-gray-800">Numéro RNA :</strong> W931014586
                </li>
                <li>
                  <strong className="text-gray-800">Date de déclaration :</strong> 11 décembre 2015 à la Préfecture de Seine-Saint-Denis
                </li>
                <li>
                  <strong className="text-gray-800">Numéro d&apos;annonce au J.O. :</strong> 1887 (Parution n°20150052)
                </li>
                <li>
                  <strong className="text-gray-800">Directeur de la publication :</strong> Le Président de l&apos;association
                </li>
              </ul>
            </section>

            {/* Hébergement */}
            <section className="mb-8 sm:mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-teal-700 mb-4 border-b-2 border-amber-500 pb-2">
                Hébergement
              </h2>
              <div className="space-y-3 text-gray-600 text-sm sm:text-base">
                <p>
                  <strong className="text-gray-800">Hébergeur du site :</strong> Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.
                </p>
                <p>
                  <strong className="text-gray-800">Registrar du nom de domaine :</strong> Hostinger International Ltd., 61 Lordou Vironos Street, 6023 Larnaca, Chypre.
                </p>
              </div>
            </section>

            {/* Gestion des dons et données */}
            <section className="mb-8 sm:mb-10">
              <h2 className="text-xl sm:text-2xl font-bold text-teal-700 mb-4 border-b-2 border-amber-500 pb-2">
                Gestion des dons et données
              </h2>
              <div className="space-y-4 text-gray-600 text-sm sm:text-base">
                <p>
                  <strong className="text-gray-800">Plateforme de don :</strong> Les dons sont effectués via la plateforme sécurisée HelloAsso. L&apos;Association Miséricorde ne collecte et ne stocke aucune donnée bancaire sur son site.
                </p>
                <p>
                  <strong className="text-gray-800">Données personnelles &amp; Cookies :</strong> Ce site n&apos;utilise aucun cookie de traçage et ne collecte aucune donnée personnelle.
                </p>
              </div>
            </section>

            {/* Bouton retour */}
            <div className="text-center pt-4 sm:pt-6">
              <Link
                href="/"
                className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-teal-700 text-white rounded-full font-semibold hover:bg-teal-800 transition text-sm sm:text-base"
              >
                Retour à l&apos;accueil
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
