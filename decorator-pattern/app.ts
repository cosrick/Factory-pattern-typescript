import { Milk } from "./condiments/milk";
import { Coffee, Greentea } from "./drinks";
import { Drink } from "./interfaces";

const coffee: Drink = new Coffee();
console.log('Coffee:');
console.log(coffee.getName());
console.log(coffee.getCost());

const greentea: Drink = new Greentea();
console.log('Greentea:');
console.log(greentea.getName());
console.log(greentea.getCost());

let milkGreentea: Drink = new Greentea();
milkGreentea = new Milk(milkGreentea);
console.log('MilkGreentea:');
console.log(milkGreentea.getName());
console.log(milkGreentea.getCost());

let latte: Drink = new Coffee();
latte = new Milk(latte);
console.log('Latte:');
console.log(latte.getName());
console.log(latte.getCost());