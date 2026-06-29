import { useLanguage } from "../context/LanguageContext";
import { cvData } from "../data/cvData";

function Pills({ items }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="text-xs font-medium bg-white border border-slate-200 rounded-full px-3 py-1 text-slate-600"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export default function Skills() {
  const { lang } = useLanguage();
  const d = cvData[lang];

  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <h2 className="text-2xl font-bold text-slate-900 mb-8">{d.sectionTitles.skills}</h2>

      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-lg font-semibold text-brand-700 mb-4">{d.sectionTitles.computerSkills}</h3>
          <div className="space-y-3 bg-slate-50 rounded-xl p-5">
            <Pills items={d.skills.languages_prog} />
            <Pills items={d.skills.web} />
            <Pills items={d.skills.modeling} />
            <Pills items={d.skills.os} />
            <Pills items={d.skills.office} />
          </div>

          <h3 className="text-lg font-semibold text-brand-700 mb-4 mt-8">{d.sectionTitles.languages}</h3>
          <div className="space-y-4">
            {d.spokenLanguages.map((l) => (
              <div key={l.name}>
                <div className="flex justify-between text-sm text-slate-700 mb-1">
                  <span className="font-medium">{l.name}</span>
                  <span className="text-slate-400">{l.level}</span>
                </div>
                <div className="h-2 rounded-full bg-slate-200">
                  <div
                    className="h-2 rounded-full bg-brand-600"
                    style={{ width: `${l.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-brand-700 mb-4">{d.sectionTitles.pedagogicalSkills}</h3>
          <div className="space-y-4">
            {d.pedagogicalSkills.map((s) => (
              <div key={s.title} className="rounded-xl border border-slate-200 p-4">
                <h4 className="font-semibold text-slate-900">{s.title}</h4>
                <p className="text-sm text-slate-600 mt-1">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
