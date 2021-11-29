export abstract class People {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public abstract sayHello(): void;
  public abstract sayBye(): void;
  public abstract introduce(): void;

  public getName(): string {
    return this.name;
  }
}