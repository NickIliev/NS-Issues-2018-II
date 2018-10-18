import { Component } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";

@Component({
    selector: "ns-app",
    moduleId: module.id,
    templateUrl: "./app.component.html",
})
export class AppComponent {  
    constructor(private _page: Page) {
        
    }

    ngAfterViewInit() {
        // Not Working
        setTimeout(() => {
            this._page.actionBarHidden = true;
        }, 1);
    }
}
