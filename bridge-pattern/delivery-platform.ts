import { Delivery } from "./delivery";
import { Restaurant } from "./restaurant";

export class AllDelivery extends Delivery {

  constructor(restaurant: Restaurant) {
    super(restaurant);
  }

  public specialOrder(): void {
    this.restaurant.specialMeal();
  }

  public normalOrder(): void {
    this.restaurant.normalMeal();
  }

}

export class SpecialDelivery extends Delivery {

  constructor(restaurant: Restaurant) {
    super(restaurant);
  }

  public specialOrder(): void {
    this.restaurant.specialMeal();
  }

  public normalOrder(): void {
    console.log('What is this?');
    console.log('We don\'t care about this type of order');
    console.log('----------');
  }

}