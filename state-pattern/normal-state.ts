import { State } from "./state";

export class NormalState extends State {

  public printPrice(productName: string): void {
    for (const product of this.menu) {
      if (product.productName === productName) {
        console.log(`${product.productName}: ${product.price}`);
        return;
      }
    }
  }
}