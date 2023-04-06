// Définissez une classe pour vos progress bars
export class Tamagotchi {
  food: number = 700;
  drink: number = 700;
  weapons: number = 700;

  IncrementFood(value: number) {
    if (this.food + value <= 100) {
      this.food += value;
    }
  }
  IncrementDrink(value: number) {
    if (this.drink + value <= 100) {
      this.drink += value;
    }
  }
  IncrementWeapons(value: number) {
    if (this.weapons + value <= 100) {
      this.weapons += value;
    }
  }
  DecrementFood(value: number) {
    if (this.food - value >= 0) {
    this.food -= value;
    }
  }
  DecrementDrink(value: number) {
    if (this.drink - value >= 0) {
    this.drink -= value;
    }
  }
  DecrementWeapons(value: number) {
    if (this.weapons - value >= 0) {
    this.weapons -= value;
    }
  }
}
