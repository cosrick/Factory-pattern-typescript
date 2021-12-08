export class GameMemoto {

  private name: string;
  private level: number;
  private weapon: string;
  private skill: string;

  constructor(name: string, level: number, weapon: string, skill: string) {
    this.name = name;
    this.level = level;
    this.weapon = weapon;
    this.skill = skill;
  }

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

  public getName(): string {
    return this.name;
  }

  public getLevel(): number {
    return this.level;
  }

  public getWeapon(): string {
    return this.weapon;
  }

  public getSkill(): string {
    return this.skill;
  }

  public printDescription(): void {
    console.log('Name: ' + this.name);
    console.log('Level: ' + this.level);
    console.log('Weapon: ' + this.weapon);
    console.log('Skill: ' + this.skill);
    console.log('-------------');
  }
}