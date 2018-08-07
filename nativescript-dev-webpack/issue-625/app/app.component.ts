import { Component, OnInit } from "@angular/core";

import { isIOS } from "platform";
import * as uiHelper from "~/common/ui-helper";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent implements OnInit {

    ngOnInit() {
        if (isIOS) {
            uiHelper.ios.setStatusBarColor("red");
        }
    }
 }
