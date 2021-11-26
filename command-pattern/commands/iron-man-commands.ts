import { ICommand } from "../interfaces/command";
import { IronMan } from "../roles";

export class IronManBasicAttack implements ICommand {
  private role: IronMan;

  constructor(role: IronMan) {
    this.role = role;
  }

  public execute(): void {
    this.role.basicAttack();
  }
}

export class IronManSkill1 implements ICommand {
  private role: IronMan;

  constructor(role: IronMan) {
    this.role = role;
  }

  public execute(): void {
    this.role.skill1();
  }
}

export class IronManSkill2 implements ICommand {
  private role: IronMan;

  constructor(role: IronMan) {
    this.role = role;
  }

  public execute(): void {
    this.role.skill2();
  }
}