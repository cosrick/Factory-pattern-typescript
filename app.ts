import { TimeUnit } from "./interface/car";
import { Ferrari, FerrariSpeedUpMode } from "./products/Ferrari";
import { Toyota, ToyotaSpeedUpMode } from "./products/toyota";


const myFerrariCar = new Ferrari('RL-0001');

console.log('-------------');
console.log(myFerrariCar.getCurrentSpeed());
console.log(myFerrariCar.getCurrentPosition());
console.log('-------------');
myFerrariCar.launch();
console.log(myFerrariCar.getCurrentSpeed());
console.log(myFerrariCar.getCurrentPosition());
console.log('-------------');
myFerrariCar.moveForward({
  time: 3,
  unit: TimeUnit.MINUTE,
})
console.log(myFerrariCar.getCurrentSpeed());
console.log(myFerrariCar.getCurrentPosition());
console.log('-------------');
myFerrariCar.speedUp(FerrariSpeedUpMode.MEDIUM);
console.log(myFerrariCar.getCurrentSpeed());
console.log(myFerrariCar.getCurrentPosition());
console.log('-------------');
myFerrariCar.speedUp(FerrariSpeedUpMode.SLOW);
console.log(myFerrariCar.getCurrentSpeed());
console.log(myFerrariCar.getCurrentPosition());
console.log('-------------');
myFerrariCar.moveForward({
  time: 1,
  unit: TimeUnit.HOUR,
})
console.log(myFerrariCar.getCurrentSpeed());
console.log(myFerrariCar.getCurrentPosition());
console.log('-------------');
myFerrariCar.stop();
console.log(myFerrariCar.getCurrentSpeed());
console.log(myFerrariCar.getCurrentPosition());

const myToyotaCar = new Toyota('RL-0002');

console.log('-------------');
console.log(myToyotaCar.getCurrentSpeed());
console.log(myToyotaCar.getCurrentPosition());
console.log('-------------');
myToyotaCar.launch();
console.log(myToyotaCar.getCurrentSpeed());
console.log(myToyotaCar.getCurrentPosition());
console.log('-------------');
myToyotaCar.moveForward({
  time: 3,
  unit: TimeUnit.MINUTE,
})
console.log(myToyotaCar.getCurrentSpeed());
console.log(myToyotaCar.getCurrentPosition());
console.log('-------------');
myToyotaCar.speedUp(ToyotaSpeedUpMode.MEDIUM);
console.log(myToyotaCar.getCurrentSpeed());
console.log(myToyotaCar.getCurrentPosition());
console.log('-------------');
myToyotaCar.speedUp(ToyotaSpeedUpMode.SLOW);
console.log(myToyotaCar.getCurrentSpeed());
console.log(myToyotaCar.getCurrentPosition());
console.log('-------------');
myToyotaCar.moveForward({
  time: 1,
  unit: TimeUnit.HOUR,
})
console.log(myToyotaCar.getCurrentSpeed());
console.log(myToyotaCar.getCurrentPosition());
console.log('-------------');
myToyotaCar.stop();
console.log(myToyotaCar.getCurrentSpeed());
console.log(myToyotaCar.getCurrentPosition());