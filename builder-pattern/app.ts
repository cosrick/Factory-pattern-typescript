import { BadmintonRacket, RacketFrameType, RacketHeadType } from "./racket";
import { YYBuilder } from "./yy-builder";
import { YYSeller } from "./yy-seller";

const yyBuilder = new YYBuilder();
const yySeller = new YYSeller(yyBuilder);

const myPowerRacket: BadmintonRacket = yySeller.powerType();
myPowerRacket.printDescription();

const mySpeedRacket: BadmintonRacket = yySeller.speedType();
mySpeedRacket.printDescription();

const myCustomizedRacket: BadmintonRacket = yyBuilder
  .buildStringType('BG66UM')
  .buildStringTension(23)
  .buildRacketHead(RacketHeadType.THIN)
  .buildRacketFrame(RacketFrameType.MIX)
  .buildColor('pink')
  .build();
myCustomizedRacket.printDescription();