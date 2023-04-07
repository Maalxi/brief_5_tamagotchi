import { Tamagotchi } from "../models/Tamagotchi";
import { Aragorn } from "../models/Aragorn";
import { Balrog } from "../models/Balrog";
import { Smeagol } from "../models/Smeagol";

const MyAragorn = new Aragorn();
const MyBalrog = new Balrog();
const MySmeagol = new Smeagol();

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

// Ajout des buttons +

const ButtonFood = document.querySelectorAll(".emoji_0");
const ButtonDrink = document.querySelectorAll(".emoji_1");
const ButtonWeapon = document.querySelectorAll(".emoji_2");

// Ajout des progress bar

const progressBarFood: NodeListOf<Element> =
  document.querySelectorAll(".Barre_food");
const progressBarDrink: NodeListOf<Element> =
  document.querySelectorAll(".Barre_drink");
const progressBarWeapons: NodeListOf<Element> =
  document.querySelectorAll(".Barre_weapons");

// Ajout de l'input du terminal

const input = document.querySelectorAll<HTMLInputElement>(".terminal-input");

// Ajout button retour quand dans section personnage

const ButtonRetour = document.querySelectorAll('.buttons_retour')

// Function principal

function animate() {
  if (!gameOver) {
    decrease(MyAragorn);
    decrease(MyBalrog);
    decrease(MySmeagol);
    checkValues();
    requestAnimationFrame(animate);
  }
}

let gameOver = false;

groupe_de_perso.forEach((perso, index) => {
  if (perso) {
    perso.addEventListener("click", () => {
      choix_perso?.classList.add("hide");
      switch (index) {
        case 0:
          section_perso_1?.classList.remove("hide");
          setInterval(() => {
            if (perso_1 !== null && !gameOver) {
              requestAnimationFrame(animate);
            }
          }, 1000);
          break;
        case 1:
          section_perso_2?.classList.remove("hide");
          setInterval(() => {
            if (perso_2 !== null && !gameOver) {
              requestAnimationFrame(animate);
            }
          }, 1000);
          break;
        case 2:
          section_perso_3?.classList.remove("hide");
          setInterval(() => {
            if (perso_3 !== null && !gameOver) {
              requestAnimationFrame(animate);
            }
          }, 1000);
          break;
        default:
          break;
      }
    });
  }
});

// Vérifie si toutes les valeurs sont à 0

function checkValues() {
  const tamagotchis = [MyAragorn, MyBalrog, MySmeagol];

  let gameOver = false;

  tamagotchis.forEach((element) => {
    if (
      element.food == 0 &&
      element.drink == 0 &&
      element.weapons == 0 &&
      gameOver !== true
    ) {
      gameOver = true;
    }
  });
  if (gameOver) {
    // Affiche la pop-up
    const popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerHTML = `
      <div class="popup-content">
        <h2>Toutes les valeurs sont à 0</h2>
        <p>Le jeu va se relancer</p>
        <button onclick="window.location.reload()">OK</button>
      </div>
    `;
    document.body.appendChild(popup);
  }
}

ButtonFood.forEach((element) => {
  element.addEventListener("click", () => {
    MyAragorn.IncrementFood(1000);
    MyBalrog.IncrementFood(1000);
    MySmeagol.IncrementFood(1000);
  });
});

ButtonDrink.forEach((element) => {
  element.addEventListener("click", () => {
    MyAragorn.IncrementDrink(1000);
    MyBalrog.IncrementDrink(1000);
    MySmeagol.IncrementDrink(1000);
  });
});

ButtonWeapon.forEach((element) => {
  element.addEventListener("click", () => {
    MyAragorn.IncrementWeapons(1000);
    MyBalrog.IncrementWeapons(1000);
    MySmeagol.IncrementWeapons(1000);
  });
});

// Fonction pour diminuer la nourriture de tous les personnages

function decrease(Tamagotchi) {
  Tamagotchi.DecrementFood(0.5);
  Tamagotchi.DecrementDrink(0.5);
  Tamagotchi.DecrementWeapons(0.5);

  // Mettre à jour les progress bar
  if (progressBarFood && progressBarDrink && progressBarWeapons) {
    progressBarFood.forEach((element) => {
      element.setAttribute("value", Tamagotchi.food.toString());
    });
    progressBarDrink.forEach((element) => {
      element.setAttribute("value", Tamagotchi.drink.toString());
    });
    progressBarWeapons.forEach((element) => {
      element.setAttribute("value", Tamagotchi.weapons.toString());
    });
  }
}

input.forEach((element) => {
  element.addEventListener("keyup", (event: KeyboardEvent) => {
    if (event.keyCode === 13) {
      const value = element.value.toLowerCase().trim();
      if (value === "food") {
        MyAragorn.IncrementFood(1000);
        MyBalrog.IncrementFood(1000);
        MySmeagol.IncrementFood(1000);
      } else if (value === "drink") {
        MyAragorn.IncrementDrink(1000);
        MyBalrog.IncrementDrink(1000);
        MySmeagol.IncrementDrink(1000);
      } else if (value === "weapon") {
        MyAragorn.IncrementWeapons(1000);
        MyBalrog.IncrementWeapons(1000);
        MySmeagol.IncrementWeapons(1000);
      }
      element.value = "";
    }
  });
});


ButtonRetour.forEach((button) => {
  button.addEventListener('click', () => {
    location.reload();
  });
});