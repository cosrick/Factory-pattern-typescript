import { Mediator } from "./mediator";
import { User } from "./user";

export class Chatroom implements Mediator {

  private userList: User[];

  constructor() {
    this.userList = [];
  }

  public addUser(user: User): void {
    this.userList.push(user);
    user.setMediator(this);
  }

  public send(message: string): void {
    for (const user of this.userList) {
      user.receive(message);
    }
  }
}

export class Student extends User {

  public send(message: string): void {
    console.log('-------------');
    console.log('Send from ' + this.name);
    console.log('------');
    this.mediator?.send(message);
  }

  public receive(message: string): void {
    console.log('I am ' + this.name);
    console.log('Got message: ' + message);
  }
}

export class Teacher extends User {

  public send(message: string): void {
    console.log('-------------');
    console.log(`Teacher ${this.name} announce`);
    console.log('------');
    this.mediator?.send(message);
  }

  public receive(message: string): void {
    console.log(`Who send this message: ${message}?`);
  }
  
}