import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Map from "@/components/Map";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="bg-blue ">
      <Navbar />
      <Hero />
      <Gallery />
      <CTA />
      <Map />
      <Footer />
    </main>
  );
}
