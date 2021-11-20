export enum TimeUnit {
  HOUR = 'hour',
  MINUTE = 'minute',
}

export interface MoveProps {
  readonly time: number;
  readonly unit: TimeUnit;
}

export interface CarProps{
  readonly license: string;
  readonly maxSpeed: number;
  readonly breakSpeed: number;
  readonly accelerateSpeed: number;
  readonly accelerateTime: number;
}


export abstract class Car {

  /**
   * License number for this car
   */
  private license: string;

  /**
   * The maximum speed for this car
   */
  protected maxSpeed: number;

  /**
   * The current speed for this car
   */
  protected currentSpeed: number;

  /**
   * The current position of this car
   */
  protected currentPosition: number;

  /**
   * How fast the speed would reduce when break
   */
  protected breakSpeed: number;

  /**
   * How fast the speed would increase when speedup
   */
   protected accelerateSpeed: number;

   /**
   * How long the car would take to speed up
   */
  protected accelerateTime: number;
   

  constructor(props: CarProps) {
    this.license = props.license;
    this.maxSpeed = props.maxSpeed;
    this.currentPosition = 0;
    this.currentSpeed = 0;
    this.breakSpeed = props.breakSpeed;
    this.accelerateSpeed = props.accelerateSpeed;
    this.accelerateTime = props.accelerateTime;
  }

  public getLicense(): string {
    return this.license;
  };

  public getCurrentPosition(): number {
    return this.currentPosition;
  }

  public getCurrentSpeed(): number {
    return this.currentSpeed;
  }

  public getMaxSpeed(): number {
    return this.maxSpeed;
  }

  public getAccelerateSpeed(): number {
    return this.accelerateSpeed;
  }

  public getAccelerateTime(): number {
    return this.accelerateTime;
  }

  public getBreakSpeed(): number {
    return this.breakSpeed;
  }

  /**
   * Move this car forward
   * @param props how long this car would move
   */
  public moveForward(props: MoveProps) {

    if (this.currentSpeed == 0) {
      console.log('You have to launch first');
      return;
    }
    
    switch(props.unit) {
      case TimeUnit.HOUR: {
        this.currentPosition = this.currentPosition + this.currentSpeed * props.time * 60;
        break;
      }
      case TimeUnit.MINUTE: {
        this.currentPosition = this.currentPosition + this.currentSpeed;
        break;
      }
      default: throw new Error('Unaccepetable unit');
    }
  }

  /**
   * Move this car backward
   * @param props how long this car would move
   */
  public moveBackward(props: MoveProps) {
    
    if (this.currentSpeed == 0) {
      console.log('You have to launch first');
      return;
    }

    switch(props.unit) {
      case TimeUnit.HOUR: {
        this.currentPosition = this.currentPosition - this.currentSpeed * props.time * 60;
        break;
      }
      case TimeUnit.MINUTE: {
        this.currentPosition = this.currentPosition - this.currentSpeed;
        break;
      }
      default: throw new Error('Unaccepetable unit');
    }
  }

  public launch() {
    if (this.currentSpeed > 0) {
      console.log('This car has launched');
    } else {
      this.currentSpeed = this.currentSpeed + 10;
    }
    return;
  }

   /**
   * Implement by child class, since the cars from different brands would have different stop pattern
   */
    public abstract stop(): void;
  /**
   * Implement by child class, since the cars from different brands would have different speed up pattern
   */
  public abstract speedUp(_mode: any): void;
  

}