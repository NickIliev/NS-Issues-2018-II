import { EventData } from "tns-core-modules/data/observable";
import { Label } from "tns-core-modules/ui/label";
import { View, getViewById } from "tns-core-modules/ui/core/view";

let count = 0;
export function buttonTap(args: EventData) {
    count++;

    let parent = (<View>args.object).parent;
    if (parent) {
        var lbl = <Label>getViewById(parent, "Label1");
        if (lbl) {
            lbl.text = "You tapped " + count + " times!";
        }
    }
}