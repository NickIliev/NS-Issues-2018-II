import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { Label } from "tns-core-modules/ui/label";

export function navigatingTo(args: EventData) {
    let page = <Page>args.object;
}

export function onPageLoaded(args: EventData) {
    let label = new Label();
    console.log(`label: ${label}`);

    label.text = "some text";

    setTimeout(() => {
        let page = args.object as Page;
        page.content = label;
    }, 300);

    label.on("loaded", () => {
        let nativeLabel = label.nativeView;
        console.log(`nativeLabel: ${nativeLabel}`);
    })


}
