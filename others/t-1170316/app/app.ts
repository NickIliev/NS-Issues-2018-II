import "./bundle-config";
import * as application from 'application';

require('nativescript-websockets');

let mySocket: any;

application.on(application.launchEvent, (args) => {
    if (args.android) {
        // For Android applications, args.android is an android.content.Intent class.
        console.log("Launched Android application with the following intent: " + args.android + ".");

        mySocket = new WebSocket("ws://echo.websocket.org", [ /* "protocol","another protocol" */]);

        mySocket.addEventListener('open', function (evt) { 
            console.log("We are Open"); 
        });

        mySocket.addEventListener('close', function (evt) { 
            console.log("The Socket was Closed:"); 
        });

        mySocket.addEventListener('error', function (evt) { 
            console.log("The socket had an error") 
        });

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


application.on(application.exitEvent, (args) => {
    if (args.android) {
        // For Android applications, args.android is an android activity class.


        mySocket.close();
 

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

application.run({ moduleName: 'app-root' });

/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
