import { EventData } from 'tns-core-modules/data/observable';
import { Page } from 'tns-core-modules/ui/page';
import { HelloWorldModel } from './main-view-model';
import { GestureEventData } from 'tns-core-modules/ui/gestures/gestures';
import { StackLayout } from 'tns-core-modules/ui/layouts/stack-layout';

let myStack: StackLayout;

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    let page = <Page>args.object;
    page.bindingContext = new HelloWorldModel();

    myStack = page.getViewById("my-stack");
}

export function triggerTap(args) {
    console.log(myStack);

    myStack.notify({ eventName: "tap", object: myStack, action: (args) => {
        console.log("Tap triggered!")
    } });
}

export function onTap(args: GestureEventData) {
    console.log("Tapped!")
}