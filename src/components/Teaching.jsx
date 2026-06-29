import { useLanguage } from "../context/LanguageContext";
import { cvData } from "../data/cvData";

export default function Teaching() {
  const { lang } = useLanguage();
  const d = cvData[lang];

  return (
    <section id="teaching" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <h2 className="text-2xl font-bold text-slate-900 mb-2">{d.sectionTitles.teaching}</h2>

      <div className="overflow-x-auto mb-10">
        <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden mt-6">
          <thead className="bg-brand-600 text-white">
            <tr>
              <th className="text-left px-4 py-2 font-medium">Mission</th>
              <th className="text-left px-4 py-2 font-medium">{d.cta.hoursLabel}</th>
            </tr>
          </thead>
          <tbody>
            {d.teachingLoad.map((t, i) => (
              <tr key={t.mission} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                <td className="px-4 py-2 text-slate-700">{t.mission}</td>
                <td className="px-4 py-2 text-slate-700">
                  {t.plus ? "+" : ""}
                  {t.hours.toLocaleString(lang === "fr" ? "fr-FR" : "en-US")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-8">
        {d.teachingExperience.map((exp, i) => (
          <div key={i} className="rounded-xl border border-slate-200 p-5">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
              <h3 className="font-semibold text-slate-900">
                {exp.role} — <span className="text-brand-700">{exp.place}</span>
              </h3>
              <span className="text-xs font-semibold text-brand-700 bg-brand-100 rounded px-2 py-0.5 shrink-0">
                {exp.period}
              </span>
            </div>
            <ul className="space-y-2">
              {exp.courses.map((c, j) => (
                <li key={j} className="text-sm text-slate-600 border-l-2 border-slate-200 pl-3">
                  <span className="font-medium text-slate-800">{c.name}</span>
                  {c.level && <span> — {c.level}</span>}
                  {c.hours && <span className="text-slate-400"> ({c.hours})</span>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
