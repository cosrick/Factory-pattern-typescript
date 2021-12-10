export interface Iterator<T> {
  currItem(): T;
  next(): void;
  isDone(): Boolean;
}

export interface Aggregate<T> {
  createIterator(): Iterator<T>;
}