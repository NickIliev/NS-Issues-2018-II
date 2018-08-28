/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/
import { isAndroid, isIOS } from "platform";
import * as application from 'application';

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

application.run({ moduleName: 'app-root' });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
