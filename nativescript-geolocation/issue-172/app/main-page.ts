import { EventData } from "tns-core-modules/data/observable";
import { enableLocationRequest, getCurrentLocation } from "nativescript-geolocation";
import { Accuracy } from "tns-core-modules/ui/enums";
export function navigatingTo(args: EventData) {
    enableLocationRequest();
}

export function getLocation() {
    getCurrentLocation({ desiredAccuracy: Accuracy.high, maximumAge: 5000, timeout: 20000 }).then(res => {
        console.log(res);
    })
}
