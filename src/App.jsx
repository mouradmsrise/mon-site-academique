import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Research from "./components/Research";
import Education from "./components/Education";
import Teaching from "./components/Teaching";
import Publications from "./components/Publications";
import Projects from "./components/Projects";
import Committees from "./components/Committees";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen font-sans text-slate-700">
        <Navbar />
        <Hero />
        <Research />
        <Education />
        <Teaching />
        <Publications />
        <Projects />
        <Committees />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
