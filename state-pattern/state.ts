export abstract class State {

  protected menu: Product[];

  constructor() {
    this.menu = [
      {
        productName: 'GreenTea',
        price: 35,
      },
      {
        productName: 'BlackTea',
        price: 35,
      },
      {
        productName: 'Coffee',
        price: 40,
      },
      {
        productName: 'BubbleGreenTea',
        price: 45,
      },
      {
        productName: 'BubbleBlackTea',
        price: 45,
      },
      {
        productName: 'MilkGreenTea',
        price: 55,
      },
      {
        productName: 'MilkTea',
        price: 55,
      },
    ]
  }

  public abstract printPrice(productName: string): void; 
}

export interface Product {
  readonly productName: string;
  readonly price: number;
}