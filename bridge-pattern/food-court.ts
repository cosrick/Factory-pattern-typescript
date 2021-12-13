import { Restaurant } from "./restaurant";

export class SnackBar implements Restaurant {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public specialMeal(): void {
    console.log('Snack Bar: ' + this.name);
    console.log('Special Meal Price: 100');
    console.log('---------------');
  }

  public normalMeal(): void {
    console.log('Snack Bar: ' + this.name);
    console.log('Normal Meal Price: 30');
    console.log('---------------');
  }
}

export class SteakHouse implements Restaurant {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public specialMeal(): void {
    console.log('Steak House: ' + this.name);
    console.log('Special Meal Price: 1000');
    console.log('---------------');
  }

  public normalMeal(): void {
    console.log('Steak House: ' + this.name);
    console.log('Normal Meal Price: 300');
    console.log('---------------');
  }
}