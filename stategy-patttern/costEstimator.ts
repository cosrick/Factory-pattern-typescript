import { ITransportStrategy } from "./interfaces";

export class CostEstimator {

  private transportMode: ITransportStrategy;

  constructor(transportMode: ITransportStrategy) {
    this.transportMode = transportMode;
  }

  public setTransportMode(transportMode: ITransportStrategy) {
    this.transportMode = transportMode;
  }

  public calculateCost(distance: number, transportMode?: ITransportStrategy) {
    if (transportMode) {
      this.transportMode = transportMode;
    }
    this.transportMode.calculateCost(distance);
  }

}