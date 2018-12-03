import { Observable } from "tns-core-modules/data/observable";

export class HelloWorldModel extends Observable {

    private _items: Array<any>;

    constructor() {
        super();
        this.items = [1, 2, 3, 5, 7, 11, 13, 17, 21, 23, 27, 31, 37];
    }

    get items(): Array<any> {
        return this._items;
    }
    
    set items(value: Array<any>) {
        if (this._items !== value) {
            this._items = value;
            this.notifyPropertyChange("items", value)
        }
    }
}
