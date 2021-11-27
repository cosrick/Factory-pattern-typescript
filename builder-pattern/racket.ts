export class BadmintonRacket {
  
  private badmintonString: string = '';
  private stringTension: number = 20;
  private racketHead: RacketHeadType = RacketHeadType.THIN;
  private color: string = 'black';
  private rackerFrame: RacketFrameType = RacketFrameType.EGG;


  constructor() {}

  public setBadmintonString(stringName: string): void {
    this.badmintonString = stringName;
  }

  public setRacketHead(racketHead: RacketHeadType): void {
    this.racketHead = racketHead;
  }

  public setStringTension(stringTension: number): void {
    this.stringTension = stringTension;
  }
  
  public setColor(color: string): void {
    this.color = color;
  } 

  public setRacketFrame(racketFrame: RacketFrameType): void {
    this.rackerFrame = racketFrame;
  }

  public getBadmintonString(): string {
    return this.badmintonString;
  }

  public getRacketHead(): RacketHeadType {
    return this.racketHead;
  }

  public getStringTension(): number {
    return this.stringTension;
  }

  public getColor(): string {
    return this.color;
  }

  public getRacketFrame(): RacketFrameType {
    return this.rackerFrame;
  }

  public printDescription(): void {
    console.log('Information for racket:');
    console.log('String Type:' + this.badmintonString);
    console.log('String Tension:' + this.stringTension);
    console.log('Racket Head:' + this.racketHead);
    console.log('Racket Frame:' + this.rackerFrame);
    console.log('Color:' + this.color);
    console.log('-----------------------');
  }

  
}

export enum RacketHeadType {
  HEAVY = 'hard',
  MEDIUM = 'medium',
  THIN = 'thin',
}

export enum RacketFrameType {
  EGG = 'egg',
  FLAT = 'flat',
  MIX = 'mix',
}