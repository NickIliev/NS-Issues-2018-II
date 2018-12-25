import { Component } from "@angular/core";
import { requestPermission } from "nativescript-permissions";

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html",
})
export class AppComponent { 
    constructor() {
        requestPermission(
            [
                "android.permission.INTERNET",
                "android.permission.READ_EXTERNAL_STORAGE",
                "android.permission.WRITE_EXTERNAL_STORAGE",
                "android.permission.SET_WALLPAPER",
                "android.permission.ACCESS_NETWORK_STATE"
            ],
            "I need these permissions"
        )
            .then(res => {
                console.log("Permissions granted!");
            })
            .catch(err => {
                console.log("No permissions!");
            });
    }
}
