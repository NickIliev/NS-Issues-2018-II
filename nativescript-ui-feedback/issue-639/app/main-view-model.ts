import { Observable } from 'data/observable';

export class HelloWorldModel extends Observable {

    public firstColor: string;
    public secondColor: string;

    constructor() {
        super();

        this.firstColor = "#dddddd";
        this.secondColor = "#9DCA56";
    }
}
