import { Prototype } from "./prototype";

export class Hamburger implements Prototype<Hamburger> {

  private meat: string;
  private vegetable: string;
  private bread: string;

  constructor(meat: string, vegetable: string, bread: string) {
    this.meat = meat;
    this.vegetable = vegetable;
    this.bread = bread;
  }

  public copy(): Hamburger {
    return new Hamburger(this.meat, this.vegetable, this.bread);
  }

}