import { Aggregate, Iterator } from "./iterator";
import { Student } from "./student";
import { StudentIterator } from "./student-iterator";

export class StudentList implements Aggregate<Student> {
  public students: Student[];

  constructor() {
    this.students = [
      new Student('Student A'),
      new Student('Student B'),
      new Student('Student C'),
      new Student('Student D'),
      new Student('Student E'),
      new Student('Student F'),
      new Student('Student G'),
      new Student('Student H'),
      new Student('Student I'),
    ]
  }

  public createIterator(): Iterator<Student> {
    return new StudentIterator(this);
  }
}