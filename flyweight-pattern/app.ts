import { DiamondFactory } from "./diamond-factory";
import { Sword } from "./sword";

const sword = new Sword();
const factory = new DiamondFactory();

sword.addDiamond(factory.getDiamond('Red'));
sword.addDiamond(factory.getDiamond('Red'));
sword.addDiamond(factory.getDiamond('Yellow'));
sword.addDiamond(factory.getDiamond('Blue'));

factory.printInStock();

sword.addDiamond(factory.getDiamond('Blue'));
sword.addDiamond(factory.getDiamond('Blue'));

sword.showDiamond();