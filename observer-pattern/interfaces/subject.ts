import { IObserver } from './observer';

export interface ISubject {

  /**
   * Add new observer to subject
   * @param observer 
   */
  attach(observer: IObserver): void;

  /**
   * Remove observer from subject
   * @param observer 
   */
  detach(observer: IObserver): void;

  /**
   * Notify all observers
   */
  notify(): void;

};