// Définissez une classe pour vos progress bars
export class Tamagotchi {
  food: number = 10000;
  drink: number = 10000;
  weapons: number = 10000;

  IncrementFood(value: number) {
    if (this.food + value <= 10000) {
      this.food += value;
    }
  }
  IncrementDrink(value: number) {
    if (this.drink + value <= 10000) {
      this.drink += value;
    }
  }
  IncrementWeapons(value: number) {
    if (this.weapons + value <= 10000) {
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
