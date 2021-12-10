export class Component {
  private name: string;
  private price: number;
  private components: Component[];

  constructor(name: string) {
    this.name = name;
    this.price = 0;
    this.components = [];
  }

  public add(component: Component): void {
    this.components.push(component);
  }

  public remove(component: Component): void {
    let removeIndex = -1;
    this.components.forEach((savedComponent, index) => {
      if (savedComponent === component ) {
        removeIndex = index;
      }

      if (removeIndex != -1) {
        this.components.splice(removeIndex, 1);
      }
    })
  }

  public setPrice(price: number): void {
    this.price = price;
    this.components.map((component) => { component.setPrice(price + 20) });
  }

  public display(): void {
    console.log('Name: ' + this.name);
    console.log('My price: ' + this.price);
    console.log('---------');

    this.components.map((component) => { component.display() });
  }

}