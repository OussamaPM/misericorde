import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <header className="relative bg-teal-800 min-h-[400px] sm:min-h-[500px] md:min-h-[600px] pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12 flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/liste_associations_humanitaires.webp"
          alt="Distribution alimentaire"
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw"
        />
      </div>
      <div className="relative z-10 px-5 sm:px-6 max-w-4xl mx-auto">
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-5 leading-tight italic">
          &ldquo;Quant au demandeur ne le repousse pas&rdquo;
        </h1>
        <p className="text-sm sm:text-base md:text-lg mb-5 sm:mb-7 font-light">
          Depuis 2011, nous tendons la main pour briser les préjugés et redonner
          dignité et espoir aux plus démunis.
        </p>
        <div className="flex justify-center">
          <Link
            href="#actions"
            className="px-5 sm:px-8 py-2.5 sm:py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-teal-800 transition text-sm sm:text-base"
          >
            Découvrir nos actions
          </Link>
        </div>
      </div>
    </header>
  );
}
