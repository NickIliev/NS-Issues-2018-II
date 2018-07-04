import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { HelloWorldModel } from './main-view-model';
import { requestPermission } from "nativescript-permissions";

export function navigatingTo(args: EventData) {

    let page = <Page>args.object;
    page.bindingContext = new HelloWorldModel();

    requestPermission([
        "android.permission.INTERNET",
        "android.permission.READ_EXTERNAL_STORAGE",
        "android.permission.WRITE_EXTERNAL_STORAGE",
        "android.permission.SET_WALLPAPER",
        "android.permission.ACCESS_NETWORK_STATE"
    ], "I need these permissions")
        .then((res) => {
            console.log("Permissions granted!");
        }).catch((err) => {
            console.log("No permissions!");
        });
}