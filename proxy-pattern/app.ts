import { BadStudent } from "./bad-student";
import { Cheater } from "./cheater";
import { Student } from "./interfaces";

const badStudent: Student = new BadStudent();
const cheater: Student = new Cheater(badStudent);

badStudent.printGrade();

cheater.doHomework();
cheater.takeExam();
cheater.printGrade();