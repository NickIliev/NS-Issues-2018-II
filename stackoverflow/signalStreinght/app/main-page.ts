

import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { HelloWorldModel } from './main-view-model';
import { requestPermissions } from "nativescript-permissions";

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {

    let page = <Page>args.object;

    requestPermissions(["android.permission.ACCESS_COARSE_LOCATION"]).then(() => {
        page.bindingContext = new HelloWorldModel();
    });
}