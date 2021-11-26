import { IRole } from "../interfaces";

export class IronMan extends IRole {

  constructor() {
    super('iron-man');
  }

  public basicAttack(): void {
    this.printName();
    console.log('basic attack');
    console.log('Damage 10');
    console.log('----------');
  }

  public skill1(): void {
    this.printName();
    console.log('skill 1');
    console.log('Damage 15');
    console.log('----------');
  }

  public skill2(): void {
    this.printName();
    console.log('skill 2');
    console.log('Damage 20');
    console.log('----------');
  }

}