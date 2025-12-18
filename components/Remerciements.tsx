import { Heart } from "lucide-react";

export default function Remerciements() {
  return (
    <section className="bg-teal-900 text-white py-10 sm:py-12 text-center">
      <div className="container mx-auto px-4 sm:px-6">
        <Heart className="text-amber-500 h-8 w-8 sm:h-10 sm:w-10 mx-auto mb-3 sm:mb-4" />
        <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
          Un immense merci à nos bénévoles
        </h3>
        <p className="max-w-2xl mx-auto text-teal-100 text-sm sm:text-base px-2">
          &ldquo;Un grand merci à tous les bénévoles qui nous ont soutenus depuis
          de nombreuses années...&rdquo;
          <br />
          Sans votre engagement, rien de tout cela ne serait possible.
        </p>
      </div>
    </section>
  );
}
