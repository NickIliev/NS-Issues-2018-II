import { Component } from "@angular/core";
import { isAndroid, isIOS } from "platform";
import * as application from 'application';


@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent {
    constructor() {
        application.on(application.uncaughtErrorEvent, (errData) => {
            if (isAndroid) {
                // For Android applications, args.android is an NativeScriptError.
                console.log(" *** NativeScriptError *** : " + errData.android);
                console.log(" *** StackTrace *** : " + errData.android.stackTrace);
                console.log(" *** nativeException *** : " + errData.android.nativeException);
            }
            else if (isIOS) {
                // For iOS applications, args.ios is NativeScriptError.
                console.log("NativeScriptError: " + errData.ios);
            }
        });
        
    }
 }
