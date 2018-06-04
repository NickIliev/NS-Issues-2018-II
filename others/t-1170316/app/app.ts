import "./bundle-config";
import * as application from 'application';

application.on(application.launchEvent, (args) => {
    if (args.android) {
        // For Android applications, args.android is an android.content.Intent class.
        console.log("Launched Android application with the following intent: " + args.android + ".");
    } else if (args.ios !== undefined) {
        // For iOS applications, args.ios is NSDictionary (launchOptions).
        console.log("Launched iOS application with options: " + args.ios);
    }
});

application.on(application.suspendEvent, (args) => {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("SUSPEND: " + args.android);
    } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("SUSPEND EVENT: " + args.ios);
    }
});

application.on(application.resumeEvent, (args) => {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("RESUME: " + args.android);
    } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("RESUME EVENT: " + args.ios);
    }
});

application.on(application.displayedEvent, (args) => {
    // args is of type ApplicaitonEventData
    console.log("displayedEvent");
});

application.on(application.orientationChangedEvent, (args) => {
    // args is of type OrientationChangedEventData
    console.log("ORIENTATION: ", args.newValue); // "portrait", "landscape", "unknown"
});


application.on(application.exitEvent, (args) => {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("EXIT: " + args.android);
    } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("EXIT EVENT: " + args.ios);
    }
});

application.on(application.lowMemoryEvent, (args) => {
    if (args.android) {
        // For Android applications, args.android is an android activity class.
        console.log("LOW MEMORY: " + args.android);
    } else if (args.ios) {
        // For iOS applications, args.ios is UIApplication.
        console.log("LOW MEMORY: " + args.ios);
    }
});

application.on(application.uncaughtErrorEvent, (args) => {
    console.log("Uncaught Error: " + args.error);
});


import { ios } from "application";

class MyDelegate extends UIResponder implements UIApplicationDelegate {
    public static ObjCProtocols = [UIApplicationDelegate];

    applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<string, any>): boolean {
        console.log("applicationWillFinishLaunchingWithOptions: " + launchOptions)

        return true;
    }

    applicationWillTerminate(application: UIApplication, ) {
        console.log("WILL TERMINATE !!!");
        console.log("applicationWillTerminate: ", application);
    }

    applicationDidBecomeActive(application: UIApplication): void {
        console.log("applicationDidBecomeActive: " + application)
    }
}
ios.delegate = MyDelegate;


application.run({ moduleName: 'app-root' });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
