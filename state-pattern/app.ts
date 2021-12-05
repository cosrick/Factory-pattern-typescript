import { DrinkShop } from "./drink-shop";
import { MilkSaleState } from "./milk-sale-state";
import { NormalState } from "./normal-state";
import { State } from "./state";

const normalState: State = new NormalState();
const milkSaleState: State = new MilkSaleState();
const myDrinkShop: DrinkShop = new DrinkShop(normalState);

myDrinkShop.searchPrice('GreenTea');
myDrinkShop.searchPrice('BlackTea');
myDrinkShop.searchPrice('MilkGreenTea');
myDrinkShop.searchPrice('BubbleBlackTea');

console.log('-----Change State-----');
myDrinkShop.setState(milkSaleState);

myDrinkShop.searchPrice('GreenTea');
myDrinkShop.searchPrice('BlackTea');
myDrinkShop.searchPrice('MilkGreenTea');
myDrinkShop.searchPrice('BubbleBlackTea');


