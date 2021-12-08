import { GameCareTaker } from "./caretaker";
import { GameOriginator } from "./originator";

const originator: GameOriginator = new GameOriginator();
const careTaker: GameCareTaker = new GameCareTaker();

careTaker.save(originator.save());

originator.setLevel(10);
careTaker.save(originator.save());

originator.setWeapon('sword');
careTaker.save(originator.save());

originator.restore(careTaker.getSave(0));
careTaker.save(originator.save());

careTaker.getSave(0).printDescription();
careTaker.getSave(1).printDescription();
careTaker.getSave(2).printDescription();
careTaker.getSave(3).printDescription();