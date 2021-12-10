import { Iterator } from "./iterator";
import { Student } from "./student";
import { StudentList } from "./student-list";

export class StudentIterator implements Iterator<Student> {

  private studentList: StudentList;
  private pointer: number = 0;

  constructor(studentList: StudentList) {
    this.studentList = studentList;
  }

  public currItem(): Student {
    return this.studentList.students[this.pointer];
  }

  public next(): void {
    this.pointer = this.pointer + 1;
  }

  public isDone(): Boolean {
    return this.pointer >= this.studentList.students.length;
  }
}