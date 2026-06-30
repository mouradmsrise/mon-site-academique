// Données extraites du CV de Mourad Haddioui — modifiez librement ce fichier
// pour mettre à jour le contenu du site (texte FR et EN en parallèle).

export const cvData = {
  fr: {
    name: "Mourad Haddioui",
    title: "Docteur en Informatique",
    location: "Meknès, Maroc",
    phone: "+212 6 59 77 06 03",
    email: "mouradhaddiouismi@gmail.com",
    tagline:
      "Chercheur en modélisation du trafic routier, apprentissage automatique et intelligence artificielle appliquée. Enseignant-chercheur engagé dans la formation et la diffusion scientifique.",
    profiles: [
      { label: "Scopus", url: "https://www.scopus.com/pages/home#basic" },
      { label: "Google Scholar", url: "https://scholar.google.com/citations?user=IH39VZMAAAAJ&hl=fr&oi=ao" },
      { label: "ResearchGate", url: "https://www.researchgate.net/profile/Mourad-Haddioui" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/mourad-haddioui-006342123" },
    ],
    researchInterests: [
      "Traffic flow modeling",
      "Machine Learning",
      "Modeling and Simulation",
      "Mathematical Modelling",
    ],
    teachingLoad: [
      { mission: "ENS Meknès", hours: 312 },
      { mission: "FS Meknès (FSM)", hours: 48 },
      { mission: "Enseignement public", hours: 6720, plus: true },
      { mission: "OFPPT", hours: 150 },
    ],
    education: [
      {
        year: "2024",
        degree: "Doctorat en Informatique",
        place:
          "Faculté des Sciences et Techniques Errachidia (FSTE), Université Moulay Ismail, Meknès",
        detail:
          "Thèse : « Modeling, Simulation, Intelligent Prediction And Collision Prevention In A Road Traffic System »",
        mention: "Mention : Très Honorable",
      },
      {
        year: "2017",
        degree: "Master en Réseaux Informatiques et Systèmes Embarqués",
        place: "Faculté des Sciences Meknès, Université Moulay Ismail, Meknès",
        mention: "Mention : Assez Bien",
      },
      {
        year: "2015",
        degree: "Licence d'études fondamentales — Sciences Mathématique et Informatique",
        place: "Faculté des Sciences Oujda, Université Mohammed Premier, Oujda",
      },
      {
        year: "2014",
        degree: "Diplôme des Études Universitaires Générales — Sciences Mathématique et Informatique",
        place: "Faculté des Sciences Oujda, Université Mohammed Premier, Oujda",
      },
      {
        year: "2011",
        degree: "Baccalauréat — Sciences Expérimentales",
        place: "Lycée Ibn Albane Almorakochi, Beni Tajite",
        mention: "Mention : Bien",
      },
    ],
    teachingExperience: [
      {
        role: "Professeur vacataire",
        place: "ENS Meknès, UMI",
        period: "2025-2026",
        courses: [
          { name: "Architecture des ordinateurs (Cours & Travaux dirigés)", level: "Licence d'éducation en Informatique, École Normale Supérieure, Meknès", hours: "65 heures" },
          { name: "Probabilité et Statistiques (Cours & Travaux dirigés)", level: "Licence d'éducation cycle primaire, École Normale Supérieure, Meknès", hours: "65 heures" },
          { name: "Didactique des mathématiques (Cours & Travaux dirigés)", level: "Licence d'éducation cycle primaire, École Normale Supérieure, Meknès", hours: "65 heures" },
        ],
      },
      {
        role: "Professeur vacataire",
        place: "Faculté des Sciences de Meknès, UMI",
        period: "2025-2026",
        courses: [
          { name: "Programmation orientée objet (Cours & Travaux dirigés)", level: "Licence d'excellence en Système intelligent et recherche opérationnelle, Faculté des Sciences, Meknès", hours: "48 heures" },
        ],
      },
      {
        role: "Professeur vacataire",
        place: "ENS Meknès, UMI",
        period: "2024-2025",
        courses: [
          { name: "Probabilité et Statistiques (Cours & Travaux dirigés)", level: "Licence d'éducation cycle primaire, École Normale Supérieure, Meknès", hours: "48 heures" },
          { name: "Mathématique 2 (Cours & Travaux dirigés)", level: "Licence d'éducation cycle primaire, École Normale Supérieure, Meknès", hours: "65 heures" },
        ],
      },
      {
        role: "Enseignant du secondaire qualifiant public",
        place: "Lycée Ibn Albane Almorakochi, Beni Tajite — Direction provinciale de l'éducation nationale, Figuig",
        period: "2017-2024",
        courses: [
          { name: "Mathématique (Cours & Activités de la vie scolaire)", hours: "5880 heures" },
        ],
      },
      {
        role: "Enseignant du secondaire qualifiant public",
        place: "Lycée Qualifiant Jahjouh, Jahjouh — Direction provinciale de l'éducation nationale, Elhajeb",
        period: "2024-Actuellement",
        courses: [
          { name: "Mathématique (Cours & Activités de la vie scolaire)", hours: "840 heures" },
        ],
      },
      {
        role: "Formateur vacataire",
        place: "OFPPT, Bouarfa — Annexe Beni Tajite",
        period: "2022-2024",
        courses: [
          { name: "Culture et Technique du Numérique", hours: "50 heures/année" },
        ],
      },
    ],
    pedagogicalSkills: [
      {
        title: "Expertise Pédagogique",
        text: "Transmettre les bases solides en mathématiques nécessaires pour former de futurs enseignants, en mettant l'accent sur les concepts fondamentaux.",
      },
      {
        title: "Animation et Interaction",
        text: "Capacité à animer des discussions interactives en classe, favorisant la participation active des apprenants.",
      },
      {
        title: "Planification Stratégique",
        text: "Conception de plans de leçon adaptés aux besoins des apprenants, avec des évaluations pour ajuster l'enseignement.",
      },
      {
        title: "Innovation Technologique",
        text: "Utilisation de technologies éducatives pour enrichir le programme, comme des logiciels de programmation et des plateformes collaboratives.",
      },
    ],
    projects: [
      {
        title: "Conception et Réalisation d'un mini simulateur de Trafic routier urbain",
        cycle: "Projet de fin d'études — Master Spécialisé",
        place: "Faculté des Sciences Meknès (FSM-UMI)",
        year: "2017",
      },
      {
        title: "Développement d'une Application de prise de rendez-vous en ligne pour une clinique",
        cycle: "Projet de fin d'études — Licence Fondamentale",
        place: "Faculté des Sciences Oujda (FSO-UMP)",
        year: "2015",
      },
    ],
    skills: {
      languages_prog: ["Python", "C", "C++", "Java", "Assembleur"],
      web: ["PHP", "HTML", "JavaScript"],
      modeling: ["SysML", "UML", "Merise"],
      os: ["Windows", "Linux"],
      office: ["Word", "Excel", "PowerPoint", "LaTeX"],
    },
    spokenLanguages: [
      { name: "Arabe", level: "Maternelle", percent: 100 },
      { name: "Français", level: "Courant", percent: 90 },
      { name: "Anglais", level: "Bien", percent: 70 },
    ],
    publications: {
      journals: [
        {
          authors: "Mourad Haddioui, Youssef Qaraai, Saleh Bouarafa, Said Agoujil, Abderrahman Bouhamidi",
          year: "Mai 2024",
          title: "A macroscopic traffic flow modelling and collision avoidance using B-spline and Physics-Informed Neural Network approaches",
          venue: "International Journal of Intelligent Networks",
          metric: "SJR=1.545 Q1",
          doi: "10.1016/j.ijin.2024.04.003",
        },
        {
          authors: "Mourad Haddioui, Youssef Qaraai, El arbi Abdellaoui Alaoui et al.",
          year: "2026",
          title: "Physics-Informed Deep Learning and Machine Learning Integration for Collision Prediction in 2D Traffic Systems",
          venue: "International Journal of Intelligent Transportation Systems Research",
          metric: "SJR=0.434 Q2",
          doi: "10.1007/s13177-026-00686-x",
        },
        {
          authors: "Omar Knnou, Rachid Benoudi, Mourad Haddioui, Said Agoujil, Youssef Qaraai",
          year: "2026",
          title: "Efficient Road Cracks Segmentation Using Physics Informed Neural Network Approach",
          venue: "International Journal of Image, Graphics and Signal Processing (IJIGSP), Vol.18, No.3, pp. 54–70",
          metric: "SJR=0.316",
          doi: "10.5815/ijigsp.2026.03.03",
        },
      ],
      conferences: [
        {
          authors: "Mourad Haddioui, Youssef Qaraai, Saleh Bouarafa, Said Agoujil, Abderrahman Bouhamidi",
          year: "2024",
          title: "Multi-agent Simulation of Traffic Flow and Collision Detection Using GAMA",
          venue: "The International Workshop on Big Data and Business Intelligence, pp. 405-411. Cham: Springer Nature Switzerland",
          doi: "10.1007/978-3-031-65014-7-36",
        },
        {
          authors: "Mourad Haddioui, Youssef Qaraai, Said Agoujil, Abderrahman Bouhamidi",
          year: "2022",
          title: "Solving a proposed traffic flow model using deep learning and physical constraint",
          venue: "The International Conference on Artificial Intelligence and Smart Environment, pp. 884-889. Cham: Springer International Publishing",
          doi: "10.1007/978-3-031-26254-8-128",
        },
      ],
      books: [
        {
          authors: "Haddioui, Mourad & Qaraai, Youssef",
          year: "2024",
          title: "Collision Detection and Prevention in a Proposed Road Traffic Flow Model by Integrating the IDM Model",
          venue: "GRIN Verlag, Munich, 114 pages",
        },
      ],
    },
    committees: [
      "Membre du comité d'organisation de la 1ère Conférence Internationale sur les Approches et Applications Innovantes pour le Développement Durable (I2ASD 2025) — ENS Meknès",
      "Membre du comité d'organisation de la 5ème édition de la Conférence Internationale sur l'Intelligence Artificielle et les Environnements Intelligents (ICAISE'2023) — FST Errachidia",
      "Membre du comité d'organisation de la 4ème édition de la Conférence Internationale sur l'Intelligence Artificielle et les Environnements Intelligents (ICAISE'2022) — FST Errachidia",
      "Membre du comité d'organisation de la 5ème édition des journées doctorales science et technique (Mai 2021) — FST Errachidia",
    ],
    scientificActivities: [
      "Membre du comité scientifique de l'International Conference on AI-Driven STEM Education and Learning Technologies (AISTEMEDU 2025), Prince Mohammad Bin Fahd University, décembre 2025.",
      "Membre du comité scientifique de la 1st Conference on Advances in Computer Science and Educational Technologies for Sustainable Development (CAITED), Cameroun.",
      "Reviewer pour la revue internationale Data & Policy, publiée par Cambridge University Press (2026).",
    ],
    sectionTitles: {
      about: "À propos",
      research: "Recherche",
      education: "Diplômes & Formations",
      teaching: "Enseignement & Vacation",
      projects: "Projets réalisés",
      skills: "Compétences",
      publications: "Publications",
      journals: "Papiers de journaux indexés Scopus",
      conferences: "Papiers de conférences indexés Scopus",
      books: "Ouvrages",
      committees: "Organisation des congrès et conférences",
      scientificActivities: "Activités d'expertise et responsabilités scientifiques",
      contact: "Contact",
      languages: "Langues",
      computerSkills: "Compétences informatiques",
      pedagogicalSkills: "Compétences pédagogiques",
    },
    cta: {
      downloadCv: "Télécharger le CV",
      contactMe: "Me contacter",
      hoursLabel: "heures",
    },
  },

  en: {
    name: "Mourad Haddioui",
    title: "PhD in Computer Science",
    location: "Meknès, Morocco",
    phone: "+212 6 59 77 06 03",
    email: "mouradhaddiouismi@gmail.com",
    tagline:
      "Researcher in road traffic flow modeling, machine learning, and applied artificial intelligence. Teacher-researcher committed to education and scientific outreach.",
    profiles: [
      { label: "Scopus", url: "https://www.scopus.com/pages/home#basic" },
      { label: "Google Scholar", url: "https://scholar.google.com/citations?user=IH39VZMAAAAJ&hl=fr&oi=ao" },
      { label: "ResearchGate", url: "https://www.researchgate.net/profile/Mourad-Haddioui" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/mourad-haddioui-006342123" },
    ],
    researchInterests: [
      "Traffic flow modeling",
      "Machine Learning",
      "Modeling and Simulation",
      "Mathematical Modelling",
    ],
    teachingLoad: [
      { mission: "ENS Meknès", hours: 312 },
      { mission: "FS Meknès (FSM)", hours: 48 },
      { mission: "Public education", hours: 6720, plus: true },
      { mission: "OFPPT", hours: 150 },
    ],
    education: [
      {
        year: "2024",
        degree: "PhD in Computer Science",
        place:
          "Faculty of Sciences and Techniques of Errachidia (FSTE), Moulay Ismail University, Meknès",
        detail:
          "Thesis: \"Modeling, Simulation, Intelligent Prediction And Collision Prevention In A Road Traffic System\"",
        mention: "Distinction: Très Honorable (Highest Honors)",
      },
      {
        year: "2017",
        degree: "Master's in Computer Networks and Embedded Systems",
        place: "Faculty of Sciences of Meknès, Moulay Ismail University, Meknès",
        mention: "Distinction: Assez Bien (Good)",
      },
      {
        year: "2015",
        degree: "Bachelor's degree — Mathematics and Computer Science",
        place: "Faculty of Sciences of Oujda, Mohammed First University, Oujda",
      },
      {
        year: "2014",
        degree: "General University Studies Diploma — Mathematics and Computer Science",
        place: "Faculty of Sciences of Oujda, Mohammed First University, Oujda",
      },
      {
        year: "2011",
        degree: "Baccalaureate — Experimental Sciences",
        place: "Ibn Albane Almorakochi High School, Beni Tajite",
        mention: "Distinction: Bien (Good)",
      },
    ],
    teachingExperience: [
      {
        role: "Adjunct Professor",
        place: "ENS Meknès, UMI",
        period: "2025-2026",
        courses: [
          { name: "Computer Architecture (Lectures & Tutorials)", level: "Bachelor's in Education, Computer Science track, École Normale Supérieure, Meknès", hours: "65 hours" },
          { name: "Probability and Statistics (Lectures & Tutorials)", level: "Bachelor's in Primary Education, École Normale Supérieure, Meknès", hours: "65 hours" },
          { name: "Mathematics Didactics (Lectures & Tutorials)", level: "Bachelor's in Primary Education, École Normale Supérieure, Meknès", hours: "65 hours" },
        ],
      },
      {
        role: "Adjunct Professor",
        place: "Faculty of Sciences of Meknès, UMI",
        period: "2025-2026",
        courses: [
          { name: "Object-Oriented Programming (Lectures & Tutorials)", level: "Honors Bachelor's in Intelligent Systems and Operations Research, Faculty of Sciences, Meknès", hours: "48 hours" },
        ],
      },
      {
        role: "Adjunct Professor",
        place: "ENS Meknès, UMI",
        period: "2024-2025",
        courses: [
          { name: "Probability and Statistics (Lectures & Tutorials)", level: "Bachelor's in Primary Education, École Normale Supérieure, Meknès", hours: "48 hours" },
          { name: "Mathematics 2 (Lectures & Tutorials)", level: "Bachelor's in Primary Education, École Normale Supérieure, Meknès", hours: "65 hours" },
        ],
      },
      {
        role: "Public Secondary School Teacher",
        place: "Ibn Albane Almorakochi High School, Beni Tajite — Provincial Directorate of National Education, Figuig",
        period: "2017-2024",
        courses: [
          { name: "Mathematics (Lectures & School Life Activities)", hours: "5880 hours" },
        ],
      },
      {
        role: "Public Secondary School Teacher",
        place: "Jahjouh Qualifying High School, Jahjouh — Provincial Directorate of National Education, Elhajeb",
        period: "2024-Present",
        courses: [
          { name: "Mathematics (Lectures & School Life Activities)", hours: "840 hours" },
        ],
      },
      {
        role: "Adjunct Trainer",
        place: "OFPPT, Bouarfa — Beni Tajite Branch",
        period: "2022-2024",
        courses: [
          { name: "Digital Culture and Technique", hours: "50 hours/year" },
        ],
      },
    ],
    pedagogicalSkills: [
      {
        title: "Pedagogical Expertise",
        text: "Conveying the solid mathematical foundations required to train future teachers, with an emphasis on core concepts.",
      },
      {
        title: "Facilitation and Interaction",
        text: "Ability to lead interactive classroom discussions, fostering active learner participation.",
      },
      {
        title: "Strategic Planning",
        text: "Designing lesson plans tailored to learners' needs, with assessments used to adjust teaching.",
      },
      {
        title: "Technological Innovation",
        text: "Use of educational technology to enrich the curriculum, including programming software and collaborative platforms.",
      },
    ],
    projects: [
      {
        title: "Design and Development of a Mini Urban Road Traffic Simulator",
        cycle: "Graduation Project — Specialized Master's",
        place: "Faculty of Sciences of Meknès (FSM-UMI)",
        year: "2017",
      },
      {
        title: "Development of an Online Appointment Booking Application for a Clinic",
        cycle: "Graduation Project — Bachelor's Degree",
        place: "Faculty of Sciences of Oujda (FSO-UMP)",
        year: "2015",
      },
    ],
    skills: {
      languages_prog: ["Python", "C", "C++", "Java", "Assembly"],
      web: ["PHP", "HTML", "JavaScript"],
      modeling: ["SysML", "UML", "Merise"],
      os: ["Windows", "Linux"],
      office: ["Word", "Excel", "PowerPoint", "LaTeX"],
    },
    spokenLanguages: [
      { name: "Arabic", level: "Native", percent: 100 },
      { name: "French", level: "Fluent", percent: 90 },
      { name: "English", level: "Good", percent: 70 },
    ],
    publications: {
      journals: [
        {
          authors: "Mourad Haddioui, Youssef Qaraai, Saleh Bouarafa, Said Agoujil, Abderrahman Bouhamidi",
          year: "May 2024",
          title: "A macroscopic traffic flow modelling and collision avoidance using B-spline and Physics-Informed Neural Network approaches",
          venue: "International Journal of Intelligent Networks",
          metric: "SJR=1.545 Q1",
          doi: "10.1016/j.ijin.2024.04.003",
        },
        {
          authors: "Mourad Haddioui, Youssef Qaraai, El arbi Abdellaoui Alaoui et al.",
          year: "2026",
          title: "Physics-Informed Deep Learning and Machine Learning Integration for Collision Prediction in 2D Traffic Systems",
          venue: "International Journal of Intelligent Transportation Systems Research",
          metric: "SJR=0.434 Q2",
          doi: "10.1007/s13177-026-00686-x",
        },
        {
          authors: "Omar Knnou, Rachid Benoudi, Mourad Haddioui, Said Agoujil, Youssef Qaraai",
          year: "2026",
          title: "Efficient Road Cracks Segmentation Using Physics Informed Neural Network Approach",
          venue: "International Journal of Image, Graphics and Signal Processing (IJIGSP), Vol.18, No.3, pp. 54–70",
          metric: "SJR=0.316",
          doi: "10.5815/ijigsp.2026.03.03",
        },
      ],
      conferences: [
        {
          authors: "Mourad Haddioui, Youssef Qaraai, Saleh Bouarafa, Said Agoujil, Abderrahman Bouhamidi",
          year: "2024",
          title: "Multi-agent Simulation of Traffic Flow and Collision Detection Using GAMA",
          venue: "The International Workshop on Big Data and Business Intelligence, pp. 405-411. Cham: Springer Nature Switzerland",
          doi: "10.1007/978-3-031-65014-7-36",
        },
        {
          authors: "Mourad Haddioui, Youssef Qaraai, Said Agoujil, Abderrahman Bouhamidi",
          year: "2022",
          title: "Solving a proposed traffic flow model using deep learning and physical constraint",
          venue: "The International Conference on Artificial Intelligence and Smart Environment, pp. 884-889. Cham: Springer International Publishing",
          doi: "10.1007/978-3-031-26254-8-128",
        },
      ],
      books: [
        {
          authors: "Haddioui, Mourad & Qaraai, Youssef",
          year: "2024",
          title: "Collision Detection and Prevention in a Proposed Road Traffic Flow Model by Integrating the IDM Model",
          venue: "GRIN Verlag, Munich, 114 pages",
        },
      ],
    },
    committees: [
      "Organizing committee member, 1st International Conference on Innovative Approaches and Applications for Sustainable Development (I2ASD 2025) — ENS Meknès",
      "Organizing committee member, 5th International Conference on Artificial Intelligence and Smart Environments (ICAISE'2023) — FST Errachidia",
      "Organizing committee member, 4th International Conference on Artificial Intelligence and Smart Environments (ICAISE'2022) — FST Errachidia",
      "Organizing committee member, 5th edition of the Science and Technology Doctoral Days (May 2021) — FST Errachidia",
    ],
    scientificActivities: [
      "Scientific committee member, International Conference on AI-Driven STEM Education and Learning Technologies (AISTEMEDU 2025), Prince Mohammad Bin Fahd University, December 2025.",
      "Scientific committee member, 1st Conference on Advances in Computer Science and Educational Technologies for Sustainable Development (CAITED), Cameroon.",
      "Reviewer for the international journal Data & Policy, published by Cambridge University Press (2026).",
    ],
    sectionTitles: {
      about: "About",
      research: "Research",
      education: "Education",
      teaching: "Teaching & Adjunct Positions",
      projects: "Completed Projects",
      skills: "Skills",
      publications: "Publications",
      journals: "Scopus-indexed Journal Papers",
      conferences: "Scopus-indexed Conference Papers",
      books: "Books",
      committees: "Conference Organization",
      scientificActivities: "Expert Activities & Scientific Responsibilities",
      contact: "Contact",
      languages: "Languages",
      computerSkills: "Computer Skills",
      pedagogicalSkills: "Pedagogical Skills",
    },
    cta: {
      downloadCv: "Download CV",
      contactMe: "Contact me",
      hoursLabel: "hours",
    },
  },
};

export const navLinks = [
  { id: "about", fr: "À propos", en: "About" },
  { id: "research", fr: "Recherche", en: "Research" },
  { id: "education", fr: "Formation", en: "Education" },
  { id: "teaching", fr: "Enseignement", en: "Teaching" },
  { id: "publications", fr: "Publications", en: "Publications" },
  { id: "projects", fr: "Projets", en: "Projects" },
  { id: "skills", fr: "Compétences", en: "Skills" },
  { id: "contact", fr: "Contact", en: "Contact" },
];
