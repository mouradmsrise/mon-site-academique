import { useLanguage } from "../context/LanguageContext";
import { cvData } from "../data/cvData";

export default function Projects() {
  const { lang } = useLanguage();
  const d = cvData[lang];

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <h2 className="text-2xl font-bold text-slate-900 mb-8">{d.sectionTitles.projects}</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        {d.projects.map((p, i) => (
          <div key={i} className="rounded-xl border border-slate-200 p-5 hover:shadow-md transition-shadow">
            <span className="text-xs font-semibold text-brand-700 bg-brand-100 rounded px-2 py-0.5">
              {p.year}
            </span>
            <h3 className="font-semibold text-slate-900 mt-2">{p.title}</h3>
            <p className="text-sm text-slate-600 mt-1">{p.cycle}</p>
            <p className="text-sm text-slate-500 mt-1">{p.place}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
