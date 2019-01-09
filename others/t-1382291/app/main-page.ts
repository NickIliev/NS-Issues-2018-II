import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { Label } from "tns-core-modules/ui/label";

export function navigatingTo(args: EventData) {
    let page = <Page>args.object;
}

export function onPageLoaded(args: EventData) {
    let label = new Label();
    console.log(`label: ${label}`);

    // label.text = "some text";

    // let page = args.object as Page;
    // page.content = label;

    setTimeout(() => {
        let nativeLabel = label.nativeView;
        console.log(`nativeLabel: ${nativeLabel}`);
    }, 300);
}
