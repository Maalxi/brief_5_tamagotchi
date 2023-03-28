import { Terminal } from 'xterm';

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

// Le terminal de commande 

const term = new Terminal();

term.open(document.querySelector('.terminal') as HTMLElement);

term.onData((data: string) => {
  // Vérifiez si la commande est autorisée
  if (data === 'commande1') {
    // Exécutez la commande 1
    term.write('Vous avez exécuté la commande 1.\r\n');
  } else if (data === 'commande2') {
    // Exécutez la commande 2
    term.write('Vous avez exécuté la commande 2.\r\n');
  } else if (data === 'commande3') {
    // Exécutez la commande 3
    term.write('Vous avez exécuté la commande 3.\r\n');
  } else {
    // La commande n'est pas autorisée
    term.write('Commande non autorisée.\r\n');
  }
});

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
