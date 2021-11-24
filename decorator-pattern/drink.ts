export abstract class Drink {
  private drinkName: string;

  constructor() {
    this.drinkName = 'Unknown';
  }

  public getName(): string {
    return this.drinkName;
  }

  public abstract getCost(): number;
}