import { User } from "./user";

export interface Mediator {

  addUser(user: User): void;
  send(message: string): void;
}