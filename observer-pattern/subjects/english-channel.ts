import { ISubject, IObserver } from "../interfaces";

export class EnglishChannel implements ISubject {

  private channelState: string;
  private observers: IObserver[];

  constructor() {
    this.observers = [];
    this.channelState = 'Hello friend';
  }

  public attach(observer: IObserver): void {
    this.observers.push(observer);
    return;
  }

  public detach(observer: IObserver): void {
    
    let removeIndex;
    for (let index = 0; index < this.observers.length; index++) {
      if (this.observers[index] === observer) {
        removeIndex = index;
        break;
      }
    }

    if (!removeIndex) {
      console.log('Observer not found');
    } else {
      this.observers = this.observers.splice(removeIndex, 1);
    }
    return ;
  }

  public notify(): void {
    
    console.log('Notify Observers');

    for (const observer of this.observers) {
      observer.update();
    }
  }

  public setState(currentState: string): void {
    this.channelState = currentState;
  }

  public getState(): string {
    return this.channelState;
  }

}