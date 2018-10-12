import { EventData } from 'tns-core-modules/data/observable';
import { ObservableArray } from 'tns-core-modules/data/observable-array';

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {


let products = new ObservableArray([{ price: 10 }, { price: 20 }, { price: 30 }]);

const red1 =  (a, b) => ({ price: a.price + b.price });
let res = products.reduce(red1, 0);
console.log(res);

console.log(res.price);
}