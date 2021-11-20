import { Car } from './interface/car';
import { Ferrari, Toyota } from './products';

export enum CarBrand {
  FERRARI = 'ferrari',
  TOYOTA = 'toyota',
}

export class CarFactory{
  public produceCar(brand: CarBrand, license: string): Car {
    switch(brand) {
      case CarBrand.FERRARI: return new Ferrari(license);
      case CarBrand.TOYOTA: return new Toyota(license);
      default: throw new Error('We don\'t produce this type of car');
    }
  }
}