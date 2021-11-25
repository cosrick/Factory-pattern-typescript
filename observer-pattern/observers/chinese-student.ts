import { IObserver } from "../interfaces";
import { ChineseChannel } from "../subjects";

export class ChineseStudent implements IObserver {

  private studentName: string;
  private subjectState: string;
  private subscribedSubject: ChineseChannel;

  constructor(channel: ChineseChannel, name: string) {
    this.studentName = name;
    this.subjectState = '';
    this.subscribedSubject = channel;
  }

  public update(): void {
    this.subjectState = this.subscribedSubject.getState();
    console.log('Got notification!');
    console.log('I am ' + this.studentName);
    console.log('Current State:' + this.subjectState);
  }
}