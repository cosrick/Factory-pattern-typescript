import { Car, Factory } from "../interface";
import { Ferrari } from "../products";

export class FerrariFactory implements Factory {
  
  public produceCar(license: string): Car {
    return new Ferrari(license);
  }
}