import { useLanguage } from "../context/LanguageContext";
import { useCvData } from "../context/CvDataContext";

export default function Committees() {
  const { lang } = useLanguage();
  const d = useCvData()[lang];

  return (
    <section className="bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-4">{d.sectionTitles.committees}</h2>
          <ul className="space-y-3">
            {d.committees.map((c, i) => (
              <li key={i} className="text-sm text-slate-600 border-l-2 border-brand-300 pl-3">
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-900 mb-4">{d.sectionTitles.scientificActivities}</h2>
          <ul className="space-y-3">
            {d.scientificActivities.map((c, i) => (
              <li key={i} className="text-sm text-slate-600 border-l-2 border-brand-300 pl-3">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
