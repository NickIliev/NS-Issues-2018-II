

import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { SocketIO } from 'nativescript-socketio';
import { isAndroid } from "platform";

let socketIO: SocketIO;

export function onLoaded(args: EventData) {
    let url = isAndroid ? "http://10.0.3.2:8080" : "http://127.0.0.1:8080";
    socketIO = new SocketIO(url, {});  
    socketIO.connect();

    socketIO.on("msg", (data) => {
        console.log("AUTHORISATION ID :");
        console.log(data);
    })
}

export function emitMsg(args: EventData) {
    socketIO.emit("send", {msg: "Hello"});
}