import { ITransportStrategy } from "../interfaces";

export class TrainMode implements ITransportStrategy {

  public calculateCost(distance: number): void {

    console.log('Distance: ' + distance);
    console.log('Estimated cost: ' + distance);
  }
}