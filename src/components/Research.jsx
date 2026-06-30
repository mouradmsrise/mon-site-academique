import { useLanguage } from "../context/LanguageContext";
import { useCvData } from "../context/CvDataContext";

export default function Research() {
  const { lang } = useLanguage();
  const d = useCvData()[lang];

  return (
    <section id="research" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <h2 className="text-2xl font-bold text-slate-900 mb-8">{d.sectionTitles.research}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {d.researchInterests.map((topic) => (
          <div
            key={topic}
            className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-6 text-center font-medium text-slate-700 hover:border-brand-400 hover:bg-brand-50 transition-colors"
          >
            {topic}
          </div>
        ))}
      </div>
    </section>
  );
}
