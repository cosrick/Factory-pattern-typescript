import { TimeUnit } from "./interface/car";
import { Ferrari, FerrariSpeedUpMode } from "./products/Ferrari";


const myCar = new Ferrari('RL-0001');

console.log('-------------');
console.log(myCar.getCurrentSpeed());
console.log(myCar.getCurrentPosition());
console.log('-------------');
myCar.launch();
console.log(myCar.getCurrentSpeed());
console.log(myCar.getCurrentPosition());
console.log('-------------');
myCar.moveForward({
  time: 3,
  unit: TimeUnit.MINUTE,
})
console.log(myCar.getCurrentSpeed());
console.log(myCar.getCurrentPosition());
console.log('-------------');
myCar.speedUp(FerrariSpeedUpMode.MEDIUM);
console.log(myCar.getCurrentSpeed());
console.log(myCar.getCurrentPosition());
console.log('-------------');
myCar.speedUp(FerrariSpeedUpMode.SLOW);
console.log(myCar.getCurrentSpeed());
console.log(myCar.getCurrentPosition());
console.log('-------------');
myCar.moveForward({
  time: 1,
  unit: TimeUnit.HOUR,
})
console.log(myCar.getCurrentSpeed());
console.log(myCar.getCurrentPosition());
console.log('-------------');
myCar.stop();
console.log(myCar.getCurrentSpeed());
console.log(myCar.getCurrentPosition());