import { Car } from "./car";

export interface Factory {
  produceCar(_license: string): Car;
}