import { Drink } from "./drink";
import { Hamburger } from "./hamburger";
import { Prototype } from "./prototype";

export class MealSet implements Prototype<MealSet> {

  private hamburger: Hamburger;
  private drink: Drink;
  private side: string;
  private sauce: string;

  constructor(hamburger: Hamburger, drink: Drink, side: string, sauce: string) {
    this.hamburger = hamburger;
    this.drink = drink;
    this.side = side;
    this.sauce = sauce;
  }

  public setSide(side: string): void {
    this.side = side;
  }

  public copy(): MealSet {
    return new MealSet(this.hamburger.copy(), this.drink.copy(), this.side, this.sauce);
  }

}