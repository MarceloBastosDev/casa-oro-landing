import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Collection from "@/components/Collection";
import Aromas from "@/components/Aromas";
import Materials from "@/components/Materials";
import CandleAtmosphere from "@/components/CandleAtmosphere";
import Footer from "@/components/Footer";
import Intro from "@/components/Intro";
import Cursor from "@/components/Cursor";
import Grain from "@/components/Grain";

export default function Home() {
  return (
    <>
      {/* Elementos globais sensoriais */}
      <Intro />
      <Cursor />
      <Grain />

      <Header />
      <main>
        {/* Hero + About compartilham container relativo para o badge transbordar */}
        <div className="relative">
          <Hero />
          <About />
        </div>
        <Collection />
        <Aromas />
        <Materials />
        <CandleAtmosphere />
      </main>
      <Footer />
    </>
  );
}
