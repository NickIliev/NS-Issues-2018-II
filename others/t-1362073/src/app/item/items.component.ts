import { Component, ElementRef, ViewChild } from "@angular/core";
import { TextField } from "tns-core-modules/ui/text-field";
import { isIOS } from "tns-core-modules/platform";
import * as utils from "tns-core-modules/utils/utils";

declare let UIApplication: any;

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent {

    @ViewChild("tf") tf: ElementRef;
    textField: TextField;

    ngAfterViewInit() {
        this.textField = this.tf.nativeElement;
    }

    hideKeyboard() {
        if (isIOS) {

        // utils.ad.dismissSoftInput(); // doesn't work on iOS  but we can directly call the dismissSoftInput for the NativeScript view
        this.textField.focus(); 
        this.textField.dismissSoftInput();

        // OR use native approaches

        // UIApplication.sharedApplication.sendActionToFromForEvent(
        //     "resignFirstResponder", null, null, null
        // );

        // utils.ios.getter(UIApplication, UIApplication.sharedApplication)
        //         .keyWindow
        //         .endEditing(true);
        }
    }
}