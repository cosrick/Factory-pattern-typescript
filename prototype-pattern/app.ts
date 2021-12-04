import { Drink } from "./drink";
import { Hamburger } from "./hamburger";
import { MealSet } from "./meal-set";


let cheeseBurger: Hamburger = new Hamburger('beef', 'tomato', 'manfu');
let lemonTea: Drink = new Drink('lemonTea', 0.5, 0.5);
let set1: MealSet = new MealSet(cheeseBurger, lemonTea, 'fried onion', 'ketchup');

let set2 = set1;
let set3 = set1.copy();

console.log(set1);
console.log(set2);
console.log(set3);

set1.setSide('french fried');
console.log('-------');

console.log(set1);
console.log(set2);
console.log(set3);