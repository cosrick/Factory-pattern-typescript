import { Student } from "./interfaces";

export class Cheater implements Student {

  private badStudent: Student;

  constructor(badStudent: Student) {
    this.badStudent = badStudent;
  }

  public doHomework(): void {
    console.log('Cheater do homework');
    this.badStudent.doHomework();
  }

  public takeExam(): void {
    console.log('Cheater take exam');
    this.badStudent.takeExam();
  }

  public printGrade(): void {
    console.log('Get grade');
    this.badStudent.printGrade();
  }
}