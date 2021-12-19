import { Chatroom, Student, Teacher } from "./chatroom";

const classRoom = new Chatroom();

const rick = new Student('rick');
const money = new Student('money');
const fox = new Student('fox');

const teacher = new Teacher('Appier');

classRoom.addUser(rick);
classRoom.addUser(money);
classRoom.addUser(fox);
classRoom.addUser(teacher);

rick.send('Hey everyone');
teacher.send('Stop talking');

