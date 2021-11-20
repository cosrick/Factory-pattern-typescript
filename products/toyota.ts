import { Car } from "../interface/car";

export enum ToyotaSpeedUpMode {
  SLOW = 'slow',
  MEDIUM = 'medium',
}

export class Toyota extends Car {

  // Mechanism for this type of car
  constructor(license: string) {
    super({
      license: license,
      maxSpeed: 200,
      breakSpeed: 5,
      accelerateSpeed: 10,
      accelerateTime: 4
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

  public speedUp(mode: ToyotaSpeedUpMode) {
    
    if (this.currentSpeed == 0) {
      console.log('You need to launch first');
    } else if (this.currentSpeed == this.maxSpeed) {
      console.log('You already at the highest speed');
    }

    const previoudSpeed = this.currentSpeed;
    let increasedSpeed: number;

    switch(mode) {
      case ToyotaSpeedUpMode.SLOW: {
        increasedSpeed = this.accelerateSpeed;
        break;
      }
      case ToyotaSpeedUpMode.MEDIUM: {
        increasedSpeed = this.accelerateSpeed * 2;
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