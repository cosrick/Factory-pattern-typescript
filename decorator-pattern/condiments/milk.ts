import { Condiment, Drink } from "../interfaces";

export class Milk extends Condiment {

  private drink: Drink;

  constructor(drink: Drink) {
    super();
    this.drink = drink;
  }

  public getName(): string {
    return `${this.drink.getName()} + Milk`;
  }

  public getCost(): number {
    return this.drink.getCost() + 10;
  }
}