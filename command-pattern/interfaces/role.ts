export abstract class IRole {

  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  protected printName(): void {
    console.log('I am ' + this.name);
  }

  public abstract basicAttack(): void;

  public abstract skill1(): void;

  public abstract skill2(): void;

}