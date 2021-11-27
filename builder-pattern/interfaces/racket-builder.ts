import { BadmintonRacket, RacketFrameType, RacketHeadType } from "../racket";

export abstract class BadmintonRacketBuilder {

  protected racket: BadmintonRacket;

  constructor() {
    this.racket = new BadmintonRacket();
  }

  abstract buildStringType(stringName: string): BadmintonRacketBuilder;
  abstract buildStringTension(stringTension: number): BadmintonRacketBuilder;
  abstract buildRacketHead(racketHead: RacketHeadType): BadmintonRacketBuilder;
  abstract buildRacketFrame(racketFrame: RacketFrameType): BadmintonRacketBuilder;
  abstract buildColor(color: string): BadmintonRacketBuilder;

  public build(): BadmintonRacket {
    return this.racket;
  }
}