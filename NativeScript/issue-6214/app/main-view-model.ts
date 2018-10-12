import { Observable } from 'data/observable';
import { Switch } from "tns-core-modules/ui/switch";

export class HelloWorldModel extends Observable {

    private _active: boolean;

    constructor() {
        super();

        this.active = true;
    }

    get active(): boolean {
        return this._active;
    }
    
    set active(value: boolean) {
        if (this._active !== value) {
            this._active = value;
            this.notifyPropertyChange('active', value)
        }
    }

    onSwitchLoaded(args) {
        let mySwitch = <Switch>args.object;

        mySwitch.on("checkedChange", (args: any) => {
            console.log(args.object); // Switch
            console.log(args.eventName); // checkedChange
            console.log(args.propertyName); // checked
            console.log(args.value); // true (or false)
            console.log(args.object); // false (or true)
        })
    }
}
