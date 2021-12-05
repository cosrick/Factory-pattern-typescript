import { State } from "./state";

export class DrinkShop {

  private state: State;

  constructor(state: State) {
    this.state = state;
  }

  public setState(state: State): void {
    this.state = state;
  }

  public searchPrice(productName: string) {
    this.state.printPrice(productName);
  }
}