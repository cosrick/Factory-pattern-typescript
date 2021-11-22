export class SingletonClass {
  private singletonInstance: SingletonClass | undefined;

  private constructor() {}
  
  public getInstance(): SingletonClass {
    if (!this.singletonInstance) {
      this.singletonInstance = new SingletonClass();
    }
    return this.singletonInstance;
  }
}