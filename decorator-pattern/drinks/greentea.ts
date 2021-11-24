import { Drink } from "../interfaces";

export class Greentea extends Drink {

  constructor() {
    super('greentea');
  }

  public getCost(): number {
    return 30;
  }
}