import { GameMemoto } from "./memoto";

export class GameCareTaker {

  private static MAX_LEN = 15;
  private records: GameMemoto[] = [];

  public save(gameMemoto: GameMemoto): void {
    if (this.records.length >= GameCareTaker.MAX_LEN) {
      this.records.shift();
    }
    this.records.push(gameMemoto);
  }

  public getSave(index: number): GameMemoto {
    return this.records[index];
  }
}