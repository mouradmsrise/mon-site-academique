import { useLanguage } from "../context/LanguageContext";
import { cvData } from "../data/cvData";
import portrait from "../assets/portrait.jpg";

export default function Hero() {
  const { lang } = useLanguage();
  const d = cvData[lang];

  return (
    <section id="about" className="bg-gradient-to-b from-brand-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24 flex flex-col md:flex-row items-center gap-10">
        <img
          src={portrait}
          alt={d.name}
          className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover shadow-lg shrink-0 ring-4 ring-white"
        />

        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">{d.name}</h1>
          <p className="mt-1 text-brand-600 font-medium text-lg">{d.title}</p>
          <p className="mt-4 text-slate-600 max-w-2xl">{d.tagline}</p>

          <div className="mt-5 flex flex-wrap justify-center md:justify-start gap-3 text-sm text-slate-500">
            <span className="inline-flex items-center gap-1">📍 {d.location}</span>
            <a href={`mailto:${d.email}`} className="inline-flex items-center gap-1 hover:text-brand-600">
              ✉️ {d.email}
            </a>
            <span className="inline-flex items-center gap-1">📞 {d.phone}</span>
          </div>

          <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
            {d.profiles.map((p) => (
              <a
                key={p.label}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium border border-slate-300 rounded-full px-4 py-1.5 text-slate-600 hover:border-brand-500 hover:text-brand-600 transition-colors"
              >
                {p.label}
              </a>
            ))}
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium bg-brand-600 text-white rounded-full px-4 py-1.5 hover:bg-brand-700 transition-colors"
            >
              {d.cta.downloadCv}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
