// Définissez une classe pour vos progress bars
export class Tamagotchi {
  private value: number;
  private max: number;

  constructor(max: number) {
    this.max = max;
    this.value = max;
  }

  decrease() {
    if (this.value > 0) {
      this.value -= 5;
    }
  }

  increase() {
    if (this.value < this.max) {
      this.value += 5;
    }
  }

  // Ajoutez d'autres méthodes pour obtenir la valeur actuelle et la valeur maximale, etc.
}