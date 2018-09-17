import * as app from "tns-core-modules/application";
import { EventData } from "tns-core-modules/data/observable";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { getFrameById } from "tns-core-modules/ui/frame";
import { GridLayout } from "tns-core-modules/ui/layouts/grid-layout";
import { TabView } from "tns-core-modules/ui/tab-view";

let tabView: TabView;
let drawer: RadSideDrawer;

export function onTabLoaded(args) {
    tabView = <TabView>args.object;
}

export function navigateInFirstTab(args: EventData): void {
    const component = <GridLayout>args.object;
    const componentRoute = component.get("route");

    let firstFrame = getFrameById("first-tab-frame");

    firstFrame.navigate({
        moduleName: componentRoute,
        transition: {
            name: "fade"
        }
    })
    tabView.selectedIndex = 0; // explicitly change the tab in which we are currently navigating

    drawer = <RadSideDrawer>app.getRootView();
    drawer.closeDrawer(); // explicitly closing the drawer after the navigation is triggered

}

export function navigateInSecondTab(args: EventData): void {
    const component = <GridLayout>args.object;
    const componentRoute = component.get("route");

    let secondFrame = getFrameById("second-tab-frame");

    secondFrame.navigate({
        moduleName: componentRoute,
        transition: {
            name: "slide"
        }
    })
    tabView.selectedIndex = 1; // explicitly change the tab in which we are currently navigating

    drawer = <RadSideDrawer>app.getRootView();
    drawer.closeDrawer(); // explicitly closing the drawer after the navigation is triggered

}

export function toggleDrawer() {
    drawer.toggleDrawerState();
}