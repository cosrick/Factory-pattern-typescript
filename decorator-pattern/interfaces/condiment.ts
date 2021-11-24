import { Drink } from "./drink";

export abstract class Condiment extends Drink {

  public abstract getName(): string;
}