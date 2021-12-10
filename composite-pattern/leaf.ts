import { Component } from "./component";

export class Leaf extends Component {
   
  public add(_component: Component): void {
    throw new Error('Leaf node cannot add');
  }

  public remove(_component: Component): void {
    throw new Error('Leaf node cannot remove');
  }
}