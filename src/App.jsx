import { useEffect, useState } from "react";
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
import AdminPage from "./admin/AdminPage";

function useHash() {
  const [hash, setHash] = useState(window.location.hash);
  useEffect(() => {
    const onChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return hash;
}

function App() {
  const hash = useHash();

  if (hash.startsWith("#admin")) {
    return <AdminPage />;
  }

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
