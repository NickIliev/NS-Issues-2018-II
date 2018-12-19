import { Component } from "@angular/core";
declare let myGlobal: any;

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html",
})
export class AppComponent {
    constructor() {
        console.log("myGlobal.ENV_NAME: ", myGlobal.ENV_NAME);
    }
 }
