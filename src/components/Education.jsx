import { useLanguage } from "../context/LanguageContext";
import { useCvData } from "../context/CvDataContext";

export default function Education() {
  const { lang } = useLanguage();
  const d = useCvData()[lang];

  return (
    <section id="education" className="bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">{d.sectionTitles.education}</h2>
        <ol className="relative border-l-2 border-brand-200 ml-2">
          {d.education.map((e) => (
            <li key={e.year} className="mb-8 ml-6">
              <span className="absolute -left-[9px] flex h-4 w-4 rounded-full bg-brand-600" />
              <span className="inline-block text-xs font-semibold text-brand-700 bg-brand-100 rounded px-2 py-0.5 mb-1">
                {e.year}
              </span>
              <h3 className="font-semibold text-slate-900">{e.degree}</h3>
              <p className="text-sm text-slate-600">{e.place}</p>
              {e.detail && <p className="text-sm text-slate-600 italic mt-1">{e.detail}</p>}
              {e.mention && <p className="text-sm text-brand-700 mt-1">{e.mention}</p>}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
