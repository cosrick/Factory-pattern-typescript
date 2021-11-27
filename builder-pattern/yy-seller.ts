import { BadmintonRacket, RacketFrameType, RacketHeadType } from "./racket";
import { YYBuilder } from "./yy-builder";

export class YYSeller {

  private builder: YYBuilder;

  constructor(builder: YYBuilder) {
    this.builder = builder;
  }

  public powerType(): BadmintonRacket {
    return this.builder
    .buildStringType('BG66F')
    .buildStringTension(26)
    .buildRacketHead(RacketHeadType.HEAVY)
    .buildRacketFrame(RacketFrameType.EGG)
    .buildColor('black')
    .build();
  }

  public speedType(): BadmintonRacket {
    return this.builder
    .buildStringType('BG66UM')
    .buildStringTension(24)
    .buildRacketHead(RacketHeadType.THIN)
    .buildRacketFrame(RacketFrameType.FLAT)
    .buildColor('red')
    .build();
  }
}