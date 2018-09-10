import { Observable } from 'data/observable';

export class HelloWorldModel extends Observable {


    private _sourceUrl: string;

    constructor() {
        super();

        this.sourceUrl = "https://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4";
    }

    get sourceUrl(): string {
        return this._sourceUrl;
    }
    
    set sourceUrl(value: string) {
        if (this._sourceUrl !== value) {
            this._sourceUrl = value;
            this.notifyPropertyChange('sourceUrl', value)
        }
    }
}
