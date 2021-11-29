import { People } from "./interfaces";

export class Human {
  private people: People;

  constructor(people: People) {
    this.people = people;
  }

  public sayHello(): void {
    this.people.sayHello();
  }

  public introduce(): void {
    this.people.introduce();
  }

  public sayBye(): void {
    this.people.sayBye();
  }
}