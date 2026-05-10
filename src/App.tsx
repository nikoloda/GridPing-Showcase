import { About } from "./components/About";
import { Cta } from "./components/Cta";
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
    <>
      <Navbar />
      <Hero />
      <MapVisualization />
      <About />
      <HowItWorks />
      <Services />
      <Features />
      <Cta />
      <Team />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
