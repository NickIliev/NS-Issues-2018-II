import { Observable } from 'data/observable';
import * as application from "application";
import { topmost } from "ui/frame";

export class HelloWorldModel extends Observable {


    private _message: string;

    constructor() {
        super();

        this.message = "Loading ...";
    }

    get message(): string {
        return this._message;
    }
    
    set message(value: string) {
        if (this._message !== value) {
            this._message = value;
            this.notifyPropertyChange('message', value)
        }
    }

    public onTap() {
        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
        .then(res => res.json())
        .then(result => {
            application._resetRootView("sub-root");

            setTimeout(() => {
                console.log(topmost().id);
            }, 3000);
        })
    }
}
