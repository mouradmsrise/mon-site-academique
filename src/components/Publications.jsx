import { useLanguage } from "../context/LanguageContext";
import { useCvData } from "../context/CvDataContext";

function PubItem({ pub }) {
  return (
    <li className="rounded-lg border border-slate-200 p-4 hover:border-brand-300 transition-colors">
      <p className="text-sm text-slate-500">{pub.authors} ({pub.year})</p>
      <h4 className="font-semibold text-slate-900 mt-1">{pub.title}</h4>
      <p className="text-sm text-slate-600 italic mt-1">{pub.venue}</p>
      <div className="flex flex-wrap gap-2 mt-2">
        {pub.metric && (
          <span className="text-xs font-semibold text-amber-700 bg-amber-100 rounded px-2 py-0.5">
            {pub.metric}
          </span>
        )}
        {pub.doi && (
          <a
            href={`https://doi.org/${pub.doi}`}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-semibold text-brand-700 bg-brand-100 rounded px-2 py-0.5 hover:bg-brand-200"
          >
            DOI: {pub.doi}
          </a>
        )}
      </div>
    </li>
  );
}

export default function Publications() {
  const { lang } = useLanguage();
  const d = useCvData()[lang];
  const p = d.publications;

  return (
    <section id="publications" className="bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">{d.sectionTitles.publications}</h2>

        <h3 className="text-lg font-semibold text-brand-700 mb-3">{d.sectionTitles.journals}</h3>
        <ul className="space-y-4 mb-10">
          {p.journals.map((pub, i) => (
            <PubItem key={i} pub={pub} />
          ))}
        </ul>

        <h3 className="text-lg font-semibold text-brand-700 mb-3">{d.sectionTitles.conferences}</h3>
        <ul className="space-y-4 mb-10">
          {p.conferences.map((pub, i) => (
            <PubItem key={i} pub={pub} />
          ))}
        </ul>

        <h3 className="text-lg font-semibold text-brand-700 mb-3">{d.sectionTitles.books}</h3>
        <ul className="space-y-4">
          {p.books.map((pub, i) => (
            <PubItem key={i} pub={pub} />
          ))}
        </ul>
      </div>
    </section>
  );
}
