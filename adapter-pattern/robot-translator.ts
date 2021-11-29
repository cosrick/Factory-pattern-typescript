import { People } from "./interfaces";

export class RobotTranslator extends People {

  public introduce(): void {
    console.log('I am ' + this.getName());
  }

  public sayHello(): void {
    console.log('Hello Everyone!');
  }

  public sayBye(): void {
    console.log('Say GoodByeeea!');
  }
}