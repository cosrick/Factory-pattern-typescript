import { ISubject, IObserver } from "../interfaces";

export class ChineseChannel implements ISubject {

  private channelState: string;
  private observers: IObserver[];

  constructor() {
    this.observers = [];
    this.channelState = '';
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
      this.observers.splice(removeIndex, 1);
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
    console.log("Set State: " + currentState);
    this.channelState = currentState;
  }

  public getState(): string {
    return this.channelState; 
  }

}