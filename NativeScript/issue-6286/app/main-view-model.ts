import { EventData, Observable } from 'data/observable';
import { ListPicker } from "tns-core-modules/ui/list-picker";

export class HelloWorldModel extends Observable {

    public ticketListPicker: Array<number>;
    private _price: number;
    private _selectedIndex: number;

    constructor() {
        super();

        this.ticketListPicker = [ 5.4, 6.3, 7.2, 8.1, 9.0 ];
        this.price = 0;
        this.selectedIndex = 3;
    }

    get price() : number {
        return this._price;
    }
    set price(v : number) {
        this._price = v;
        this.notifyPropertyChange("price", v);
    }

    get selectedIndex() : number {
        return this._selectedIndex;
    }
    set selectedIndex(v : number) {
        this._selectedIndex = v;
        this.notifyPropertyChange("selectedIndex", v);
    }

}
