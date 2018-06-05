import "./bundle-config";
import * as application from 'application';
import * as LocalNotifications from "nativescript-local-notifications";

const WS = require("nativescript-websockets");

let mySocket: any;

application.on(application.launchEvent, (args) => {
    LocalNotifications.hasPermission()

    mySocket = new WS("ws://echo.websocket.org",{protocols: [/* 'chat', 'video' */], timeout: 6000, allowCellular: true, headers: { 'Authorization': 'Basic ...' }});
    mySocket.on('open', (socket) => { console.log("Hey I'm open"); socket.send("Hello"); });
    mySocket.on('message', (socket, message) => { 
        console.log("Got a message", message); 

        LocalNotifications.schedule([{
            id: 3,
            title: 'Hi',
            body: 'You should see a \'3\' somewhere',
            at: new Date(new Date().getTime() + 10*1000),
            badge: 3
          }]).then(
              () => {
                alert({
                  title: "Notification scheduled",
                  message: 'ID: 3',
                  okButtonText: "OK, thanks"
                });
              },(error) => {
                console.log("doScheduleAndSetBadgeNumber error: " + error);
              }
          );

    });
    mySocket.on('close', (socket, code, reason) => { console.log("Socket was closed because: ", reason, " code: ", code); });
    mySocket.on('error', (socket, error) => { console.log("Socket had an error", error);});
});

application.on(application.resumeEvent, (args) => {
    mySocket.open();

    console.log("RESUME");
});

application.on(application.suspendEvent, (args) => {
    mySocket.close();

    console.log("SUSPEND");
});

application.run({ moduleName: 'app-root' });