import { BadmintonRacketBuilder } from "./interfaces";
import { RacketFrameType, RacketHeadType } from "./racket";

export class YYBuilder extends BadmintonRacketBuilder {

  constructor() {
    super();
  }

  public buildStringType(stringName: string): BadmintonRacketBuilder {
    this.racket.setBadmintonString(stringName);
    return this;
  }

  public buildStringTension(stringTension: number): BadmintonRacketBuilder {
    this.racket.setStringTension(stringTension);
    return this;
  }

  public buildRacketHead(racketHead: RacketHeadType): BadmintonRacketBuilder {
    this.racket.setRacketHead(racketHead);
    return this;
  }

  public buildRacketFrame(racketFrame: RacketFrameType): BadmintonRacketBuilder {
    this.racket.setRacketFrame(racketFrame);
    return this;
  }

  public buildColor(color: string): BadmintonRacketBuilder {
    this.racket.setColor(color);
    return this;
  }
}