export class Student {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public intro(): void {
    console.log('My name is ' + this.name);
  }
}