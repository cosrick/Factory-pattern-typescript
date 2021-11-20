enum TimeUnit {
  HOUR = 'hour',
  MINUTE = 'minute',
}

interface MoveProps {
  readonly time: number;
  readonly unit: TimeUnit;
}

export interface CarProps{
  readonly license: string;
  readonly maxSpeed: number;
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

  constructor(props: CarProps) {
    this.license = props.license;
    this.maxSpeed = props.maxSpeed;
    this.currentPosition = 0;
    this.currentSpeed = 0;
  }

  public getLicense(): string {
    return this.license;
  };

  public getCurrentPosition(): number {
    return this.currentPosition;
  }

  public getMaxSpeed(): number {
    return this.maxSpeed;
  }

  /**
   * Move this car forward
   * @param props how long this car would move
   */
  public moveForward(props: MoveProps) {
    switch(props.unit) {
      case TimeUnit.HOUR: {
        this.currentPosition = this.currentPosition + this.currentSpeed * props.time * 60;
      }
      case TimeUnit.MINUTE: {
        this.currentPosition = this.currentPosition + this.currentSpeed;
      }
      default: throw new Error('Unaccepetable unit');
    }
  }

  /**
   * Move this car backward
   * @param props how long this car would move
   */
  public moveBackward(props: MoveProps) {
    switch(props.unit) {
      case TimeUnit.HOUR: {
        this.currentPosition = this.currentPosition - this.currentSpeed * props.time * 60;
      }
      case TimeUnit.MINUTE: {
        this.currentPosition = this.currentPosition - this.currentSpeed;
      }
      default: throw new Error('Unaccepetable unit');
    }
  }

  /**
   * Implement by child class, since the cars from different brands would have different launch pattern
   */
  public abstract launch(): void;
  /**
   * Implement by child class, since the cars from different brands would have different speed up pattern
   */
  public abstract speedUp(): void;

}