import { TimeUnit } from "./interface/car";
import { Ferrari, FerrariSpeedUpMode, Toyota, ToyotaSpeedUpMode } from "./products";

const myFerrariCar = new Ferrari('RL-0001');
console.log(myFerrariCar.getLicense());
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
console.log(myToyotaCar.getLicense());
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



import { CarFactory, CarBrand } from "./factory";

const carFactory = new CarFactory();

const myFerrariCarByFactory = carFactory.produceCar(CarBrand.FERRARI, 'RL-003');
console.log(myFerrariCarByFactory.getLicense());
console.log('-------------');
console.log(myFerrariCarByFactory.getCurrentSpeed());
console.log(myFerrariCarByFactory.getCurrentPosition());
console.log('-------------');
myFerrariCarByFactory.launch();
console.log(myFerrariCarByFactory.getCurrentSpeed());
console.log(myFerrariCarByFactory.getCurrentPosition());
console.log('-------------');
myFerrariCarByFactory.moveForward({
  time: 3,
  unit: TimeUnit.MINUTE,
})
console.log(myFerrariCarByFactory.getCurrentSpeed());
console.log(myFerrariCarByFactory.getCurrentPosition());
console.log('-------------');
myFerrariCarByFactory.speedUp(FerrariSpeedUpMode.MEDIUM);
console.log(myFerrariCarByFactory.getCurrentSpeed());
console.log(myFerrariCarByFactory.getCurrentPosition());
console.log('-------------');
myFerrariCarByFactory.speedUp(FerrariSpeedUpMode.SLOW);
console.log(myFerrariCarByFactory.getCurrentSpeed());
console.log(myFerrariCarByFactory.getCurrentPosition());
console.log('-------------');
myFerrariCarByFactory.moveForward({
  time: 1,
  unit: TimeUnit.HOUR,
})
console.log(myFerrariCarByFactory.getCurrentSpeed());
console.log(myFerrariCarByFactory.getCurrentPosition());
console.log('-------------');
myFerrariCarByFactory.stop();
console.log(myFerrariCarByFactory.getCurrentSpeed());
console.log(myFerrariCarByFactory.getCurrentPosition());

const myToyotaCarByFactory = carFactory.produceCar(CarBrand.TOYOTA, 'RL-004');
console.log(myToyotaCarByFactory.getLicense());
console.log('-------------');
console.log(myToyotaCarByFactory.getCurrentSpeed());
console.log(myToyotaCarByFactory.getCurrentPosition());
console.log('-------------');
myToyotaCarByFactory.launch();
console.log(myToyotaCarByFactory.getCurrentSpeed());
console.log(myToyotaCarByFactory.getCurrentPosition());
console.log('-------------');
myToyotaCarByFactory.moveForward({
  time: 3,
  unit: TimeUnit.MINUTE,
})
console.log(myToyotaCarByFactory.getCurrentSpeed());
console.log(myToyotaCarByFactory.getCurrentPosition());
console.log('-------------');
myToyotaCarByFactory.speedUp(ToyotaSpeedUpMode.MEDIUM);
console.log(myToyotaCarByFactory.getCurrentSpeed());
console.log(myToyotaCarByFactory.getCurrentPosition());
console.log('-------------');
myToyotaCarByFactory.speedUp(ToyotaSpeedUpMode.SLOW);
console.log(myToyotaCarByFactory.getCurrentSpeed());
console.log(myToyotaCarByFactory.getCurrentPosition());
console.log('-------------');
myToyotaCarByFactory.moveForward({
  time: 1,
  unit: TimeUnit.HOUR,
})
console.log(myToyotaCarByFactory.getCurrentSpeed());
console.log(myToyotaCarByFactory.getCurrentPosition());
console.log('-------------');
myToyotaCarByFactory.stop();
console.log(myToyotaCarByFactory.getCurrentSpeed());
console.log(myToyotaCarByFactory.getCurrentPosition());
