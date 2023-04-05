import { Tamagotchi } from "../models/Tamagotchi";

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

const progressBarFood: Element | null = document.querySelector(".Barre_food");
const progressBarDrink: Element | null = document.querySelector(".Barre_drink");
const progressBarWeapons: Element | null =
  document.querySelector(".Barre_weapons");

// Function principal

groupe_de_perso.forEach((perso, index) => {
  if (perso) {
    perso.addEventListener("click", () => {
      choix_perso?.classList.add("hide");
      switch (index) {
        case 0:
          section_perso_1?.classList.remove("hide");
          break;
        case 1:
          section_perso_2?.classList.remove("hide");
          break;
        case 2:
          section_perso_3?.classList.remove("hide");
          break;
        default:
          break;
      }
    });
  }
});
