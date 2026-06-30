import { createContext, useContext, useRef, useState } from "react";
import { cvData, navLinks } from "../data/cvData";
import { CvDataProvider } from "../context/CvDataContext";
import { LanguageProvider } from "../context/LanguageContext";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Research from "../components/Research";
import Education from "../components/Education";
import Teaching from "../components/Teaching";
import Publications from "../components/Publications";
import Projects from "../components/Projects";
import Committees from "../components/Committees";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { checkPassword, isUnlocked, unlock, lock } from "./adminAuth";
import { getAtPath, setAtPath, humanize, blankTemplate, generateSource } from "./cvUtils";

const EditCtx = createContext(null);
const DRAFT_KEY = "cv-admin-draft-v1";
const NAV_DRAFT_KEY = "cv-admin-nav-draft-v1";

function PasswordGate({ onUnlock }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (checkPassword(value)) {
            unlock();
            onUnlock();
          } else {
            setError(true);
          }
        }}
        className="bg-white rounded-xl shadow-md p-8 w-full max-w-sm"
      >
        <h1 className="text-lg font-semibold text-slate-900 mb-1">Administration</h1>
        <p className="text-sm text-slate-500 mb-4">Accès réservé — entrez le mot de passe.</p>
        <input
          type="password"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setError(false);
          }}
          className="w-full border border-slate-300 rounded px-3 py-2 mb-2"
          autoFocus
        />
        {error && <p className="text-sm text-red-600 mb-2">Mot de passe incorrect.</p>}
        <button
          type="submit"
          className="w-full bg-brand-600 text-white rounded py-2 font-medium hover:bg-brand-700"
        >
          Entrer
        </button>
      </form>
    </div>
  );
}

