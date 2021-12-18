export class Request {
  private name: string;
  private level: number;

  constructor(name: string, level: number) {
    this.name =  name;
    this.level = level;
  }

  public getName(): string {
    return this.name;
  }

  public getLevel(): number {
    return this.level;
  }
}