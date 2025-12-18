import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, FileText } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-10 sm:pt-12 md:pt-16 pb-6 sm:pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">
          {/* Info Association */}
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-3 mb-4">
              <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src="/logo-misericorde.png"
                  alt="Logo Association Miséricorde"
                  width={56}
                  height={56}
                  className="object-cover h-full w-full"
                />
              </div>
              <h4 className="text-lg sm:text-xl font-bold">Association Miséricorde</h4>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-3">
              Association qui œuvre pour la solidarité et l&apos;entraide envers
              les plus démunis depuis 2011.
            </p>
            <Link
              href="/mentions-legales"
              className="inline-flex items-center text-gray-500 text-xs hover:text-gray-300 transition"
            >
              <FileText className="w-3.5 h-3.5 mr-1.5" />
              Mentions Légales
            </Link>
          </div>

          {/* Coordonnées */}
          <div className="text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold mb-4">Nous Contacter</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start justify-center sm:justify-start">
                <MapPin className="mt-0.5 text-amber-500 w-5 h-5 mr-2 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  25 rue Julian Grimau
                  <br />
                  93700 Drancy
                </span>
              </li>
              <li className="flex items-center justify-center sm:justify-start">
                <Phone className="text-amber-500 w-5 h-5 mr-2 flex-shrink-0" />
                <a href="tel:0612019396" className="text-gray-300 text-sm hover:text-white transition">
                  06 12 01 93 96
                </a>
              </li>
              <li className="flex items-center justify-center sm:justify-start">
                <Mail className="text-amber-500 w-5 h-5 mr-2 flex-shrink-0" />
                <a
                  href="mailto:misericorde.rahma@gmail.com"
                  className="text-gray-300 text-sm hover:text-white transition break-all"
                >
                  misericorde.rahma@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="bg-gray-800 p-5 sm:p-6 rounded-lg border border-gray-700 sm:col-span-2 lg:col-span-1">
            <h4 className="text-lg font-bold mb-3 text-white">Envie d&apos;aider ?</h4>
            <p className="text-gray-400 text-sm mb-4">
              Vos dons permettent de financer les colis alimentaires et les
              repas distribués chaque semaine.
            </p>
            <Link
              href="#don"
              className="block text-center w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-2.5 px-4 rounded transition text-sm sm:text-base"
            >
              Faire un don
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Association Miséricorde. Tous
            droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
