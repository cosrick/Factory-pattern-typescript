export abstract class Drink {
  
  protected drinkName: string;

  constructor(drinkName?: string) {
    this.drinkName = drinkName ?? 'Unknown Drink';
  }

  public getName(): string {
    return this.drinkName;
  }

  public abstract getCost(): number;
}