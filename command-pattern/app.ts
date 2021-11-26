import { IronManBasicAttack, IronManSkill1, IronManSkill2 } from "./commands";
import { Invoker } from "./invoker";
import { IronMan } from "./roles";


const ironMan = new IronMan();
const ironManBasicAttack = new IronManBasicAttack(ironMan);
const ironManSkill1 = new IronManSkill1(ironMan);
const ironManSkill2 = new IronManSkill2(ironMan);

const invoker = new Invoker();

invoker.addCommand(ironManBasicAttack);
invoker.addCommand(ironManSkill2);
invoker.addCommand(ironManSkill1);
invoker.addCommand(ironManBasicAttack);

console.log('First Invoke');
invoker.invoke();

console.log('Second Invoke');
invoker.invoke();

invoker.addCommand(ironManBasicAttack);

console.log('Third Invoke');
invoker.invoke();