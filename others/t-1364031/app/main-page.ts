import { ActionBar, ActionItem } from "tns-core-modules/ui/action-bar";
import { EventData, Observable } from "tns-core-modules/data/observable";
import { Page } from "tns-core-modules/ui/page";
import { View } from "tns-core-modules/ui/core/view";
import { isIOS } from "tns-core-modules/platform";
import { ScrollEventData } from "tns-core-modules/ui/scroll-view";

export function navigatingTo(args: EventData) {
    let page = <Page>args.object;

    let vm = new Observable() // e.g. this is the imported view model
    vm.set("message", "some random message");
    vm.set("isSearchVisible", true);

    page.bindingContext  = vm;
}

export function onActionBarLoaded(args) {
    let item = args.object as ActionItem;
    let page = item.page; // refernce to the current Page
    let rootView: View = page.getViewById("root-view"); // reference tp the main layout container in the page (the layout might be different e.g. GridLayout or ScrollView)
    let actionBar: ActionBar = page.actionBar; // reference to the current Actionbar

    if(isIOS) {
        let iosNavigaitonBar: UINavigationBar = actionBar.nativeView; // UINavigationBar https://developer.apple.com/documentation/uikit/uinavigationbar?language=objc
        if (!iosNavigaitonBar.prefersLargeTitles) {
            iosNavigaitonBar.prefersLargeTitles = true; // accessing the native ios property https://developer.apple.com/documentation/uikit/uinavigationbar/2908999-preferslargetitles?language=objc
            rootView.requestLayout(); // request the layouting process so that the content can be moved accordningly as the ActionBar size grows
        }
    }
}