function Node({ path }) {
  const { draft, mutate } = useContext(EditCtx);
  const frVal = getAtPath(draft.fr, path);
  const enVal = getAtPath(draft.en, path);
  const key = path[path.length - 1];
  const label = typeof key === "number" ? null : humanize(String(key));

  if (Array.isArray(frVal)) {
    return (
      <div className="mb-4 border-l-2 border-slate-200 pl-3">
        {label && <h4 className="font-semibold text-slate-700 mb-2">{label}</h4>}
        {frVal.map((_, i) => (
          <div key={i} className="mb-3 bg-slate-50 rounded-lg p-3 relative">
            <Node path={[...path, i]} />
            <button
              type="button"
              onClick={() =>
                mutate((d) => {
                  getAtPath(d.fr, path).splice(i, 1);
                  getAtPath(d.en, path).splice(i, 1);
                })
              }
              className="absolute top-2 right-2 text-xs text-red-500 hover:text-red-700"
            >
              ✕ Supprimer
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() =>
            mutate((d) => {
              const arrFr = getAtPath(d.fr, path);
              const arrEn = getAtPath(d.en, path);
              const sample = arrFr[0] ?? arrEn[0] ?? "";
              arrFr.push(blankTemplate(sample));
              arrEn.push(blankTemplate(sample));
            })
          }
          className="text-xs font-semibold text-brand-700 hover:underline"
        >
          + Ajouter un élément
        </button>
      </div>
    );
  }

  if (frVal && typeof frVal === "object") {
    return (
      <div className="mb-3">
        {label && <h5 className="font-medium text-slate-600 text-sm mb-1">{label}</h5>}
        <div className="pl-3 border-l border-slate-200">
          {Object.keys(frVal).map((k) => (
            <Node key={k} path={[...path, k]} />
          ))}
        </div>
      </div>
    );
  }

  if (typeof frVal === "boolean") {
    return (
      <label className="flex items-center gap-2 text-sm text-slate-600 mb-2">
        <input
          type="checkbox"
          checked={frVal}
          onChange={(e) =>
            mutate((d) => {
              setAtPath(d.fr, path, e.target.checked);
              setAtPath(d.en, path, e.target.checked);
            })
          }
        />
        {label}
      </label>
    );
  }

  if (typeof frVal === "number") {
    return (
      <label className="block mb-2 text-sm">
        <span className="text-slate-500">{label}</span>
        <input
          type="number"
          value={frVal}
          onChange={(e) => {
            const v = Number(e.target.value);
            mutate((d) => {
              setAtPath(d.fr, path, v);
              setAtPath(d.en, path, v);
            });
          }}
          className="mt-1 w-full border border-slate-300 rounded px-2 py-1"
        />
      </label>
    );
  }

  return (
    <div className="mb-2">
      {label && <span className="text-xs font-medium text-slate-500">{label}</span>}
      <div className="grid grid-cols-2 gap-2 mt-1">
        <textarea
          value={frVal ?? ""}
          onChange={(e) => mutate((d) => setAtPath(d.fr, path, e.target.value))}
          rows={frVal && frVal.length > 80 ? 3 : 1}
          className="w-full border border-slate-300 rounded px-2 py-1 text-sm"
          placeholder="FR"
        />
        <textarea
          value={enVal ?? ""}
          onChange={(e) => mutate((d) => setAtPath(d.en, path, e.target.value))}
          rows={enVal && enVal.length > 80 ? 3 : 1}
          className="w-full border border-slate-300 rounded px-2 py-1 text-sm"
          placeholder="EN"
        />
      </div>
    </div>
  );
}

function NavLinksEditor() {
  const { navDraft, mutateNav } = useContext(EditCtx);
  return (
    <div className="mb-4 border-l-2 border-slate-200 pl-3">
      <h4 className="font-semibold text-slate-700 mb-2">Menu de navigation</h4>
      {navDraft.map((link, i) => (
        <div key={i} className="mb-2 bg-slate-50 rounded-lg p-3 grid grid-cols-3 gap-2">
          <input
            value={link.id}
            onChange={(e) =>
              mutateNav((nav) => {
                nav[i].id = e.target.value;
              })
            }
            className="border border-slate-300 rounded px-2 py-1 text-sm"
            placeholder="id (ancre)"
          />
          <input
            value={link.fr}
            onChange={(e) =>
              mutateNav((nav) => {
                nav[i].fr = e.target.value;
              })
            }
            className="border border-slate-300 rounded px-2 py-1 text-sm"
            placeholder="FR"
          />
          <input
            value={link.en}
            onChange={(e) =>
              mutateNav((nav) => {
                nav[i].en = e.target.value;
              })
            }
            className="border border-slate-300 rounded px-2 py-1 text-sm"
            placeholder="EN"
          />
        </div>
      ))}
    </div>
  );
}

export default function AdminPage() {
  const [unlocked, setUnlocked] = useState(isUnlocked());
  const [tab, setTab] = useState("edit");
  const [copied, setCopied] = useState(false);

  const draftRef = useRef(null);
  if (draftRef.current === null) {
    const saved = localStorage.getItem(DRAFT_KEY);
    draftRef.current = saved ? JSON.parse(saved) : structuredClone(cvData);
  }
  const navRef = useRef(null);
  if (navRef.current === null) {
    const saved = localStorage.getItem(NAV_DRAFT_KEY);
    navRef.current = saved ? JSON.parse(saved) : structuredClone(navLinks);
  }
  const [, setVersion] = useState(0);

  const mutate = (fn) => {
    fn(draftRef.current);
    localStorage.setItem(DRAFT_KEY, JSON.stringify(draftRef.current));
    setVersion((v) => v + 1);
  };
  const mutateNav = (fn) => {
    fn(navRef.current);
    localStorage.setItem(NAV_DRAFT_KEY, JSON.stringify(navRef.current));
    setVersion((v) => v + 1);
  };

  if (!unlocked) {
    return <PasswordGate onUnlock={() => setUnlocked(true)} />;
  }

  const draft = draftRef.current;
  const navDraft = navRef.current;
  const source = generateSource(draft, navDraft);

  const download = () => {
    const blob = new Blob([source], { type: "text/javascript" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "cvData.js";
    a.click();
    URL.revokeObjectURL(url);
  };

  const copy = async () => {
    await navigator.clipboard.writeText(source);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const resetDraft = () => {
    if (!confirm("Annuler toutes les modifications non publiées et repartir du contenu actuel du site ?")) return;
    draftRef.current = structuredClone(cvData);
    navRef.current = structuredClone(navLinks);
    localStorage.removeItem(DRAFT_KEY);
    localStorage.removeItem(NAV_DRAFT_KEY);
    setVersion((v) => v + 1);
  };

  return (
    <EditCtx.Provider value={{ draft, mutate, navDraft, mutateNav }}>
      <div className="min-h-screen bg-slate-100">
        <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3">
            <h1 className="font-semibold text-slate-900">Administration du site</h1>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setTab("edit")}
                className={`text-sm px-3 py-1.5 rounded-full ${tab === "edit" ? "bg-brand-600 text-white" : "border border-slate-300 text-slate-600"}`}
              >
                Éditer
              </button>
              <button
                onClick={() => setTab("preview")}
                className={`text-sm px-3 py-1.5 rounded-full ${tab === "preview" ? "bg-brand-600 text-white" : "border border-slate-300 text-slate-600"}`}
              >
                Aperçu
              </button>
              <button
                onClick={() => setTab("export")}
                className={`text-sm px-3 py-1.5 rounded-full ${tab === "export" ? "bg-brand-600 text-white" : "border border-slate-300 text-slate-600"}`}
              >
                Publier
              </button>
              <button
                onClick={() => {
                  lock();
                  setUnlocked(false);
                }}
                className="text-sm text-slate-400 hover:text-slate-600"
              >
                Verrouiller
              </button>
            </div>
          </div>
        </header>

        {tab === "edit" && (
          <div className="max-w-3xl mx-auto px-4 py-8">
            <p className="text-sm text-slate-500 mb-6">
              Modifiez vos informations ci-dessous (colonne de gauche = Français, colonne de droite = English).
              Les changements sont sauvegardés automatiquement dans ce navigateur. Allez dans l'onglet « Publier »
              pour les mettre en ligne.
            </p>
            <NavLinksEditor />
            {Object.keys(draft.fr).map((k) => (
              <Node key={k} path={[k]} />
            ))}
            <button onClick={resetDraft} className="mt-6 text-sm text-red-500 hover:text-red-700">
              Annuler mes modifications et repartir du contenu actuel
            </button>
          </div>
        )}

        {tab === "preview" && (
          <div className="bg-white">
            <CvDataProvider value={{ data: draft, navLinks: navDraft }}>
              <LanguageProvider>
                <Navbar />
                <Hero />
                <Research />
                <Education />
                <Teaching />
                <Publications />
                <Projects />
                <Committees />
                <Skills />
                <Contact />
                <Footer />
              </LanguageProvider>
            </CvDataProvider>
          </div>
        )}

        {tab === "export" && (
          <div className="max-w-3xl mx-auto px-4 py-8">
            <h2 className="font-semibold text-slate-900 mb-2">Publier vos modifications</h2>
            <ol className="text-sm text-slate-600 list-decimal pl-5 space-y-1 mb-6">
              <li>Cliquez « Télécharger le fichier » ci-dessous (cvData.js).</li>
              <li>
                Envoyez-moi ce fichier (ou son contenu copié) dans la conversation, ou dites-moi simplement
                « publie les changements » si je peux déjà y accéder.
              </li>
              <li>Je remplace le fichier, vérifie que tout fonctionne, et publie la mise à jour sur le site en ligne.</li>
            </ol>
            <div className="flex gap-3 mb-6">
              <button
                onClick={download}
                className="bg-brand-600 text-white rounded-full px-5 py-2 text-sm font-medium hover:bg-brand-700"
              >
                Télécharger le fichier
              </button>
              <button
                onClick={copy}
                className="border border-slate-300 rounded-full px-5 py-2 text-sm font-medium text-slate-600 hover:border-brand-500"
              >
                {copied ? "Copié !" : "Copier le code"}
              </button>
            </div>
            <pre className="bg-slate-900 text-slate-100 text-xs rounded-lg p-4 overflow-auto max-h-96">{source}</pre>
          </div>
        )}
      </div>
    </EditCtx.Provider>
  );
}
