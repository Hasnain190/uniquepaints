import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Map from "@/components/Map";

export default function Home() {
  return (
    <main>
      <Hero />
      <Gallery />
      <CTA />
      <Map />
      <Footer />
    </main>
  );
}
