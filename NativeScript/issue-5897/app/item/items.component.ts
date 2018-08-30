import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Page} from "tns-core-modules/ui/page";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {

    constructor(private _routerExtensions: RouterExtensions, private _page: Page) {
        this._page.actionBarHidden = true;
     }

    ngOnInit(): void { }

    navigate() {
        this._routerExtensions.navigate(['/map']);
    }
}