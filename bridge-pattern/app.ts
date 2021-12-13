import { AllDelivery, SpecialDelivery } from "./delivery-platform";
import { SnackBar, SteakHouse } from "./food-court";
import { Restaurant } from "./restaurant";

const snackBar: Restaurant = new SnackBar('Bread Chang');
const steakHouse: Restaurant = new SteakHouse('Red Onion');

const a = new AllDelivery(snackBar);
a.specialOrder();
a.normalOrder();

const b = new AllDelivery(steakHouse);
b.specialOrder();
b.normalOrder();

const c = new SpecialDelivery(snackBar);
c.specialOrder();
c.normalOrder();

const d = new SpecialDelivery(steakHouse);
d.specialOrder();
d.normalOrder();