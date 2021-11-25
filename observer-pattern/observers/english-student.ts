import { IObserver } from "../interfaces";
import { EnglishChannel } from "../subjects";

export class EnglishStudent implements IObserver {

  private subjectState: string;
  private subscribedSubject: EnglishChannel;

  constructor(channel: EnglishChannel) {
    this.subjectState = '';
    this.subscribedSubject = channel;
  }

  public update(): void {
    this.subjectState = this.subscribedSubject.getState();
    console.log('Got notification!');
    console.log('Current State:' + this.subjectState);
  }
}