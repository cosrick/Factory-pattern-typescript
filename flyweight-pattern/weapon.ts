import { Diamond } from "./diamond";

export abstract class Weapon {
  protected diamonds: Diamond[] = [];

  public addDiamond(diamond: Diamond): void {
    this.diamonds.push(diamond);
  }

  public abstract showDiamond(): void;
}