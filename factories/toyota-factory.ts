import { Car, Factory } from "../interface";
import { Toyota } from "../products";

export class ToyotaFactory implements Factory {

  public produceCar(license: string): Car {
    return new Toyota(license);
  }
}