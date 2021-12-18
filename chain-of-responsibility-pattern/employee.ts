import { Request } from './request';

export abstract class Employee {
  protected superior: Employee | null = null;
  protected handledLevel: number;

  constructor(level: number) {
    this.handledLevel = level;
  }

  public setSuperior(superior: Employee) {
    this.superior = superior;
  }

  public abstract handleRequest(request: Request): void;
}