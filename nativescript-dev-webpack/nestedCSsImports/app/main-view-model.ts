import { Observable } from 'data/observable';
import { topmost, getFrameById } from "ui/frame";

export class HelloWorldModel extends Observable {

    constructor() {
        super();
    }

    public onTap() {
        let topmostFrame = topmost();
        topmostFrame.navigate("views/sub-page");
    }

}
