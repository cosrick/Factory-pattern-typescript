import { Human } from "./human";
import { Robot } from "./robot";
import { RobotTranslator } from "./robot-translator";

const robot: Robot = new Robot('robot1');
robot.sayHello();
robot.introduce();
robot.sayBye();

console.log('---------------------');

const human: Human = new Human(new RobotTranslator(robot.getName()));
human.sayHello();
human.introduce();
human.sayBye();