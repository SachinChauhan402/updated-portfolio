import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import Aos from "aos";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/UI/Hero";
import Services from "./components/UI/Services";
import Portfolio from "./components/UI/Portfolio";
import Contact from "./components/UI/Contact";
import Experience from "./components/UI/Experience";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="App">
      <Header />

      <Hero />

      <Services />
      <Portfolio />
      <Experience />
      <Contact />

      <Footer />
    </div>
  );
}

export default App;
