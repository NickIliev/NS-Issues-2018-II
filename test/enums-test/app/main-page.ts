
import { EventData } from "tns-core-modules/data/observable";
import { TextField } from "tns-core-modules/ui/text-field";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import * as app from "tns-core-modules/application";

import { KeyboardType, 
    DeviceOrientation, 
    ReturnKeyType, 
    TextAlignment,
    TextDecoration, 
    TextTransform, 
    Orientation
 } from "tns-core-modules/ui/enums";

export function onTFLoaded(args: EventData) {
    let tf = <TextField>args.object;
    let stack = <StackLayout>tf.parent;

    stack.orientation = Orientation.horizontal;
    // or
    stack.orientation = "horizontal";

    tf.keyboardType = KeyboardType.number;
    // or
    tf.keyboardType = "number";

    tf.returnKeyType = ReturnKeyType.next;
    // or 
    tf.returnKeyType = "next";

    tf.textAlignment = TextAlignment.center;
    // or 
    tf.textAlignment = "center";

    tf.textDecoration = TextDecoration.underline;
    // or 
    tf.textDecoration = "underline";

    tf.textTransform = TextTransform.uppercase;
    // or
    tf.textTransform = "uppercase";

// export function getOrientation() {
//     app.on(app.orientationChangedEvent, (args: app.OrientationChangedEventData) => {
//         args.newValue === DeviceOrientation.landscape
//     })
// }
}