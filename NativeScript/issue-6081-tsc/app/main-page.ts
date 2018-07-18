
import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { getFrameById, topmost, NavigationEntry } from "tns-core-modules/ui/frame";

export function navigatingTo(args: EventData) {
    let page = <Page>args.object;
}

export function navigate() {
    let frame = getFrameById("rootFrame");

    let navEntry = {
        moduleName: "sub-page",
        animated: true,
        // Set up a transition property on page navigation.
        transition: {
            name: "fade",
            duration: 380
        }
    };

    frame.navigate(navEntry);
}