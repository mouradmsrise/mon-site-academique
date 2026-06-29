import { cvData } from "../data/cvData";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { lang } = useLanguage();
  const d = cvData[lang];

  return (
    <footer className="bg-slate-900 text-slate-400 text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span>© {new Date().getFullYear()} {d.name}</span>
        <span>{d.title}</span>
      </div>
    </footer>
  );
}
