const nourrirButton: HTMLButtonElement = document.getElementById(
  "nourrir"
) as HTMLButtonElement;
const jouerButton: HTMLButtonElement = document.getElementById(
  "jouer"
) as HTMLButtonElement;
const soignerButton: HTMLButtonElement = document.getElementById(
  "soigner"
) as HTMLButtonElement;

const choixPerso: HTMLElement | null = document.querySelector('.section_choix_personnage')

// Sélectionnez les boutons de choix de personnage
const btnPerso1: HTMLElement | null = document.getElementById("choix_perso_1");
const btnPerso2: HTMLElement | null = document.getElementById("choix_perso_2");

// Sélectionnez les sections de chaque personnage
const sectionPerso1: HTMLElement | null = document.querySelector(
  ".section_personnage_1"
);
const sectionPerso2: HTMLElement | null = document.querySelector(
  ".section_personnage_2"
);

let vie: number = 100;
let nourriture: number = 100;
let bonheur: number = 100;
let interval: number;

// Masquer la section de chaque personnage
if (sectionPerso1 && sectionPerso2) {
  sectionPerso1.style.display = "none";
  sectionPerso2.style.display = "none";
}

// Ajouter un événement "click" à chaque bouton
if (btnPerso1 && btnPerso2 && choixPerso) {
  btnPerso1.addEventListener("click", function () {
    if (sectionPerso1 && sectionPerso2) {
      sectionPerso1.style.display = "block";
      sectionPerso2.style.display = "none";
      choixPerso.style.display = "none";
    }
  });

  btnPerso2.addEventListener("click", function () {
    if (sectionPerso1 && sectionPerso2) {
      sectionPerso1.style.display = "none";
      sectionPerso2.style.display = "block";
    }
  });
}

// Fonction pour faire descendre les valeurs de 5 toutes les secondes
function startInterval(): void {
  interval = setInterval(() => {
    vie = Math.max(vie - 5, 0);
    nourriture = Math.max(nourriture - 5, 0);
    bonheur = Math.max(bonheur - 5, 0);
    updateStats();
    checkGameOver();
  }, 1000);
}

// Fonction pour arrêter l'intervalle
function stopInterval(): void {
  clearInterval(interval);
}

function nourrir(): void {
  nourriture += 10;
  updateStats();
}

function jouer(): void {
  bonheur += 10;
  updateStats();
}

function soigner(): void {
  vie += 10;
  updateStats();
}

function updateStats(): void {
  const vieElement: HTMLElement | null = document.getElementById("vie");
  const nourritureElement: HTMLElement | null =
    document.getElementById("nourriture");
  const bonheurElement: HTMLElement | null = document.getElementById("bonheur");

  if (vieElement && nourritureElement && bonheurElement) {
    vieElement.textContent = vie.toString();
    nourritureElement.textContent = nourriture.toString();
    bonheurElement.textContent = bonheur.toString();

    // Mettre à jour les barres de progression
    const vieBar: HTMLDivElement | null = document.getElementById(
      "vie-bar"
    ) as HTMLDivElement | null;
    const nourritureBar: HTMLDivElement | null = document.getElementById(
      "nourriture-bar"
    ) as HTMLDivElement | null;
    const bonheurBar: HTMLDivElement | null = document.getElementById(
      "bonheur-bar"
    ) as HTMLDivElement | null;

    if (vieBar !== null && nourritureBar !== null && bonheurBar !== null) {
      vieBar.style.width = vie + "%";
      nourritureBar.style.width = nourriture + "%";
      bonheurBar.style.width = bonheur + "%";

      if (vie > 100) {
        vieBar.style.width = "100%";
      }
      if (nourriture > 100) {
        nourritureBar.style.width = "100%";
      }
      if (bonheur > 100) {
        bonheurBar.style.width = "100%";
      }
    }
  }
}

// Vérifier si le tamagotchi est mort
function checkGameOver(): void {
  if (vie === 0 && nourriture === 0 && bonheur === 0) {
    stopInterval();
    alert("Game Over!");
  }
}
const vieBar = document.getElementById("vie-bar") as HTMLDivElement;
const nourritureBar = document.getElementById(
  "nourriture-bar"
) as HTMLDivElement;
const bonheurBar = document.getElementById("bonheur-bar") as HTMLDivElement;

function updateBars(): void {
  vieBar.style.width = `${vie}%`;
  nourritureBar.style.width = `${nourriture}%`;
  bonheurBar.style.width = `${bonheur}%`;
}

nourrirButton.addEventListener("click", () => {
  nourrir();
  stopInterval();
  startInterval();
});

jouerButton.addEventListener("click", () => {
  jouer();
  stopInterval();
  startInterval();
});

soignerButton.addEventListener("click", () => {
  soigner();
  stopInterval();
  startInterval();
});

// Démarrer l'intervalle dès le chargement de la page
startInterval();
