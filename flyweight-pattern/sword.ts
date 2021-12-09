import { Diamond } from "./diamond";
import { Weapon } from "./weapon";

export class Sword extends Weapon {

  public showDiamond(): void {
    console.log('Show Diamond');
    this.diamonds.forEach((diamond: Diamond) => {
      console.log("Diamond: " + diamond.getName());
    })
  }
}