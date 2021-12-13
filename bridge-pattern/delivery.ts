import { Restaurant } from "./restaurant";

export abstract class Delivery {
  
  protected restaurant: Restaurant;

  constructor(restaurant: Restaurant) {
    this.restaurant = restaurant;
  }

  public abstract specialOrder(): void;

  public abstract normalOrder(): void;
}