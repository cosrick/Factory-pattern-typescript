import { ITransportStrategy } from "../interfaces";

export class TaxiMode implements ITransportStrategy {

  public calculateCost(distance: number): void {

    console.log('Distance: ' + distance);
    if (distance < 50) {
      console.log('Estimated cost: ' + distance * 10);
    } else {
      console.log('Estimated cost: ' + distance * 20);
    }
  }
}