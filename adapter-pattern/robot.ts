export class Robot {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public sayHello(): void {
    console.log('11101010111101000010101010');
  }

  public introduce(): void {
    console.log('00000101010001111101010100 ' + this.name);
  }

  public sayBye(): void {
    console.log('01010101010101011100101010');
  }

  public getName(): string {
    return this.name;
  }
}