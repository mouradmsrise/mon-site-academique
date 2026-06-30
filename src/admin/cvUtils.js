const LABELS = {
  name: "Nom",
  title: "Titre",
  location: "Localisation",
  phone: "Téléphone",
  email: "Email",
  tagline: "Phrase d'accroche",
  profiles: "Profils (Scopus, Scholar...)",
  label: "Libellé",
  url: "Lien",
  researchInterests: "Domaines de recherche",
  teachingLoad: "Volume horaire",
  mission: "Mission",
  hours: "Heures",
  plus: "Afficher un '+' devant le nombre",
  education: "Diplômes & Formations",
  year: "Année",
  degree: "Diplôme",
  place: "Établissement",
  detail: "Détail",
  mention: "Mention",
  teachingExperience: "Expériences d'enseignement",
  role: "Poste",
  period: "Période",
  courses: "Cours",
  level: "Niveau",
  pedagogicalSkills: "Compétences pédagogiques",
  text: "Texte",
  projects: "Projets réalisés",
  cycle: "Cycle",
  skills: "Compétences",
  languages_prog: "Langages de programmation",
  web: "Développement web",
  modeling: "Modélisation",
  os: "Système d'exploitation",
  office: "Bureautique",
  spokenLanguages: "Langues parlées",
  percent: "Niveau (%)",
  publications: "Publications",
  journals: "Journaux",
  conferences: "Conférences",
  books: "Ouvrages",
  authors: "Auteurs",
  venue: "Revue / Lieu de publication",
  metric: "Indicateur (SJR, etc.)",
  doi: "DOI",
  committees: "Comités d'organisation",
  scientificActivities: "Activités scientifiques",
  sectionTitles: "Titres des sections",
  cta: "Textes des boutons",
  downloadCv: "Texte bouton télécharger CV",
  contactMe: "Texte bouton contact",
  hoursLabel: "Libellé 'heures'",
  about: "À propos",
  research: "Recherche",
  teaching: "Enseignement",
  contact: "Contact",
  languages: "Langues",
  computerSkills: "Compétences informatiques",
};

export function humanize(key) {
  if (LABELS[key]) return LABELS[key];
  return key
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/^./, (c) => c.toUpperCase());
}

export function getAtPath(obj, path) {
  return path.reduce((acc, key) => (acc == null ? acc : acc[key]), obj);
}

export function setAtPath(obj, path, value) {
  let cur = obj;
  for (let i = 0; i < path.length - 1; i++) cur = cur[path[i]];
  cur[path[path.length - 1]] = value;
}

export function blankTemplate(sample) {
  if (typeof sample === "string") return "";
  if (typeof sample === "number") return 0;
  if (typeof sample === "boolean") return false;
  if (Array.isArray(sample)) return sample.map(blankTemplate);
  if (sample && typeof sample === "object") {
    const out = {};
    for (const k of Object.keys(sample)) out[k] = blankTemplate(sample[k]);
    return out;
  }
  return sample;
}

export function generateSource(draft, navLinksDraft) {
  return `// Données extraites du CV de Mourad Haddioui — modifiez ce fichier
// (directement, ou via la page d'administration /#admin du site)
// pour mettre à jour le contenu du site (texte FR et EN en parallèle).

export const cvData = ${JSON.stringify(draft, null, 2)};

export const navLinks = ${JSON.stringify(navLinksDraft, null, 2)};
`;
}
