import { Mediator } from "./mediator";

export abstract class User {

  protected name: string;
  protected mediator?: Mediator;

  constructor(name: string) {
    this.name = name;
  }

  public setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }
  abstract send(message: string): void;
  abstract receive(message: string): void;

}