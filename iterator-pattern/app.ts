import { Iterator } from "./iterator";
import { Student } from "./student";
import { StudentList } from "./student-list";

const studentList: StudentList = new StudentList();
const studentIterator: Iterator<Student> = studentList.createIterator();

while (!studentIterator.isDone()) {
  studentIterator.currItem().intro();
  studentIterator.next();
}