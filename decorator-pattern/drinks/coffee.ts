import { Drink } from "../interfaces";

export class Coffee extends Drink {

  constructor() {
    super('cofffee');
  }

  public getCost(): number {
    return 60;
  }
}