"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle, Info, CreditCard, Building2, Copy, Check } from "lucide-react";

export default function DonationSection() {
  const [selectedAmount, setSelectedAmount] = useState("25");
  const [paymentMethod, setPaymentMethod] = useState<"helloasso" | "rib">("helloasso");
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const amounts = ["5", "15", "25", "other"];

  const getEquivalence = () => {
    switch (selectedAmount) {
      case "5":
        return "Avec <strong>5 €</strong>, vous contribuez à un repas chaud.";
      case "15":
        return "Avec <strong>15 €</strong>, vous contribuez à un colis alimentaire.";
      case "25":
        return "Avec <strong>25 €</strong>, vous offrez un colis alimentaire à une famille.";
      default:
        return "Chaque euro compte pour aider les plus démunis.";
    }
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const ribInfo = {
    iban: "FR76 1695 8000 0105 0565 6979 975",
    bic: "QNTOFRP1XXX",
    banque: "16958",
    agence: "00001",
    compte: "05056569799",
    cle: "75",
    titulaire: "MISÉRICORDE",
    adresse: "41, rue Beaufils, 93120 La Courneuve",
    domiciliation: "Qonto (Olinda SAS), 18 rue de Navarin, 75009 Paris, France"
  };

  return (
    <section id="don" className="py-8 sm:py-12 md:py-16 bg-amber-50 relative -mt-6 sm:-mt-10 md:-mt-20 z-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl overflow-hidden max-w-5xl mx-auto flex flex-col md:flex-row">

          {/* Partie Visuelle / Info */}
          <div className="md:w-5/12 bg-teal-800 text-white p-6 sm:p-8 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <Image
                src="/distrib.jpg"
                alt="Distribution de colis alimentaires"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
            <div className="relative z-10">
              <p className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Votre aide change des vies</p>
              <p className="mb-4 sm:mb-6 opacity-90 text-sm sm:text-base">
                Chaque don nous permet de distribuer plus de colis alimentaires et
                d&apos;aider les familles précaires.
              </p>
              <ul className="space-y-2 sm:space-y-3 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="text-amber-400 mr-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  <span>100% sécurisé</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-amber-400 mr-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  <span>Déductible des impôts (66%)</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="text-amber-400 mr-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  <span>Transparence garantie</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Partie Formulaire */}
          <div className="md:w-7/12 p-5 sm:p-8 md:p-10">
            <div className="text-center mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Faire un don maintenant</h2>
              <p className="text-gray-500 text-sm">Choisissez votre mode de soutien</p>
            </div>

            {/* Toggle HelloAsso / RIB */}
            <div className="flex justify-center mb-5 sm:mb-6 bg-gray-100 p-1 rounded-full w-max mx-auto" role="group" aria-label="Mode de paiement">
              <button
                onClick={() => setPaymentMethod("helloasso")}
                className={`flex items-center px-3 sm:px-5 py-2 rounded-full text-sm font-medium focus:outline-none transition ${
                  paymentMethod === "helloasso"
                    ? "bg-white shadow text-teal-800 font-bold"
                    : "text-gray-600 hover:text-teal-700"
                }`}
                aria-pressed={paymentMethod === "helloasso"}
              >
                <CreditCard className="w-4 h-4 mr-1.5" aria-hidden="true" />
                HelloAsso
              </button>
              <button
                onClick={() => setPaymentMethod("rib")}
                className={`flex items-center px-3 sm:px-5 py-2 rounded-full text-sm font-medium focus:outline-none transition ${
                  paymentMethod === "rib"
                    ? "bg-white shadow text-teal-800 font-bold"
                    : "text-gray-600 hover:text-teal-700"
                }`}
                aria-pressed={paymentMethod === "rib"}
              >
                <Building2 className="w-4 h-4 mr-1.5" aria-hidden="true" />
                Virement
              </button>
            </div>

            {paymentMethod === "helloasso" ? (
              <>
                {/* Message encouragement don mensuel */}
                <p className="text-center text-sm text-teal-700 font-medium mb-4 sm:mb-6">
                  Un don mensuel, c&apos;est une aide continue pour ceux qui en ont besoin.
                </p>

                {/* Grille des montants */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  {amounts.map((amount) => (
                    <div key={amount}>
                      <input
                        type="radio"
                        name="amount"
                        id={`amt-${amount}`}
                        className="hidden donation-amount"
                        checked={selectedAmount === amount}
                        onChange={() => setSelectedAmount(amount)}
                      />
                      <label
                        htmlFor={`amt-${amount}`}
                        onClick={() => setSelectedAmount(amount)}
                        className={`block w-full border rounded-lg py-2.5 sm:py-3 text-center cursor-pointer transition font-semibold text-sm sm:text-base ${
                          selectedAmount === amount
                            ? "bg-amber-600 text-white border-amber-600"
                            : "border-gray-300 text-gray-700 hover:border-amber-500"
                        }`}
                      >
                        {amount === "other" ? "Autre" : `${amount} €`}
                      </label>
                    </div>
                  ))}
                </div>

                {/* Équivalence don */}
                <div className="bg-blue-50 text-blue-800 px-3 sm:px-4 py-2.5 sm:py-3 rounded-md text-xs sm:text-sm text-center mb-4 sm:mb-6">
                  <Info className="inline mr-1 h-4 w-4" />
                  <span dangerouslySetInnerHTML={{ __html: getEquivalence() }} />
                </div>

                {/* Bouton HelloAsso */}
                <a
                  href="https://www.helloasso.com/associations/association-misericorde-al-rahma/formulaires/1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-amber-600 hover:bg-amber-700 text-white text-center font-bold text-base sm:text-lg py-3 sm:py-4 rounded-xl shadow-lg transition transform hover:-translate-y-0.5"
                >
                  Je fais un don
                </a>
                <p className="text-center text-xs text-gray-500 mt-3 sm:mt-4">
                  Redirection vers la plateforme partenaire HelloAsso
                </p>
              </>
            ) : (
              /* Affichage RIB */
              <div className="space-y-4">
                {/* IBAN */}
                <div className="bg-gray-50 rounded-xl p-4 sm:p-5 border border-gray-200">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">IBAN</span>
                    <button
                      onClick={() => copyToClipboard(ribInfo.iban.replace(/\s/g, ""), "iban")}
                      className="flex items-center text-xs text-teal-600 hover:text-teal-800 transition"
                    >
                      {copiedField === "iban" ? (
                        <>
                          <Check className="w-3.5 h-3.5 mr-1" />
                          Copié
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 mr-1" />
                          Copier
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-lg sm:text-xl font-bold text-gray-800 font-mono tracking-wide">
                    {ribInfo.iban}
                  </p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-xs text-gray-500">
                    <span>Banque {ribInfo.banque}</span>
                    <span>Agence {ribInfo.agence}</span>
                    <span>Compte {ribInfo.compte}</span>
                    <span>Clé {ribInfo.cle}</span>
                  </div>
                </div>

                {/* BIC */}
                <div className="bg-gray-50 rounded-xl p-4 sm:p-5 border border-gray-200">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">BIC / SWIFT</span>
                    <button
                      onClick={() => copyToClipboard(ribInfo.bic, "bic")}
                      className="flex items-center text-xs text-teal-600 hover:text-teal-800 transition"
                    >
                      {copiedField === "bic" ? (
                        <>
                          <Check className="w-3.5 h-3.5 mr-1" />
                          Copié
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 mr-1" />
                          Copier
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-lg sm:text-xl font-bold text-gray-800 font-mono">
                    {ribInfo.bic}
                  </p>
                </div>

                {/* Titulaire */}
                <div className="bg-gray-50 rounded-xl p-4 sm:p-5 border border-gray-200">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-2">Titulaire</span>
                  <p className="font-bold text-gray-800">{ribInfo.titulaire}</p>
                  <p className="text-sm text-gray-600">{ribInfo.adresse}</p>
                  <p className="text-xs text-gray-400 mt-2">
                    Domiciliation : {ribInfo.domiciliation}
                  </p>
                </div>

                {/* Info SWIFT */}
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 sm:p-4">
                  <p className="text-xs sm:text-sm text-amber-800">
                    <strong className="font-semibold">SWIFT :</strong> La banque émettrice pourrait vous demander le BIC de notre banque partenaire avant d&apos;effectuer un virement SWIFT : <strong className="font-mono">TRWIBEB3XXX</strong>
                  </p>
                </div>

                {/* Message de remerciement */}
                <div className="text-center pt-2">
                  <p className="text-xs text-gray-500">
                    Merci d&apos;indiquer votre nom et &ldquo;DON&rdquo; en référence du virement
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
