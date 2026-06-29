import { useLanguage } from "../context/LanguageContext";
import { cvData } from "../data/cvData";

export default function Contact() {
  const { lang } = useLanguage();
  const d = cvData[lang];

  return (
    <section id="contact" className="bg-brand-700 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 text-center">
        <h2 className="text-2xl font-bold mb-3">{d.sectionTitles.contact}</h2>
        <p className="text-brand-100 max-w-xl mx-auto">{d.tagline}</p>

        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${d.email}`}
            className="bg-white text-brand-700 font-semibold rounded-full px-6 py-2.5 hover:bg-brand-50 transition-colors"
          >
            {d.cta.contactMe}
          </a>
          <a
            href={`tel:${d.phone.replace(/\s/g, "")}`}
            className="border border-white/60 rounded-full px-6 py-2.5 hover:bg-white/10 transition-colors"
          >
            {d.phone}
          </a>
        </div>

        <p className="mt-6 text-sm text-brand-100">{d.location}</p>
      </div>
    </section>
  );
}
