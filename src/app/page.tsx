import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Mission from "@/components/Mission";
import Quotes from "@/components/Quotes";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import ScrollDownButton from "@/components/ScrollDownButton";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#fffaf5]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Mission />
      {/* <Quotes /> */}
      <Subscribe />
      <Footer />
      <ScrollDownButton />
      <ContactModal floating />
    </main>
  );
}