import { EventData, Observable } from 'data/observable';
import { Page } from 'ui/page';
import { HelloWorldModel } from './main-view-model';
import { topmost } from "tns-core-modules/ui/frame";
import { ListPicker } from "tns-core-modules/ui/list-picker";

let vm = new HelloWorldModel();

export function onNavigatingTo(args: EventData) {
    let page = <Page>args.object;
    console.log("onNavigatingTo");
    console.log("selectedIndex", vm.get("selectedIndex"));
}

export function onLoaded(args: EventData) {
    let page = <Page>args.object;
    page.bindingContext = vm;
    console.log("onLoaded");
    console.log("selectedIndex", vm.get("selectedIndex"));
}

export function onNavigatedTo(args: EventData) {
    let page = <Page>args.object;
    console.log("onNavigatedTo");
    console.log("selectedIndex", vm.get("selectedIndex"));
}


export function onTap() {
    topmost().navigate("sub-page");
}
