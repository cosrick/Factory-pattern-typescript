import { Component } from "./component";
import { Composite } from "./composite";
import { Leaf } from "./leaf";

const firstLayer: Component = new Composite('First');

const secondLayer1: Component = new Composite('SecondLayer1');
const secondLayer2: Component = new Composite('SecondLayer2');

const thirdLayer1: Component = new Composite('ThirdLayer1-1');
const thirdLayer2: Component = new Composite('ThirdLayer1-2');
const thirdLayer3: Component = new Leaf('ThirdLayer2-1');
const thirdLayer4: Component = new Leaf('ThirdLayer2-2');

const forthLayer1: Component = new Leaf('ForthLayer1-1-1');
const forthLayer2: Component = new Leaf('ForthLayer1-1-2');

firstLayer.add(secondLayer1);
firstLayer.add(secondLayer2);

secondLayer1.add(thirdLayer1);
secondLayer1.add(thirdLayer2);

secondLayer2.add(thirdLayer3);
secondLayer2.add(thirdLayer4);

thirdLayer1.add(forthLayer1);
thirdLayer1.add(forthLayer2)

// Throw Error
// forthLayer1.add(firstLayer);

firstLayer.setPrice(10);
firstLayer.display();

console.log('Remove second 1');
firstLayer.remove(secondLayer1);
firstLayer.display();
