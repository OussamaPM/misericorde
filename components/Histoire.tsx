import Image from "next/image";

export default function Histoire() {
  return (
    <section id="histoire" className="py-8 sm:py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Titre visible uniquement sur mobile, au-dessus de l'image */}
        <div className="flex flex-col items-center mb-6 md:hidden">
          <Image
            src="/logo-misericorde.png"
            alt="Logo Association Miséricorde"
            width={80}
            height={80}
            className="mb-3"
          />
          <h2 className="text-2xl font-bold text-teal-800 text-center">
            Comment l&apos;association
            <br />
            a-t-elle vu le jour ?
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2">
            <div className="relative rounded-lg overflow-hidden shadow-xl sm:shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Bénévoles"
                className="w-full"
              />
              <div className="absolute bottom-0 left-0 bg-teal-700 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-tr-lg text-sm sm:text-base">
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
              Notre aventure commence par la rencontre d&apos;un groupe de frères
              pendant le mois de Ramadan 2011 dans une mosquée. C&apos;est dans ce
              lieu que, pendant les dix derniers jours de ce mois béni, environ
              200 repas étaient servis quotidiennement.
            </p>
            <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
              Motivés par cette initiative d&apos;aide aux personnes en difficulté,
              nous avons décidé de poursuivre l&apos;effort au-delà du Ramadan. En
              utilisant la cuisine de cette mosquée, nous avons commencé à
              préparer des repas pour les plus démunis des alentours, distribuant
              tantôt de la nourriture, tantôt des vêtements.
            </p>
            <p className="text-gray-600 italic border-l-4 border-amber-500 pl-3 sm:pl-4 text-sm sm:text-base">
              &ldquo;Observant la précarité croissante en France et touchés par la
              misère autour de nous, nous avons décidé d&apos;agir.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
