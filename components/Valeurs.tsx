import { HeartHandshake, Users, Gift } from "lucide-react";

export default function Valeurs() {
  const valeurs = [
    {
      icon: HeartHandshake,
      title: "Solidarité",
      description: "Agir ensemble pour soutenir ceux qui souffrent dans l'indifférence.",
    },
    {
      icon: Users,
      title: "Bienfaisance",
      description: "Une aide apportée sans distinction ethnique ou religieuse.",
    },
    {
      icon: Gift,
      title: "Générosité",
      description: "Distribuer nourriture, vêtements et réconfort aux plus nécessiteux.",
    },
  ];

  return (
    <section id="valeurs" className="py-12 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 text-center max-w-3xl">
        <span className="text-amber-600 font-semibold tracking-wider uppercase text-xs sm:text-sm">
          Notre vision
        </span>
        <h2 className="text-2xl sm:text-3xl font-bold text-teal-800 mt-2 mb-6 sm:mb-8">
          L&apos;essence de notre engagement
        </h2>
        <p className="text-gray-700 text-base sm:text-lg mb-8 sm:mb-10 px-2">
          Notre intention est de promouvoir le{" "}
          <strong>« vrai visage » de l&apos;Islam</strong>, de briser les préjugés
          en montrant l&apos;essence de notre religion basée sur la{" "}
          <strong>solidarité</strong>, la <strong>générosité</strong> et le{" "}
          <strong>partage</strong>.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {valeurs.map((valeur, index) => (
            <div
              key={index}
              className="bg-white p-5 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition"
            >
              <div className="text-teal-600 mb-3 sm:mb-4 flex justify-center">
                <valeur.icon className="h-10 w-10 sm:h-12 sm:w-12" />
              </div>
              <h3 className="font-bold text-lg sm:text-xl mb-2">{valeur.title}</h3>
              <p className="text-sm text-gray-500">{valeur.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
