import { State } from "./state";

export class MilkSaleState extends State {
  public printPrice(productName: string): void {
    for (const product of this.menu) {
      if (product.productName === productName) {
        if (productName.indexOf('Milk') >= 0) {
          console.log(`${product.productName}: ${product.price - 5}`);
        } else {
          console.log(`${product.productName}: ${product.price}`);
        }
        return;
      }
    }
  }
}