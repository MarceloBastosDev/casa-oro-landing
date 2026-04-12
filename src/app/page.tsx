import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Collection from "@/components/Collection";
import Aromas from "@/components/Aromas";
import Materials from "@/components/Materials";
import Manifesto from "@/components/Manifesto";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero + About share a relative container so the badge can overflow */}
        <div className="relative">
          <Hero />
          <About />
        </div>
        <Collection />
        <Aromas />
        <Materials />
        <Manifesto />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
