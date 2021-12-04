import { Prototype } from "./prototype";

export class Drink implements Prototype<Drink> {

  private drinkName: string;
  private ice: number;
  private sugar: number;

  constructor(drinkName: string, ice: number, sugar: number) {
    this.drinkName = drinkName;
    this.ice = ice;
    this.sugar = sugar;
  }

  public copy(): Drink {
    return new Drink(this.drinkName, this.ice, this.sugar);
  }
}