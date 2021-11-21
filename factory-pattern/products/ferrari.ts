import { Car } from "../interface/car";

export enum FerrariSpeedUpMode {
  SLOW = 'slow',
  MEDIUM = 'medium',
  FAST = 'fast',
}

export class Ferrari extends Car {

  // Mechanism for this type of car
  constructor(license: string) {
    super({
      license: license,
      maxSpeed: 500,
      breakSpeed: 10,
      accelerateSpeed: 20,
      accelerateTime: 3
    })
  }
  
  public stop() {
    if (this.currentSpeed == 0) {
      console.log('This car has stoped');
    } else {
      const breakTime = this.currentSpeed / this.breakSpeed;
      this.currentPosition = this.currentPosition + 0.5 * this.currentSpeed * breakTime;
      this.currentSpeed = 0;
    }
    return;

  }

  public speedUp(mode: FerrariSpeedUpMode) {
    
    if (this.currentSpeed == 0) {
      console.log('You need to launch first');
    } else if (this.currentSpeed == this.maxSpeed) {
      console.log('You already at the highest speed');
    }

    const previoudSpeed = this.currentSpeed;
    let increasedSpeed: number;

    switch(mode) {
      case FerrariSpeedUpMode.SLOW: {
        increasedSpeed = this.accelerateSpeed;
        break;
      }
      case FerrariSpeedUpMode.MEDIUM: {
        increasedSpeed = this.accelerateSpeed * 2;
        break;
      }
      case FerrariSpeedUpMode.FAST: {
        increasedSpeed = this.accelerateSpeed * 3;
        break;
      }
      default: {
        throw new Error('Unexpected error');
      }
    }

    let currentSpeed: number;
    let accelerateTime: number;
    
    if (this.maxSpeed >= previoudSpeed + increasedSpeed) {
      currentSpeed = previoudSpeed + increasedSpeed;
      accelerateTime = this.accelerateTime;
    } else {
      currentSpeed = this.maxSpeed;
      accelerateTime = (this.maxSpeed - previoudSpeed) / increasedSpeed;
    }

    this.currentPosition = this.currentPosition + (previoudSpeed + currentSpeed) * accelerateTime / 2;
    this.currentPosition = this.currentPosition + currentSpeed * (this.accelerateTime - accelerateTime);
    this.currentSpeed = currentSpeed;
  }
}