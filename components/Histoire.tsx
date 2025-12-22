import Image from "next/image";

export default function Histoire() {
  return (
    <section id="histoire" className="pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-12 md:pb-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Titre visible uniquement sur mobile, au-dessus de l'image */}
        <div className="flex flex-col items-center mb-6 md:hidden">
          <Image
            src="/logo-misericorde.png"
            alt="Logo Association Miséricorde"
            width={90}
            height={90}
            className="mb-4"
          />
          <h2 className="text-2xl font-bold text-teal-800 text-center leading-tight">
            Comment l&apos;association
            <br />
            a-t-elle vu le jour ?
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2">
            <div className="relative rounded-lg overflow-hidden shadow-xl sm:shadow-2xl aspect-[3/2]">
              <Image
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=75"
                alt="Bénévoles de l'association aidant les personnes dans le besoin"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 bg-teal-700 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-tr-lg text-sm sm:text-base z-10">
                Depuis 2011
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            {/* Titre visible uniquement sur desktop */}
            <div className="hidden md:flex items-center gap-5 mb-6">
              <Image
                src="/logo-misericorde.png"
                alt="Logo Association Miséricorde"
                width={90}
                height={90}
                className="flex-shrink-0"
              />
              <h2 className="text-3xl font-bold text-teal-800 leading-tight">
                Comment l&apos;association
                <br />
                a-t-elle vu le jour ?
              </h2>
            </div>
            <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
              Tout a commencé en 2011, lorsque quelques personnes se sont réunies
              pour aider celles et ceux qui en avaient le plus besoin.
              L&apos;initiative a rapidement pris de l&apos;ampleur, avec la
              préparation et la distribution quotidienne de repas.
            </p>
            <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
              Face aux besoins constatés, il nous a semblé évident de continuer.
              Depuis, nous préparons et distribuons des repas, et apportons
              également une aide ponctuelle en vêtements et produits essentiels,
              en restant au plus proche du terrain.
            </p>
            <p className="text-gray-600 italic border-l-4 border-amber-500 pl-3 sm:pl-4 text-sm sm:text-base">
              &laquo; Aujourd&apos;hui, nous poursuivons notre mission avec le même engagement : apporter soutien, chaleur et solidarité à tous ceux qui en ont besoin. &raquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
