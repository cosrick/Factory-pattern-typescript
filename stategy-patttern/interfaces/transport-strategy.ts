export interface ITransportStrategy {

  // print out the estimated cost by given distance
  calculateCost(_distance: number): void;
}