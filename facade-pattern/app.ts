import { Facade } from "./facade";

const facade: Facade = new Facade();

console.log('Modified: ' + facade.modify());
console.log('Normal: ' + facade.normal());