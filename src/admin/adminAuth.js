// Protection légère : ce mot de passe est visible dans le code source du site
// (bundle JS public). Cela décourage les visiteurs occasionnels mais n'est PAS
// une vraie sécurité — ne rien y mettre de confidentiel.
const PASSWORD = "4991";
const SESSION_KEY = "cv-admin-unlocked";

export function checkPassword(input) {
  return input === PASSWORD;
}

export function isUnlocked() {
  return sessionStorage.getItem(SESSION_KEY) === "1";
}

export function unlock() {
  sessionStorage.setItem(SESSION_KEY, "1");
}

export function lock() {
  sessionStorage.removeItem(SESSION_KEY);
}
