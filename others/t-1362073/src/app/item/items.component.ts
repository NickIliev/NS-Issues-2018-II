import { Component, OnInit } from "@angular/core";

import { isIOS } from "tns-core-modules/platform";
import * as utils from "tns-core-modules/utils/utils";

declare let UIApplication: any;

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent {

    hideKeyboard() {
        // ad.dismissSoftInput(); // doesn't work on iOS 
        if (isIOS) {
            UIApplication.sharedApplication.sendActionToFromForEvent(
                "resignFirstResponder", null, null, null
            );

            // utils.ios.getter(UIApplication, UIApplication.sharedApplication)
            //         .keyWindow
            //         .endEditing(true);
        }
    }
}