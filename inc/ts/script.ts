// Choisir son personnage

const perso_1: Element | null = document.querySelector("#choix_perso_1");
const perso_2: Element | null = document.querySelector("#choix_perso_2");
const perso_3: Element | null = document.querySelector("#choix_perso_3");

// Regroupe les personnages

const groupe_de_perso: (Element | null)[] = [perso_1, perso_2, perso_3];

// Toutes les sections

const choix_perso: Element | null = document.querySelector(
  ".section_choix_personnage"
);

const section_perso_1: Element | null = document.querySelector(
  ".section_personnage_1"
);
const section_perso_2: Element | null = document.querySelector(
  ".section_personnage_2"
);
const section_perso_3: Element | null = document.querySelector(
  ".section_personnage_3"
);

// Sélection des éléments HTML nécessaires dans le document

const choixPersoSection = document.querySelector(
  ".section_choix_personnage"
) as HTMLElement;
const sectionPerso1 = document.querySelector(
  ".section_personnage_1"
) as HTMLElement;
const sectionPerso2 = document.querySelector(
  ".section_personnage_2"
) as HTMLElement;
const sectionPerso3 = document.querySelector(
  ".section_personnage_3"
) as HTMLElement;
const nomPersoSpan = document.getElementById("nom_du_perso") as HTMLSpanElement;
const foodContainers = document.querySelectorAll(
  ".container_food"
) as NodeListOf<HTMLElement>;
const terminalHistory = document.getElementById(
  "terminal-history"
) as HTMLElement;
const terminalInput = document.getElementById("input") as HTMLInputElement;

// Le terminal de commande

// Permet de selectionné le personnage souhaité

groupe_de_perso.forEach((perso, index) => {
  if (perso) {
    // Vérifie que l'élément n'est pas null
    perso.addEventListener("click", () => {
      // Afficher quelque chose de différent pour chaque élément
      switch (index) {
        case 0:
          section_perso_1?.classList.remove("hide");
          choix_perso?.classList.add("hide");
          break;
        case 1:
          section_perso_2?.classList.remove("hide");
          choix_perso?.classList.add("hide");
          break;
        case 2:
          section_perso_3?.classList.remove("hide");
          choix_perso?.classList.add("hide");
          break;
        default:
          console.log("Erreur");
          break;
      }
    });
  }
});
