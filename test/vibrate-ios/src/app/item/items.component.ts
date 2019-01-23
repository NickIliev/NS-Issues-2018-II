import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    items: Item[];

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }

    // There are two seemingly similar functions that take a parameter kSystemSoundID_Vibrate:

    // 1) AudioServicesPlayAlertSound(kSystemSoundID_Vibrate);
    // 2) AudioServicesPlaySystemSound(kSystemSoundID_Vibrate);
    // Both of the functions vibrate the iPhone. But, when you use the first function on devices that don’t support vibration, it plays a beep sound. The second function, on the other hand, does nothing on unsupported devic
    // So if you are going to vibrate the device continuously, as an alert, common sense says, use function 2.

    vibrateSystemPeek() {

        // the magic numbers here are actually SystemSoundId https://developer.apple.com/documentation/audiotoolbox/systemsoundid?language=objc
        AudioServicesPlaySystemSound(1519);
    }

    vibrateSystemCanceled() {
        AudioServicesPlaySystemSound(1521);
    }

    vibrateSystemTryAgain() {
        AudioServicesPlaySystemSound(1102);
    }

    // lists that I've found for the SYstemSoundId API 
    // https://nikaeblog.wordpress.com/2017/07/11/system-sound-id-list-ios/
    // https://github.com/TUNER88/iOSSystemSoundsLibrary
}