import { ChineseChannel } from "./subjects";
import { ChineseStudent } from "./observers";

const chineseLesson: ChineseChannel = new ChineseChannel();
chineseLesson.setState('中文課一'); 

const chineseStudent1: ChineseStudent = new ChineseStudent(chineseLesson, 's1');
const chineseStudent2: ChineseStudent = new ChineseStudent(chineseLesson, 's2');
const chineseStudent3: ChineseStudent = new ChineseStudent(chineseLesson, 's3');

chineseLesson.attach(chineseStudent1);
chineseLesson.attach(chineseStudent2);
chineseLesson.attach(chineseStudent3);

chineseLesson.setState('中文課二')
chineseLesson.notify();

chineseLesson.detach(chineseStudent3);

chineseLesson.setState('中文課三')
chineseLesson.notify();
