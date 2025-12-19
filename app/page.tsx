import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DonationSection from "@/components/DonationSection";
import Histoire from "@/components/Histoire";
import Valeurs from "@/components/Valeurs";
import Actions from "@/components/Actions";
import ActionsInternational from "@/components/ActionsInternational";
import Remerciements from "@/components/Remerciements";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <DonationSection />
        <Actions />
        <Histoire />
        <Valeurs />
        <Remerciements />
        <ActionsInternational />
      </main>
      <Footer />
    </>
  );
}
