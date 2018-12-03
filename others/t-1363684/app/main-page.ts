import { EventData } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { HelloWorldModel } from "./main-view-model";
import { ListViewEventData } from "nativescript-ui-listview";

export function navigatingTo(args: EventData) {
    let page = <Page>args.object;
    page.bindingContext = new HelloWorldModel();
}

export function onLoaded(args:EventData) {
    console.log("onLoaded RAD");
}

export function onItemLoading(args: ListViewEventData) {
    console.log("onItemLoading");
    console.log(args.index);

    // use the itemLoading event to get the last loaded cell and store it in your "cache" (e.g. in applicaiton-settings)
    // then when needed use the stored value to restore the listiew based on that index
}

export function onItemTap(args: ListViewEventData) {
    console.log("onItemTap");
    console.log(args.index);
}