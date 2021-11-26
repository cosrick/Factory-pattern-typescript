import { ICommand } from "./interfaces";

export class Invoker {
  private commands: ICommand[];

  constructor() {
    this.commands = [];
  }

  private resetCommand(): void {
    this.commands = [];
  }

  public addCommand(command: ICommand): void {
    this.commands.push(command);
  }

  public invoke(): void {
    if (this.commands.length == 0) {
      console.log('No command to run');
    } else {
      for (const command of this.commands) {
        command.execute();
      }
      this.resetCommand();
    }
  }
}