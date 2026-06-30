import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { useNavLinksData } from "../context/CvDataContext";

export default function Navbar() {
  const { lang, toggleLang } = useLanguage();
  const navLinks = useNavLinksData();
  const [open, setOpen] = useState(false);

  const handleClick = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => handleClick("about")}
          className="font-semibold text-brand-700 text-lg tracking-tight"
        >
          Mourad Haddioui
        </button>

        <ul className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleClick(link.id)}
                className="hover:text-brand-600 transition-colors"
              >
                {link[lang]}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="text-xs font-semibold border border-slate-300 rounded-full px-3 py-1.5 text-slate-600 hover:border-brand-500 hover:text-brand-600 transition-colors"
            aria-label="Toggle language"
          >
            {lang === "fr" ? "EN" : "FR"}
          </button>
          <button
            className="md:hidden text-slate-600"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col gap-1 px-4 pb-4 text-sm text-slate-600">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleClick(link.id)}
                className="block w-full text-left py-2 hover:text-brand-600"
              >
                {link[lang]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
