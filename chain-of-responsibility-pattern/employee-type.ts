import { Employee } from "./employee";
import { Request } from './request';

export class Staff extends Employee {

  constructor() {
    super(0);
  }

  public handleRequest(request: Request): void {
    if (request.getLevel() <= this.handledLevel) {
      console.log('I am staff');
      console.log(`I can handle this request: ${request.getName()}`);
    } else {
      if (!this.superior) {
        console.log('No one can do this');
      } else {
        
        console.log('I am staff. I can\'t handle it. Let me ask someone');
        this.superior.handleRequest(request);
      }
    }
  }
}

export class Manager extends Employee {

  constructor() {
    super(100);
  }

  public handleRequest(request: Request): void {
    if (request.getLevel() <= this.handledLevel) {
      console.log('I am manager');
      console.log(`I can handle this request: ${request.getName()}`);
    } else {
      if (!this.superior) {
        console.log('No one can do this');
      } else {
        console.log('I am manager. I can\'t handle it. Let me ask someone');
        this.superior.handleRequest(request);
      }
    }
  }
}

export class Boss extends Employee {

  constructor() {
    super(Infinity);
  }

  public handleRequest(request: Request): void {
    if (request.getLevel() <= this.handledLevel) {
      console.log('I am Boss');
      console.log(`Only me can handle this request: ${request.getName()} ?`);
    }
  }
}