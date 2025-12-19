"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 py-2 sm:py-3 flex justify-between items-center">
        <Link href="#" className="flex items-center space-x-2 sm:space-x-3">
          <div className="h-14 w-14 sm:h-16 md:h-20 sm:w-16 md:w-20 rounded-full flex items-center justify-center overflow-hidden">
            <Image
              src="/logo-misericorde.png"
              alt="Logo Association Miséricorde"
              width={80}
              height={80}
              className="object-cover h-full w-full"
            />
          </div>
          <span className="text-lg sm:text-xl font-bold text-teal-800 hidden sm:block">
            Association Miséricorde
          </span>
        </Link>

        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          <Link
            href="#don"
            className="text-amber-600 font-bold hover:text-amber-700 transition"
          >
            Faire un don
          </Link>
          <Link
            href="#histoire"
            className="text-gray-600 hover:text-teal-700 transition font-medium"
          >
            Notre Histoire
          </Link>
          <Link
            href="#actions"
            className="text-gray-600 hover:text-teal-700 transition font-medium"
          >
            Nos Actions
          </Link>
          <Link
            href="#valeurs"
            className="text-gray-600 hover:text-teal-700 transition font-medium"
          >
            Nos Valeurs
          </Link>
          <Link
            href="#contact"
            className="px-4 xl:px-5 py-2 bg-teal-700 text-white rounded-full hover:bg-teal-800 transition shadow-md font-semibold"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 hover:text-teal-700 focus:outline-none p-2"
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          <Link
            href="#don"
            className="block py-3 px-6 text-base text-amber-600 font-bold hover:bg-gray-50 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Faire un don
          </Link>
          <Link
            href="#histoire"
            className="block py-3 px-6 text-base text-gray-700 hover:bg-gray-50 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Notre Histoire
          </Link>
          <Link
            href="#actions"
            className="block py-3 px-6 text-base text-gray-700 hover:bg-gray-50 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Nos Actions
          </Link>
          <Link
            href="#valeurs"
            className="block py-3 px-6 text-base text-gray-700 hover:bg-gray-50 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Nos Valeurs
          </Link>
          <Link
            href="#contact"
            className="block py-3 px-6 text-base text-gray-700 hover:bg-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
