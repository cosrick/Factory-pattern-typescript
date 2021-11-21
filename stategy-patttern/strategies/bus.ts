import { ITransportStrategy } from "../interfaces";

export class BusMode implements ITransportStrategy {

  public calculateCost(distance: number): void {

    console.log('Distance: ' + distance);
    if (distance < 20) {
      console.log('It\'s free.')
    } else if (distance < 100) {
      console.log('Estimated cost: ' + 15);
    } else if (distance > 300) {
      console.log('No available bus');
    } else {
      console.log('Estimated cost: ' + 30);
    }
  }
}