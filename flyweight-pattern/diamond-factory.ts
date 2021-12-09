import { Diamond } from "./diamond";

export class DiamondFactory {
  private diamondStorage: { [key: string]: Diamond } = {};

  public getDiamond(diamondName: string): Diamond {
    if (!(diamondName in this.diamondStorage)) {
      this.diamondStorage[diamondName] = new Diamond(diamondName);
    }
    return this.diamondStorage[diamondName];
  }

  public printInStock(): void {
    console.log('Print in stock');
    for (const name in this.diamondStorage ) {
      console.log(this.diamondStorage[name].getName());
    }
    console.log('-----------');
  }
}