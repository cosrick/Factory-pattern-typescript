import { GameMemoto } from "./memoto";

export class GameOriginator {
  private name: string;
  private level: number;
  private weapon: string;
  private skill: string;

  constructor() {
    this.name = 'Rick';
    this.level = 0;
    this.weapon = "none";
    this.skill = "none";
  }

  public restore(gameMemoto: GameMemoto): void {
    this.name = gameMemoto.getName();
    this.level = gameMemoto.getLevel();
    this.weapon = gameMemoto.getWeapon();
    this.skill = gameMemoto.getSkill();
  }

  public save(): GameMemoto {
    return new GameMemoto(this.name, this.level, this.weapon, this.skill);
  }

  // public printDescription(): void {
  //   console.log('Name: ' + this.name);
  //   console.log('Level: ' + this.level);
  //   console.log('Weapon: ' + this.weapon);
  //   console.log('Skill: ' + this.skill);
  // }

  public setName(name: string): void {
    this.name = name;
  }

  public setLevel(level: number): void {
    this.level = level;
  }

  public setWeapon(weapon: string): void {
    this.weapon = weapon;
  }

  public setSkill(skill: string): void {
    this.skill = skill;
  }
}