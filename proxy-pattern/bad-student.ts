import { Student } from "./interfaces";

 export class BadStudent implements Student {

  private homeworkGrade: number;

  private examGrade: number;

  constructor() {
    this.homeworkGrade = 0;
    this.examGrade = 0;
  }

  public doHomework(): void {
    this.homeworkGrade = 70;
  }

  public takeExam(): void {
    this.examGrade = 70;
  }

  public printGrade(): void {
    console.log('Homework: ' + this.homeworkGrade);
    console.log('Exam: ' + this.examGrade);
    console.log('-------------------');
  }

 }