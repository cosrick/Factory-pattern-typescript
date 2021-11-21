import { CostEstimator } from "./costEstimator";
import { BusMode, TaxiMode, TrainMode } from "./strategies";

const myCalculator = new CostEstimator(new BusMode());
console.log('For Bus:')
myCalculator.calculateCost(10);
myCalculator.calculateCost(50);
myCalculator.calculateCost(100);
myCalculator.calculateCost(200);
myCalculator.calculateCost(500);
myCalculator.calculateCost(1000);

myCalculator.setTransportMode(new TaxiMode)
console.log('For Taxi:')
myCalculator.calculateCost(10);
myCalculator.calculateCost(50);
myCalculator.calculateCost(100);
myCalculator.calculateCost(200);
myCalculator.calculateCost(500);
myCalculator.calculateCost(1000);

myCalculator.setTransportMode(new TrainMode())
console.log('For Train:')
myCalculator.calculateCost(10);
myCalculator.calculateCost(50);
myCalculator.calculateCost(100);
myCalculator.calculateCost(200);
myCalculator.calculateCost(500);
myCalculator.calculateCost(1000);