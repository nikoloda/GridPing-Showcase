import { About } from "./components/About";
import { Cta } from "./components/Cta";
import { FutureApplications } from "./components/FutureApplications";
import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { MapVisualization } from "./components/MapVisualization";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import { Services } from "./components/Services";
import { Team } from "./components/Team";
import "./App.css";

function App() {
  return (
    <div id="top">
      <Navbar />
      <Hero />
      <section className="container py-24 sm:py-32 grid lg:grid-cols-[3fr_2fr] gap-12 items-start">
        <About />
        <MapVisualization />
      </section>
      <Services />
      <HowItWorks />
      <Features />
      <Cta />
      <Team />
      <FutureApplications />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
